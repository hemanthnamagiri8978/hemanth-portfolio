# Player 1 Portfolio - Overworld Edition

A highly interactive, top-down game map portfolio built with pure HTML, CSS (Grid & Transforms), and Vanilla JavaScript.

Features:
- **Interactive Map Navigation:** Click nodes to watch your vehicle drive to them.
- **Level Dialogs:** Classic RPG-style modal popups for each portfolio section.
- **Score Tracker:** Earn points by exploring the map and "transmitting" messages.
- **Retro Aesthetic:** CRT scanlines, pixel fonts, and neon cyberpunk colors.

## Deployment to Vercel

Vercel makes deploying this static site instant and free.

### Option 1: The Quickest Way (CLI)
1. Install Vercel globally: `npm i -g vercel`
2. Run `vercel` in this directory.
3. Follow the prompts.

### Option 2: Deploy via GitHub
1. Create a new repository on GitHub.
2. Push the contents of this folder (`scratch/portfolio`) to your new repository.
3. Go to [vercel.com](https://vercel.com) and log in.
4. Click **Add New** > **Project**.
5. Import your new GitHub repository.
6. Leave all settings as default and click **Deploy**.

## How to Customize Your Map

### 1. Change Text & Data
Open `index.html` and modify the text inside the `<div class="modal-body">` sections for About, Skills, and Projects.

### 2. Add New Map Nodes
1. In `index.html`, copy an existing `<div class="level-node">`.
2. Change its `id`, `data-level` name, and give it new `data-x` and `data-y` coordinates (between 0-1000 width, 0-700 height).
3. Add a corresponding `<div class="game-modal" id="modal-YOUR_LEVEL_NAME">` in the modals container.
4. Add a new `L x y` instruction to the `<path d="...">` inside the `<svg class="map-paths">` to draw a road to it.

Enjoy your new interactive world!
