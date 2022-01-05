const router = require("express").Router();
const OrderModel = require("../Models/OrderModel");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./VerifyToken");


//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newOrder = new OrderModel(req.body)

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await OrderModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await OrderModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDER

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await OrderModel.find({userId: req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL ORDERS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;