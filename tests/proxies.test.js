const expect = require("chai").expect;
const ans = require("../src/proxies");

describe("Proxy is about Reflection through intercession - wrapping objects and intercepting their behaviours through traps. Intercession allows to redefine the semantics of some language operations.", () => {
    it("It should not return undefined.", () => {
        let target = {};
        let proxy = new Proxy(target, ans.handler);
        expect(proxy.prop).to.not.eql(undefined);
    });
});
