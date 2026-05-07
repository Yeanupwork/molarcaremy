
## Remove Excess Whitespace in Hero Section

The `min-h-[75vh]` forces the hero to be at least 75% of the viewport tall even when the content is shorter, creating large empty areas above and below.

### Change (in `src/components/home/HeroSection.tsx`)

- Remove the min-height entirely — change the section class from `min-h-0 md:min-h-[75vh]` to no min-height at all, and reduce padding from `md:pt-24 md:pb-20` to `md:pt-24 md:pb-16`. The section will now size to its content naturally without forced whitespace.
