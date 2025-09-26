import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Ban, Eye, Skull, Target } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: <Ban className="h-8 w-8 text-destructive" />,
      title: 'Censura Brutal',
      description: 'Contas banidas sem aviso por expressar opiniões que o sistema não gosta.',
    },
    {
      icon: <Eye className="h-8 w-8 text-destructive" />,
      title: 'Espionagem Total',
      description: 'Big techs e governos coletam TUDO sobre você, 24 horas por dia.',
    },
    {
      icon: <Target className="h-8 w-8 text-destructive" />,
      title: 'Perseguição e Manipulação',
      description: 'Seus dados são vendidos para empresas que te manipulam e te perseguem com anúncios.',
    },
    {
      icon: <Skull className="h-8 w-8 text-destructive" />,
      title: 'Cultura do Cancelamento',
      description: 'Um post antigo ou uma opinião "errada" pode DESTRUIR sua reputação e sua vida.',
    },
  ];

  return (
    <section id="problema" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-5xl md:text-6xl text-destructive tracking-tight">
            VOCÊ ESTÁ SENDO VIGIADO 24H!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl font-bold text-foreground">
            Cada clique, cada post, cada like é monitorado. Sua privacidade está sendo{' '}
            <span className="underline decoration-destructive decoration-4 underline-offset-4">
              VIOLADA DIARIAMENTE!
            </span>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem) => (
            <Card key={problem.title} className="border-border/50 text-center bg-background/50 animate-in fade-in-0 zoom-in-95 duration-500">
              <CardHeader>
                <div className="mx-auto w-fit rounded-full bg-destructive/10 p-4">
                  {problem.icon}
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto border-2 border-dashed border-secondary/50 rounded-lg p-6 bg-secondary/10">
                <AlertTriangle className="h-10 w-10 text-secondary mx-auto mb-4" />
                <p className="text-xl md:text-2xl font-bold text-secondary">
                    PARE DE SER UMA VÍTIMA DO SISTEMA!
                </p>
                <p className="mt-2 text-lg text-foreground">
                    Enquanto você não age, sua liberdade vai sendo roubada a cada segundo...
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
