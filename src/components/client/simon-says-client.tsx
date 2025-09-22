"use client";

import dynamic from 'next/dynamic';

const SimonSays = dynamic(() => import('@/components/features/simon-says'), { ssr: false });

export default function SimonSaysClient() {
  return <SimonSays />;
}


