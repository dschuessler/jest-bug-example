import { app } from "electron";

jest.mock("electron");

describe("Strip", () => {
  test("electron mock", () => {
    expect(app).toBeDefined();
  });
});
