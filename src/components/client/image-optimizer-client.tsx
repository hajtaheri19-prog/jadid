"use client";

import dynamic from 'next/dynamic';

const ImageOptimizer = dynamic(() => import('@/components/features/image-optimizer'), { ssr: false });

export default function ImageOptimizerClient() {
  return <ImageOptimizer />;
}


