const Joi = require('joi');
const { ValidationError } = require('../errors/AppError');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .pattern(/[A-Z]/)
        .pattern(/[0-9]/)
        .required()
        .messages({
            'string.pattern.base': 'Password must contain uppercase letter and number'
        }),
    age: Joi.number().min(18).required()
});
const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        return next(new ValidationError(error.details[0].message));
    }
    next();
};
module.exports = validateUser;