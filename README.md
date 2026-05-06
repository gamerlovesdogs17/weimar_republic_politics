# Weimar Politics Atlas

A polished static website about Weimar Republic politics, parties, election results, and coalition math.

## Features

- Interactive election explorer for every national Weimar election from 1919 to March 1933
- Bottom scrubber/slider to scroll between election results
- Seat and vote-percentage chart modes
- Coalition builder that calculates majority status for each election
- Preset coalition experiments, including Weimar Coalition, Grand Coalition, NSDAP + DNVP, and anti-system blocs
- Party profile cards for SPD, Zentrum, DDP, DVP, DNVP, KPD, NSDAP, BVP, and USPD
- Timeline explaining the republic's political trajectory
- Responsive dark historical design suitable for GitHub Pages

## How to run locally

Open `index.html` in a browser. No build step is required.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Set source to **Deploy from a branch**.
5. Choose the `main` branch and `/root` folder.
6. Save. GitHub will generate a public Pages link.

## File structure

```text
weimar-politics-site/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Historical data notes

The project uses compiled Reichstag/National Assembly election results for 1919, 1920, May 1924, December 1924, 1928, 1930, July 1932, November 1932, and March 1933. Coalition plausibility is a simplified teaching model, not a formal scholarly ranking.

## Sources consulted

- German Bundestag historical overview of the Weimar Republic parliament and party system
- German Bundestag historical PDF on Weimar political parties
- United States Holocaust Memorial Museum overview of the Weimar Republic
- Compiled Reichstag election results table for 1919–1933

## License

MIT-style use for the code. Historical facts and election figures should be checked against original historical sources before academic publication.
