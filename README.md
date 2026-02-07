# Golf Scorecard App (Offline-first)

Lightweight offline-first golf scorecard application.

## Features (initial)
- Preloaded course library (JSON)
- Editable hole Par + HCP/Stroke Index
- Net stroke play
- Match play: Scramble, Bestball, Greensome (Erado optional)
- Offline-first (local storage)

## Structure
- /data        → seed course library (read-only)
- /src         → application source code
- /public      → static assets

## Course data
Initial course data is stored in `/data` and copied to local storage on first run.
User edits override seed data locally.
