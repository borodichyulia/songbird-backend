const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                res.status(400).send({ message: "User already exists!" });
            } else {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                user
                    .save(user)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the User."
                        });
                    });
            }
        })
}

exports.login = (req, res) => {
console.log(req.body.email);
    User.findOne({ email: req.body.email })
        .then(u => {
            console.log(u);
        })
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(200).send();
            } else {
                res.status(400).send({ message: "User does not exist!" });
            }
        })
        .catch(err => {
            res.status(400).send({ message: "User does not exist!" });
        });
}