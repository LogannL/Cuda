const express = require('express');

// GET MODELS
const Account = require('../models/account');

const router = new express.Router();

// Account ROUTES

router.post('/accounts', async (req, res, next) => {
    const account = new Account(req.body);
    try {
        await account.save();
        res.status(201).send({ account })
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;