Forecast
=================
 
## Development (localhost)

* Install packages by [Yarn](https://yarnpkg.com/en/)
    * `yarn`
* Set *NODE_ENV* to *development*
* Run npm script start by [Yarn](https://yarnpkg.com/en/) 
    * `yarn start`
* Dev server is running on http://localhost:8080    

## Production

* Install packages by [Yarn](https://yarnpkg.com/en/)
    * `yarn`
* Set *NODE_ENV* to *production*
* Run npm script build by [Yarn](https://yarnpkg.com/en/) 
    * `yarn build`
* Production files are in *dist* folder

A weather forecast page: search a place, see its current weather and forecast,
keep favourites; in Czech and English. React, Redux and redux-saga, built with
webpack.

## Where it runs

Served on `forecast.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the page exactly as it is served, kept as it was on the old
hosting. It holds three builds: `dist/` (a development build of June 2020 —
the one `index.html` loads; its stylesheet was already missing there),
`distProd/` (the production build of the same day) and `distOld/` (October
2018). Every push to `master` hands `site/` over to the server
(`.github/workflows/deploy.yml`), which checks the page and every script and
stylesheet it loads under all three hostnames, and goes back to the release
before if anything does not answer.

An address the page does not know as a file gets `index.html` (the page routes
in the browser); a missing script or stylesheet is still a 404.

## The source

This is the project as it was written, 2018–2020, with its history: it lived
on Bitbucket (bitbucket.org/emko4/forecast) and was brought here in October
2026. For a few days before that, `src/` here held a copy recovered from the
builds' source maps; the original turned out identical to it, file for file,
and takes its place.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
