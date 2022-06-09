import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationContoller.handle);

export { specificationsRoutes };
