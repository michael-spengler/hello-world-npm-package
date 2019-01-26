import { HelloWorldProvider } from "./hello-world-provider"

describe("HelloWorldProvider", () => {

    it("should provide hello world", async () => {
        const helloWorldProvider: HelloWorldProvider =
            new HelloWorldProvider()

        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World")
    })

})
