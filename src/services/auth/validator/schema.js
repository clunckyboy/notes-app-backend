import Joi from 'joi';

export const postAuthenticationPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const putAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

export const delteAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});