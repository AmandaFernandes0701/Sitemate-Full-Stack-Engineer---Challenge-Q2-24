const { z } = require('zod');
const { validateRequest } = require('zod-express-middleware');
const { default: mongoose } = require('mongoose');

const create = validateRequest({
  body: z.object({
    tittle: z
      .string({ required_error: 'The tittle is required' })
      .min(2, {
        message: 'Tittle must be at least 2 characters long',
      })
      .max(30, {
        message: 'Tittle cannot exceed 30 characters',
      }),
    description: z
      .string({ required_error: 'The description is required' })
      .min(50, {
        message: 'Description must be at least 50 characters long',
      })
      .max(200, {
        message: 'Description cannot exceed 200 characters',
      }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, 'The ID is not valid'),
  }),
});

const update = validateRequest({
  body: z.object({
    tittle: z
      .string({ required_error: 'The tittle is required' })
      .min(2, {
        message: 'Tittle must be at least 2 characters long',
      })
      .max(30, {
        message: 'Tittle cannot exceed 30 characters',
      }),
    description: z
      .string({ required_error: 'The description is required' })
      .min(50, {
        message: 'Description must be at least 50 characters long',
      })
      .max(200, {
        message: 'Description cannot exceed 20 characters',
      }),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
