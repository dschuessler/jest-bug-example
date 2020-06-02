# Jest Electron Runner bug example

Setup:

```
npm install
npx jest
```

The test passes.

Now go to `package.json` and change either the version of `@jest-runner/electron` to `3.0.0` or the version of `jest` to `25.0.0`. Run `rm -rf node_modules/ && npm install && npx jest`.

The test now fails.

```
    ✕ electron mock (9 ms)

  ● Strip › electron mock

    expect(received).toBeDefined()

    Received: undefined

       5 | describe("Strip", () => {
       6 |   test("electron mock", () => {
    >  7 |     expect(app).toBeDefined();
         |                 ^
       8 |   });
       9 | });
      10 | 

      at Object.<anonymous> (src/main/strip.test.ts:7:17)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        6.846 s
```
