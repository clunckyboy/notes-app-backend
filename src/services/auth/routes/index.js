import { Router } from 'express';
import { login, refreshToken, logout } from '../controller/authentication-controller.js';
import { validate } from '../../../middlewares/validate.js';
import {
  postAuthenticationPayloadSchema,
  putAuthenticationPayloadSchema,
  delteAuthenticationPayloadSchema,
} from '../validator/schema.js';

const router = Router();

router.post('/authentications', validate(postAuthenticationPayloadSchema), login);
router.put('/authentications', validate(putAuthenticationPayloadSchema), refreshToken);
router.delete('/authentications', validate(delteAuthenticationPayloadSchema), logout);

export default router;