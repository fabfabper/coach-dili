# Coach Dili Personal Trainer Website Plan

## Goal

Build a stateless Next.js website for Coach Dili in Zurich, using SimplyBook.me as the sole booking system. The site will use a premium Swiss editorial style, localized German/English content, configurable services, and a complete deployment-ready scaffold.

## Implementation Steps

1. Scaffold Next.js App Router with TypeScript, Tailwind CSS, shadcn/ui, ESLint, and minimal dependencies.
2. Create centralized German/English content dictionaries for navigation, services, pricing, testimonials, trainer information, legal pages, and SEO.
3. Add locale routing with `/de` and `/en`, including language switching and a structure ready for French and Italian.
4. Build the shared visual system:
   - Warm white, near-black, soft gray, and restrained accent color
   - Strong editorial typography
   - Generous spacing and minimal borders
   - Responsive navigation and footer
   - Reduced-motion support
5. Implement the required pages:
   - Home
   - About / Trainer
   - Services
   - Pricing
   - Booking
   - Contact
   - Privacy Policy
   - Impressum
6. Build a custom service-selection interface with configurable services such as:
   - Personal Training, 60 minutes
   - Personal Training, 90 minutes
   - Online Coaching, 60 minutes
7. Embed the SimplyBook.me booking flow and pass the selected service where supported. Do not add local booking state, a database, availability logic, authentication, or client-side API credentials.
8. Add configurable contact-form integration without introducing a database.
9. Add SEO support:
   - Metadata and Open Graph tags
   - Canonical URLs and locale alternates
   - Sitemap and robots configuration
   - LocalBusiness/ProfessionalService structured data for Zurich
10. Add optional analytics for page views, service selections, and booking clicks without collecting sensitive customer information.
11. Add GitHub Actions checks for linting, type checking, and production builds.
12. Document local development, Vercel deployment, environment variables, SimplyBook setup, content editing, and secret handling.

## Relevant Files

- `src/app/` for localized pages, layouts, metadata, sitemap, and robots.
- `src/components/` for navigation, footer, service sections, booking embed, forms, and analytics.
- `src/content/` for German/English content and service configuration.
- `src/lib/` for locale helpers, SimplyBook integration, structured data, and analytics.
- `public/` for trainer photography and social preview assets.
- `.github/workflows/ci.yml` for CI checks.
- `.env.example` and `README.md` for setup and deployment instructions.

## Verification

1. Run lint, TypeScript checks, and the production build.
2. Test all routes in German and English on mobile, tablet, and desktop.
3. Verify keyboard navigation, focus states, contrast, reduced motion, and form validation.
4. Confirm each service's Book now action opens the correct SimplyBook flow.
5. Inspect metadata, sitemap, robots, structured data, and locale alternates.
6. Confirm no customer data or private SimplyBook credentials are stored or exposed client-side.

## Decisions

- Use Coach Dili and Zurich as initial business/location values.
- Treat `fabfabper.secure.simplybook.me` as configurable public booking infrastructure.
- Use the SimplyBook widget/embed only for Phase 1.
- Keep French and Italian extensibility in the content architecture.
- Exclude databases, customer accounts, admin dashboards, custom scheduling, reminders, CRM, workout tracking, and custom payments.

## Production Inputs Still Needed

- Exact legal business name and address
- Contact email, phone, and social links
- Final service names and prices
- SimplyBook service IDs or confirmed service names
- Trainer photography
- Final privacy policy and Impressum text
- Contact-form provider choice
