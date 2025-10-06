import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Star, Wifi, ParkingCircle, Coffee, Dumbbell, Waves } from "lucide-react";

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = [
    { id: "wifi", label: "Wi-Fi Grátis", icon: Wifi },
    { id: "parking", label: "Estacionamento", icon: ParkingCircle },
    { id: "breakfast", label: "Café da Manhã", icon: Coffee },
    { id: "gym", label: "Academia", icon: Dumbbell },
    { id: "pool", label: "Piscina", icon: Waves },
  ];

  const toggleStar = (stars: number) => {
    setSelectedStars(prev =>
      prev.includes(stars) ? prev.filter(s => s !== stars) : [...prev, stars]
    );
    console.log(`Star filter ${stars} toggled`);
  };

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenityId) ? prev.filter(a => a !== amenityId) : [...prev, amenityId]
    );
    console.log(`Amenity ${amenityId} toggled`);
  };

  const clearFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedStars([]);
    setSelectedAmenities([]);
    console.log('Filters cleared');
  };

  return (
    <Card className="sticky top-20">
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-lg">Filtros</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          data-testid="button-clear-filters"
        >
          Limpar
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="mb-4 block font-semibold">Faixa de Preço</Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={100000}
            step={1000}
            className="mb-2"
            data-testid="slider-price-range"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0].toLocaleString('pt-AO')} Kz</span>
            <span>{priceRange[1].toLocaleString('pt-AO')} Kz</span>
          </div>
        </div>

        <div>
          <Label className="mb-3 block font-semibold">Classificação</Label>
          <div className="space-y-2">
            {[5, 4, 3].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <Checkbox
                  id={`stars-${stars}`}
                  checked={selectedStars.includes(stars)}
                  onCheckedChange={() => toggleStar(stars)}
                  data-testid={`checkbox-stars-${stars}`}
                />
                <Label
                  htmlFor={`stars-${stars}`}
                  className="flex cursor-pointer items-center gap-1 text-sm"
                >
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-chart-4 text-chart-4" />
                  ))}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-3 block font-semibold">Comodidades</Label>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center gap-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={() => toggleAmenity(amenity.id)}
                  data-testid={`checkbox-amenity-${amenity.id}`}
                />
                <Label
                  htmlFor={amenity.id}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <amenity.icon className="h-4 w-4" />
                  {amenity.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
