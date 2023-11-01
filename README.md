## Funny Movies

Funny Movies is a movie sharing site. You can register an account and share movies you like instantly. All your shared movies will be listed in the homepage.

### Features:

- User registration and login
- YouTube video sharing (youtube.com and youtu.be URL formats)
- Shared videos listing
- Basic light/dark theme support based on browser selected theme
- Responsive layout

## Prerequisites

1. This project was developed under WSL2 (Ubuntu LTS 22.04) but may work on macOS and Windows
2. Node.js version >= 18 (LTS preferred)
3. A free [RapidAPI](https://rapidapi.com/) account

## Installation

Clone this repository

```bash
git clone git@github.com:hlqviet/remitano.git
```

Install dependencies

```bash
npm install
```

Install `playwright` if you want to run end-to-end tests

```bash
npx playwright install --with-deps chromium
```

## Configuration

1. Register a RapidAPI account at https://rapidapi.com/auth/sign-up, subscribe to this API: https://rapidapi.com/ytjar/api/yt-api and get your API key
2. Copy `.env.example` to `.env.local`
3. Fill in `RAPIDAPI_API_KEY` with your API key

## Running

To run the application in development mode, run the following command and access it at `http://localhost:3000`:

```bash
npm run dev
```

For production build, run the following commands:

```bash
npm run build
npm start
```

## Testing

Unit tests will be executed with `jest` and `react-testing-library`. End-to-end tests will be executed with `cucumber-js` and `playwright`.

For unit testing, run the following command:

```bash
npm run test
```

For end-to-end testing, run the production build commands and this one:

```bash
npm run test:e2e
```

## Deployment

This project was bootstrapped with Next.js so it can be deployed to Vercel with ease.

## Usage

You need to register for an account first. Enter your credentials, the account will be created if it does not exist, else you will be logged in.

![alt][home-light]

You can then access the movie sharing page. Only YouTube videos are supported for now.

![alt][share-page-light]

The video will be added to the homepage after it is shared.

![alt][videos-light]

The site is also available in dark theme, depending on your browser theme.

![alt][home-dark]

![alt][share-page-dark]

![alt][videos-dark]

The live app can be accessed through these domains:

- https://remitano.huynhviet.com/ - Cloudflare CDN
- https://remitano-three.vercel.app/ - Vercel CDN

## Troubleshooting

- Double-check your Node.js version if you encounter any issue installing or running the application.
- `playwright` installation requires `sudo` due to the dependencies. You can install them yourself by following the instructions in [this comment](https://github.com/microsoft/playwright/issues/12227#issuecomment-1045179960).
- Make sure you have `RAPIDAPI_API_KEY` if you cannot share a movie.

[home-light]: assets/images/home-light.png 'Homepage - Light'
[home-dark]: assets/images/home-dark.png 'Homepage - Dark'
[share-page-light]: assets/images/share-page-light.png 'Movie sharing - Light'
[share-page-dark]: assets/images/share-page-dark.png 'Movie sharing - Dark'
[videos-light]: assets/images/videos-light.png 'Videos - Light'
[videos-dark]: assets/images/videos-dark.png 'Videos - Dark'
