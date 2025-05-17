const express = require("express");
const path = require("path");
const ApiRoutes = require("./src/routes/ApiRoutes");
const WebRoutes = require("./src/routes/WebRoutes");

class MyApp {
    static main() {
        const app = express();
        const PORT = 80;

        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "src/views"));

        app.use("/api", ApiRoutes.init());
        app.use("/", WebRoutes.init());

        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    }
}

MyApp.main();