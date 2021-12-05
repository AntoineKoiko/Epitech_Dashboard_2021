const router = require("express").Router();
const stockService = require("../services/stockService");

router.get("/", (req, res) => {
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

router.get("/search", (req, res) => {
    const query = req.query.query;
    const result = stockService.findStock(query);
    
    res.json(result);
})

router.get("/name", (req, res) => {
    const symbol = req.query.symbol;

    const name = stockService.getNameBySymbol(symbol);
    res.json({name: name[0].name});
})

module.exports = router;