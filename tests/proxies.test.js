const expect = require("chai").expect;
const ans = require("../src/proxies");

describe("Proxy is about Reflection through intercession - wrapping objects and intercepting their behaviours through traps. Intercession allows to redefine the semantics of some language operations.", () => {
    it("It should not return undefined through a proxy/handler.", () => {
        const target = {};
        const proxy = new Proxy(target, ans.handler);
        expect(proxy.prop).to.not.eql(undefined);
    });
    it("It should validate data through a proxy.", () => {
        const proxy = new Proxy({}, ans.validator);
        proxy.age = "old";
        expect(proxy.age).to.eql(undefined);
        proxy.age = 99;
        expect(proxy.age).to.eql(99);
    });
});
