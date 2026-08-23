# PROMPTS.md — AI Prompt Log & Development Sequence

## Pre-Phase: Coding Standards, Architectural Guidelines & Project Setup

### Coding Standards & Naming Conventions Prompt

> You are acting as a Lead Frontend Engineer and Architect. Before beginning any implementation on the Airbnb Clone application, establish strict engineering guidelines:
> 1. **Component Naming & Structure**: Use PascalCase for React component files (`ListingNav.jsx`, `PhotoTour.jsx`, `BookingCard.jsx`). Group components logically by feature directory under `src/components/<domain>/`.
> 2. **Scoped CSS Modules**: Every component must have an accompanying CSS Module (`<ComponentName>.module.css`). Use camelCase for CSS class names or kebab-case where standard. Do NOT use inline styles unless computing dynamic position values.
> 3. **Design System Tokens**: Define centralized CSS variables in `src/styles/variables.css` for primary colors (`#FF385C`), text colors (`#222222`, `#717171`), border colors (`#DDDDDD`), font families, shadows, and z-index layers.
> 4. **State Management & Props**: Keep transient UI state within component hooks. Validate component props using `prop-types`. Preserve strict un-mutated data flow from static JSON mock data files (`listing.json`, `amenities.json`, `reviews.json`, `host.json`).
> 5. **Accessibility & Semantics**: Use native HTML5 landmark elements (`<header>`, `<main>`, `<aside>`, `<section>`, `<footer>`), `role="dialog"`, `aria-modal="true"`, and clear `aria-label` descriptors for interactive icons.

---

## Phase 0: Planning & Setup

### Initial Project Planning Prompt

> You are acting as a senior frontend architect and AI pair programmer.
>
> Read the assignment PDF carefully and treat it as the source of truth for this project.
>
> The goal is to create a pixel-perfect clone of the Airbnb listing page described in the assignment. We will use React + TypeScript + Vite for the frontend. We are intentionally NOT implementing the backend in the first phase.
>
> Before writing any application code, perform the following tasks:
>
> 1. Analyze the assignment.
> 2. Break the project into logical development phases.
> 3. Create a PLAN.md file containing: Project overview, Scope, Deliverables, Tech stack, Folder structure, Component hierarchy, Development phases, Milestones, Risks, Final QA checklist.
> 4. Create a PROMPTS.md file with documentation format.
> 5. Create a .env.example file.
> 6. Suggest a clean folder structure for a production-quality React project.
> 7. Suggest any libraries that will help achieve a pixel-perfect implementation.
>
> Do NOT start implementing components yet. If any requirement is ambiguous, ask clarifying questions first.

---

### Assignment Content Provided

> the content of pdf [... full assignment text pasted ...]

---

### Tech Stack Confirmation

> we will go with React as frontend

---

### Switch to JavaScript & Proceed

> in plan.md you have mentioned typescript instead of that do react and proceed with the plan

---

## Phase 1 - 6: Implementation & Architecture

### Reference Page Screenshots Provided & Full Component Build

> [Attached 5 screenshots of the Airbnb listing page: Header, Hero photo grid, Listing title, Property details, Guest favorite badge, Host info, Highlights, Description, Sleeping arrangements, Amenities, Booking widget, Calendar]

---

## Phase 7: Reference Alignment & Maintenance

### Reference Site Analysis & PATH Environment Clarification

> analyze the https://airbnb-clone-umber-two.vercel.app/# and make the changes and not change the env path why you need to change that?

---

## Phase 8: Hero Grid & Header Visual Alignment

### Starting Page Layout & Authentic Image Extraction

> the starting page should look like this
> there needs to be some changes make it

---

## Phase 9: Video Walkthrough Alignment (`original_website_visit.mp4`)

### Complete Section-by-Section Refinement

> @[original_website_visit.mp4] view this video as this is showing the original website and try to make out website like this

---

## Phase 10: Sticky Navbar Behavior & 3-Column Guest Favourite Card

### Navbar Hiding & Guest Favourite Badge Layout

> make the photo section like this view it properly and make identical to it and when the navbar for the Photos Amenities Reviews Location comes the old navbar of airbnb should go away

---

## Phase 11: Side-by-Side Dual Month Calendar (`CalendarSection.jsx`)

### Calendar Layout & Range Selection Refinement

> this calendar should be is side by side and

---

## Phase 12: Sticky Booking Sidebar & 7-Column Reviews Breakdown

### Booking Widget Stickiness & Review Ratings Grid

> this box on the right side should remain steady for photo and amenities part, and also make the revies saction proper

---

## Phase 13: Reviews Section Layout Alignment & No-Op Action

### Review Section Refinement & Button Interaction

> this is the review section I want and if the user press the Show all reviews button nothing should be done

---

## Phase 14: Review Cards Avatar & Star Row Alignment Fixes

### Layout Bug Resolution & CSS Flex Refinement

> this is the photo of our website you have not made it properly

---

## Phase 15: Host Section 2-Column Redesign & Footer Removal

### Host Card Modernization & Footer Cleanup

> 1. make changes in the "meet your host" part like this
> 2. remove this part at the end of the website it is not needed

---

## Phase 16: Stays Nearby Carousel & Custom Images

### Non-Duplicated Stays Carousel & Image Assets

> 1. when the right arrow is clicked only 3 other images are needed not all
> 2. generate the images which are in the screenshot and keep it inside or if not possible make some other photos

---

## Phase 17: Reviews Breakdown Grid & Specific Cards Alignment

### Review Section Breakdown Header & Card Details

> Make the review page like this

---

## Phase 18: Things to Know Icon Alignment & Line-Art SVG Refinement

### Icon Consistency & Typography Fixes

> make changes in Thing to know as the icon is differing and font

---

## Phase 19: Interactive Control Disabling (No-Op Handlers)

### Suppressing Unintended Interactive Triggers

> when user click on the arrow of the calender or the Guests no activity should happen and also when resever is press nothing should happen

---

## Phase 20: Header Navigation Bar Circular Button Redesign

### Navbar Right Side & Search Bar Alignment

> on the navbar remove the grey circle type of thing and make like this

---

## Phase 21: Bottom Toast Popup Notifications & Wishlist Toggle

### Toast Component Creation & Share/Save Handlers

> when the share is clicked the pop up notification should be come in bottom as displayed in screenshot and when save is click it should show "Saved to wishlist" and the heart gets pink and when again clicks should show "Removed from wishlist"
> and when the reserve from the navbar is clicked it should pop up: "you won't be charge yet"

---

## Phase 22: Direct Photo Gallery Categorized Navigation

### Deep Linking Start Page Photos to PhotoTour Categories

> and on the start page if the user clicks on the photo it should show the interface which is shown when clicks on show all photos and should be pointed to the particular photo

---

## Phase 23: Comprehensive Categorized Amenities Modal

### 12-Category Amenities Breakdown & Washing Machine Update

> when the user click on the show all 50 amenities it should display What this place offers [... 12 categories listed ...]
> no need to cancel washing machine in it

---

## Phase 24: Final Project Inspection & Baseline Verification

### Baseline Inspection & Code Quality Audit

> Inspect the entire project codebase. Verify `package.json`, `src/`, component hierarchy, static data JSON files, assets, styles, `oxlint` status, and `vite build` compilation. Establish the running working application as the strict baseline. Ensure no existing output, styling, or functionality is replaced or redesigned.

---

## Phase 25: Code Quality & Lint Warning Cleanup

### Non-Breaking Lint Optimization

> Run `npm run lint` (`oxlint`) to inspect code warnings across all components. Fix minor unused variable and unused import warnings in `HostInfo.jsx`, `Amenities.jsx`, and `BookingCard.jsx` while leaving component props, state logic, and CSS Modules completely intact. Re-verify `oxlint` returns 0 warnings and 0 errors.

---

## Phase 26: Accessibility & Interaction Audit

### WCAG 2.1 & Keyboard Shortcut Verification

> Perform an accessibility audit across all 3 views (Listing Page, Photo Tour, Lightbox):
> 1. Check keyboard navigation: `ArrowLeft` / `ArrowRight` image switching in Lightbox, `Escape` key overlay closing, and `tabIndex={0}` focusability.
> 2. Check ARIA attributes: `role="dialog"`, `aria-modal="true"`, and button `aria-label` tags.
> 3. Verify body scroll locking (`document.body.style.overflow = 'hidden'`) during modal activation.

---

## Phase 27: AI Sub-Agent Configuration & Skills Setup

### Agent Role & Config Setup

> Configure dedicated AI sub-agent profiles in `.ai/agents/` specifically for this Airbnb Clone codebase:
> - `ui_reviewer.md`: Visual fidelity, layout spacing, CSS grid/flex structures, Framer Motion animations.
> - `accessibility_reviewer.md`: ARIA dialog compliance, keyboard traps, focus management, image alt text.
> - `requirements_reviewer.md`: Specification verification across Listing Page, Photo Tour, Lightbox, build health, and zero-regression checks.

---

## Phase 28: Production Architecture Blueprint

### High-Level System Architecture Writeup

> Inspect `HLD_architecture.png` and create `ARCHITECTURE.md` providing a production-scale vacation-rental marketplace scaling strategy covering CDN edge caching, API Gateway, microservices architecture, Elasticsearch spatial indexing, PostgreSQL primary-replica database tier, Redis caching clusters, and Kubernetes autoscale strategies.

---

## Phase 29: Documentation & README Synchronization

### Submission README Update

> Update `README.md` to document the exact project overview, desktop views (Listing Page, Photo Tour, Lightbox), tech stack, folder structure, installation/run commands, AI-assisted development workflow, accessibility features, architecture reference, and final PASS/FAIL verification matrix.

---

## Phase 30: Final QA & Build Verification

### Final Build & Git Verification

> Run `npm run lint` (`oxlint`) and `npm run build` (`vite build`) to confirm 100% clean compilation. Check `git status` and `git log --oneline` to ensure all commits correspond to real, feature-oriented work performed during the development workflow.
