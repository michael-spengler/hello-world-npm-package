
export class HelloWorldProvider {

    private readonly data: string = "Hello World"

    public provideHelloWorld(): string {
        return this.data
    }

}
