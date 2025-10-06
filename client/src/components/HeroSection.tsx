import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Luanda_beachfront_hotel_hero_00d1e1a6.png";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bela vista de hotel em Angola"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Descubra os Melhores Hotéis de Angola
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md md:text-2xl">
            Compare preços e reserve com facilidade
          </p>
        </div>

        <Card className="w-full max-w-4xl bg-background/95 p-6 backdrop-blur-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium">Localização</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Luanda, Benguela..."
                  className="pl-10"
                  data-testid="input-location"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10"
                  data-testid="input-checkin"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10"
                  data-testid="input-checkout"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium">Hóspedes</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="pl-10"
                  data-testid="input-guests"
                />
              </div>
            </div>
          </div>

          <Button className="mt-4 w-full" size="lg" data-testid="button-search">
            <Search className="mr-2 h-5 w-5" />
            Buscar Hotéis
          </Button>
        </Card>
      </div>
    </section>
  );
}
