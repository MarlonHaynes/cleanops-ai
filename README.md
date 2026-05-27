# Pristine Pro

## Cleaning Business Management Platform

A production-grade full stack SaaS application built for professional cleaning companies. It handles the entire business lifecycle from public marketing and online booking through to staff management, Stripe payments, and AI powered business intelligence. This is the kind of platform used by companies like Jobber, HouseCall Pro, and ZenMaid.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?style=flat-square&logo=stripe)](https://stripe.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com)

---

## Live Demo

**View the deployed application at https://cleanops-eta.vercel.app/**

No signup required. Use the credentials below to explore every role and every feature of the platform immediately.

---

## Demo Accounts

| Role | Email | Password | What You See |
|------|-------|----------|--------------|
| Admin | admin@cleanopsai.com | Admin123! | Full platform access including all data, analytics, AI, and payments |
| Manager | manager@cleanopsai.com | Manager123! | Operations dashboard with job and crew management |
| Customer | sarah@example.com | Customer123! | Customer portal showing real booking history, invoices, and pay buttons |

---

## Featured Product Screens

**1) Admin Dashboard**

![Admin Dashboard](doc/screenshots/dashboard.png)

Command center for operations with KPI cards, revenue tracking, AI-generated insights, recent jobs, and live activity in one view.

**2) Jobs and Scheduling**

![Jobs and Scheduling](doc/screenshots/jobs.png)

End-to-end job management with status workflow, crew assignment, service metadata, and operational actions from a single screen.

**3) Public Booking Wizard**

![Public Booking Wizard](doc/screenshots/book.png)

Three-step customer funnel that captures service selection, contact and location details, and request confirmation without requiring an account.

**4) Payments and Invoices**

![Payments and Invoices](doc/screenshots/payments.png)

Invoice lifecycle management with paid and unpaid views, Stripe checkout support, deposit options, and refund processing controls.

**5) Analytics Workspace**

![Analytics Workspace](doc/screenshots/analytics.png)

Multi-tab analytics experience covering revenue, service mix, geography, and crew performance with production-style charting.

**6) Quotes Pipeline**

![Quotes Pipeline](doc/screenshots/quotes.png)

Quote lifecycle workflow from creation to approval and conversion, reflecting how sales and operations connect in real service businesses.

---

## Get It Running Locally

No environment variables are required. The app runs fully in demo mode out of the box.

```bash
git clone https://github.com/MarlonHaynes/cleanops-ai
cd pristine-pro
npm install
npm run dev
```

Open http://localhost:3000 and the full application is live with realistic pre-seeded data.

---

## What This Project Is

This is not a tutorial project, a UI clone, or a CRUD app. It is a complete deployable SaaS product with a public marketing site, a booking funnel, a role-based admin system, Stripe payment flows, and an AI assistant that has access to live business data. Every feature was built to a production standard and every architectural choice was deliberate.

---

## Platform Surfaces

The application is split into four distinct surfaces that share a single codebase.

**Public Marketing Site**

A complete multi-page website that sells the cleaning service to potential customers. The homepage has a hero image, a service grid with real photos, a how-it-works section, a before and after results preview, and customer reviews. Each service has its own dedicated page with a full photo, description, and a checklist of what is included. The results page is an interactive gallery where visitors toggle between before and after photos by clicking on cards. The contact page has a submission form alongside a sidebar with business hours, phone number, and service area details.

**Public Booking Flow**

A three step wizard at /book that requires no account and serves as the main entry point for new customers. The first step shows visual service cards with real photos, pricing, and estimated duration. The second step collects contact information, address, city, preferred date, and any special notes. The third step shows a full summary and prompts the user to create an account after submitting. Every submission appears in the admin Booking Requests inbox as a new entry ready for review.

**Admin and Manager Dashboard**

The operational core of the platform. KPI cards show monthly revenue, total jobs, active customers, cancellation rate, completion rate, average job value, and repeat customer rate with month over month change indicators. A twelve month area chart shows actual revenue against target with seasonal patterns visible. An AI insights panel shows four expandable cards generated by GPT-4o-mini with access to live business data. An activity log shows a timestamped feed of every action across the business. A recent jobs table shows the latest bookings with customer name, service type, city, status badge, and price.

**Customer Portal**

Customers who register get a purpose-built portal rather than a stripped-down version of the admin view. The portal shows their full job history with status badges, payment status per invoice with a direct pay button, an outstanding invoice alert showing the total owed, and a one-click booking CTA. Accounts are pre-seeded with real booking history so the portal demonstrates genuine value the moment a customer logs in.

---

## Full Feature List

**Jobs and Bookings**

Complete job management with a full status pipeline from Pending through Confirmed, In Progress, Completed, Cancelled, and Rescheduled. Each job supports crew assignment, recurrence scheduling across weekly, biweekly, and monthly options, per-job Stripe payment initiation, and a detail modal with inline status updates.

**Booking Requests Inbox**

A dedicated inbox for requests from the public booking page. Admins mark requests as Reviewed and convert them to confirmed jobs in a single click. This two-step model reflects how real cleaning businesses operate rather than auto-creating a job before availability has been confirmed.

**Customer Management**

A searchable directory with VIP filtering, per-customer spend and job count statistics, full booking history in a detail modal, and a VIP toggle.

**Staff and Crews**

Individual staff profiles with ratings, jobs completed, revenue generated, and hire dates. A Crews tab groups members by team and shows aggregate performance metrics including combined revenue and average rating.

**Analytics**

Four tabs covering Revenue with a monthly trend chart and cancellation rate, Services with a distribution breakdown and progress bars, Locations with a horizontal bar chart by city and growth percentages, and Crews with a jobs and revenue comparison across teams.

**Payments**

Invoice management with paid and unpaid filtering. Each invoice supports paying the full amount or a 25% deposit through a Stripe checkout session. Admins process refunds directly from the page. A Stripe test mode notice shows the test card details inline.

**Quotes Pipeline**

A full quote lifecycle from creation through to job conversion. Admins create quotes, send them, mark them approved, and convert to booked jobs with a button at each stage. A pipeline summary shows total value by status.

**Reports**

One-click CSV export for jobs, customers, monthly revenue, and performance. Files download directly to the browser with timestamped filenames.

**Notifications**

Categorised notifications across info, success, warning, and error types. Unread count badges appear in the sidebar and topbar. Individual and bulk mark-as-read actions are available.

**AI Chat Assistant**

A floating chat widget on every admin page shown only to Admin and Manager roles. It sends a structured context payload to GPT-4o-mini on every message including current jobs, top customers by spend, crew performance, and key metrics. Five suggested prompts appear on open. When no API key is configured it falls back to smart responses that read real demo data from the store.

---

## Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 14 App Router | Full stack React with SSR, API routes, and route group layouts in a single project |
| Language | TypeScript strict | End to end type safety across client components, server routes, and shared data models |
| Styling | Tailwind CSS v3 | Custom design tokens, light mode palette, zero runtime CSS |
| Auth | NextAuth.js v4 | JWT sessions, credentials provider, and role callbacks with minimal configuration |
| Database | Prisma and PostgreSQL | Type safe ORM with a full production schema, optional through demo mode |
| State | Zustand | Lightweight client store for sidebar state, notifications, and booking requests |
| Charts | Recharts | Composable chart primitives that integrate cleanly with React |
| Payments | Stripe | Full checkout sessions, deposit support, refunds, and webhook signature verification |
| AI | OpenAI GPT-4o-mini | Low latency model used for contextual business Q and A and insight generation |
| Icons | Lucide React | Consistent tree-shakeable icon system |
| Fonts | Plus Jakarta Sans and Inter | Display and body pairing loaded through Google Fonts |

---

## Project Structure
