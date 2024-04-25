const regulatoryUpdateService = require('../services/regulatoryUpdateService');

// Add regulatory update
exports.addRegulatoryUpdate = async (req, res) => {
    try {
        const { update_text } = req.body;
        const newUpdate = await regulatoryUpdateService.addRegulatoryUpdate(update_text);
        res.status(201).json(newUpdate);
    } catch (error) {
        console.error('Error adding regulatory update:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all regulatory updates
exports.getAllRegulatoryUpdates = async (req, res) => {
    try {
        const updates = await regulatoryUpdateService.getAllRegulatoryUpdates();
        res.status(200).json(updates);
    } catch (error) {
        console.error('Error getting all regulatory updates:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
