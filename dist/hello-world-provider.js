"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloWorldProvider {
    constructor() {
        this.data = "Hello World";
    }
    provideHelloWorld() {
        return this.data;
    }
}
exports.HelloWorldProvider = HelloWorldProvider;
