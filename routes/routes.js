// import * as validationInputs from "/src/validations";
// import { validate } from "~/util/middleware";
import Router from 'express';
import { DashboardController } from "../src/controllers";
import { validate } from '../util/middleware';
import * as validationInputs from '../src/validations';
const routerV1 = Router();

routerV1.post("/dashboard", validate(validationInputs.saveInputs), DashboardController.saveInputs);

export default routerV1;
