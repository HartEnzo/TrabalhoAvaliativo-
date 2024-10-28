import "dotenv/config";
import "./config/db.js";
import e from "express";
import expeditionRoute from "./router/expeditionRoute.js";
import explorerRoute from "./router/explorerRoute.js";
import speciesRoute from "./router/speciesRoute.js";


const app = e();

app.use(e.json());

app.use("/expedition", expeditionRoute);
app.use("/explorer", explorerRoute);
app.use("/species", speciesRoute);

app.listen(process.env.API_PORT, () => console.log(`Server running at ${process.env.API_PORT}`))