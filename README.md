# RubyCDP

Three files, no build step:

- `index.html` — page skeleton, seams, handles, issue picker
- `application.css` — themes and every style, organised into numbered sections
- `application.js` — content (`PROJECTS`), section templates, seam controller

## Running locally

```sh
bundle install
bundle exec rake       # http://localhost:8000, override with PORT=3000
bundle exec rake stars # refresh GitHub star counts in application.js
```

## One codebase, three domains

Deploy the same files to ferrum / cuprite / vessel.rubycdp.com and only change:

```html
<body data-issue="cuprite">
```

Valid values: `ferrum`, `cuprite`, `vessel`, `all`. A `?issue=vessel` query
parameter overrides it.

## Editing

- **Copy, code samples, links, star counts:** `PROJECTS` at the top of `application.js`.
- **Colours and fonts per project:** `.theme--ferrum`, `.theme--cuprite`, `.theme--vessel` in `application.css`.
- **New section:** add a `templates.mySection(p)` function, then put
  `<section class="stack" data-render="mySection"></section>` in `index.html`.

## Interactions

- Drag either handle to move a seam. It snaps to the edge if you let go within 5% of it.
- Arrow keys move a focused handle (hold Shift to move further).
- Keys `1` `2` `3` `4` switch to Ferrum, Cuprite, Vessel or all three side by side.
- Animations turn off when the visitor has reduced motion set.
