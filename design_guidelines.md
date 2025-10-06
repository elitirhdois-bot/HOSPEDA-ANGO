# Hospeda Angola - Design Guidelines

## Design Approach & Philosophy

**Reference-Based Approach**: Drawing inspiration from leading travel platforms (Airbnb, Booking.com, Trivago) while incorporating distinctive Angolan cultural identity through warm, earthy color palettes and authentic local imagery.

**Core Principle**: Build trust through professional design, showcase Angola's hospitality beautifully, and make booking effortless.

---

## Color Palette

### Primary Colors
- **Brand Primary**: 25 75% 45% (Warm terracotta red - representing Angolan earth and hospitality)
- **Primary Dark**: 25 70% 35% (Deeper variant for hover states)
- **Primary Light**: 25 60% 92% (Subtle backgrounds)

### Neutral Foundation
- **Dark Mode Background**: 240 8% 7%
- **Dark Mode Surface**: 240 6% 12%
- **Dark Mode Surface Elevated**: 240 5% 16%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 65%
- **Text Muted**: 0 0% 45%

### Functional Colors
- **Success**: 145 65% 45% (Booking confirmations)
- **Warning**: 35 90% 55% (Limited availability)
- **Error**: 0 75% 55%
- **Info**: 210 70% 55%

### Accent (Use Sparingly)
- **Gold Highlight**: 45 85% 60% (Premium hotels, featured badges only)

---

## Typography

**Font Family**: 
- Primary: 'Inter' (Google Fonts) - Clean, modern, excellent readability
- Headings: 'Inter' with adjusted weight (600-700)

**Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Heading: text-3xl md:text-4xl, font-semibold
- Card Title: text-xl font-semibold
- Body: text-base, font-normal
- Small/Meta: text-sm, font-medium
- Price Display: text-2xl font-bold

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Component padding: p-4 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-4 to gap-8

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl
- Forms/narrow content: max-w-2xl

**Grid Systems**:
- Hotel listings: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Featured hotels: grid-cols-1 lg:grid-cols-2
- Search filters sidebar: Two-column layout (sidebar + main)

---

## Component Library

### Navigation Header
- Sticky header with backdrop-blur-lg bg-background/80
- Logo left, search bar center (on larger screens), auth buttons right
- Mobile: Hamburger menu with slide-out drawer
- Include quick location selector and currency display

### Hero Section (Homepage)
- Full-width hero at 85vh with stunning Angolan hotel/landscape imagery
- Overlaid search card (elevated, blurred background)
- Search inputs: Location, Check-in/out dates, Guests, Search button
- Tagline: "Descubra os Melhores Hotéis de Angola" (large, bold, white text with subtle shadow)

### Hotel Cards
- Aspect ratio 4:3 image with rounded-lg overflow-hidden
- Image carousel with smooth transitions (3-5 images per hotel)
- Wishlist heart icon (top-right overlay)
- Hotel name (text-lg font-semibold)
- Location with map pin icon
- Star rating with review count
- Price per night (prominent, text-2xl font-bold)
- Availability badge ("Disponível" in success color)
- Hover: Subtle lift (shadow-lg) and image zoom

### Search & Filters Sidebar
- Sticky sidebar on desktop
- Collapsible sections: Price range, Star rating, Amenities, Location
- Multi-select checkboxes with custom styling
- Price range slider with dual handles
- Clear filters button at bottom

### Hotel Detail Page
- Full-width image gallery (masonry or carousel, min 10 images)
- Sticky booking card (right sidebar on desktop, bottom sheet on mobile)
- Sections: Overview, Amenities (grid icons), Rooms (cards), Location (embedded Google Map), Reviews
- Breadcrumb navigation at top
- Share and wishlist buttons

### Booking Flow
- Step indicator (1. Datas, 2. Quartos, 3. Pagamento, 4. Confirmação)
- Room selection cards with images, descriptions, capacity
- Payment form with Stripe integration
- "Reservar Agora" vs "Reservar e Pagar Depois" options
- Order summary sidebar showing breakdown

### Admin Dashboard
- Sidebar navigation with role-based menu items
- Data tables with sorting, filtering, pagination
- Add Hotel form: Multi-step wizard (Basic Info, Location, Rooms, Photos, Pricing)
- Image upload with drag-drop and preview
- Google Maps integration for location selection
- Admin management table (for super admin only)

### Authentication
- Modal-based login/register (centered overlay)
- Email/password fields with validation indicators
- Email verification message after registration
- Social login options (Google, Facebook)
- Forgot password flow

### Footer
- Multi-column layout: About, Hotels by City, Support, Legal
- Newsletter signup form
- Social media icons
- Payment method badges (Visa, Mastercard, Stripe)
- "Feito em Angola 🇦🇴" tagline

---

## Imagery Strategy

### Hero Section
Large, high-quality image showcasing an iconic Angolan hotel or beautiful landscape (beach, cityscape). Use overlay gradient (from transparent to dark at bottom) for text readability.

### Hotel Listings
Professional photos: exterior, lobby, rooms, amenities, views. Minimum 5 images per hotel, consistent aspect ratios.

### Category Sections
Destination highlights: Luanda skyline, beach resorts, safari lodges. Use authentic Angolan imagery.

### Placeholder Strategy
For development: Unsplash API or similar with Angola-specific search terms ("Angola hotel", "Luanda", "African hospitality").

---

## Interactions & Animations

**Minimal Approach**:
- Smooth transitions on hover (transform, shadow)
- Loading skeletons for content fetching
- Subtle fade-in for page loads
- Smooth scroll to sections
- No excessive parallax or scroll animations

**Key Interactions**:
- Date picker: Modern calendar with range selection
- Image gallery: Swipe/click navigation with thumbnails
- Search autocomplete: Dropdown suggestions
- Filter updates: Instant results without page reload

---

## Responsive Breakpoints

- Mobile: < 640px (single column, bottom sheets, hamburger menu)
- Tablet: 640px - 1024px (2-column grids, adapted layouts)
- Desktop: > 1024px (full multi-column, sidebars visible)

---

## Accessibility & Dark Mode

- WCAG AA contrast ratios maintained
- Consistent dark mode across all components including forms
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all hotel images
- Screen reader labels for icons

---

## Trust & Credibility Elements

- Verified hotel badges
- Guest review ratings (stars + number)
- "Reservado X vezes esta semana" social proof
- Secure payment badges
- Cancellation policy clearly displayed
- Contact support always visible