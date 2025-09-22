import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Loader, Sparkles, Stars } from 'lucide-react';

export default function Loading() {
  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background">
      {/* animated blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse"/>
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-pulse [animation-delay:300ms]"/>
      {/* shooting stars */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute left-10 top-16 h-[1px] w-40 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-[shine_2.2s_linear_infinite]"/>
        <div className="absolute right-12 bottom-24 h-[1px] w-48 bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-[shine_2.8s_linear_infinite] [animation-delay:600ms]"/>
      </div>

      <div className="relative text-center p-8 md:p-10 glass-effect rounded-3xl shadow-2xl flex flex-col items-center gap-5">
        {logo && (
          <Image
            src={logo.imageUrl}
            width={80}
            height={80}
            alt="لوگوی تبدیلا"
            className="animate-float drop-shadow-lg"
            data-ai-hint={logo.imageHint}
          />
        )}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-primary text-glow">
          <Loader className="animate-spin" />
          <span>در حال بارگذاری...</span>
        </div>
        <div className="w-full max-w-xs h-2 bg-muted/40 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-primary/60 to-accent/60 animate-[progress_1.6s_ease-in-out_infinite] rounded-full"/>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
          <Stars className="w-4 h-4"/>
          <span>تجربه شما در حال آماده‌سازی است...</span>
        </div>
      </div>
    </div>
  );
}
