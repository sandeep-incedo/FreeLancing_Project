import Joi from 'joi';

export const saveInputs = {
    body: Joi.object({
        inputNumber: Joi.number().required().min(1).max(25)
    })
};