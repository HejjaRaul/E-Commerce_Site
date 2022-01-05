const router = require("express").Router();
const {verifyTokenAndAdmin} = require("./VerifyToken");
const ProductModel = require("../Models/ProductModel");

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new ProductModel(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        let products;
        if (queryNew) {
            products = await ProductModel.find().sort({createdAt: -1}).limit(5);
        } else if (queryCategory) {
            products = await ProductModel.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        } else {
            products = await ProductModel.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;