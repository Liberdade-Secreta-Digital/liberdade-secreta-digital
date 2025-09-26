import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Shield className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl tracking-wider text-foreground">
        Liberdade Digital Secreta
      </span>
    </div>
  );
};
