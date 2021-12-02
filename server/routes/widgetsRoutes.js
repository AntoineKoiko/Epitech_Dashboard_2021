const router = require("express").Router();
const widgetService = require("../services/widgetsService");

router.get("/", (req, res) => {
    widgetService.getUserWidget(req.user._id)
        .then(widgets => {
            res.json(widgets);
        })
        .catch(error => {
            console.log(error.toString());
            res.status(500).send("Failed to get user widget");
        })
})

router.get("/:id", (req, res) => {
    widgetService.getWidgetById(req.params.id)
        .then(widget => {
            res.json(widget);
        })
        .catch(error => {
            console.log(error.toString());
            res.status(500).send(`Failed to get widget: ${req.params.id}`);
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

router.put("/", (req, res) => {
    const widgetId = req.query.id;

    widgetService.updateWidget(widgetId, req.body)
        .then(() => {
            res.send(`Sucessfully update widget id: ${widgetId}`);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.delete("/", (req, res) => {
    const widgetId = req.query.id;

    widgetService.deleteWidget(req.user._id, widgetId)
        .then(() => {
            res.send(`Sucessfully delete widget id: ${widgetId}`);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;