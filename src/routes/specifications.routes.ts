import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationContoller.handle);

export { specificationsRoutes };
