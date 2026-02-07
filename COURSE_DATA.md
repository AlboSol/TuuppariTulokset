# Torrevieja-area course library (JSON)

This folder contains a small preloaded course library intended for an offline-first scorecard app.

## What's included
- 4 courses near Torrevieja (Spain)
- Only one tee per course: "yellow-equivalent"
- Hole-by-hole **Par** + **HCP/Stroke Index** (1–18)
- Tee **Course Rating** + **Slope Rating**

## Files
- `data/index.json` – list of courses and file paths
- `data/courses/*.yellow.json` – one JSON per course

## Important
Different providers sometimes publish slightly different CR/Slope values (or update them over time).
The app should therefore allow editing (which you already requested) and store user edits locally.

## Sources (for traceability)
- Golfify course pages for: Lo Romero, Villamartin, Las Colinas
- TheSocialGolfer scorecard page for: La Finca (Yellow tee)
