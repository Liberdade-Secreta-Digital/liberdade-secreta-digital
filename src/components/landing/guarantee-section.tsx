import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lock, Rocket } from 'lucide-react';

export const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Award className="h-10 w-10 text-secondary" />,
      title: '7 DIAS DE GARANTIA',
      description: 'Se não ficar 100% satisfeito, devolvemos seu dinheiro. Sem perguntas, sem burocracia.',
    },
    {
      icon: <Lock className="h-10 w-10 text-secondary" />,
      title: 'COMPRA 100% SEGURA',
      description: 'Seus dados estão protegidos com criptografia de ponta. Sua segurança é nossa prioridade.',
    },
    {
      icon: <Rocket className="h-10 w-10 text-secondary" />,
      title: 'ACESSO IMEDIATO',
      description: 'Assim que o pagamento for confirmado, você recebe o acesso ao ebook e a todos os bônus no seu email.',
    },
  ];

  return (
    <section id="garantia" className="bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-5xl md:text-6xl text-secondary tracking-tight">
          SEU RISCO É <span className="text-primary">ZERO</span>.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Nós confiamos tanto no poder deste guia que assumimos todo o risco por você.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee) => (
            <Card key={guarantee.title} className="bg-background/50 border-secondary/30 text-center">
              <CardHeader>
                <div className="mx-auto w-fit rounded-full bg-secondary/10 p-4">
                  {guarantee.icon}
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
