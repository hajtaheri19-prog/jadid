'use server';
/**
 * @fileOverview A streaming AI flow for a legal and financial chatbot for Iran.
 * - legalFinancialChat - A function that takes a prompt and history and returns a stream of responses.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const HistoryItemSchema = z.object({
  role: z.enum(['user', 'bot']),
  content: z.string(),
});

const LegalFinancialChatInputSchema = z.object({
  history: z.array(HistoryItemSchema).optional(),
  prompt: z.string(),
});

type LegalFinancialChatInput = z.infer<typeof LegalFinancialChatInputSchema>;


export async function legalFinancialChat(input: LegalFinancialChatInput): Promise<ReadableStream<string>> {
    const systemPrompt = `You are an expert AI assistant specializing in Iranian legal and financial matters.
Your name is "Tabdila Bot". You must answer in Persian.
Provide clear, accurate, and helpful information regarding laws, regulations, financial calculations, and legal procedures in Iran.
You are a helpful assistant, not a replacement for a professional lawyer or financial advisor. Always clarify that your advice is for informational purposes only.`;

    const historyText = (input.history || [])
      .map(item => `${item.role === 'user' ? 'User' : 'Assistant'}: ${item.content}`)
      .join('\n');

    const finalPrompt = [
      systemPrompt,
      historyText ? `\nConversation so far:\n${historyText}` : '',
      `\nUser: ${input.prompt}\nAssistant:`,
    ].filter(Boolean).join('\n');

    const { stream } = ai.generateStream(finalPrompt);
    
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) {
             controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return readableStream;
}
