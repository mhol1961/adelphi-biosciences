# Service Pages Implementation Plan

## Design System & Architecture

### Visual Identity
Each service page will follow a consistent "premium scientific" aesthetic but with unique color themes to distinguish them.
- **Regulatory Strategy:** Teal/Mint (Growth, Strategy)
- **CMC & Quality:** Blue/Cyan (Science, Precision)
- **FDA Submissions:** Purple/Violet (Authority, Process)
- **Global Submissions:** Orange/Amber (Global, Reach)
- **Lifecycle Management:** Emerald/Green (Sustainability, Renewal)
- **Due Diligence:** Indigo/Slate (Trust, Analysis)

### Common Layout Structure
1.  **Immersive Hero Section:**
    -   Full-height or 80vh height.
    -   Abstract, high-quality background image (generated) with opaque gradient overlay.
    -   Animated entrance for Title and Value Proposition.
    -   "Scroll to Explore" indicator.
2.  **"The Challenge" / Introduction:**
    -   Brief section outlining the pain points (e.g., "Navigating the FDA is complex...").
    -   Typography-focused design.
3.  **Key Deliverables (Grid Layout):**
    -   Bento-box style or 3-column grid.
    -   Glassmorphism cards with icons.
    -   Detailed lists of what the client gets (e.g., TPP, Module 3).
4.  **Our Methodology (Visual Flow):**
    -   Step-by-step horizontal or vertical timeline.
    -   Animated connecting lines.
5.  **Strategic Advantage (Why Us):**
    -   Stats/Metrics (e.g., "100% Success Rate").
    -   Testimonial or Quote.
6.  **CTA Section:**
    -   Strong gradient background.
    -   "Ready to start?" prompt.

## Detailed Content & Assets per Page

### 1. Regulatory Strategy (`/services/regulatory-strategy`)
-   **Theme:** Teal (`var(--color-accent-teal)`)
-   **Hero Title:** "Strategic Vision. Regulatory Success."
-   **Hero Sub:** "Define your path to approval with data-driven regulatory intelligence."
-   **Key Deliverables:**
    -   Target Product Profile (TPP) Development
    -   Regulatory Roadmap & Pathway Selection
    -   Pre-IND / Pre-CTA Meeting Preparation
    -   Pediatric Study Plans (PSP/PIP)
    -   Orphan Drug Designations
-   **Image Prompt:** "Abstract 3D visualization of a strategic chess board merging with a DNA helix, teal and white, clean, medical style."

### 2. CMC & Quality Compliance (`/services/cmc-quality`)
-   **Theme:** Blue (`var(--color-primary-blue)`)
-   **Hero Title:** "Manufacturing Excellence. Compliance Assured."
-   **Hero Sub:** "Bridge the gap between technical operations and regulatory requirements."
-   **Key Deliverables:**
    -   Module 3 Authorship & Review
    -   GMP Compliance Audits
    -   21 CFR Part 11 Document Management (Electronic Records/Signatures)
    -   Stability Data Assessment
    -   Impurity Qualification Strategies
-   **Image Prompt:** "Abstract 3D visualization of a pharmaceutical clean room or molecular structure, crystalline, blue and white, precision, high tech."

### 3. FDA Submissions (`/services/fda-submissions`)
-   **Theme:** Purple
-   **Hero Title:** "Flawless Execution. First-Cycle Approval."
-   **Hero Sub:** "Expert management of IND, NDA, and BLA submissions."
-   **Key Deliverables:**
    -   Investigational New Drug (IND) Applications
    -   New Drug Applications (NDA) & Biologics License Applications (BLA)
    -   eCTD Publishing & Validation
    -   505(b)(2) Streamlined Pathways
    -   Fast Track & Breakthrough Therapy Requests
-   **Image Prompt:** "Abstract 3D visualization of digital documents or data streams flowing into a central shield, purple and white, secure, authoritative."

### 4. Global Submissions (`/services/global-submissions`)
-   **Theme:** Orange
-   **Hero Title:** "Global Reach. Local Expertise."
-   **Hero Sub:** "Navigate international regulatory landscapes with confidence."
-   **Key Deliverables:**
    -   EMA Marketing Authorization Applications (MAA)
    -   Health Canada NDS/SNDS
    -   PMDA (Japan) Consultations
    -   Rest of World (ROW) Strategy
    -   Multi-Regional Clinical Trial (MRCT) Alignment
-   **Image Prompt:** "Abstract 3D visualization of a globe with connecting data nodes, orange and white, network, connectivity."

### 5. Lifecycle Management (`/services/lifecycle-management`)
-   **Theme:** Emerald
-   **Hero Title:** "Sustained Compliance. Market Longevity."
-   **Hero Sub:** "Maximize your product's value throughout its entire commercial life."
-   **Key Deliverables:**
    -   Post-Market Variations & Amendments
    -   Annual Reports (PADER/PSUR)
    -   Labeling Updates & Negotiations
    -   Pharmacovigilance & Safety Reporting
    -   License Renewals
-   **Image Prompt:** "Abstract 3D visualization of an infinity loop or cycle, emerald green and white, continuous, organic."

### 6. Due Diligence (`/services/due-diligence`)
-   **Theme:** Indigo
-   **Hero Title:** "Risk Assessment. Value Confirmation."
-   **Hero Sub:** "Uncover regulatory risks and opportunities before you invest."
-   **Key Deliverables:**
    -   Regulatory Gap Analysis
    -   M&A Support & Asset Evaluation
    -   Portfolio Assessment
    -   Compliance History Review
    -   Risk Mitigation Strategies
-   **Image Prompt:** "Abstract 3D visualization of a magnifying glass or focal point analyzing data, indigo and white, analytical, sharp."

## Implementation Steps
1.  **Generate Images:** Create the 6 hero background images.
2.  **Create Layout Component:** Build a `ServicePageLayout` component to handle the common structure (Hero, Grid, CTA) to keep code DRY.
3.  **Build Pages:** Create the 6 individual page files using the layout and specific content.
4.  **Add Polish:** Implement `framer-motion` animations for entrance effects.
