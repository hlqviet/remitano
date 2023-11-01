## Funny Movies

Funny Movies is a movie sharing site. You can register an account and share movies you like instantly. All your shared movies will be listed in the homepage.

### Features:

- User registration and login
- YouTube video sharing (youtube.com and youtu.be URL formats)
- Shared videos listing
- Basic light/dark theme support based on browser selected theme
- Responsive layout

## Prerequisites

1. This project was developed on WSL2 (Ubuntu LTS 22.04) but may work on macOS and Windows
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

The deployed app can be accessed through these domains:

- https://remitano.huynhviet.com/ - Cloudflare CDN
- https://remitano-three.vercel.app/ - Vercel CDN

## Troubleshooting

1. Data persistence was not implemented. Only variables and `localStorage` are used so odd behaviours are expected when you use the application in development mode. You may need to reload the page to get the correct states after logging in, accessing the sharing page or the video listing page. The deployed version also suffers the same issue. Building the application and running it locally works well.
2. Double-check your Node.js version if you encounter any issue installing or running.

[home-light]: https://github.com/hlqviet/remitano/blob/main/assets/images/home-light.png 'Homepage - Light'
[home-dark]: https://github.com/hlqviet/remitano/blob/main/assets/images/home-dark.png 'Homepage - Dark'
[share-page-light]: https://github.com/hlqviet/remitano/blob/main/assets/images/share-page-light.png 'Movie sharing - Light'
[share-page-dark]: https://github.com/hlqviet/remitano/blob/main/assets/images/share-page-dark.png 'Movie sharing - Dark'
[videos-light]: https://github.com/hlqviet/remitano/blob/main/assets/images/videos-light.png 'Videos - Light'
[videos-dark]: https://github.com/hlqviet/remitano/blob/main/assets/images/videos-dark.png 'Videos - Dark'
