"use client";

import dynamic from 'next/dynamic';

const QrCodeReader = dynamic(() => import('@/components/features/qr-code-reader'), { ssr: false });

export default function QrCodeReaderClient() {
  return <QrCodeReader />;
}


