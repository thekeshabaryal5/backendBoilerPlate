import { Router } from "express";
import {
  createPersonController,
  deletePersonController,
  readAllPersonController,
  readPersonController,
  updatePersonController,
} from "../controller/person.controller.js";

let personRouter = Router();
console.log("reached in router")
personRouter
  .route("/")
  .post(createPersonController)
  .get(readAllPersonController);

personRouter
  .route("/:id")
  .get(readPersonController)
  .patch(updatePersonController)
  .delete(deletePersonController);

export default personRouter;
