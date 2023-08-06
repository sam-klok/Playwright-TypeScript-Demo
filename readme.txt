I'm studying testing software Playwright for TypeScript.
Thank you,
Sergio (Sam) Klokov

Used:
1. Playwright
https://playwright.dev/

2. To install Playwright (see results below)
npm init playwright@latest

3. Install VS Code extension: Playwright Test for VSCode

4. To run tests (it will test website https://playwright.dev ):
npx playwright test

5. To run/debug tests in VS with extension
Go to menu "Testing" (chemical bottle on the left), see screens.

6. To record tests from manual input the browser https://playwright.dev/docs/codegen-intro
npx playwright codegen

2. install Playwright results:
PS C:\Repos\Playwright-TypeScript-Demo> npm init playwright@latest
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests 
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
Wrote to C:\Repos\Playwright-TypeScript-Demo\package.json:
{
  "name": "playwright-typescript-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" 
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
Installing Playwright Test (npm install --save-dev @playwright/test)…
added 3 packages, and audited 4 packages in 3s
found 0 vulnerabilities
Downloading browsers (npx playwright install)…
Writing playwright.config.ts.
Writing tests\example.spec.ts.
Writing tests-examples\demo-todo-app.spec.ts.
Writing package.json.
✔ Success! Created a Playwright Test project at C:\Repos\Playwright-TypeScript-Demo

Inside that directory, you can run several commands:
  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭


4. Run test results:
PS C:\Repos\Playwright-TypeScript-Demo>
 *  History restored 
Running 6 tests using 2 workers
  6 passed (22.4s)
To open last HTML report run:
  npx playwright show-report

