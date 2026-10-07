# Quiz Platform — Phase 2

An earlier React frontend for a quiz platform with player and question-designer flows.

## Features

- Sign-up and sign-in screens.
- Player questions, profiles, and leaderboard.
- Question and category management for designers.

## Stack

React, React Router, JavaScript, CSS, and Create React App. The application lives in `my-app/`.

## Getting started

Use a Node.js environment compatible with the existing dependencies. The phase 4 Docker configuration uses Node 20.

```sh
cd my-app
npm ci
npm start
```

Open `http://localhost:3000`. The frontend calls a separate quiz backend at `http://localhost:8080`; API-dependent screens need that backend running. This repository contains the frontend.

## Commands

Run these inside `my-app/`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create a production build in `build/` |
| `npm test` | Start the configured test runner |

## Project layout

| Path | Purpose |
| --- | --- |
| `my-app/src/App.js` | Application routes |
| `my-app/src/` | Screens and styles |
| `my-app/src/components/` | Shared navigation components |
| `my-app/public/` | Static assets |
| `my-app/src/README.md` | Original project description in Persian |

## Related phases

[Phase 3](https://github.com/amiralimgh7/Web_Fall1403_Phase3_FE) and [Phase 4](https://github.com/amiralimgh7/Web_Fall1403_Phase4_FE). Each repository preserves its corresponding project snapshot.
