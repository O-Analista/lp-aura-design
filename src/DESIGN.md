---
name: Aura Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c3ceea'
  on-tertiary: '#263046'
  tertiary-container: '#a8b3ce'
  on-tertiary-container: '#3a455c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#bbc6e2'
  on-tertiary-fixed: '#101b30'
  on-tertiary-fixed-variant: '#3c475d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  gold-leaf: '#D4AF37'
  obsidian: '#0A0A0A'
  ink: '#111111'
  silk-white: '#F4F4F4'
  muted-gold: rgba(212, 175, 55, 0.4)
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  margin-safe: 5vw
  gutter: 24px
  stack-xl: 120px
  stack-md: 64px
  stack-sm: 32px
---

## Brand & Style
The brand personality is rooted in "Quiet Luxury"—a philosophy where quality speaks softly but with absolute authority. Designed for a high-end interior design clientele, the UI evokes the atmosphere of a private art gallery or a boutique hotel lobby at twilight. 

The aesthetic follows a **Minimalist** approach with subtle **Glassmorphism** to provide depth. It prioritizes vast negative space, allowing high-resolution photography of architectural spaces to serve as the primary visual anchor. Every interaction is intentional, slow-paced, and refined, moving away from the frantic nature of consumer web apps toward a curated, editorial experience.

## Colors
The palette is a study in shadow and light. The foundation is built on **Obsidian** and **Ink**, creating a near-black environment that allows content to recede or emerge. **Gold Leaf** is used sparingly as a high-contrast accent for interactive elements, highlights, and subtle borders, signifying value and craftsmanship.

Unlike traditional dark modes that use grays, this design system utilizes **Midnight Blue (#00081C)** as a deep secondary layer to add "chromatic depth" to shadows, preventing the UI from feeling flat. Text is never pure white; **Silk White** is used to reduce eye strain and maintain a softer, more sophisticated contrast ratio.

## Typography
The typographic hierarchy relies on the tension between a high-contrast Serif and a functional Sans-serif. **Playfair Display** provides an editorial, fashion-forward feel for headings, often used in Italic styles for emphasis to mimic architectural sketches.

**Inter** is utilized for all functional and body text. It is set with lighter weights (300) and generous line heights (1.8) to ensure the text feels airy and legible against the dark background. A specific **Label-caps** role is used for navigation and small headers, providing a structured, architectural rhythm to the layout.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered within a wide container to mimic a physical portfolio or book. We utilize a 12-column grid with exceptionally wide margins (5vw) to create a "frame" around the content.

Spacing is aggressive; "luxury" in this system is defined by the amount of unused space. Vertical stacks of 120px or more are used to separate major sections, forcing the user to slow down and appreciate one project or image at a time. On mobile, the grid collapses to 4 columns with a 24px margin, maintaining the centered, elegant alignment.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** rather than traditional drop shadows. Surfaces are differentiated by shifting from #0A0A0A to #111111. 

To evoke the feeling of a boutique environment:
- **Overlays:** Use semi-transparent dark blurs (Backdrop Filter) to create a "frosted obsidian" effect for navigation menus.
- **Outlines:** Instead of shadows, use 1px "Gold Leaf" or low-opacity white outlines to define the edges of cards and buttons.
- **Shadows:** When necessary for extreme hierarchy (e.g., modals), use a very large, 60px blur shadow with 80% opacity, tinted with the Midnight Blue (#00081C) to maintain the dark atmosphere.

## Shapes
In alignment with architectural precision, this design system uses **Sharp (0px)** corners for all primary UI elements. Rectilinear shapes communicate stability, professionalism, and structural integrity. 

Circles are permitted only for very specific icon containers or small interactive toggles to provide a soft contrast to the otherwise rigid, grid-based structure.

## Components
- **Buttons:** Primary buttons are ghost-style with a 1px Gold Leaf border and Silk White text. Hover states involve a subtle Gold Leaf glow or a solid gold fill with Ink text.
- **Cards:** No background color by default. Content is separated by generous spacing and 1px horizontal dividers in a muted gold or dark gray.
- **Input Fields:** Minimalist single-line inputs. No bounding box; only a bottom border that illuminates in gold when focused. Labels use the `label-caps` typography style.
- **Navigation:** A persistent but minimal top bar. Upon scrolling, it transitions to a semi-transparent obsidian glass blur. 
- **Imagery:** All images should feature a subtle "inner glow" or vignette to ensure they blend seamlessly into the dark background.
- **Project Lists:** Displayed as large-format editorial rows with high-contrast serif numbers (e.g., 01, 02) to emphasize the curated nature of the studio's portfolio.