# Playwright E2E Tests

End-to-end Playwright test suite for the sample demo site used in this repo.

**Quick summary**
- **What**: A small Playwright test project (tests + helpers) that exercises login, product selection, cart and payment flows.
- **Language / framework**: JavaScript with `@playwright/test`.

**Prerequisites**
- **Node.js**: v16+ recommended.
- **Install deps**: run `npm install` in the repository root.

**Install**

```bash
npm install
npx playwright install
```

**Run tests**
- Run all tests (headless):

```bash
npx playwright test
```

- Run a single test file (headed example):

```bash
npx playwright test tests/E2E.spec.js --headed
```

- Show the HTML report produced by Playwright (after a run):

```bash
npx playwright show-report
```

**Project structure**
- `package.json`: project dependencies and metadata.
- `playwright.config.js`: Playwright configuration and reporter.
- `data/testData.json`: test data (URL, credentials, product name, customer info).
- `E2E/`: page-object-like helpers for flows:
  - [E2E/Loginpage.js](E2E/Loginpage.js)
  - [E2E/Product.js](E2E/Product.js)
  - [E2E/Cartpage.js](E2E/Cartpage.js)
  - [E2E/Paymentpage.js](E2E/Paymentpage.js)
- `tests/`:
  - [tests/E2E.spec.js](tests/E2E.spec.js) — main scenario linking the helpers and `data/testData.json`.
  - [tests/example.spec.js](tests/example.spec.js) — example test file.
- `playwright-report/`: generated HTML report output from Playwright runs.

**Notes & recommendations**
- `package.json` currently has no `scripts` defined; you can add convenience scripts, for example:

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "show-report": "npx playwright show-report"
}
```

- `playwright.config.js` uses the HTML reporter and enables traces/videos/screenshots for retries — useful for debugging failures.
- Keep credentials and sensitive data out of `testData.json` for public repos. Prefer environment variables or `.env` for secrets.

**Contributing / Extending**
- Add tests to `tests/` and helper modules to `E2E/` following the existing pattern.
- Update `data/testData.json` or wire a config loader if you need multiple environments.

**Contact**
- If you want me to run the test suite, add scripts, or improve assertions, tell me which action to take next.
