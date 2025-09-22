"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import UnitConverter from '@/components/features/unit-converter';
import CurrencyConverter from '@/components/features/currency-converter';
import DateConverter from '@/components/features/date-converter';
import CryptoConverter from '@/components/features/crypto-converter';
import AgeCalculator from '@/components/features/age-calculator';
import BmiCalculator from '@/components/features/bmi-calculator';
import PercentageCalculator from '@/components/features/percentage-calculator';
import LoanCalculator from '@/components/features/loan-calculator';
import Stopwatch from '@/components/features/stopwatch';
import CountdownTimer from '@/components/features/countdown-timer';
import DepositCalculator from '@/components/features/deposit-calculator';
import NumberToWordsConverter from '@/components/features/number-to-words-converter';
import NumberSystemConverter from '@/components/features/number-system-converter';
import PasswordGenerator from '@/components/features/password-generator';
import RandomNumberGenerator from '@/components/features/random-number-generator';
import BinaryConverter from '@/components/features/binary-converter';
import DistanceCalculator from '@/components/features/distance-calculator';
import VehiclePlateIdentifier from '@/components/features/vehicle-plate-identifier';
import TextAnalyzer from '@/components/features/text-analyzer';
import TextSummarizer from '@/components/features/text-summarizer';
import RialTomanConverter from '@/components/features/rial-toman-converter';
import SavingsCalculator from '@/components/features/savings-calculator';
import NationalIdValidator from '@/components/features/national-id-validator';
import WorkoutTimer from '@/components/features/workout-timer';
import ShebaConverter from '@/components/features/sheba-converter';
import QrCodeGenerator from '@/components/features/qr-code-generator';
import TicTacToe from '@/components/features/tic-tac-toe';
import RockPaperScissors from '@/components/features/rock-paper-scissors';
import Hangman from '@/components/features/hangman';
import LegalFinancialChatbot from '@/components/features/legal-financial-chatbot';
import GuessTheNumber from '@/components/features/guess-the-number';
import ConnectFour from '@/components/features/connect-four';
import OthelloGame from '@/components/features/othello-game';
import AdvancedLivePrices from '@/components/features/advanced-live-prices';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import LinkShortener from '@/components/features/link-shortener';
import {
  BrainCircuit,
  BookText,
  FlaskConical,
  Scale,
  Landmark,
  CalendarDays,
  Repeat,
  SpellCheck,
  Binary,
  CalendarClock,
  Gift,
  Clock,
  Hourglass,
  Wallet,
  Bitcoin,
  Banknote,
  PiggyBank,
  TrendingUp,
  Percent,
  HeartPulse,
  Dumbbell,
  User,
  ShieldCheck,
  Fingerprint,
  RectangleEllipsis,
  Dices,
  KeyRound,
  QrCode,
  ScanLine,
  LocateFixed,
  Image,
  FileText,
  Map,
  ExternalLink,
  Construction,
  Puzzle,
  Bot,
  MemoryStick,
  Hash,
  AlignVerticalDistributeCenter,
} from 'lucide-react';

// Browser-only components
const QrCodeReader = dynamic(() => import('@/components/features/qr-code-reader'), { ssr: false });
const ImageOptimizer = dynamic(() => import('@/components/features/image-optimizer'), { ssr: false });
const SignatureGenerator = dynamic(() => import('@/components/features/signature-generator'), { ssr: false });
const MemoryGame = dynamic(() => import('@/components/features/memory-game'), { ssr: false });
const SimonSays = dynamic(() => import('@/components/features/simon-says'), { ssr: false });

type ToolsSectionProps = {
  toolCategories: any[];
};

export default function ToolsSection({ toolCategories }: ToolsSectionProps) {
  return (
    <div className="space-y-12">
      {toolCategories.map((category) => (
        <div key={`category-section-${category.title}`} className="space-y-6">
          <h2 className="text-2xl font-bold font-display text-foreground text-glow border-r-4 border-primary pr-4">
            {category.title}
          </h2>
          {category.tools.map((tool: any) => {
            const typedTool = tool as any;
            if (typedTool.isWip) {
              return (
                <Card key={tool.id} id={tool.id} className="glass-effect scroll-mt-24 opacity-70">
                  <CardHeader>
                    <CardTitle className='flex items-center justify-between text-xl font-display text-muted-foreground'>
                      <div className='flex items-center gap-3'>
                        {React.cloneElement(tool.icon, { className: "h-7 w-7" })}
                        {tool.title}
                      </div>
                      <Badge variant="outline">به‌زودی...</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-24 gap-4">
                      <Construction className="w-12 h-12" />
                      <p>این ابزار در حال توسعه است و به‌زودی فعال خواهد شد.</p>
                    </div>
                  </CardContent>
                </Card>
              );
            }
            if (typedTool.isExternal) {
              return (
                <a key={tool.id} href={typedTool.href} target="_blank" rel="noopener noreferrer">
                  <Card id={tool.id} className="glass-effect card-hover scroll-mt-24">
                    <CardHeader>
                      <CardTitle className='flex items-center justify-between text-xl font-display'>
                        <div className='flex items-center gap-3'>
                          {React.cloneElement(tool.icon, { className: "h-7 w-7" })}
                          {tool.title}
                        </div>
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                          مشاهده
                        </div>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              );
            }
            return (
              <Card key={tool.id} id={tool.id} className="glass-effect scroll-mt-24">
                <CardHeader>
                  <CardTitle className='flex items-center justify-between text-xl font-display'>
                    <div className='flex items-center gap-3'>
                      {React.cloneElement(tool.icon, { className: "h-7 w-7" })}
                      {tool.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                {typedTool.component}
              </Card>
            );
          })}
        </div>
      ))}
    </div>
  );
}


