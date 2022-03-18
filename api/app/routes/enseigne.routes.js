module.exports = (app) => {
    const enseignes = require('../controllers/enseigne.controller.js');

    // Create a new Enseigne
    app.post('/enseignes', enseignes.create);

    // Retrieve all Enseignes
    app.get('/enseignes', enseignes.findAll);

    // Retrieve a single Enseigne with enseigneId
    app.get('/enseignes/:enseigneId', enseignes.findOne);

    // Update a Enseigne with enseigneId
    app.put('/enseignes/:enseigneId', enseignes.update);

    // Delete a Enseigne with enseigneId
    app.delete('/enseignes/:enseigneId', enseignes.delete);
}
