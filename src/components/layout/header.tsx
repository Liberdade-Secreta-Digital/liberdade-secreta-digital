'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Problema', href: '#problema' },
    { label: 'A Solução', href: '#solucao' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
      <Button asChild className="ml-4">
        <a href="#comprar">Comprar Agora</a>
      </Button>
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <NavItems />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Logo />
                    <nav className="flex flex-col items-center gap-6">
                        <NavItems />
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
