import * as joi from 'joi';
import j2s from 'joi-to-swagger';

const CreateUserjoiSchema = joi.object().keys({
    username:    joi.string().required(),
    addressLine1:   joi.string().required(),
    state: joi.string().required(),
    country: joi.string().required()
})

const createUserSchema = j2s(CreateUserjoiSchema).swagger
export default createUserSchema