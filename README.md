# forecast

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

`src/` was **recovered in October 2026 from the builds' source maps** — the
original project folder was never pushed here. The first commit of it is the
source as the 2018 build held it (`site/distOld/js/app.bundle.js.map`), the
second as the 2020 builds did (`site/distProd/js/app.bundle.js.map`). What a
source map does not carry is missing: `package.json`, the webpack
configuration, the stylesheets' source and the pictures. So this is the code
to read, not yet a project that builds.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
