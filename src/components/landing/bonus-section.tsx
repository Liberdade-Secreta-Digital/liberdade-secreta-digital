import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import { AnimatedProgressBar } from './animated-progress-bar';

export const BonusSection = () => {
  const bonuses = [
    {
      title: 'Bônus #1: Lista de Ferramentas Secretas',
      description: 'Acesso a softwares e apps usados por ativistas para máxima privacidade.',
      value: 'R$47',
    },
    {
      title: 'Bônus #2: Checklist de Segurança Diária',
      description: 'Um guia rápido para garantir que você está protegido todos os dias, em 5 minutos.',
      value: 'R$27',
    },
    {
      title: 'Bônus #3: Acesso ao Grupo VIP',
      description: 'Comunidade exclusiva para trocar informações e se manter atualizado sobre ameaças.',
      value: 'R$97',
    },
  ];

  return (
    <section id="bonus" className="bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-5xl md:text-6xl text-secondary tracking-tight">
          COMPRE AGORA E RECEBA <span className="text-primary">3 BÔNUS EXCLUSIVOS</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Sua compra hoje não inclui apenas o ebook. Você também leva um pacote de bônus no valor de <strong className="text-foreground">R$171</strong>... totalmente <strong className="text-secondary">DE GRAÇA!</strong>
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {bonuses.map((bonus) => (
            <Card key={bonus.title} className="bg-background/50 border-secondary/30 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl text-secondary pr-4">{bonus.title}</CardTitle>
                  <div className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-md whitespace-nowrap line-through">{bonus.value}</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
            <AnimatedProgressBar />
            <Button asChild size="lg" className="font-headline text-2xl h-16 px-10 shadow-lg shadow-primary/30 animate-pulse">
                <a href="#comprar">
                    <Gift className="mr-3"/>
                    GARANTIR MEUS BÔNUS AGORA!
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
