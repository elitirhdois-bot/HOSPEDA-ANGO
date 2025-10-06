import { Hotel, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Hotel className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Hospeda Angola</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              A plataforma líder de reservas de hotéis em Angola. Encontre e reserve os melhores hotéis com os melhores preços.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Destinos Populares</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/hotels/luanda"><a className="hover:text-foreground" data-testid="link-luanda">Hotéis em Luanda</a></Link></li>
              <li><Link href="/hotels/benguela"><a className="hover:text-foreground" data-testid="link-benguela">Hotéis em Benguela</a></Link></li>
              <li><Link href="/hotels/lubango"><a className="hover:text-foreground" data-testid="link-lubango">Hotéis em Lubango</a></Link></li>
              <li><Link href="/hotels/huambo"><a className="hover:text-foreground" data-testid="link-huambo">Hotéis em Huambo</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/help"><a className="hover:text-foreground" data-testid="link-help">Central de Ajuda</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-foreground" data-testid="link-contact">Contacto</a></Link></li>
              <li><Link href="/cancellation"><a className="hover:text-foreground" data-testid="link-cancellation">Política de Cancelamento</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-foreground" data-testid="link-terms">Termos de Serviço</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Receba ofertas exclusivas e novidades
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Hospeda Angola. Todos os direitos reservados. Feito em Angola 🇦🇴</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <span className="text-xs">Aceitamos: Visa • Mastercard • Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
