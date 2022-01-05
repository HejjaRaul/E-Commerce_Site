const {verifyToken, verifyTokenAndAuthorization} = require("./VerifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const UserModel = require("../Models/UserModel");


router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECURE_KEY).toString();
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedUser);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;