"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_provider_1 = require("./hello-world-provider");
describe("HelloWorldProvider", () => {
    it("should provide hello world", async () => {
        const helloWorldProvider = new hello_world_provider_1.HelloWorldProvider();
        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World");
    });
});
