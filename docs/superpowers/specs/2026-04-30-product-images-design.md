# Product Images Restructuring Design

## Context
The "Blinds Depot" catalog requires separate images for the Hero section and the Product Details section to maximize visual impact. The hero requires a landscape image, while the details section requires a portrait image. Currently, a single `image` field is used across all views.

## Architecture & Data Flow
1. **Data Model (`app/data/products.ts`)**:
   - The `Product` type will be updated to include two new required fields:
     - `heroImage: string` (landscape aspect ratio)
     - `aboutImage: string` (portrait aspect ratio)
   - The existing `image: string` field will be preserved specifically for the `ProductCard` (square/portrait aspect ratio).
   - We will populate these new fields for all existing products. We will prioritize using available images in the `gallery` array. For missing ones, we will source high-quality royalty-free images that match the luxury editorial aesthetic.

2. **Page Component (`app/productos/[slug]/page.tsx`)**:
   - Update `ProductHero` invocation to pass `product.heroImage`.
   - Update `ProductDetails` invocation to pass `product.aboutImage`.

3. **UI Components**:
   - `ProductHero.tsx` and `ProductDetails.tsx` already accept an `image` string prop, so they will automatically render the specific aspect ratios properly without internal component changes.

## Error Handling & Testing
- Typescript will enforce the presence of `heroImage` and `aboutImage` in `products.ts`, ensuring no product is left without the required imagery.
- Any missing image will cause a TS compilation error during development, guaranteeing complete coverage before production.
