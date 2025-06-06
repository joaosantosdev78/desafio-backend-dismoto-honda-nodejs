const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "O nome do produto é obrigatório.",
  }),
  description: Joi.string().required().messages({
    "string.empty": "A descrição do produto é obrigatória.",
  }),
  price: Joi.number().required().min(0).messages({
    "string.empty": "O preço do produto é obrigatório.",
  }),
});

module.exports = productSchema;
