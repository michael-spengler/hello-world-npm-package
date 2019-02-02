"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("."); // Users of the module at hand should write
// import { HelloWorldProvider } from "hello-world-npm-package"
describe("HelloWorldProvider", () => {
    it("should provide hello world", async () => {
        const helloWorldProvider = new _1.HelloWorldProvider();
        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World");
    });
});
