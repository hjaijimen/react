// controllers/notificationsController.js

const notificationsService = require('../services/notificationsService');

exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await notificationsService.getAllNotifications();
        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
