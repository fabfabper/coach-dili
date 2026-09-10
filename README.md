# Coach Dili

Premium personal training website for Zurich, built with Next.js, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The root route redirects to German at `/de`; English is available at `/en`.

## Configuration

Set these values in `.env.local` or Vercel project settings:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL, used for metadata, sitemap and robots.
- `NEXT_PUBLIC_SIMPLYBOOK_URL`: public SimplyBook.me URL. Booking remains external; no credentials belong here.
- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`: optional hosted/serverless form endpoint. Leave empty until a provider is selected.

Update business copy, services, prices and translations in `src/lib/content.ts`. Replace the temporary Unsplash image URLs in the page files with supplied trainer photography before launch.

## Architecture

The Next.js app is stateless. SimplyBook.me owns services, availability, appointments, customer information, reminders, cancellations and payments. The website only presents services and links customers into the external booking flow.

There is intentionally no database, customer account system, admin dashboard, custom calendar logic, or private SimplyBook API integration.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs the same checks for pull requests and pushes to `main`. To deploy with Vercel:

1. Import this repository in the Vercel dashboard.
2. Keep the detected framework as Next.js, with `npm run build` as the build command and the repository root as the project root.
3. Add the configuration values above under Project Settings > Environment Variables for Preview and Production as appropriate.
4. Set the production branch to `main`.

Vercel will create preview deployments for pull requests and deploy production after changes land on `main`. GitHub Actions remains the verification gate; it does not need Vercel credentials or a separate deployment job.

## Before launch

- Replace placeholder legal content with reviewed Swiss privacy and Impressum text.
- Confirm prices, service IDs/names, booking language settings and preselection behavior in SimplyBook.me.
- Add final trainer photography, business address, phone, social links and contact provider.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
