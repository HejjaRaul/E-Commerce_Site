const router = require("express").Router();
const KEY = "sk_test_51KFzPXCv63UO9T4zqJDGZVsxxP3AFpBPs9JSI5POjozig7CFv6deNHwyQafcF4Nz5oVyFKu5gYPbLEDqnQMHQN4A003yz13A9T";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "eur",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
