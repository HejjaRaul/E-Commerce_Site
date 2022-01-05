const router = require("express").Router();
const CartModel = require("../Models/CartModel");
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require("./VerifyToken");
const ProductModel = require("../Models/ProductModel");


//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newCart = new CartModel(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET USER CART

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await CartModel.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL CARTS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await CartModel.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;