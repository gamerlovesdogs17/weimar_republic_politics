# Weimar Politics Atlas

A polished static website about Weimar Republic politics, built for GitHub Pages.

## Features

- Election explorer for the 1919 National Assembly election and Reichstag elections through March 1933
- Bottom scrubber/slider to scroll through each election
- Seat and vote-share result modes
- Stylized hoverable regional map for every election
- Coalition builder with preset coalition experiments
- Party profile cards with ideology, voter base, Weimar-system stance, and Great Depression policy line
- Charts for party trends, anti-system seat power, turnout, and bloc balance
- Great Depression policy comparison section
- Full cabinet/government history table from Scheidemann through Hitler
- Alt-history sandbox for what-if scenarios
- Responsive dark blue theme, no gold theme

## How to publish on GitHub Pages

1. Upload these files to your repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Wait for GitHub Pages to finish deploying.

## Notes on data and interpretation

Election figures are stored in `app.js`. The coalition and alt-history tools are simplified educational models. They are meant to help users reason about political arithmetic, not to perfectly reconstruct every local result or expert historiographical debate.

The map is intentionally stylized. It shows broad political-geography tendencies for selected regions rather than exact constituency boundaries.

## Suggested historical sources

- German Bundestag, historical exhibition: elections and parliamentarism in the Weimar Republic
- United States Holocaust Memorial Museum, overview of the Weimar Republic
- United States Holocaust Memorial Museum, Article 48 of the Weimar Constitution
- Standard compiled Reichstag election tables for vote and seat totals

## Editing

Most content can be edited in `app.js`:

- `parties` controls party profiles and Great Depression policy summaries.
- `elections` controls election results, notes, stress levels, and regional map tendencies.
- `governments` controls the cabinet history table.
- `timeline` controls the timeline section.
- `regionShapes` controls the stylized SVG map.
