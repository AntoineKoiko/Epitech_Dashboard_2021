const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const widgetSchema = new Schema({
    service: {type: String, enum: ["stock", "weather", "youtube", "reddit", "spotify"], required: true},
    type: {type: String, enum: ["stock_value", "actual_"]},
    params: {type: Schema.Types.Mixed},
    refresh: {type: Number, min: 0}
})

const Widget = mongoose.model("widget", widgetSchema);

module.exports = Widget;