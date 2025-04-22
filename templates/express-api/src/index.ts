import express from "express";
import startWithLog from "./app/middleware/startWithLog";
import errorHandler from "./app/middleware/errorHandler";
import settings from "./settings";
import router from "./app/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(startWithLog)
// add pre-request middleware here
app.use(router)
// add post-request middleware here
app.use(errorHandler)

app.listen(settings.PORT, () => {
  console.log(`server running at http://localhost:${settings.PORT}`);
});
