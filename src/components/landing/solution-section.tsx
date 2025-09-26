import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const SolutionSection = () => {
  const benefits = [
    'Ocultar sua identidade real de governos e corporações.',
    'Técnicas de comunicação que burlam a censura automática.',
    'Configurar perfis fantasmas impossíveis de rastrear.',
    'Proteger seus dados pessoais contra vazamentos e espionagem.',
    'Navegar e postar sem deixar rastros digitais.',
    'Garantir que suas opiniões sejam ouvidas, sem medo de retaliação.',
  ];

  return (
    <section id="solucao" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tight">
            A CHAVE PARA SUA LIBERDADE DIGITAL
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Apresentamos o <strong className="text-foreground">Liberdade Digital Secreta</strong>: o único guia passo a passo que transforma você de um alvo rastreado em um fantasma digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="font-headline text-3xl text-foreground">Dentro deste guia você vai aprender a:</h3>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 font-headline text-xl h-14 w-full md:w-auto">
              <a href="#comprar">
                <ShieldCheck className="mr-2" />
                PROTEGER MINHA IDENTIDADE AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
