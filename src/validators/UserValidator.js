import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { default as mongoose } from "mongoose";

const userValidator = {
  create: validateRequest({
    body: z.object({
      name: z
        .string({ required_error: "The name is required" })
        .min(2, {
          message: "Name must be at least 2 characters long",
        })
        .max(60, {
          message: "Name cannot exceed 60 characters",
        }),
      age: z.number({ required_error: "Age is required" }).min(0, {
        message: "Age must be a positive number",
      }),
      profession: z.string({ required_error: "Profession is required" }),
    }),
  }),

  update: validateRequest({
    body: z.object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(60, { message: "Name cannot exceed 60 characters" })
        .optional(),
      age: z
        .number()
        .min(0, { message: "Age must be a positive number" })
        .optional(),
      profession: z.string().optional(),
    }),
    params: z.object({
      id: z.custom(mongoose.isValidObjectId, "The ID is not valid"),
    }),
  }),

  destroy: validateRequest({
    params: z.object({
      id: z.custom(mongoose.isValidObjectId, "The ID is not valid"),
    }),
  }),
};

export default userValidator;
