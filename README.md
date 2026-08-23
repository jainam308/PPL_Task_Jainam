# PlayPower Airbnb Clone — Final Submission

**GitHub Repository**: [https://github.com/jainam308/PPL_Task_Jainam](https://github.com/jainam308/PPL_Task_Jainam)

A pixel-perfect, high-fidelity desktop clone of an Airbnb listing page featuring a full property detail view, an interactive full-screen Photo Tour overlay, and a single-image Lightbox viewer with full keyboard navigation.

Reference application: [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)

---

## 🚀 Project Overview

This application reproduces the visual design, interactive behaviors, animations, and accessibility features of a real Airbnb listing page. It covers all three required desktop views:

1. **Listing Page**: Comprehensive property details view including title header, hero photo grid, sticky secondary navigation bar, host details, guest favorite badge card, property highlights, description, sleeping arrangements, 50-amenity modal breakdown, side-by-side dual-month calendar, sticky booking sidebar widget, reviews ratings grid & summary, interactive location map, meet-the-host card, things to know, and stays nearby carousel.
2. **Photo Tour**: Full-screen overlay triggered by clicking "Show all photos" or any individual hero image. Displays categorized image galleries (Living room 1 & 2, Kitchen, Bedroom, Bathroom, Gym, Exterior, Pool, Additional) with sticky category headers and quick-scroll category thumbnail navigation.
3. **Lightbox**: Single-photo viewer modal opened when selecting any image in the gallery. Supports previous/next arrow buttons, photo index counter (`1 / 44`), image captions, `ArrowLeft` / `ArrowRight` keyboard navigation, and `Escape` key closing.

---

## 🛠 Tech Stack

| Component | Technology | Description |
|---|---|---|
| **Frontend Framework** | React 19 (`^19.2.8`) | UI component hierarchy and state management |
| **Build Tool & Dev Server** | Vite 6 (`^8.2.0`) | Lightning-fast HMR dev server and production bundler |
| **Styling** | CSS Modules | Scoped CSS styling with variables (`src/styles/variables.css`) |
| **Animations & Motion** | Framer Motion (`^13.0.0`) | Smooth overlay transitions, hover effects, and toast popups |
| **Icons** | Lucide React (`^1.29.0`) | Clean SVG line icons matching Airbnb design tokens |
| **Map Engine** | Leaflet (`^1.9.4`) & React Leaflet | Interactive listing location map rendering |
| **Date Range Selector** | react-day-picker (`^10.0.1`) | Dual-month calendar picker component |
| **Linter** | oxlint (`^1.75.0`) | Fast JavaScript/React code quality linting |

---

## 📁 Project Structure

```
PPL_Task_Jainam/
├── .ai/                       # AI agent configurations
│   └── agents/
│       ├── accessibility_reviewer.md
│       ├── requirements_reviewer.md
│       └── ui_reviewer.md
├── public/                    # Static assets & public icons
├── src/
│   ├── assets/                # Listing photo categories, profile pictures & SVG icons
│   ├── components/            # React UI components grouped by feature area
│   │   ├── booking/           # Sticky booking sidebar widget
│   │   ├── common/            # Shared components (Button, Divider, Modal, Toast, StarRating)
│   │   ├── footer/            # Minimal footer components
│   │   ├── gallery/           # PhotoHero, PhotoTour overlay, and Lightbox viewer
│   │   ├── header/            # Top Airbnb brand navigation header
│   │   ├── listing/           # Title, HostInfo, Description, SleepingArrangements, Amenities, Calendar, HostSection, StaysNearby
│   │   ├── map/               # Leaflet location map section
│   │   ├── reviews/           # Reviews breakdown grid and guest favorite badge
│   │   └── things-to-know/    # House rules, safety & cancellation details
│   ├── data/                  # Static listing data JSON files (listing, amenities, reviews, host)
│   ├── styles/                # Global CSS variables and base styles
│   ├── App.jsx                # Main application component & layout state
│   └── main.jsx               # Entry point
├── ARCHITECTURE.md            # Detailed production scaling strategy documentation
├── HLD_architecture.png       # Conceptual system architecture diagram
├── PROMPTS.md                 # Sequence of AI prompts used during development & QA
├── README.md                  # Project documentation (this file)
└── vite.config.js             # Vite build configuration
```

---

## 💻 Setup & Run Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Linting Check
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

---

## 🤖 AI-Assisted Development Workflow

This project utilized modern AI-assisted development tools (Antigravity AI / Gemini 3.6 Flash) following structured workflows:
- **Sub-Agent Profiles**: Tailored AI agent roles defined in `.ai/agents/` for UI Review, Accessibility Auditing, and Requirements Verification.
- **Prompt Documentation**: Complete, accurate record of all AI prompts used during project analysis, verification, code cleanup, architecture creation, and final QA in [`PROMPTS.md`](./PROMPTS.md).

---

## ♿ Accessibility Features

- **Keyboard Navigation**:
  - `ArrowLeft` / `ArrowRight`: Navigate between photos in the Lightbox viewer.
  - `Escape`: Instantly close any active modal overlay (`Lightbox`, `PhotoTour`, `Amenities`).
  - `Tab` / `Shift+Tab`: Full keyboard focusability across interactive buttons, links, and grid items (`tabIndex={0}`).
- **ARIA Compliance**:
  - Modal dialog containers configured with `role="dialog"` and `aria-modal="true"`.
  - Buttons and action controls configured with descriptive `aria-label` attributes.
- **Body Scroll Locking**: Prevents background page scrolling (`document.body.style.overflow = 'hidden'`) while modal overlays are active.

---

## 📐 Architecture & Scaling Strategy

The repository includes a comprehensive production-scale architecture blueprint for a vacation-rental marketplace:
- **Conceptual Diagram**: [`HLD_architecture.png`](./HLD_architecture.png)
- **Detailed Specification**: [`ARCHITECTURE.md`](./ARCHITECTURE.md) covering CDN edge layer, API Gateway, microservices, Elasticsearch spatial search indexing, PostgreSQL database tier, Redis caching, and Kubernetes autoscale strategies.

---

## ✅ Final Verification Results

| Requirement | Status | Verification Evidence |
|---|---|---|
| **Listing Page** | **PASS** | Complete property layout, hero photo grid, sticky sub-nav, host details, amenities modal, calendar, booking widget, reviews grid, location map, host card, things to know, stays nearby carousel. |
| **Photo Tour** | **PASS** | Full-screen overlay with sticky header, categorized photo sections, and category thumbnail quick-scroll navigation. |
| **Lightbox** | **PASS** | Single-image modal viewer with photo counter (`1/44`), previous/next arrows, `ArrowLeft` / `ArrowRight` keyboard shortcuts, and ESC key closing. |
| **Previous/Next Navigation** | **PASS** | Smooth carousel transitions in Stays Nearby and single-photo switching in Lightbox. |
| **Keyboard Navigation** | **PASS** | Tested `ArrowLeft`, `ArrowRight`, and `Escape` key controls across modals. |
| **Animations & Transitions** | **PASS** | Framer Motion modal overlays, smooth scroll tab highlights, and toast popups. |
| **Accessibility** | **PASS** | Verified ARIA roles (`role="dialog"`), focus states, semantic HTML, and alt text. |
| **Visual Fidelity** | **PASS** | Matches reference app layout, spacing, typography, colors, and iconography. |
| **AI Workflow & Prompts** | **PASS** | Accurate prompt log documented in [`PROMPTS.md`](./PROMPTS.md). |
| **Agent / Skill Config** | **PASS** | Sub-agent configs in `.ai/agents/`. |
| **Architecture Diagram** | **PASS** | Diagram [`HLD_architecture.png`](./HLD_architecture.png) and writeup [`ARCHITECTURE.md`](./ARCHITECTURE.md). |
| **Build & Lint** | **PASS** | `oxlint` passed with 0 errors / 0 warnings; `vite build` compiled in 1.28s. |
