'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered.current) {
        hasTriggered.current = true;
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-card border-primary text-foreground">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-headline text-secondary">
            <Gift className="h-8 w-8" />
            ESPERE! OFERTA ESPECIAL!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            Não vá embora ainda! Como um presente especial, adicione o cupom <strong className="text-secondary">LIBERDADE10</strong> e ganhe <strong className="text-primary">10% DE DESCONTO</strong> extra.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
            <p className="text-center">Esta oferta é por tempo limitadíssimo.</p>
          <Button size="lg" asChild className="font-bold text-lg">
            <a href="#comprar">EU QUERO O DESCONTO!</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
