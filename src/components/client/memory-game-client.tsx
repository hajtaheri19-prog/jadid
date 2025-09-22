"use client";

import dynamic from 'next/dynamic';

const MemoryGame = dynamic(() => import('@/components/features/memory-game'), { ssr: false });

export default function MemoryGameClient() {
  return <MemoryGame />;
}


