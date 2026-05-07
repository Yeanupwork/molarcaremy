
## Mobile-Friendly Hero Section Improvements

At 768px viewport, the current hero section has issues: `min-h-[90vh]` makes it excessively tall, the grid doesn't stack well, text and image sizing feel oversized, and the carousel banner below has no responsive constraints.

### Proposed Changes (all in `HeroSection.tsx`)

**1. Reduce section height on mobile**
- Change `min-h-[90vh]` to `min-h-[auto] md:min-h-[90vh]` so it sizes naturally on smaller screens instead of forcing 90% viewport height.
- Reduce vertical padding: `pt-20 pb-12 md:pt-28 md:pb-24`.

**2. Improve grid stacking**
- Reverse the visual order on mobile so the product image appears above the text (more engaging first impression), then text + CTA below.
- Reduce gap: `gap-8 lg:gap-20`.

**3. Scale down text for tablet/mobile**
- H1: `text-xl md:text-2xl lg:text-4xl` (currently `text-2xl` at mobile which is large).
- Description: `text-base md:text-lg lg:text-xl` (currently `text-lg` at all sizes).
- Badge: smaller padding/text on mobile.

**4. Constrain product image on mobile**
- Limit max width: `max-w-[280px] md:max-w-lg mx-auto` so the image doesn't dominate the screen.

**5. Buttons — tighter on mobile**
- Reduce button text size and padding on smaller screens.
- Keep full-width stacking (`flex-col`) on mobile.

**6. Carousel banner image**
- Add max-height constraint on mobile: `max-h-[200px] md:max-h-none object-cover` to prevent the wide banner from being too short/unreadable or too dominant.

### Technical Details

All changes are CSS/Tailwind class adjustments within `src/components/home/HeroSection.tsx`. No structural or logic changes needed.
