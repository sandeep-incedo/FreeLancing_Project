export const validate = (inputRule) => {
    return async (req, res, next) => {

        let options = {
            errors: {
                labels: false,
                language: req.headers && req.headers['accept-language'] || 'en'
            },
        };

        if (!error && inputRule.body) {
            var { error, value } = inputRule.body.validate(req.body, options);
        }
        if (!error && inputRule.query) {
            var { error, value } = inputRule.query.validate(req.query, options);
        }
        if (!error && inputRule.params) {
            var { error, value } = inputRule.params.validate(req.params, options);
        }
        if (!error && inputRule.headers) {
            var { error, value } = inputRule.headers.validate(req.headers, options);
        }

        if (error) {
            res.status(400).send({
                "error": true,
                "message": error.message || "Invalid input",
                "data": {}
            });
        } else {
            next()
        }
    }
}