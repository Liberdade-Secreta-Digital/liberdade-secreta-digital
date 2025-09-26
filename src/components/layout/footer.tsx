import { Logo } from '@/components/logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-foreground">Termos de Serviço</a>
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground">Contato</a>
          </div>
          <p className="text-xs">
            &copy; {currentYear} Liberdade Digital Secreta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
