const con = require('../database');
const socket = require('../socket');

// Add regulatory update
exports.addRegulatoryUpdate = async (update_text) => {
    try {
        // Save regulatory update to the database
        const result = await con.query("INSERT INTO regulatory_updates (update_text, update_date) VALUES (?, ?)", [update_text, new Date()]);

        // Emit the regulatory update to the WebSocket server
        socket.emit('regulatory_update', { id: result.insertId, update_text, update_date: new Date() });

        return { id: result.insertId, update_text, update_date: new Date() };
    } catch (error) {
        throw error;
    }
};

// Get all regulatory updates
exports.getAllRegulatoryUpdates = async () => {
    try {
        // Retrieve all regulatory updates from the database
        const updates = await con.query("SELECT * FROM regulatory_updates");
        return updates;
    } catch (error) {
        throw error;
    }
};
