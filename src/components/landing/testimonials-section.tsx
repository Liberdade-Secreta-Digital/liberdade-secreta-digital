import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria S.',
      text: 'Comprei e em 2 dias já estava invisível nas redes! É libertador saber que posso navegar sem ser vigiada. O passo a passo é muito fácil de seguir.',
      avatarSeed: 'avatar1',
    },
    {
      name: 'João P.',
      text: 'Finalmente posso expressar minhas opiniões sem medo de ser cancelado ou perseguido. Este guia é uma arma essencial para a liberdade de expressão hoje em dia.',
      avatarSeed: 'avatar2',
    },
    {
      name: 'Ana L.',
      text: 'O preço é irrisório pelo valor que recebi! Só com o bônus das ferramentas secretas já valeu o investimento. Recomendo 100%!',
      avatarSeed: 'avatar3',
    },
  ];

  return (
    <section id="depoimentos" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tight">
            ELES RECUPERARAM A LIBERDADE. E VOCÊ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Veja o que pessoas como você estão dizendo após aplicarem o método Liberdade Digital Secreta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 p-6 flex flex-col justify-between"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <CardContent className="p-0">
                  <p className="text-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </div>
              <div className="flex items-center mt-6 pt-6 border-t border-border/50">
                <Avatar>
                  <AvatarImage src={`https://picsum.photos/seed/${testimonial.avatarSeed}/40/40`} />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <p className="ml-4 font-bold text-foreground">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
