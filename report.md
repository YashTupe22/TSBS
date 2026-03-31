# The Black Sheep Bistro - Complete Feature Documentation

> A comprehensive feature list for recreating this restaurant website.

---

## Global Features

### Theme System (Dark/Light Mode)
- Toggle button in navigation (desktop and mobile)
- Persists preference in localStorage
- Prevents flash of unstyled content on page load
- Smooth transition between themes
- Icon changes: moon ↔ sun

### Navigation
- Fixed/sticky top navigation bar
- Glass-morphism effect (backdrop blur, semi-transparent)
- Desktop: Horizontal menu links with hover effects
- Mobile: Hamburger menu with slide-down panel
- Active page indicator (underline + accent color)
- "Book" CTA button in header
- Auto-close mobile menu when link clicked

### Footer (All Pages)
- Three-column layout
- Column 1: Brand name + copyright
- Column 2: Location, phone (clickable), hours with icons
- Column 3: Social media links (Instagram, Facebook)
- Theme-aware styling

### Typography
- Headline: Serif font (editorial style)
- Body: Sans-serif font (clean, modern)
- Icon set: Material Symbols Outlined

### Color Palette
- Primary: Saffron/Gold (#F49300)
- Light background: Off-white (#FDFCF8)
- Dark background: Near-black (#121414)
- Accent borders and shadows with warm tones

---

## Page: Homepage

### Hero Section
- Full-screen background image with gradient overlay
- Large headline with italic accent text
- Two CTA buttons: "Book Now" (primary) + "Explore Menu" (glass)
- Animated bouncing scroll arrow at bottom
- Responsive text sizing (larger on desktop)

### About Preview Section
- Two-column layout (image + content)
- Image with grayscale filter, removes on hover
- "Since 2014" badge overlay on image
- Decorative background element behind image
- Statistics grid (2 key metrics with icons)
- "Our Philosophy" link with arrow icon

### Menu Highlights Section
- Masonry-style grid layout
- Featured large card (spans 2/3 width)
- Two stacked smaller cards
- Each card has:
  - Image with hover scale effect
  - Gradient overlay from bottom
  - Item name, description, price (₹)
  - "Guest Favorite" badge on featured item
- "View Full Menu" link

### Newsletter Section
- Email subscription form
- Input field + subscribe button
- Centered layout with decorative blur background

---

## Page: Menu

### Hero Header
- Two-column layout
- Accent text + large headline
- Featured image with shadow and grayscale hover
- Floating info box with signature experience text

### Menu Sections

#### Small Plates
- Section heading with subtitle
- Two-column grid of menu items
- Each item: Name (with hover color), price, description
- "Popular Choice" badges on select items
- Decorative radial gradient background

#### Large Plates
- Sticky sidebar with category title
- Featured items with large images
- Image hover scale effect
- "House Specialty" badges with star icon
- Additional items in compact list format

#### Cocktails
- Three-column grid
- Cards with drink icons in colored circles
- Item name, description, price
- Decorative background blur element

### CTA Section
- Full-width image with slow hover scale (3 seconds)
- Overlay with gradient
- "Book Your Table" button

---

## Page: About

### Hero Section
- Full-screen image with gradient
- "Since 2014" pill badge
- Large centered headline
- Bouncing arrow animation

### Story Section
- Two-column layout
- Multi-paragraph narrative text
- Statistics row (Years, Local Farmers, Rating)
- Team image with grayscale hover effect
- Decorative background element

### Values Section
- Three-column card grid
- Each card: Icon + title + description
- Icons: sustainability, innovation, community
- Dark surface background

### Team Section
- Two-column grid of team members
- Large portrait images with grayscale hover
- Name (large), role badge, biography
- Cards: Chef + Mixologist

### Location Section
- Two-column layout
- Left: Contact info (address, hours, phone with icons)
- Right: Embedded Google Maps iframe
- "Easy to Find" badge on map

### Final CTA
- Centered with two buttons
- "Reserve a Table" + "View Menu"

---

## Page: Reservations

### Layout
- Two-column: Contact info + Form

### Left Column
- Section title with accent
- Main headline
- Descriptive text
- Contact info grid (2x2):
  - Hours with icon
  - Location with icon
- Embedded Google Maps

### Reservation Form
- Rounded card container with shadow
- Decorative blur background element

#### Form Fields (10 total)
1. **Full Name** (required) - text input with person icon
2. **Mobile Number** (required) - tel input with +91 prefix, 10-digit validation
3. **Email Address** (required) - email input
4. **Number of Guests** (required) - dropdown 1-10, "More than 10" option
5. **Reservation Date** (required) - date picker, minimum today
6. **Time Slot** (required) - dropdown with optgroups:
   - Lunch: 12:00 PM - 3:00 PM (30-min intervals)
   - Dinner: 6:30 PM - 11:00 PM (30-min intervals)
7. **Special Occasion** (optional) - dropdown:
   - Just Dining, Birthday, Anniversary, Engagement, Business Meeting, Family Gathering, Date Night, Other
8. **Seating Preference** (optional) - dropdown:
   - No Preference, Indoor, Outdoor, Window, Quiet Corner
9. **Dietary Requirements** (optional) - textarea for allergies/restrictions
10. **Special Requests** (optional) - textarea for arrangements

#### Form Styling
- Each field has icon on left
- Bottom border that highlights on focus
- Labels in small uppercase with tracking
- Required fields marked with red asterisk

#### Action Buttons
- "Book Table" - primary gradient button with restaurant icon
- "WhatsApp Booking" - green button with chat icon
- Helper text below buttons

### WhatsApp Integration
- Validates all required fields before sending
- Formats comprehensive message with:
  - Restaurant name header
  - Guest details (name, mobile, email)
  - Booking details (date formatted, time, guests)
  - Occasion and seating preference
  - Dietary requirements (if provided)
  - Special requests (if provided)
- Opens WhatsApp with pre-filled message
- Phone number: +91 8668918164

### Editorial Section Below Form
- Two-column: Image + text
- Information about private dining
- Phone number for large parties

---

## Page: Reviews

### Hero Section
- Two-column layout
- Left: Large headline + rating display
  - "4.6" large number with filled star icons
  - "Over 1,200 verified reviews" stat
  - "Write a Review" button
- Right: Featured image with floating testimonial card
  - Quote text with author attribution

### Review Grid
- Masonry layout (1-3 columns responsive)
- Multiple review card types:

#### Standard Review Card
- Author avatar (round)
- Author name + verification badge
- Review text
- Star rating (5 stars, visual)
- Watermark quote icon

#### Featured Review Card (Chef's Choice)
- Gradient border accent
- Verified badge with checkmark
- Larger quote styling
- Highlighted design

#### Review Card with Image
- Full-width image at top
- Review content below

### Social Proof Section
- "Through Your Lens" heading
- Hashtag display (#BlackSheepBistro)
- Overlapping community avatars with "+4K" counter
- Bento grid of community photos:
  - Large featured image (spans 2x2)
  - Multiple smaller images
  - Hover effect: scale + Instagram handle overlay

### Final CTA
- "Community Spirit" badge with pulsing animation
- Large headline asking for reviews
- Two buttons: "Write a Review" + "View Gallery"

---

## Interactive Features

### Hover Effects
- Images: Grayscale removal on hover
- Images: Scale up (1.05x) with smooth transition
- Text/Links: Color change to primary
- Icons: Translate/move animation
- Buttons: Scale down on active, brightness increase on hover

### Animations
- Bouncing arrow (infinite loop)
- Pulsing dot indicator
- Spinning icon on form submission
- Smooth transitions (300-1000ms durations)

### Form Interactions
- Focus state: Border color changes to primary
- Input icons change color on focus
- HTML5 validation (required, pattern, type)
- Loading state on submit button

### Mobile Menu
- Hamburger icon toggles to X when open
- Menu slides down from navigation
- All links close menu when clicked
- Theme toggle synced with desktop button

---

## Responsive Design

### Breakpoints
- Mobile: Below 768px
- Tablet: 768px - 1024px
- Desktop: 1024px and above

### Mobile Adaptations
- Single column layouts
- Smaller text sizes
- Hamburger navigation
- Full-width buttons
- Adjusted spacing/padding
- Touch-optimized (no tap highlight)

### Desktop Features
- Multi-column grids
- Larger typography
- Horizontal navigation
- Hover effects (not on mobile)

---

## External Integrations

### Required Services
- Google Fonts (2 font families + icons)
- Google Maps Embed API
- WhatsApp Business API (wa.me links)

### Social Media
- Instagram link (profile page)
- Facebook link (placeholder)

---

## Accessibility

- Semantic HTML structure
- Alt text on all images
- Form labels with required indicators
- Color contrast in both themes
- Keyboard navigation support
- Meta viewport for mobile

---

## Content Summary

### Restaurant Info
- Name: The Black Sheep Bistro
- Location: Panaji, Goa, India
- Hours: 12 PM - 12 AM (Daily)
- Phone: +91 98819 72233
- WhatsApp: +91 8668918164
- Established: 2014
- Rating: 4.6 stars
- Reviews: 1,200+

### Menu Categories
- Small Plates (appetizers)
- Large Plates (mains)
- Clever Cocktails (drinks)
- Prices in Indian Rupees (₹)

### Team Members
- Executive Chef
- Head Mixologist

### Brand Identity
- Tagline: "Locally Sourced, Globally Inspired"
- Style: Editorial, premium, warm tones
- Primary color: Saffron/Gold
