---
name: Glacier Neo-Brutalism Light
colors:
  surface: '#F2F2F2'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#444933'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#757a60'
  outline-variant: '#c5c9ac'
  surface-tint: '#526600'
  primary: '#526600'
  on-primary: '#ffffff'
  primary-container: '#d1ff00'
  on-primary-container: '#5d7300'
  inverse-primary: '#aed500'
  secondary: '#006970'
  on-secondary: '#ffffff'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#8319e6'
  on-tertiary: '#ffffff'
  tertiary-container: '#f7e9ff'
  on-tertiary-container: '#9131f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7f300'
  primary-fixed-dim: '#aed500'
  on-primary-fixed: '#171e00'
  on-primary-fixed-variant: '#3d4d00'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#eedbff'
  tertiary-fixed-dim: '#dab9ff'
  on-tertiary-fixed: '#2a0053'
  on-tertiary-fixed-variant: '#6500b8'
  background: '#FFFFFF'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
  border-dark: '#000000'
  vibrant-orange: '#FFAA40'
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system implements a refined **Neo-Brutalism** aesthetic, adapted for a professional and modern light-mode environment. It moves away from the chaotic density often associated with brutalism, favoring high-clarity layouts, generous whitespace, and purposeful raw elements. 

The brand personality is confident, architectural, and precise. It targets a tech-forward audience that values bold structural integrity and functional honesty. The visual language relies on thick, hard-edged borders, vibrant "digital-native" accents (Lime and Cyan), and a rigid grid system to create a sense of digital craftsmanship. The emotional response should be one of reliability mixed with creative energy.

## Colors

The color palette is built on a high-contrast foundation. The primary background is a pure, clean white (`#FFFFFF`), providing a stark canvas for the structural elements.

- **Primary (Lime Green):** Used for primary actions, success states, and high-impact highlights.
- **Secondary (Cyan):** Used for secondary interactions, links, and data visualization.
- **Tertiary (Purple):** Reserved for specific accent roles or specialized category markers to maintain visual variety.
- **Neutrals:** A strict black (`#000000`) is used for all borders, text, and iconography to ground the vibrant accents.

Color is applied intentionally: components use solid fills for interactive states, while the rest of the interface remains monochromatic to ensure the "Neo-Brutalist" raw aesthetic doesn't compromise readability.

## Typography

Typography is the backbone of this design system's character. **Bricolage Grotesque** is used for all headings and display elements. Its idiosyncratic, expressive letterforms provide the "quirk" necessary for the Neo-Brutalist style. Headlines should be set with tight tracking and leading to create dense, impactful blocks of text.

**Inter** serves as the functional workhorse for body copy and UI labels. It ensures that while the headlines are expressive, the core information remains legible and professional. 

Avoid italics in this system; use bold weights or color shifts to create emphasis instead. Use uppercase for labels to reinforce the "engineered" feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop and a **Fluid Grid** on mobile. Elements are strictly aligned to an 8px base unit.

- **Desktop:** 12-column grid with a max-width of 1280px. Gutters are 24px.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing should be generous between sections but tight within components. Use "hard" spacing rules—avoid subtle padding. Objects should feel like they are "slotted" into a framework. Borders are always 2px or 3px thick, never 1px, to maintain the raw aesthetic.

## Elevation & Depth

This system rejects soft shadows and ambient light. Depth is communicated through **Hard Shadows** and **Offset Layers**.

1.  **Offset Shadows:** Elements do not "float" using blurs. Instead, they use a solid black (`#000000`) offset shadow (usually 4px or 8px) to indicate interactable surfaces.
2.  **Tonal Stacking:** Use a subtle gray surface (`#F2F2F2`) for background containers to separate sections, but keep the primary content cards white with a heavy black border.
3.  **Active States:** When an element is pressed, the offset shadow should disappear (`translate(x, y)`), simulating the physical act of "pushing" the button into the page.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. Every container, button, and input field must have 90-degree corners. This reinforces the "architectural" and "raw" intent of the design. 

The only exceptions are "pills" for status tags/chips, which may use maximum roundedness to provide a visual break from the otherwise rigid geometry.

## Components

- **Buttons:** Primary buttons use a Lime Green fill with a 2px black border and a 4px black offset shadow. Text is bold and black. Secondary buttons use a White fill with the same border/shadow structure.
- **Input Fields:** Thick 2px black borders. On focus, the border thickness does not change, but a Lime Green "halo" or solid offset shadow is added.
- **Cards:** White background, 2px black border, 8px solid black offset shadow. No rounded corners. Headlines inside cards should be Bricolage Grotesque.
- **Chips/Tags:** Used for categorization. These are the only elements allowed to be pill-shaped. They use high-contrast fills (Cyan or Purple) with black text.
- **Lists:** Separated by 2px black horizontal rules. Hover states on list items should trigger a solid Lime Green background fill.
- **Checkboxes/Radios:** Square-only. Use a thick 2px border. Checked state is a solid Lime Green fill with a black "X" or "Dot" mark.
- **Navigation:** High-contrast links that underline with a thick 4px Lime Green stroke on hover.