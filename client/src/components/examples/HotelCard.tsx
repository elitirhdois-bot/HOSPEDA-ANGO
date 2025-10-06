import { HotelCard } from '../HotelCard';
import hotel1 from '@assets/generated_images/Luanda_city_hotel_exterior_b3b36e67.png';
import hotel2 from '@assets/generated_images/Boutique_hotel_Angola_ec584093.png';
import hotel3 from '@assets/generated_images/Luxury_hotel_room_interior_068be677.png';

export default function HotelCardExample() {
  return (
    <div className="p-4">
      <HotelCard
        id="1"
        name="Hotel Presidente Luanda"
        location="Luanda, Angola"
        rating={4.8}
        reviewCount={245}
        pricePerNight={45000}
        images={[hotel1, hotel2, hotel3]}
        available={true}
      />
    </div>
  );
}
