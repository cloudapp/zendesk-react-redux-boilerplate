# zendesk-react-redux-boilerplate
Boilerplate for a Zendesk ticket editor app using react and redux. Inspired by Zendesk's [app scaffold](https://github.com/zendesk/app_scaffold). Please refer to that project for help on developing and deploying Zendesk apps.

Some notables include:
- basic client-side routing via redux-router
- history, routes and store as part of base application component
- (sass|scss)-loader for css-modules
- action handlers and dispatchers via redux-actions
- ticket editor helper for interfacing with ZD's ticket editor
- hot code reloading
- development in and out of  Zendesk ticket environment

## Developing Locally
Download the source and `npm install`.

### Developing outside of Zendesk
If you want to develop outside of a Zendesk ticket environment (`.../agent/tickets/<id>?zat=true`), run:
```bash
npm run start
```

This is useful for developing `js` or `(sass|scss)` that do not interface directly with the `ZAF` client; this project uses a hot reloader for tracking code changes.  I found refreshing my apps in the ticket environment tedious for most of my changes.

### Developing inside of Zendesk
If you want to develop outside of a Zendesk ticket environment (`.../agent/tickets/<id>?zat=true`), run:
```bash
nf start
```

You can have both of the above commands running at the same time (they serve on different ports).
