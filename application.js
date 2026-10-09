/* ==========================================================================
   RubyCDP Trilogy — application.js
   --------------------------------------------------------------------------
   1. PROJECTS   — all copy for the three issues lives here.
   2. Templates  — one function per section, returning HTML for one project.
   3. Rendering  — fills every [data-render] stack with three themed layers.
   4. Seams      — the split-screen controller (drag, snap, tween, presets).
   5. Extras     — copy buttons, eyes that follow the cursor, keyboard.
   6. Boot

   No build step, no dependencies. Edit PROJECTS to change content; edit
   application.css to change looks.
   ========================================================================== */

(() => {
  'use strict';

  /* 1. PROJECTS
     ======================================================================== */

  const PROJECTS = [
    {
      key: 'ferrum',
      name: 'Ferrum',
      title: 'FERRUM',
      issue: '#1',
      tile: { sym: 'Fe', num: '26', meta: '55.845', name: 'Ferrum · Iron' },
      coverTag: 'Headless Chrome',
      sfx: 'KLANG!',
      bubble: 'browser.go_to("rubycdp.com")',
      kicker: 'The fearless Ruby Chrome driver',
      desc: 'A clean, high-level Ruby API to Chrome. Ferrum talks raw CDP — no Selenium, no WebDriver, no ChromeDriver. Headless by default, headful when you want to watch it work.',
      install: 'bundle add ferrum',
      stars: '2.1k',
      links: {
        site: 'https://ferrum.rubycdp.com',
        github: 'https://github.com/rubycdp/ferrum',
        docs: 'https://docs.rubycdp.com/docs/ferrum/introduction'
      },
      ticker: 'NO SELENIUM ✦ NO WEBDRIVER ✦ NO CHROMEDRIVER ✦ RAW CDP ✦ PURE RUBY ✦ HEADLESS BY DEFAULT ✦ ',
      startTitle: 'Three panels to Chrome',
      powersTitle: 'Forged in raw CDP',
      outro: 'Fear no browser.',
      panels: [
        { cap: 'Summon', code: 'browser = Ferrum::Browser.new\npage = browser.create_page', note: 'Spawns Chrome and opens a fresh page. All you need is Ruby and Chrome.' },
        { cap: 'Go anywhere', code: 'page.go_to("https://google.com")\ninput = page.at_xpath("//input[@name=\'q\']")\ninput.focus.type("Ruby", :Enter)', note: 'Navigate, find nodes with CSS or XPath, type like a human.' },
        { cap: 'Capture', code: 'page.screenshot(path: "google.png")\nbrowser.quit', note: 'Screenshots, PDFs, evaluated JS — then shut the furnace down.' }
      ],
      powers: [
        { t: 'Raw CDP', d: 'Talks to Chrome directly over the DevTools Protocol. Nothing in between to break.', m: 'Ferrum::Browser.new' },
        { t: 'Headless or headful', d: 'Invisible by default. Flip one option to watch every move.', m: 'headless: false' },
        { t: 'Evaluate JS', d: 'Run any script inside the page and get Ruby values back.', m: 'page.evaluate' },
        { t: 'Mouse & keyboard', d: 'Move, click, drag and type with real input events.', m: 'page.mouse.move(x:, y:)' },
        { t: 'Screenshots & PDF', d: 'Full-page captures and printable PDFs in a single line.', m: 'page.screenshot' },
        { t: 'Network control', d: 'Inspect traffic, intercept requests, wait for the network to go idle.', m: 'page.network' }
      ]
    },
    {
      key: 'cuprite',
      name: 'Cuprite',
      title: 'CUPRITE',
      issue: '#2',
      tile: { sym: 'Cu', num: '29', meta: '63.546', name: 'Cuprite · Cu₂O' },
      coverTag: 'Capybara Driver',
      sfx: 'PASS!',
      bubble: 'page.driver.debug(binding)',
      kicker: 'Headless Chrome driver for Capybara',
      desc: 'A pure Ruby driver for Capybara — no Selenium, no WebDriver, no ChromeDriver. Your specs run on headless Chrome through Ferrum, and you can pause any of them mid-flight.',
      install: 'bundle add cuprite --group test',
      stars: '1.4k',
      links: {
        site: 'https://cuprite.rubycdp.com',
        github: 'https://github.com/rubycdp/cuprite',
        docs: 'https://docs.rubycdp.com/docs/cuprite/introduction'
      },
      ticker: 'CAPYBARA-READY ✦ NO SELENIUM ✦ DEBUG MID-SPEC ✦ NETWORK TRAFFIC ✦ HEADLESS CHROME ✦ PURE RUBY ✦ ',
      startTitle: 'Suit up your specs',
      powersTitle: 'Every spec, fearless',
      outro: 'Green specs, every run.',
      panels: [
        { cap: 'Suit up', code: 'group :test do\n  gem "cuprite"\nend', note: 'One gem in your test group. Ferrum comes along for the ride.' },
        { cap: 'Register', code: 'require "capybara/cuprite"\nCapybara.javascript_driver = :cuprite', note: 'Swap it into Capybara. Your existing specs stay exactly the same.' },
        { cap: 'Freeze frame', code: 'visit root_path\nfill_in "field", with: "value"\npage.driver.debug(binding)', note: 'Pause the spec, open Chrome, poke around with pry.' }
      ],
      powers: [
        { t: 'Drop-in driver', d: 'Plugs straight into Capybara. No browser driver binaries to babysit.', m: 'javascript_driver = :cuprite' },
        { t: 'Debug mid-spec', d: 'Stop a test, inspect the live page, keep going from a console.', m: 'page.driver.debug(binding)' },
        { t: 'Network traffic', d: 'Every request and response a page made, ready to assert on.', m: 'page.driver.network_traffic' },
        { t: 'Wait smarter', d: 'Wait for network idle or a full reload — never sleep again.', m: 'wait_for_network_idle' },
        { t: 'Headers & cookies', d: 'Set headers, cookies, basic auth and proxies per test.', m: 'page.driver.add_headers' },
        { t: 'URL allowlist', d: 'Block ad networks and analytics so specs run faster.', m: 'url_allowlist =' }
      ]
    },
    {
      key: 'vessel',
      name: 'Vessel',
      title: 'VESSEL',
      issue: '#3',
      tile: { sym: 'Vs', num: '03', meta: 'Cargo', name: 'Vessel · Crawler' },
      coverTag: 'Web Crawler',
      sfx: 'AHOY!',
      bubble: 'yield request(url: next_url)',
      kicker: 'Fast as Chrome. Dead simple.',
      desc: 'A high-level web crawling framework built on Ferrum. Describe your Cargo, set sail, and Vessel loads pages concurrently in Chrome to haul the data home.',
      install: 'bundle add vessel',
      stars: '725',
      links: {
        site: 'https://vessel.rubycdp.com',
        github: 'https://github.com/rubycdp/vessel',
        docs: 'https://github.com/rubycdp/vessel#readme'
      },
      ticker: 'FAST AS CHROME ✦ DEAD SIMPLE ✦ EXTENDABLE ✦ CONCURRENT CRAWLING ✦ CSS + XPATH ✦ PURE RUBY ✦ ',
      startTitle: 'Set sail in three panels',
      powersTitle: 'Built for open water',
      outro: 'The web is your ocean.',
      panels: [
        { cap: 'Chart', code: 'class Quotes < Vessel::Cargo\n  domain "quotes.toscrape.com"\n  start_urls "https://quotes.toscrape.com/"', note: 'A crawler is a tiny Ruby class with a domain and where to start.' },
        { cap: 'Haul', code: 'def parse\n  css("div.quote").each do |q|\n    yield({ text: q.at_css("span.text").text })\n  end\nend', note: 'Pick data with CSS or XPath and yield it — or yield more requests.' },
        { cap: 'Dock', code: 'quotes = []\nQuotes.run { |q| quotes << q }\nputs JSON.generate(quotes)', note: 'Requests run concurrently, one page per core by default.' }
      ],
      powers: [
        { t: 'Cargo classes', d: 'Describe a whole crawler as a small, readable Ruby class.', m: 'Vessel::Cargo' },
        { t: 'Concurrent by default', d: 'A thread pool loads pages in parallel in real Chrome.', m: 'threads max: n' },
        { t: 'CSS & XPath', d: 'Pick data out with the selectors you already know.', m: 'at_css · xpath' },
        { t: 'Follow every link', d: 'Yield new requests with a handler to keep crawling.', m: 'request(url:, handler:)' },
        { t: 'Headers, cookies, proxy', d: 'Dress requests up exactly the way the site expects.', m: 'headers "Referer" => …' },
        { t: 'Headful mode', d: 'Turn headless off and watch Chrome sail through pages.', m: 'driver_options: { headless: false }' }
      ]
    }
  ];

  const MAKER = { name: 'Bitsbeam', url: 'https://bitsbeam.com' };
  const KEYS = PROJECTS.map((p) => p.key);

  /**
   * Vessel's cover hero: a trawler dragging a net of web pages along the sea
   * bed. Animated via keyframes in application.css (bob, wave, sway, rise,
   * drift).
   */
  const BOAT = `<div class="boat">
<svg viewBox="0 0 400 500" style="display:block; width:100%; height:100%">
<defs><pattern id="vsNet" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0 H9 M0 0 V9" style="fill:none; stroke:#000; stroke-width:1.2"></path></pattern></defs>
<g style="animation:wave 4s linear infinite"><path d="M-60 172 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 V500 H-60 Z" style="fill:#041a29; opacity:.72"></path><path d="M-60 172 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" style="fill:none; stroke:#000; stroke-width:3"></path><path d="M-60 186 q15 -4 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" style="fill:none; stroke:#2fc6ff; stroke-width:1.5; opacity:.5"></path></g>
<g style="stroke:#2fc6ff; stroke-width:14; opacity:.07"><line x1="110" y1="176" x2="50" y2="430"></line><line x1="200" y1="176" x2="150" y2="430"></line><line x1="330" y1="176" x2="290" y2="430"></line></g>
<path d="M0 438 Q50 424 110 436 T230 434 T340 430 T420 436 V500 H0 Z" style="fill:#0d1a22; stroke:#000; stroke-width:3"></path>
<g style="fill:#2fc6ff; opacity:.35"><circle cx="40" cy="452" r="1.5"></circle><circle cx="96" cy="462" r="1.5"></circle><circle cx="150" cy="450" r="1.5"></circle><circle cx="210" cy="466" r="1.5"></circle><circle cx="268" cy="456" r="1.5"></circle><circle cx="318" cy="470" r="1.5"></circle></g>
<ellipse cx="176" cy="440" rx="16" ry="7" style="fill:#1b2e3a; stroke:#000; stroke-width:3"></ellipse>
<path d="M150 442 q-7 -16 0 -32 q7 -16 0 -32" style="fill:none; stroke:#1fa38a; stroke-width:4; stroke-linecap:round; transform-box:fill-box; transform-origin:50% 100%; animation:sway 3.4s ease-in-out 0s infinite"></path><path d="M164 442 q-7 -11 0 -22 q7 -11 0 -22" style="fill:none; stroke:#1fa38a; stroke-width:4; stroke-linecap:round; transform-box:fill-box; transform-origin:50% 100%; animation:sway 3.4s ease-in-out 0.7s infinite"></path><path d="M382 442 q-7 -17.5 0 -35 q7 -17.5 0 -35" style="fill:none; stroke:#1fa38a; stroke-width:4; stroke-linecap:round; transform-box:fill-box; transform-origin:50% 100%; animation:sway 3.4s ease-in-out 0.3s infinite"></path><path d="M392 442 q-7 -11.5 0 -23 q7 -11.5 0 -23" style="fill:none; stroke:#1fa38a; stroke-width:4; stroke-linecap:round; transform-box:fill-box; transform-origin:50% 100%; animation:sway 3.4s ease-in-out 1.1s infinite"></path>
<line x1="262" y1="96" x2="270" y2="262" style="stroke:#000; stroke-width:2.5"></line>
<line x1="270" y1="262" x2="196" y2="296" style="stroke:#000; stroke-width:2.5"></line>
<line x1="270" y1="262" x2="348" y2="312" style="stroke:#000; stroke-width:2.5"></line>
<circle cx="270" cy="262" r="5" style="fill:none; stroke:#000; stroke-width:3"></circle>
<path d="M196 296 C186 360 205 420 250 436 C300 446 340 420 360 440 L372 446 C350 400 352 350 348 312 Z" style="fill:#0b3550; opacity:.6"></path>
<g transform="translate(214 352) rotate(-14) scale(1)"><rect x="0" y="0" width="62" height="46" rx="3" style="fill:#fff; stroke:#000; stroke-width:3"></rect><rect x="0" y="0" width="62" height="11" rx="3" style="fill:#ff4d5e; stroke:#000; stroke-width:3"></rect><circle cx="6" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="12" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="18" cy="5.5" r="1.8" style="fill:#000"></circle><rect x="7" y="17" width="18" height="14" style="fill:#ffd23f; stroke:#000; stroke-width:1.5"></rect><rect x="30" y="18" width="25" height="3.5" style="fill:#000"></rect><rect x="30" y="25" width="19" height="3.5" style="fill:#000"></rect><rect x="7" y="36" width="48" height="3" style="fill:#2fc6ff"></rect></g><g transform="translate(262 328) rotate(8) scale(1)"><rect x="0" y="0" width="62" height="46" rx="3" style="fill:#fff; stroke:#000; stroke-width:3"></rect><rect x="0" y="0" width="62" height="11" rx="3" style="fill:#2fc6ff; stroke:#000; stroke-width:3"></rect><circle cx="6" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="12" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="18" cy="5.5" r="1.8" style="fill:#000"></circle><rect x="7" y="17" width="18" height="14" style="fill:#ff4d5e; stroke:#000; stroke-width:1.5"></rect><rect x="30" y="18" width="25" height="3.5" style="fill:#000"></rect><rect x="30" y="25" width="19" height="3.5" style="fill:#000"></rect><rect x="7" y="36" width="48" height="3" style="fill:#2fc6ff"></rect></g><g transform="translate(282 386) rotate(-6) scale(1)"><rect x="0" y="0" width="62" height="46" rx="3" style="fill:#fff; stroke:#000; stroke-width:3"></rect><rect x="0" y="0" width="62" height="11" rx="3" style="fill:#ffd23f; stroke:#000; stroke-width:3"></rect><circle cx="6" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="12" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="18" cy="5.5" r="1.8" style="fill:#000"></circle><rect x="7" y="17" width="18" height="14" style="fill:#2fc6ff; stroke:#000; stroke-width:1.5"></rect><rect x="30" y="18" width="25" height="3.5" style="fill:#000"></rect><rect x="30" y="25" width="19" height="3.5" style="fill:#000"></rect><rect x="7" y="36" width="48" height="3" style="fill:#2fc6ff"></rect></g>
<path d="M196 296 C186 360 205 420 250 436 C300 446 340 420 360 440 L372 446 C350 400 352 350 348 312 Z" style="fill:url(#vsNet); opacity:.6"></path>
<path d="M196 296 C186 360 205 420 250 436 C300 446 340 420 360 440 L372 446 C350 400 352 350 348 312 Z" style="fill:none; stroke:#000; stroke-width:3; stroke-linejoin:round"></path>
<path d="M212 318 C216 380 240 418 272 430 M330 330 C326 380 340 410 356 432" style="fill:none; stroke:#000; stroke-width:1.5"></path>
<line x1="196" y1="296" x2="348" y2="312" style="stroke:#000; stroke-width:8; stroke-linecap:round"></line>
<line x1="196" y1="296" x2="348" y2="312" style="stroke:#ffd23f; stroke-width:3.5; stroke-linecap:round"></line>
<g transform="translate(112 300) rotate(18) scale(.72)"><g style="animation:drift 5s ease-in-out infinite"><g transform="translate(0 0) rotate(0) scale(1)"><rect x="0" y="0" width="62" height="46" rx="3" style="fill:#fff; stroke:#000; stroke-width:3"></rect><rect x="0" y="0" width="62" height="11" rx="3" style="fill:#ff4d5e; stroke:#000; stroke-width:3"></rect><circle cx="6" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="12" cy="5.5" r="1.8" style="fill:#000"></circle><circle cx="18" cy="5.5" r="1.8" style="fill:#000"></circle><rect x="7" y="17" width="18" height="14" style="fill:#2fc6ff; stroke:#000; stroke-width:1.5"></rect><rect x="30" y="18" width="25" height="3.5" style="fill:#000"></rect><rect x="30" y="25" width="19" height="3.5" style="fill:#000"></rect><rect x="7" y="36" width="48" height="3" style="fill:#2fc6ff"></rect></g></g></g>
<circle cx="186" cy="300" r="3" style="fill:none; stroke:#cfefff; stroke-width:1.5; animation:rise 3.2s ease-in 0s infinite"></circle><circle cx="178" cy="330" r="2" style="fill:none; stroke:#cfefff; stroke-width:1.5; animation:rise 3.2s ease-in 1.2s infinite"></circle><circle cx="304" cy="300" r="3" style="fill:none; stroke:#cfefff; stroke-width:1.5; animation:rise 3.2s ease-in 0.6s infinite"></circle><circle cx="358" cy="300" r="2.5" style="fill:none; stroke:#cfefff; stroke-width:1.5; animation:rise 3.2s ease-in 1.8s infinite"></circle><circle cx="140" cy="290" r="2" style="fill:none; stroke:#cfefff; stroke-width:1.5; animation:rise 3.2s ease-in 2.4s infinite"></circle>
<g style="transform-origin:140px 172px; animation:bob 5s ease-in-out infinite">
<line x1="128" y1="100" x2="128" y2="38" style="stroke:#000; stroke-width:3"></line>
<line x1="116" y1="54" x2="140" y2="54" style="stroke:#000; stroke-width:3"></line><line x1="121" y1="68" x2="135" y2="68" style="stroke:#000; stroke-width:3"></line>
<line x1="52" y1="150" x2="52" y2="116" style="stroke:#000; stroke-width:3"></line>
<path d="M52 116 L74 123 L52 130 Z" style="fill:#ff4d5e; stroke:#000; stroke-width:2.5; stroke-linejoin:round"></path>
<line x1="212" y1="148" x2="260" y2="96" style="stroke:#000; stroke-width:8; stroke-linecap:round"></line>
<line x1="212" y1="148" x2="260" y2="96" style="stroke:#ffd23f; stroke-width:3.5; stroke-linecap:round"></line>
<line x1="228" y1="148" x2="246" y2="112" style="stroke:#000; stroke-width:3"></line>
<circle cx="262" cy="96" r="7" style="fill:#fff; stroke:#000; stroke-width:3"></circle><circle cx="262" cy="96" r="2" style="fill:#000"></circle>
<rect x="95" y="108" width="70" height="40" style="fill:#e6dcc2; stroke:#000; stroke-width:3"></rect>
<rect x="103" y="116" width="11" height="13" style="fill:#2fc6ff; stroke:#000; stroke-width:2.5"></rect><rect x="119" y="116" width="11" height="13" style="fill:#2fc6ff; stroke:#000; stroke-width:2.5"></rect><rect x="135" y="116" width="11" height="13" style="fill:#2fc6ff; stroke:#000; stroke-width:2.5"></rect><rect x="151" y="116" width="8" height="13" style="fill:#2fc6ff; stroke:#000; stroke-width:2.5"></rect>
<path d="M100 146 l8 -8 M110 146 l8 -8 M120 146 l8 -8 M140 146 l8 -8 M150 146 l8 -8" style="stroke:#000; stroke-width:1.2; opacity:.55"></path>
<rect x="90" y="100" width="80" height="9" style="fill:#000"></rect>
<path d="M143 100 a7 7 0 0 1 14 0 Z" style="fill:#f3ead3; stroke:#000; stroke-width:2.5"></path>
<path d="M44 140 L95 139 M44 140 V150 M60 140 V150 M76 139 V149" style="fill:none; stroke:#000; stroke-width:2"></path>
<rect x="194" y="136" width="16" height="12" style="fill:#ff4d5e; stroke:#000; stroke-width:2.5"></rect>
<circle cx="180" cy="140" r="6" style="fill:none; stroke:#000; stroke-width:6"></circle><circle cx="180" cy="140" r="6" style="fill:none; stroke:#ff4d5e; stroke-width:3"></circle>
<path d="M40 150 L232 146 Q226 172 210 180 L64 182 Q48 172 40 150 Z" style="fill:#f3ead3; stroke:#000; stroke-width:3.5; stroke-linejoin:round"></path>
<path d="M51 168 L225 166 Q219 176 210 180 L64 182 Q55 176 51 168 Z" style="fill:#ff4d5e; stroke:#000; stroke-width:2.5; stroke-linejoin:round"></path>
<path d="M58 162 l6 -6 M68 163 l6 -6 M78 163 l6 -6 M200 160 l6 -6 M210 159 l6 -6" style="stroke:#000; stroke-width:1.2; opacity:.55"></path>
<text x="96" y="162" style="font:700 12px 'JetBrains Mono', monospace; letter-spacing:.08em; fill:#000">CRAWLER</text>
<path d="M30 176 q6 -4 12 0 q6 -4 12 0 M214 176 q6 -4 12 0 q6 -4 12 0" style="fill:none; stroke:#fff; stroke-width:2; stroke-linecap:round"></path>
</g>
</svg>
</div>`;


  /* 2. Templates
     ------------------------------------------------------------------------
     Each function receives one project and returns that layer's markup.
     Content is authored above, but we still escape it so code samples with
     < or & can never break the page.
     ======================================================================== */

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const ext = (href) => `href="${esc(href)}" target="_blank" rel="noopener"`;

  const chapter = (n, label, title, lead = '') => `
    <div class="chapter">
      <span class="tag">Chapter ${n} · ${esc(label)}</span>
      <h2 class="chapter__title">${esc(title)}</h2>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    </div>`;

  const templates = {
    nav: (p) => `
      <div class="nav">
        <div class="container nav__inner">
          <a class="brand" href="${esc(p.links.site)}">
            <span class="brand__tile">${esc(p.tile.sym)}<small>${esc(p.tile.num)}</small></span>
            <span class="brand__text">
              <span class="brand__name">${esc(p.name)}</span>
              <span class="brand__sub">RubyCDP · Issue ${esc(p.issue)}</span>
            </span>
          </a>
          <nav class="nav__links">
            <a href="#start">Quick start</a>
            <a href="#powers">Powers</a>
            <a ${ext(p.links.docs)}>Docs</a>
          </nav>
          <a class="stars" ${ext(p.links.github)}>★ <span data-stars="${p.key}">${esc(p.stars)}</span></a>
        </div>
      </div>`,

    hero: (p) => `
      <div class="hero textured">
        <div class="container hero__grid">
          <div class="hero__copy">
            <div class="badges">
              <span class="badge--dark">RubyCDP Comics presents</span>
              <span class="badge--issue">Issue ${esc(p.issue)}</span>
              <a class="badge--maker" ${ext(MAKER.url)}>by ${esc(MAKER.name)}</a>
            </div>
            <h1 class="hero__title">${esc(p.title)}</h1>
            <div class="hero__kicker">${esc(p.kicker)}</div>
            <p class="hero__desc">${esc(p.desc)}</p>
            <div class="actions">
              <a class="btn btn--primary" ${ext(p.links.docs)}>Read the docs →</a>
              <a class="btn btn--ghost" ${ext(p.links.github)}>★ Star · <span data-stars="${p.key}">${esc(p.stars)}</span></a>
            </div>
            <div class="install">
              <span class="install__prompt">$</span>
              <code class="install__cmd">${esc(p.install)}</code>
              <button class="install__copy" type="button" data-copy="${esc(p.install)}">COPY</button>
            </div>
          </div>

          <div class="cover" aria-hidden="true">
            <div class="cover__rays"></div>
            <div class="cover__dots"></div>
            <div class="cover__bar"><span>${esc(p.name)} ${esc(p.issue)}</span><span>${esc(p.coverTag)}</span></div>

            ${p.key === 'vessel' ? BOAT : `
            <div class="tile">
              <div class="tile__top"><span>${esc(p.tile.num)}</span><span>${esc(p.tile.meta)}</span></div>
              <div class="tile__eyes">
                <div class="acc acc--mask"></div>
                <div class="eye-wrap"><div class="eye"><div class="pupil"></div></div></div>
                <div class="eye-wrap"><div class="eye"><div class="pupil"></div></div><div class="acc acc--monocle"></div></div>
              </div>
              <div class="tile__sym">${esc(p.tile.sym)}</div>
              <div class="tile__name">${esc(p.tile.name)}</div>
            </div>`}

            <div class="sfx"><div class="sfx__fill">${esc(p.sfx)}</div></div>
            <div class="bubble"><span>${esc(p.bubble)}</span><i class="caret"></i></div>
            <div class="barcode">MIT · $0.00</div>
          </div>
        </div>
      </div>`,

    // Text is doubled so the marquee can loop seamlessly at -50%.
    ticker: (p) => `
      <div class="ticker">
        <div class="ticker__band">
          <div class="ticker__track"><span>${esc(p.ticker)}</span><span>${esc(p.ticker)}</span></div>
        </div>
      </div>`,

    start: (p) => `
      <div class="section">
        <div class="container">
          ${chapter(1, 'Quick start', p.startTitle)}
          <div class="panels">
            ${p.panels.map((pn, i) => `
              <article class="panel">
                <div class="panel__cap">${i + 1} · ${esc(pn.cap)}</div>
                <pre class="panel__code">${esc(pn.code)}</pre>
                <p class="panel__note">${esc(pn.note)}</p>
              </article>`).join('')}
          </div>
        </div>
      </div>`,

    powers: (p) => `
      <div class="powers textured">
        <div class="container">
          ${chapter(2, 'Superpowers', p.powersTitle)}
          <div class="cards">
            ${p.powers.map((pw, i) => `
              <article class="card">
                <span class="card__n">POWER ${String(i + 1).padStart(2, '0')}</span>
                <h3 class="card__title">${esc(pw.t)}</h3>
                <p class="card__desc">${esc(pw.d)}</p>
                <code class="card__method">${esc(pw.m)}</code>
              </article>`).join('')}
          </div>
        </div>
      </div>`,

    // Chrome → CDP → Ferrum → Cuprite + Vessel. Sibling nodes get their own
    // theme class so they show in their own colours, and switch on click.
    universe: (p) => {
      const core = (name, role) => `
        <div class="chain__link">
          <div class="node node--core"><span class="node__role">${role}</span><span class="node__name">${name}</span></div>
          <span class="chain__sep">→</span>
        </div>`;
      const seps = ['→', '+', ''];
      const projects = PROJECTS.map((q, i) => {
        const me = q.key === p.key;
        const cls = me ? 'node--me' : `node--other theme--${q.key}`;
        const attrs = me ? 'aria-current="true"' : `type="button" data-go="${q.key}"`;
        const tag = me ? 'div' : 'button';
        return `
          <div class="chain__link">
            <${tag} class="node ${cls}" ${attrs}>
              <span class="node__role">Issue ${esc(q.issue)}</span>
              <span class="node__name">${esc(q.name)}</span>
            </${tag}>
            ${seps[i] ? `<span class="chain__sep">${seps[i]}</span>` : ''}
          </div>`;
      }).join('');

      return `
        <div class="section">
          <div class="container">
            ${chapter(3, 'The universe', 'One protocol, three heroes',
              'Ferrum talks to Chrome over the DevTools Protocol. Cuprite and Vessel stand on its shoulders. Drag the seam to jump between issues.')}
            <div class="chain">
              ${core('Chrome', 'The browser')}
              ${core('CDP', 'The protocol')}
              ${projects}
            </div>
          </div>
        </div>`;
    },

    footer: (p) => {
      const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
      return `
        <div class="outro">
          <div class="outro__rays" aria-hidden="true"></div>
          <div class="container outro__body">
            <span class="outro__tag">To be continued…</span>
            <h2 class="outro__title">${esc(p.outro)}</h2>
            <div class="actions" style="justify-content:center">
              <a class="btn btn--primary" ${ext(p.links.docs)}>Read the docs →</a>
              <button class="btn btn--ghost" type="button" data-go="${next.key}">Next issue: ${esc(next.name)} ${esc(next.issue)} →</button>
            </div>
            <div class="outro__meta">
              <a ${ext(p.links.github)}>github.com/rubycdp/${esc(p.key)}</a>
              <span>MIT License</span>
              <span>© RubyCDP</span>
              <a class="maker" ${ext(MAKER.url)}>by ${esc(MAKER.name)}</a>
            </div>
          </div>
        </div>`;
    }
  };


  /* 3. Rendering
     ======================================================================== */

  function render() {
    document.querySelectorAll('[data-render]').forEach((stack) => {
      const tpl = templates[stack.dataset.render];
      if (!tpl) return;
      stack.innerHTML = PROJECTS.map((p) => `
        <div class="layer layer--${p.key} theme--${p.key}" data-layer="${p.key}">${tpl(p)}</div>`
      ).join('');
    });
  }


  /* 4. Seams
     ------------------------------------------------------------------------
     Two numbers drive the whole page: s1 and s2 (px from the left edge).
       Ferrum  = [0, s1]   Cuprite = [s1, s2]   Vessel = [s2, width]
     They're written to CSS as --s1 / --s2; the layers clip themselves.
     ======================================================================== */

  const root = document.documentElement;

  const seams = {
    s1: 0,
    s2: 0,
    width: 0,
    active: -1,
    frame: 0,

    /** Usable viewport width (excludes the scrollbar). */
    measure() {
      return root.clientWidth || window.innerWidth || 1280;
    },

    /** Seam positions for a named view. */
    preset(name) {
      const w = this.width;
      switch (name) {
        case 'cuprite': return [0, w];
        case 'vessel':  return [0, 0];
        case 'all':     return [w / 3, (2 * w) / 3];
        default:        return [w, w]; // ferrum
      }
    },

    /** Push current positions to CSS and update the "active" issue. */
    apply() {
      root.style.setProperty('--s1', `${this.s1.toFixed(1)}px`);
      root.style.setProperty('--s2', `${this.s2.toFixed(1)}px`);

      const widths = [this.s1, this.s2 - this.s1, this.width - this.s2];
      const active = widths.indexOf(Math.max(...widths));
      if (active !== this.active) {
        this.active = active;
        onActiveChange(PROJECTS[active]);
      }
    },

    /** Jump without animation. */
    set([a, b]) {
      cancelAnimationFrame(this.frame);
      this.s1 = a;
      this.s2 = b;
      this.apply();
    },

    /** Animate to target positions with ease-in-out-cubic. */
    tweenTo([a, b], duration = 650) {
      cancelAnimationFrame(this.frame);
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) duration = 0;

      const from = [this.s1, this.s2];
      const start = performance.now();
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

      const step = (now) => {
        const t = duration ? Math.min(1, (now - start) / duration) : 1;
        const k = ease(t);
        this.s1 = from[0] + (a - from[0]) * k;
        this.s2 = from[1] + (b - from[1]) * k;
        this.apply();
        if (t < 1) this.frame = requestAnimationFrame(step);
      };
      this.frame = requestAnimationFrame(step);
    },

    go(name) {
      this.tweenTo(this.preset(name));
    },

    /** Snap seams that land near an edge, for clean single-issue views. */
    snap() {
      const w = this.width;
      const s = (v) => (v < w * 0.05 ? 0 : v > w * 0.95 ? w : v);
      this.tweenTo([s(this.s1), s(this.s2)], 300);
    },

    /**
     * Resolve which seam a handle should move. When both seams sit on top of
     * each other at an edge, the one that can actually move wins.
     */
    pick(which) {
      if (Math.abs(this.s1 - this.s2) < 2) return this.s1 > this.width / 2 ? 1 : 2;
      return which;
    },

    /** Move one seam to x, keeping s1 <= s2. */
    move(seam, x) {
      x = Math.max(0, Math.min(this.width, x));
      if (seam === 1) this.s1 = Math.min(x, this.s2);
      else this.s2 = Math.max(x, this.s1);
      this.apply();
    },

    /** Keep proportions when the window resizes. */
    resize() {
      const w = this.measure();
      const f1 = this.width ? this.s1 / this.width : 1;
      const f2 = this.width ? this.s2 / this.width : 1;
      this.width = w;
      this.set([f1 * w, f2 * w]);
    }
  };

  /** Called whenever a different issue takes up most of the screen. */
  function onActiveChange(project) {
    document.title = `${project.name} — ${project.kicker}`;

    document.querySelectorAll('.switcher__btn').forEach((btn) => {
      const on = btn.dataset.go === project.key;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    // Hide off-screen layers from assistive tech and the tab order.
    document.querySelectorAll('[data-layer]').forEach((layer) => {
      const hidden = layer.dataset.layer !== project.key;
      layer.toggleAttribute('inert', hidden);
      layer.setAttribute('aria-hidden', String(hidden));
    });
  }

  function bindHandles() {
    document.querySelectorAll('.handle').forEach((handle) => {
      handle.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        stopNudging();
        cancelAnimationFrame(seams.frame);

        const seam = seams.pick(Number(handle.dataset.seam));
        handle.setPointerCapture(e.pointerId);

        const onMove = (ev) => seams.move(seam, ev.clientX);
        const onUp = () => {
          handle.removeEventListener('pointermove', onMove);
          handle.removeEventListener('pointerup', onUp);
          handle.removeEventListener('pointercancel', onUp);
          seams.snap();
        };
        handle.addEventListener('pointermove', onMove);
        handle.addEventListener('pointerup', onUp);
        handle.addEventListener('pointercancel', onUp);
      });

      // Arrow keys nudge the focused handle; Shift moves further.
      handle.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        stopNudging();
        const seam = seams.pick(Number(handle.dataset.seam));
        const step = (e.shiftKey ? 0.2 : 0.05) * seams.width * (e.key === 'ArrowLeft' ? -1 : 1);
        seams.move(seam, (seam === 1 ? seams.s1 : seams.s2) + step);
      });
    });
  }

  function stopNudging() {
    document.querySelector('.handle.is-nudging')?.classList.remove('is-nudging');
  }


  /* 5. Extras
     ======================================================================== */

  /** One delegated listener for [data-go] (switch issue) and [data-copy]. */
  function bindClicks() {
    document.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]');
      if (go) {
        stopNudging();
        seams.go(go.dataset.go);
        return;
      }

      const copy = e.target.closest('[data-copy]');
      if (copy) {
        navigator.clipboard?.writeText(copy.dataset.copy).catch(() => {});
        copy.textContent = 'COPIED!';
        clearTimeout(copy._reset);
        copy._reset = setTimeout(() => { copy.textContent = 'COPY'; }, 1400);
      }
    });
  }

  /** Tile heroes look toward the cursor (throttled to one update per frame). */
  function bindEyes() {
    let pending = false;
    const clamp = (v) => Math.max(-1, Math.min(1, v));

    window.addEventListener('pointermove', (e) => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const w = seams.width;
        const h = window.innerHeight;
        root.style.setProperty('--px', `${(clamp((e.clientX - w * 0.72) / (w * 0.3)) * 8).toFixed(1)}px`);
        root.style.setProperty('--py', `${(clamp((e.clientY - h * 0.5) / (h * 0.5)) * 8).toFixed(1)}px`);
      });
    }, { passive: true });
  }

  /** Keys 1–4 pick Ferrum, Cuprite, Vessel, All. */
  function bindKeys() {
    const order = [...KEYS, 'all'];
    document.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (/^(input|textarea|select)$/i.test(e.target.tagName)) return;
      const i = ['1', '2', '3', '4'].indexOf(e.key);
      if (i >= 0) {
        stopNudging();
        seams.go(order[i]);
      }
    });
  }

  /**
   * Swaps the authored star counts for live ones from the GitHub API.
   * Results are cached for an hour to stay under the 60 requests/hour
   * unauthenticated limit; on any failure the authored numbers stay.
   */
  function loadStars() {
    const TTL = 60 * 60 * 1000;
    const format = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n));
    const show = (key, count) => {
      document.querySelectorAll(`[data-stars="${key}"]`).forEach((el) => { el.textContent = format(count); });
    };

    PROJECTS.forEach((p) => {
      const repo = new URL(p.links.github).pathname.slice(1);
      const cacheKey = `stars:${repo}`;

      try {
        const cached = JSON.parse(localStorage.getItem(cacheKey));
        if (cached && Date.now() - cached.at < TTL) return show(p.key, cached.count);
      } catch {}

      fetch(`https://api.github.com/repos/${repo}`, { headers: { Accept: 'application/vnd.github+json' } })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then(({ stargazers_count: count }) => {
          show(p.key, count);
          try { localStorage.setItem(cacheKey, JSON.stringify({ count, at: Date.now() })); } catch {}
        })
        .catch(() => {});
    });
  }

  /** ?issue=… beats <body data-issue>, which beats the Ferrum default. */
  function startingIssue() {
    const fromQuery = new URLSearchParams(location.search).get('issue');
    const fromBody = document.body.dataset.issue;
    const valid = [...KEYS, 'all'];
    return [fromQuery, fromBody].find((v) => valid.includes(v)) || 'ferrum';
  }


  /* 6. Boot
     ======================================================================== */

  function init() {
    render();
    seams.width = seams.measure();
    seams.set(seams.preset(startingIssue()));

    bindHandles();
    bindClicks();
    bindEyes();
    bindKeys();
    loadStars();
    window.addEventListener('resize', () => seams.resize());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
