import { HelloWorldProvider } from "./hello-world-provider"

let helloWorldProvider: HelloWorldProvider

describe("HelloWorldProvider", () => {
    beforeEach(async () => {
        helloWorldProvider = new HelloWorldProvider()
    })

    it("should provide hello world", async () => {
        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World")
    })

})
