"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const records_router_1 = require("./routes/records.router");
const app = (0, express_1.default)();
const port = 3000;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/routes", records_router_1.recordsRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map