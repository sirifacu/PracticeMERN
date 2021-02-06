import models from '../models/index';

export default {
    list: async(req, res, next) => {
        try {
            const users = await models.User.find()
            res.status(200).json(users);
        } catch (e) {
            res.status(500).send({
                message: 'There has been an error'
            });
            next(e);
        }
    },
    add: async (req, res, next) => {
        try {
            const { name } = req.body
            const prevUser = await models.User.findOne({ name });
            if (!prevUser) {
                const user = await models.User.create({name});
                res.status(200).json(user);
            } else {
                res.json({message: "That user name has been used."});
            }
        } catch (e) {
            res.status(500).send({
                message: 'There has been an error'
            });
            next(e);
        }
    },
    delete: async(req, res, next) => {
        try {
            const user = await models.User.findByIdAndDelete({ _id: req.params.id });
            res.status(200).json(user);
        } catch (e) {
            res.status(500).send({
                message: 'There has been an error'
            });
            next(e);
        }
    },
}