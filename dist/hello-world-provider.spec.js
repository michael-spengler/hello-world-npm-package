"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_provider_1 = require("./hello-world-provider");
let helloWorldProvider;
describe("HelloWorldProvider", () => {
    beforeEach(async () => {
        helloWorldProvider = new hello_world_provider_1.HelloWorldProvider();
    });
    it("should provide hello world", async () => {
        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World");
    });
});
