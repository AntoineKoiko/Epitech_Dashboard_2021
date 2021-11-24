const router = require("express").Router();
const widgetService = require("../services/widgetsService");

router.get("/", (req, res) => {
    widgetService.getUserWidget(req.user._id)
        .then(widget => {
            res.json(widget);
        })
        .catch(error => {
            console.log(error.toString());
            res.status(500).send("Failed to get user widget");
        })
})

router.post("/", async (req, res) => {
    console.log(req.body);
    widgetService.createWidget(req.user._id, req.body)
        .then((result) => {
            res.send(`Sucessfully create widget id: ${result._id}`);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;