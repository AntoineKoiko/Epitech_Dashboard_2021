const router = require("express").Router();
const stockService = require("../services/stockService");

router.get("/", async (req, res) => {
    let stockName = req.query.name;
    
    if (!stockName) {
        return res.sendStatus(400);
    }
    stockService.getStockPrice(stockName)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;