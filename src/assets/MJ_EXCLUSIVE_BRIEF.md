# MJ EXCLUSIVE — ODOO WEBSITE DESIGN MASTER BRIEF
## Google AI Studio Prompt v2.0 Synthesis

### SECTION 1 — VISUAL IDENTITY SYSTEM

#### 1A. COLOR SYSTEM: "Obsidian Heritage"

| Role | HEX | Name | Usage | Justification |
| :--- | :--- | :--- | :--- | :--- |
| Canvas Primary | `#F9F7F2` | Bone Silk | Light mode BG / Paper | High-end tactile feel, easier on eyes than pure white. |
| Canvas Dark | `#0D0D0D` | Pure Obsidian | Dark mode BG / Hero | Creates cinematic depth; synonymous with luxury. |
| Brand Gold | `#C5A059` | Ateliers Gold | Primary Accent / Logo | Warm, antique gold that feels "old money" and authentic. |
| Brand Gold Muted| `#8B7345` | Tarnished Brass | Borders / Hover states | provides depth without competing with the primary gold. |
| Text Primary | `#1A1A1A` | Charcoal Ink | Headings on light bg | softer than black, feels like high-end print. |
| Text Secondary | `#575757` | Muted Ash | Body / Captions | Reduces contrast for long-form reading. |
| Text Inverted | `#FFFFFF` | Pearl White | All text on dark bg | maximum legibility against Obsidian. |
| CTA Primary | `#C5A059` | Gold Pressed | Primary buttons | Calls to action must carry the brand’s value. |
| Alert / Sale | `#7A1A1A` | Royal Garnet | Badges | A deep red that signals value without feeling "cheap." |

#### 1B. TYPOGRAPHY SYSTEM

| Level | Font Family | Weight | Size (rem) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| Display / Hero | `Cormorant Garamond` | 300 / 400i | 5rem+ | Heavy impact cinematic headlines |
| H1 | `Cormorant Garamond` | 500 | 3.5rem | Page Titles |
| H2 | `Outfit` | 500 | 2.25rem | Section Titles |
| H3 | `Outfit` | 600 | 1.25rem | Product Names / Cards |
| Body Regular | `Inter` | 400 | 1rem | UI Text / Navigation |
| Price | `Outfit` | 500 | 1.5rem | Pricing (Distinct & Bold) |

---

### SECTION 2 — INFORMATION ARCHITECTURE

#### 2A. ANNOUNCEMENT BAR
- **Messages (Ticker):** 
  - "FREE SHIPPING ON ORDERS OVER $250 CAD 🇨🇦"
  - "EID COLLECTION: THE DARBAR SERIES NOW LIVE"
  - "1,000+ ORDERS FULFILLED NATIONWIDE PK 🇵🇰"
  - "SHIPPING TO CANADA, USA, UK & PAKISTAN"
- **Behavior:** Sticky on Desktop, Static on Mobile.
- **Color:** `#1A1A1A` BG / `#C5A059` Text.

#### 2B. NAVIGATION STRUCTURE
1. **NEW ARRIVALS** (Direct Link)
2. **COLLECTIONS** (Mega Menu: Eid '26, The Groom Edit, Daily Classics)
3. **KUFI & ACCESSORIES** (Mega Menu: Namaz Caps, Prayer Mats, Attar)
4. **OUR STORY** (Storytelling Page)
5. **SALE** (Last Call)

---

### SECTION 3 — HOMEPAGE WIREFRAME (KEY SECTIONS)

**01. ANNOUNCEMENT BAR:** (ticker) High trust, geo-specific.
**03. HERO BANNER:** (split-screen) 
  - Left: "The Modern Heirloom" (Large Serif)
  - Right: Cinematic Sherwani shot.
  - CTA: "EXPLORE THE EDIT"
**05. SHOP BY OCCASION:** Icon-based grid (J. Junaid inspired).
**07. THE WEDDING EDIT:** (Amir Adnan style) Full-bleed parallax section for Sherwanis.
**11. DUAL-MARKET SHIPPING:** Side-by-side CA/PK shipping info columns.

---

### SECTION 4 — PDP STRATEGY

#### 4A. PREMIUM PDP (Sherwani)
- **Visuals:** 6-angle gallery with "Fabric Zoom".
- **Hierarchy:** Collection Title > Product Name > Multi-Currency Price ($ CAD / Rs. PKR) > Customization Note > Add to Cart.
- **WhatsApp CTA:** "Personal Styling via WhatsApp" (Floating button).

---

### SECTION 5 — ODOO 17 TECHNICAL

- **Base Theme:** Odoo Native + Custom SCSS.
- **GeoIP:** Auto-pricelist switching based on IP location.
- **Snippet IDs:** `s_images_wall` for categories, `s_dynamic_snippet` for bestsellers.

---

### SECTION 7 — COPY BANK

**Tagline:** "Rooted in Tradition. Refined for Today."
**Hero Headline:** "A Heritage Reimagined for the Modern Man."
**Kufi Description:** "Hand-selected fabrics merged with traditional craftsmanship. A testament to faith and refinement."

---

### SECTION 8 — ROADMAP
- **Phase 1:** Odoo Instance Config & Geo-Routing (Week 1).
- **Phase 2:** Visual Design Implementation (Weeks 2-3).
- **Phase 3:** Product Migration & SEO Polish (Week 4).
- **Phase 4:** Live Testing & Final Launch (Week 5).
