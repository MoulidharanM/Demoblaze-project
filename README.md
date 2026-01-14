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
# Playwright E2E Tests

End-to-end Playwright test suite for this demo project (login, product, cart, payment flows).

**Quick summary**
- **What**: Playwright + @playwright/test JavaScript tests using small page-helper modules.
- **Location**: tests in the `tests/` folder, helpers in the `E2E/` folder, test data in `data/`.

**Prerequisites**
- Node.js v16+ installed

**Install dependencies**
```bash
npm install
npx playwright install
```

**Run tests**
- Run all tests (headless):

```bash
npx playwright test
```

- Run a single test file (headed):

```bash
npx playwright test tests/E2E.spec.js --headed
```

- Show the HTML report (after a run):

```bash
npx playwright show-report
```

**Suggested npm scripts**
Add these to `package.json` for convenience:

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "show-report": "npx playwright show-report"
}
```

**Project structure**
- `package.json` — project metadata and deps
- `playwright.config.js` — Playwright config and reporters
- `data/testData.json` — test data (URLs, credentials, product info)
- `E2E/` — page helpers: [E2E/Loginpage.js](E2E/Loginpage.js), [E2E/Product.js](E2E/Product.js), [E2E/Cartpage.js](E2E/Cartpage.js), [E2E/Paymentpage.js](E2E/Paymentpage.js)
- `tests/` — test specs (see [tests/E2E.spec.js](tests/E2E.spec.js))
- `playwright-report/` — generated HTML report directory
- `test-results/` — structured test results (if configured)

**Notes & recommendations**
- Run `npx playwright install` if browser binaries are missing.
- Keep secrets out of `data/testData.json`; use environment variables or a secure vault for real projects.
- Consider adding CI scripts (Jenkinsfile is present) to run `npx playwright test` and publish reports.

**Next steps**
- I can add the `scripts` to `package.json`, run the test suite, or extend the README with CI instructions — tell me which you'd like.
