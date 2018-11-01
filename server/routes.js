const api = require("./controller.js");
const bp = require("body-parser");

function routes(app)
{
    app.use(bp.json());
    app.get("/authors", api.allAuthors);
    app.post("/authors", api.createAuthor);
    app.put("/quotes/new/:author_id", api.createQuote);
    app.get("/authors/:author_id", api.oneAuthor);
    app.put("/authors/:author_id", api.updateAuthor);
    app.delete("/authors/:author_id", api.deleteAuthor);
    app.patch("/quotes/:quote_id", api.updateQuote);
    app.delete("/quotes/:quote_id", api.deleteQuote);
    return app;
}

module.exports = routes;