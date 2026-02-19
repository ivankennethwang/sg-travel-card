# Singapore Travel Cards Comparison

A static site to compare Singapore multi-currency and travel cards: FX/markup, ATM fees and limits, overseas fees, and rewards. Built for Singapore users.

## Cards compared

**Amaze**, **Amaze + Citi Rewards**, **GXS**, **Maribank** (debit & credit), **Revolut**, **Trust Cashback**, **Trust Link** (credit & debit), **Wise**, **YouTrip**.

**Top choices for travel** (highlighted with a star): **Maribank** (credit) and **Trust Link** (debit).

## Features

- **Comparison table** — Card, type (debit/credit), network, FX/markup, ATM fee, ATM free limit, overseas transaction fee, rewards, referral codes. Credit and no-ATM cards show a red X for ATM; cash-advance cases show an amber warning.
- **Filters** — Toggle by debit/credit, network (Mastercard/Visa), FX (reference rate only), and free-text search with match highlighting.
- **Views** — Switch between table and card layout; toggle centered or full-width display.
- **Columns** — Show/hide individual columns (table view) or detail rows (card view).
- **Theme** — Light / dark / system (header toggle, preference stored in `localStorage`).
- **Reset** — One-click reset to default filters, columns, layout, and view.
- **Official sources** — [Sources](sources/) page (header (i) link) with provider links only; card rows link to the relevant section.

## Project structure

| File / folder     | Purpose |
|-------------------|--------|
| `index.html`      | Comparison page: table, filters, nav, theme toggle |
| `sources/index.html` | Official sources list (linked as `/sources`) |
| `styles.css`      | Layout, light/dark/system theme, table and components |
| `script.js`       | Card data, table render, filters, theme logic |

## Run locally

Serve the project root (no build step):

```bash
python3 -m http.server 8000
# or
npx serve .
```

Open **http://localhost:8000**.

## Deploy

Static HTML, CSS, and JavaScript. No build. Suitable for **GitHub Pages** or any static host.

## Disclaimer

**Not financial advice.** Fees and limits are indicative. Always check each provider for current terms. Use the [Sources](sources/) page for official links.
