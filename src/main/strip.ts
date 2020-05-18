import { app } from "electron";

export default class Strip {
  constructor() {}

  public init() {
    app.quit();
  }
}
