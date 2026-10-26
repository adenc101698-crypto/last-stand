# LAST GUARD — FPS Mini Game

A small, single-player browser FPS-style game. You attack a defending bot in a raycasting arena. The game is built with plain HTML, CSS, and JavaScript; no build step or third-party dependencies are required.

## Play locally

1. Download or clone this repository.
2. Open `dist/index.html` in a modern browser (Chrome, Firefox, or Edge).
3. Click **START GAME** and then click the game area to lock the mouse.

You can also serve the repository locally:

```bash
python -m http.server 8000 --directory dist
```

Then open <http://localhost:8000>.

## Controls

| Key / input | Action |
| --- | --- |
| `W`, `A`, `S`, `D` | Move |
| Mouse | Look / aim |
| Left mouse button | Shoot |
| `R` | Reload |
| `Shift` | Sprint |
| `Esc` | Unlock the mouse |

## Project structure

```text
last-guard-fps/
├── dist/
│   └── index.html       # Ready-to-play game
├── tests/
│   └── game.test.js     # Basic automated smoke tests
├── package.json         # Test command (no dependencies)
├── README.md
├── LICENSE
└── .gitignore
```

## Tests

Requires Node.js 18 or newer. The tests are lightweight smoke tests that verify the distributable HTML contains the expected game UI and core mechanics.

```bash
npm test
```

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under the build/deployment section, select **Deploy from a branch**.
4. Choose your default branch and the `/dist` folder, then save.

If your GitHub Pages setup does not offer `/dist` as a folder choice, use the GitHub Actions workflow for Pages or move the contents of `dist/` to the repository root.

## Notes

- This is a compact raycasting-style game that creates a 3D-like first-person view; it is not a full polygonal 3D engine.
- No external assets or network requests are needed to play.
- The bot and combat are simple arcade mechanics intended as a starter project.

## License

MIT — see [`LICENSE`](LICENSE).
