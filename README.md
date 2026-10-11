Forecast
=================

## Development (localhost)

* Install packages
    * `npm install`
* Run the development server
    * `npm start`
* Dev server is running on http://localhost:5173

## Production

* Install packages
    * `npm install`
* Build
    * `npm run build`
* Production files are in the *site* folder — the folder that is served (see below)

## Lint

* `npm run lint` (`npm run lint:fix` to fix what can be fixed)

A weather forecast page: search a place, see its current weather and forecast,
keep favourites; in Czech and English. React, Redux and redux-saga, built with
webpack.

## Where it runs

Served on `forecast.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the built page exactly as it is served: the output of
`npm run build` from this source. It is committed so that deploying needs no
build: every push to `master` hands `site/` over to the server
(`.github/workflows/deploy.yml`), which checks the page and every script and
stylesheet it loads under all three hostnames, and goes back to the release
before if anything does not answer.

After changing the source: `npm run build`, and commit `site/` with it.

An address the page does not know as a file gets `index.html` (the page routes
in the browser); a missing script or stylesheet is still a 404.

## The source

This is the project as it was written, 2018–2020, with its history: it lived
on Bitbucket (bitbucket.org/emko4/forecast) and was brought here in October
2026.

It was built with webpack 4, Babel and node-sass. In October 2026 the build
moved to Vite, because the old toolchain had hundreds of known
vulnerabilities. The libraries the page itself is made of stay at the
versions it was built with, except lodash, moment and immutable, which had
vulnerabilities of their own, and React (16.5 → 16.14, which the new build
needs). The rebuilt page was compared with the served one in a browser, step
by step, with the same weather data, and shows the same.

Until then the server held three builds side by side, as the old hosting had:
the one in use (a development build of June 2020), a production build of the
same day and one of October 2018. They are in this repository's history
(`site/dist`, `site/distProd`, `site/distOld`).

Translations live beside what they translate (`locales/<language>.yml`); the
build gathers them (`vite/translations.js`).

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
