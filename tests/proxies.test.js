const expect = require("chai").expect;
const handler = require("../src/proxies");

describe("Proxy is about Reflection through intercession - wrapping objects and intercepting their behaviours through traps. Intercession allows to redefine the semantics of some language operations.", () => {
    it("It should not return undefined when reading a non-existent object property.", () => {
        const target = {};
        const proxy = new Proxy(target, handler.onGet);
        expect(proxy.prop).to.not.eql(undefined);
    });
    it("It should validate data through a proxy.", () => {
        const proxy = new Proxy({}, handler.onSet);
        proxy.age = "old";
        expect(proxy.age).to.eql(undefined);
        proxy.age = 99;
        expect(proxy.age).to.eql(99);
    });
    it("It should trap the delete operator.", () => {
        const proxy = new Proxy({ prop: 0 }, handler.onDelete);
        expect(delete proxy.prop).to.eql(true);
        expect(delete proxy.prop).to.eql(false);
    });
});
