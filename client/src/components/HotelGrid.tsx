import { HotelCard } from "./HotelCard";
import hotel1 from "@assets/generated_images/Luanda_city_hotel_exterior_b3b36e67.png";
import hotel2 from "@assets/generated_images/Boutique_hotel_Angola_ec584093.png";
import hotel3 from "@assets/generated_images/Angola_safari_lodge_a55d7cf2.png";
import hotel4 from "@assets/generated_images/Luanda_business_hotel_5ba21a25.png";
import hotel5 from "@assets/generated_images/Benguela_coastal_resort_4049a5f7.png";
import hotel6 from "@assets/generated_images/Angola_guesthouse_13c0397f.png";
import roomImg from "@assets/generated_images/Luxury_hotel_room_interior_068be677.png";

//todo: remove mock functionality - replace with real hotel data from backend
const mockHotels = [
  {
    id: "1",
    name: "Hotel Presidente Luanda",
    location: "Luanda, Angola",
    rating: 4.8,
    reviewCount: 245,
    pricePerNight: 45000,
    images: [hotel1, roomImg, hotel2],
    available: true,
  },
  {
    id: "2",
    name: "Boutique Villa Angola",
    location: "Luanda, Angola",
    rating: 4.6,
    reviewCount: 128,
    pricePerNight: 35000,
    images: [hotel2, roomImg, hotel1],
    available: true,
  },
  {
    id: "3",
    name: "Safari Lodge Kissama",
    location: "Kissama, Angola",
    rating: 4.9,
    reviewCount: 89,
    pricePerNight: 52000,
    images: [hotel3, roomImg],
    available: true,
  },
  {
    id: "4",
    name: "Business Center Hotel",
    location: "Luanda, Angola",
    rating: 4.7,
    reviewCount: 312,
    pricePerNight: 48000,
    images: [hotel4, roomImg, hotel1],
    available: true,
  },
  {
    id: "5",
    name: "Benguela Beach Resort",
    location: "Benguela, Angola",
    rating: 4.5,
    reviewCount: 167,
    pricePerNight: 38000,
    images: [hotel5, roomImg],
    available: true,
  },
  {
    id: "6",
    name: "Residencial Acolhedor",
    location: "Lubango, Angola",
    rating: 4.3,
    reviewCount: 94,
    pricePerNight: 25000,
    images: [hotel6, roomImg, hotel2],
    available: true,
  },
];

export function HotelGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockHotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}
