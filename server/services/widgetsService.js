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

const getWidgetById = async (widgetId) => {
    try {
        const current = await User.findOne({widgetId: widgetId});
        const widget = current.widgets.find(widget => widget._id == widgetId)
        
        return widget;
    } catch (error) {
        throw `getWidgetById ${error.toString()}`;
    }
}

const updateWidget = async (widgetId, widget) => {
    try {
        User.updateOne({
            "widgets._id": widgetId
        }, {
            '$set': {
                'widgets.$.params': widget.params,
                'widgets$.refresh': widget.refresh
            }
        })
        return widgetId;
    } catch (error) {
        throw `updateWidget: ${error.toString()}`;
    }
}

const deleteWidget = async (userId, widgetId) => {
    try {
        const docs = await User.updateOne({_id: userId}, {
            $pull: {
                widgets: { _id: widgetId}
            }
        })
    } catch (error) {
        throw `delete widget: ${widgetId} of user: ${userId}: ${error.toString()}`;
    }
}

module.exports = {
    createWidget,
    getUserWidget,
    getWidgetById,
    updateWidget,
    deleteWidget
}