import { useState } from "react";
import { Heart, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  images: string[];
  available: boolean;
}

export function HotelCard({
  id,
  name,
  location,
  rating,
  reviewCount,
  pricePerNight,
  images,
  available,
}: HotelCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log(`Hotel ${name} ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`card-hotel-${id}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - imagem ${currentImageIndex + 1}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
              onClick={prevImage}
              data-testid={`button-prev-image-${id}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
              onClick={nextImage}
              data-testid={`button-next-image-${id}`}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={toggleWishlist}
          data-testid={`button-wishlist-${id}`}
        >
          <Heart
            className={`h-4 w-4 ${isWishlisted ? 'fill-primary text-primary' : ''}`}
          />
        </Button>

        {available && (
          <Badge className="absolute bottom-2 left-2 bg-chart-2 text-white">
            Disponível
          </Badge>
        )}

        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold" data-testid={`text-hotel-name-${id}`}>
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span data-testid={`text-hotel-location-${id}`}>{location}</span>
        </div>

        <div className="mb-2 text-xs text-muted-foreground">
          {reviewCount} avaliações
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold" data-testid={`text-hotel-price-${id}`}>
              {pricePerNight.toLocaleString('pt-AO')} Kz
            </div>
            <div className="text-xs text-muted-foreground">por noite</div>
          </div>
          <Button size="sm" data-testid={`button-view-hotel-${id}`}>
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
