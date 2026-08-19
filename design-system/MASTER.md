# WEARGUARD — DESIGN SYSTEM MASTER SPEC

**TRACK:** Static Premium Engineering Showcase  
**STYLE:** Swiss Industrial High-Precision Minimal  
**JUSTIFICATION:** *Swiss Industrial High-Precision Minimal, because this is a heavy-duty metallurgy & wear-protection platform for plant managers, mining engineers, and procurement directors who expect tactile engineering credibility, precise telemetry, and zero SaaS marketing fluff.*

---

## 1. Palette & Material Surfaces (Named Hex Tokens)

- **`--bg-carbon` (`#0e1014`)**: Deepest substrate; cold-rolled carbon base.
- **`--bg-graphite` (`#161922`)**: Structural cards and telemetry HUD panels.
- **`--bg-slate` (`#eef3f9`)**: Architectural daytime slate for high-contrast documentation.
- **`--bg-pure` (`#ffffff`)**: High-contrast white card layers.
- **`--orange` (`#eb4d2a`)**: Primary precision heat-treatment accent / brand signature.
- **`--orange-glow` (`rgba(235, 77, 42, 0.25)`)**: Tactical focus states & active spine indicator.
- **`--line-dark` (`rgba(255, 255, 255, 0.08)`)**: Precision millimetre grid lines on dark surfaces.
- **`--line-light` (`rgba(15, 23, 42, 0.08)`)**: Technical drafting hairpins on light surfaces.
- **`--text-alloy` (`#8c92a4`)**: Muted engineering annotations, units, and captions.

---

## 2. Typography Hierarchy

- **Display Face (`Outfit`)**:
  - Large, geometric, engineered industrial display face (`font-weight: 800-850`).
  - Set at `clamp(3rem, 5.5vw, 5.2rem)` for hero & major section headlines.
- **Body Face (`Inter` / `Plus Jakarta Sans`)**:
  - Clean, neutral, high-legibility sans-serif (`font-weight: 400-500`, `line-height: 1.6`).
- **Mono Face (`monospace`, `JetBrains Mono`)**:
  - Telemetry badges, hardness ratings (`400–500 BHN`), tolerances (`±0.5mm`), coordinates.

---

## 3. Spacing Scale & Section Architecture

- **Scale**: `8px | 16px | 24px | 32px | 48px | 64px | 96px | 128px`
- **Section Padding**:
  - Desktop: `clamp(6rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4.5rem)` (≥ 96px).
  - Mobile: `clamp(3.5rem, 7vw, 5rem) 1.25rem` (≥ 56px).
- **Hierarchy Rule**: Main signature sections and heroes receive 2–3x the breathing space of compact data rows.
- **Edge Geometry**: Strict 0px straight industrial edges for sections (no playful rounded corners).

---

## 4. Key Motion & Interaction Vocabulary

1. **Morphing Vector Arrow (`components/site/ui.tsx`)**:
   - Single SVG with persistent corner bracket (`M7 7h10v10`) + animated draw-in diagonal stem line on hover.
2. **Tactile Sticky Decking**:
   - Stacking landscape cards with calibrated sticky offsets (`top: calc(85px + index * 86px)`).
3. **Scroll-Driven Spine & HUD Crosshairs**:
   - Linear continuous laser spine linked to viewport scroll progress.
4. **Footer Dissolve**:
   - Continuous linear opacity dissolve starting 1400px before page bottom.

---

## 5. Anti-Patterns & Rules (What to Avoid)

- ❌ No generic SaaS pink/purple gradient blobs.
- ❌ No emojis used as UI icons (real SVGs and technical glyphs only).
- ❌ No placeholder copy or generic buzzwords ("crafted with passion", "elevate your brand").
- ❌ No rounded pill container borders on full sections.
- ❌ No decorative ungrounded `01/02/03` numbering; numbers must encode true sequence or application codes.
