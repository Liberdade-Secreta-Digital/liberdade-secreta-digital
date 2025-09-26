import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section id="inicio" className="relative text-center overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            )}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>

      <div className="container relative z-10 mx-auto px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter text-shadow-lg animate-in fade-in slide-in-from-top-8 duration-500">
          SUA LIBERDADE <span className="text-primary">NÃO PODE</span> SER CALADA!
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          Descubra como se tornar <strong className="text-foreground">100% ANÔNIMO</strong> nas redes sociais e proteger sua identidade de <strong className="text-foreground">QUALQUER CENSURA</strong>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span>Invisível para grandes tecnologias</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span>Proteção total contra vigilância</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span>Método passo a passo para iniciantes</span>
          </div>
        </div>
        <div className="mt-10 animate-in fade-in zoom-in-95 duration-500 delay-400">
          <Button asChild size="lg" className="font-headline text-2xl h-16 px-10 shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
            <a href="https://pay.kirvano.com/7a825b15-f6f4-4a0c-b831-d1134d79dad8">🔥 QUERO MEU ANONIMATO AGORA! 🔥</a>
          </Button>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-secondary" />
            Acesso imediato • Apenas R$ 27,90
          </div>
        </div>

        <CountdownTimer />
      </div>
    </section>
  );
};
