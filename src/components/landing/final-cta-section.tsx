import { Button } from '@/components/ui/button';
import { AlertTriangle, Zap, ShieldAlert } from 'lucide-react';

export const FinalCtaSection = () => {
  return (
    <section id="comprar" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-headline text-5xl md:text-6xl text-foreground tracking-tight">
            A ESCOLHA É SUA: VÍTIMA OU FANTASMA?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Você pode continuar sendo um produto, com sua vida exposta e sua voz silenciada. Ou pode tomar o controle <strong className="text-primary">AGORA</strong>.
          </p>

          <div className="mt-12 bg-card border border-primary/50 rounded-lg p-8 shadow-2xl shadow-primary/20">
            <h3 className="font-headline text-3xl text-primary">Acesso Completo Liberdade Digital Secreta</h3>
            <p className="text-2xl font-bold my-4">
                <span className="text-muted-foreground line-through mr-2">De R$197</span>
                <span className="text-secondary">por apenas R$27,90</span>
            </p>
            <ul className="text-left space-y-2 text-muted-foreground my-6">
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary"/> Ebook Completo Liberdade Digital Secreta</li>
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary"/> Bônus #1: Lista de Ferramentas Secretas</li>
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary"/> Bônus #2: Checklist de Segurança</li>
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary"/> Bônus #3: Acesso ao Grupo VIP</li>
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary"/> 7 Dias de Garantia</li>
            </ul>
            <Button asChild size="lg" className="font-headline text-2xl h-16 w-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
              <a href="#">🔥 QUERO MEU ACESSO IMEDIATO! 🔥</a>
            </Button>
            <div className="mt-3 text-sm text-muted-foreground">
                Pagamento único. Acesso vitalício.
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-destructive font-bold">
            <AlertTriangle className="h-5 w-5" />
            <span>Atenção: O preço promocional e os bônus podem sair do ar a qualquer momento.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
