
import { HelloWorldProvider } from "." // Users of the module at hand should write
// import { HelloWorldProvider } from "hello-world-npm-package"

describe("HelloWorldProvider", () => {

    it("should provide hello world", async () => {
        const helloWorldProvider: HelloWorldProvider =
            new HelloWorldProvider()

        expect(helloWorldProvider.provideHelloWorld())
            .toEqual("Hello World")
    })

})
