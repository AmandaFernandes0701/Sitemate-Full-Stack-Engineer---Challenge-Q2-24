const { z } = require('zod');
const { validateRequest } = require('zod-express-middleware');
const { default: mongoose } = require('mongoose');

const create = validateRequest({
  body: z.object({
    name: z
      .string({ required_error: 'The name is required' })
      .min(2, {
        message: 'Name must be at least 2 characters long',
      })
      .max(60, {
        message: 'Name cannot exceed 60 characters',
      }),
    age: z.number({ required_error: 'Age is required' }).min(0, {
      message: 'Age must be a positive number',
    }),
    profession: z.string({ required_error: 'Profession is required' }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, 'The ID is not valid'),
  }),
});

const update = validateRequest({
  body: z.object({
    name: z
      .string({ required_error: 'The name is required' })
      .min(2, {
        message: 'Name must be at least 2 characters long',
      })
      .max(60, {
        message: 'Name cannot exceed 60 characters',
      }),
    age: z.number({ required_error: 'Age is required' }).min(0, {
      message: 'Age must be a positive number',
    }),
    profession: z.string({ required_error: 'Profession is required' }),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
