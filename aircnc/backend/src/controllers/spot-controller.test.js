const spot_controller = require("./spot-controller")
// @ponicode
describe("spot_controller.index", () => {
    test("0", async () => {
        await spot_controller.index({ query: "DROP TABLE tmp;" }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("1", async () => {
        await spot_controller.index({ query: "UNLOCK TABLES;" }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("2", async () => {
        await spot_controller.index({ query: "DROP TABLE tmp;" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("3", async () => {
        await spot_controller.index({ query: "DELETE FROM Projects WHERE pid = %s" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("4", async () => {
        await spot_controller.index({ query: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';" }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("5", async () => {
        await spot_controller.index(undefined, undefined)
    })
})

// @ponicode
describe("spot_controller.store", () => {
    test("0", async () => {
        await spot_controller.store({ file: "libclang.so", body: -1.0, headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, { status: () => 400, json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        await spot_controller.store({ file: ":", body: -0.5, headers: "https://api.telegram.org/" }, { status: () => 200, json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("2", async () => {
        await spot_controller.store({ file: "decoder.cc", body: 0.5, headers: "https://api.telegram.org/bot" }, { status: () => 400, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("3", async () => {
        await spot_controller.store({ file: "decoder.cc", body: 10.0, headers: "www.google.com" }, { status: () => 500, json: () => "\"[3,\"false\",false]\"" })
    })

    test("4", async () => {
        await spot_controller.store({ file: "InfoPlist.strings", body: 10.23, headers: { Accept: "*/*", Accept-Encoding: "gzip, deflate", Host: "httpbin.org", User-Agent: "Chrome/83.0.4103.97 Safari/537.36", X-Amzn-Trace-Id: "Root=1-5ee7b614-d1d9a6e8106184eb3d66b108" } }, { status: () => 404, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await spot_controller.store({ file: "", body: -Infinity, headers: {} }, {})
    })
})
