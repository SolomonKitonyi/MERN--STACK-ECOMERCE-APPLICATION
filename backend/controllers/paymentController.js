const catchAsyncErrors = require("../middlewares/catchAsyncError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//process stripe payments => /api/v2/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const paymentIntents = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",

    metadata: { integration_check: "accept_a_payment" },
  });

  res.status(200).json({
    success: true,
    client_Secret: paymentIntents.client_Secret,
  });
});
