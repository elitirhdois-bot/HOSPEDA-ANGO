import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterSidebar } from "@/components/FilterSidebar";
import { HotelGrid } from "@/components/HotelGrid";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="mb-2 text-3xl font-semibold">Hotéis Disponíveis em Angola</h2>
            <p className="text-muted-foreground">
              Encontre o hotel perfeito para sua estadia
            </p>
          </div>

          <div className="flex gap-8">
            <aside className="hidden w-80 shrink-0 lg:block">
              <FilterSidebar />
            </aside>

            <div className="flex-1">
              <HotelGrid />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
}
