const User = require("../models/userModels");
const Widget = require("../models/widgetModels");

const createWidget = async (userId, widget) => {
    const _widget = new Widget(widget);

    try {
        const docs = await User.updateOne({_id: userId}, {
            $push: {
                widgets: _widget
            }
        });
        return _widget;
    } catch (error) {
        throw `createWidget ${error.toString()}`;
    }
}

const getUserWidget = async (userId) => {
    const currentUser = await User.findById(userId);

    return currentUser.widgets;
}

const updateWidget = () => {

}

const deleteWidget = () => {

}

module.exports = {
    createWidget,
    getUserWidget,
    updateWidget,
    deleteWidget
}