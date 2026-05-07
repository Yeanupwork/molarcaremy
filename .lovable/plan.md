
## Scale Down Hero Section at Desktop

The hero currently uses `md:min-h-[90vh]` and wide padding, making it feel too tall and broad on desktop. Here are the changes to make it more compact and proportional:

### Changes (all in `src/components/home/HeroSection.tsx`)

**1. Reduce minimum height**
- Change `md:min-h-[90vh]` to `md:min-h-[75vh]` — still impactful but less overwhelming.

**2. Tighten vertical padding**
- Reduce desktop padding from `md:pt-28 md:pb-24` to `md:pt-24 md:pb-20`.

**3. Constrain content width**
- Add `max-w-7xl` to the container div so the content doesn't stretch edge-to-edge on wide screens.

**4. Reduce grid gap**
- Change `lg:gap-20` to `lg:gap-14` so text and image sit closer together.

These are all small Tailwind class tweaks — no structural changes.
