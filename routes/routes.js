// import * as validationInputs from "/src/validations";
// import { validate } from "~/util/middleware";
import { DashboardController } from "./src/controllers";
const routerV1 = require("express");

routerV1.post("/dashboard", DashboardController.saveInputs());

export default routerV1;
