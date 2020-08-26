const expect = require("chai").expect;
const ans = require("../src/proxies");

describe("Proxies", () => {
    it("It should not return undefined.", () => {
        let target = {};
        let proxy = new Proxy(target, ans.handler);
        expect(proxy.prop).to.not.eql(undefined);
    });
});
