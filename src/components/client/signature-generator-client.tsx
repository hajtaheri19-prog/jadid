"use client";

import dynamic from 'next/dynamic';

const SignatureGenerator = dynamic(() => import('@/components/features/signature-generator'), { ssr: false });

export default function SignatureGeneratorClient() {
  return <SignatureGenerator />;
}


