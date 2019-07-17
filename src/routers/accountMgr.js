const express = require('express');

// GET MODELS
const Account = require('../models/account');

const router = new express.Router();

// Account ROUTES
router.post('/accounts', async (req, res, next) => {
    try {
        console.log('TEST ______________');
        console.log(req.body.firstname);
        // const account = new Account(req.body);
        console.log(account)
        // await account.save();
        // res.status(201).send({ account })
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;