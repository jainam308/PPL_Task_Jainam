# Production Architecture & Scaling Strategy

This document outlines the high-level production architecture for a scalable, high-availability vacation-rental marketplace (Airbnb Clone), accompanying the architecture diagram [`HLD_architecture.png`](./HLD_architecture.png).

---

## 1. High-Level Architecture Overview

```
                      +----------------------------------+
                      |         CDN / Edge Layer         |
                      |  (Cloudflare / AWS CloudFront)   |
                      +----------------------------------+
                                       |
                                       v
                      +----------------------------------+
                      |    API Gateway & Load Balancer   |
                      |        (Kong / NGINX / ALB)      |
                      +----------------------------------+
                                       |
          +----------------------------+----------------------------+
          |                            |                            |
          v                            v                            v
+-------------------+        +-------------------+        +-------------------+
|  Listing Service  |        |  Booking Service  |        |   Search Service  |
|  (Node.js / Go)   |        |  (Node.js / Java) |        |    (Elastic/ES)   |
+-------------------+        +-------------------+        +-------------------+
          |                            |                            |
          v                            v                            v
+-------------------+        +-------------------+        +-------------------+
| Read Replica DB   |        | PostgreSQL (ACID) |        | Search Index DB   |
|  (Redis Cache)    |        | (Primary DB Cluster)|      | (Elasticsearch)   |
+-------------------+        +-------------------+        +-------------------+
```

---

## 2. Component Breakdown & Scaling Strategies

### A. Frontend Layer
- **Framework**: React / Next.js with Server-Side Rendering (SSR) or Static Site Generation (SSG) for static listing pages to maximize SEO and Core Web Vitals performance.
- **Asset Delivery**: Static media (images, icons, bundles) served via Global Edge CDN (AWS CloudFront / Cloudflare) with image optimization pipeline (Next.js Image / Cloudinary) to convert raw JPEGs into Next-gen WebP/AVIF formats dynamically.
- **Client State & Caching**: TanStack Query (React Query) for API response caching, optimistic UI updates, and intelligent background refetching.

### B. API Gateway & Microservices
- **API Gateway**: Handles rate limiting, authentication, SSL termination, and request routing across microservices.
- **Listing Service**: Manages property details, room configurations, and host information. Highly read-heavy; backed by distributed Redis cache clusters (cache-aside pattern).
- **Booking & Reservation Service**: Manages availability calendars, booking holds, and transactions. Operates with strict ACID guarantees to prevent double bookings.
- **User & Review Service**: Handles guest reviews, star ratings, and host profiles.

### C. Search & Spatial Querying
- **Search Engine**: Elasticsearch / OpenSearch cluster with geo-distance and geo-bounding-box spatial indexing to allow instant map-based property filtering by latitude/longitude, availability dates, guest count, and price range.
- **Data Synchronization**: Change Data Capture (CDC) via Debezium and Apache Kafka streaming database mutations from PostgreSQL into Elasticsearch in real time.

### D. Storage & Database Tier
- **Primary Relational DB**: PostgreSQL cluster with primary-replica architecture for write safety and horizontal read scaling.
- **Media Object Storage**: AWS S3 / Cloudflare R2 for storing high-resolution property photos, tour images, and host avatars, distributed globally via CDN.
- **Caching Tier**: Redis Enterprise Cluster for caching listing metadata, calendar availability, and session tokens.

### E. Infrastructure & Deployment
- **Container Orchestration**: Kubernetes (EKS / GKE) with Horizontal Pod Autoscaling (HPA) triggered by CPU/Memory spikes and request throughput.
- **CI/CD Pipeline**: GitHub Actions running automated linting (`oxlint`), type checking, unit tests (`Vitest`), end-to-end tests (`Playwright`), and zero-downtime blue/green deployments.

---

## 3. Architecture Diagram Reference

The conceptual diagram [`HLD_architecture.png`](./HLD_architecture.png) located in the repository root provides a visual map of these system boundaries and data flow paths.
