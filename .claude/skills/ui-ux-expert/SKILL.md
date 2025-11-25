---
name: ui-ux-expert
description: Expert UI/UX design guidance for premium pharmaceutical, biotech, and B2B consulting websites. Provides design patterns, color theory, typography hierarchy, conversion optimization, and industry-specific best practices.
---

# UI/UX Expert Skill for Pharmaceutical & Biotech Websites

## Core Design Philosophy

When designing for pharmaceutical, biotech, and regulatory consulting websites, embody these principles:

1. **Trust & Credibility First** - Every design decision must reinforce expertise and reliability
2. **Human-Centric Approach** - Balance scientific authority with approachable, human elements
3. **Conversion-Focused** - Guide users toward consultation/contact with strategic CTAs
4. **Premium Aesthetic** - Clean, sophisticated design that reflects the gravity of FDA/regulatory work

---

## Color Palette Guidelines

### Primary Colors for Pharma/Biotech
- **Deep Navy** (#0F2744 to #1A3A5C) - Authority, trust, professionalism
- **Teal/Cyan** (#0EA5E9 to #38BDF8) - Innovation, science, clarity
- **Steel Blue** (#2563EB) - Reliability, competence

### Accent Colors
- **Gold/Amber** (#F59E0B) - Excellence, achievement, FDA approval badges
- **Emerald Green** (#10B981) - Success, approval, positive outcomes

### Supporting Neutrals
- **Charcoal** (#1E293B) - Primary text
- **Slate** (#475569) - Secondary text
- **Cloud** (#F8FAFC) - Light backgrounds

### Color Psychology for Pharma
- Blue tones dominate because they convey trust, stability, and scientific credibility
- Avoid bright reds (associated with danger/warnings in medical context)
- Use gold sparingly for premium accents and achievements
- Green for success indicators and approval states

---

## Typography Hierarchy

### Display Font (Headlines)
- Use geometric sans-serif like Plus Jakarta Sans, Inter, or Outfit
- Headlines: 800 weight (Extra Bold)
- Tight letter-spacing (-0.02em to -0.03em)
- Leading: 1.1 to 1.2

### Body Font
- Clean sans-serif: Inter, Source Sans Pro, or system fonts
- Regular weight (400) for body, Medium (500) for emphasis
- Line height: 1.6 to 1.75 for readability
- Font size: 16-18px base

### Size Scale (Desktop)
```
Hero H1: 56-72px (clamp(2.5rem, 5vw, 4.5rem))
Section H2: 40-48px
Card H3: 24-32px
Body: 16-18px
Small/Caption: 14px
```

---

## Hero Section Best Practices

### Structure
1. **Badge/Eyebrow** - Small indicator above headline (e.g., "FDA Regulatory Expertise")
2. **Primary Headline** - Clear value proposition, max 8-10 words
3. **Subheadline** - 1-2 sentences expanding on the value
4. **Social Proof** - Achievement badges, credentials, client logos
5. **Dual CTAs** - Primary (high contrast) + Secondary (outline/ghost)
6. **Visual Element** - Stats card, image with overlay, or video background

### Hero Layout Patterns
- **Split Layout**: Content left, visual element right (60/40 or 50/50)
- **Full-Width Overlay**: Background image with gradient overlay and centered content
- **Asymmetric**: Content offset with floating cards/elements

### Hero Image Guidelines
- Real photography over stock when possible
- Show professionals, labs, or abstract scientific imagery
- Always use gradient overlays for text readability
- Minimum overlay opacity: 70% on text areas

---

## Card Design Patterns

### Premium Card Anatomy
```css
- Border radius: 16-24px (rounded-2xl to rounded-3xl)
- Padding: 24-32px
- Shadow: Multi-layer subtle shadows
- Border: 1px subtle (rgba color at 5-10% opacity)
- Hover: Lift effect (-4px translateY) + enhanced shadow
```

### Card Variations
1. **Service Cards** - Icon + Title + Description + Features tags + CTA
2. **Testimonial Cards** - Quote icon + Text + Author + Company
3. **Stat Cards** - Large number + Label + Optional icon
4. **Credential Cards** - Icon + Title + Description + Highlight text

---

## Conversion Optimization

### CTA Best Practices
- Primary CTA: High contrast, 4 words max ("Schedule Free Consultation")
- Button padding: 16px 32px minimum
- Border radius: 8-12px
- Hover states: Color shift + slight lift + shadow enhancement
- Include arrow icon for directional CTAs

### Trust Signals to Include
1. **Credentials** - FDA approval mentions, patents, years of experience
2. **Social Proof** - Client types, testimonials, case studies
3. **Response Time** - "We respond within 24 hours"
4. **Free Consultation** - Lower barrier to entry
5. **Success Metrics** - "100% submission success rate"

### Strategic CTA Placement
- Hero section (primary)
- After each major content section
- Floating/sticky on scroll
- Footer pre-CTA banner

---

## Section Design Templates

### Credibility Section
- Grid of credential cards (2x2 or 4-column)
- Icons representing each achievement
- Subtle hover animations
- Client type badges at bottom

### Services Section
- 2x2 or 3-column grid
- Gradient accent bars on hover
- Feature tags within cards
- Consistent icon style (outline or filled)

### Testimonials Section
- 3-column grid or carousel
- Quote icons with gradient background
- Star ratings in gold
- Author title + company
- Stats bar below

### CTA Section
- Full-width with background image
- Gradient overlay
- Two-column layout (content + contact card)
- Checklist of benefits

---

## Animation Guidelines

### Entrance Animations
- Fade in + slight Y translation (20-30px)
- Stagger children by 0.1s
- Duration: 0.4-0.6s
- Easing: ease-out or custom bezier

### Hover Animations
- Scale: 1.02-1.05 for cards
- Translate Y: -2px to -4px for lift effect
- Shadow enhancement
- Color transitions: 0.3s

### Scroll Animations
- Use `whileInView` with `viewport={{ once: true }}`
- Threshold: 0.1-0.2
- Avoid excessive animation - subtle is premium

---

## Mobile Considerations

### Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Mobile-Specific Adjustments
- Stack columns vertically
- Reduce padding (section padding: 60-80px vs 100-128px desktop)
- Larger touch targets (min 44px)
- Simplified navigation (hamburger menu)
- Single CTA button (not dual)

---

## Common Mistakes to Avoid

1. **Generic stock photos** - Use industry-specific, high-quality imagery
2. **Too many colors** - Stick to 2-3 primary colors + neutrals
3. **Weak typography hierarchy** - Headlines should be dramatically larger
4. **Cluttered layouts** - Generous whitespace is premium
5. **Missing trust signals** - Every page needs credibility elements
6. **Vague CTAs** - Be specific: "Schedule Consultation" not "Learn More"
7. **Inconsistent spacing** - Use 8px grid system
8. **No hover states** - Interactive elements need feedback
9. **Poor contrast** - Ensure WCAG AA compliance
10. **Missing mobile optimization** - Test on real devices

---

## Implementation Checklist

### Before Launch
- [ ] Hero clearly communicates value proposition
- [ ] All CTAs are visible and compelling
- [ ] Trust signals appear above the fold
- [ ] Typography hierarchy is clear
- [ ] Colors are consistent throughout
- [ ] Mobile experience is polished
- [ ] Page load time under 3 seconds
- [ ] All images are optimized
- [ ] Hover states work on all interactive elements
- [ ] Contact information is easily accessible
