const Enseigne = require('../models/enseigne.model.js');

// Create and Save a new Enseigne
exports.create = (req, res) => {
// Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "You have to name it"
    });
    }

// Create a Enseigne
const enseigne = new Enseigne({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    imageURL:req.body.imageURL,
    state:req.body.state
    // title: req.body.title || "Untitled Enseigne",
    // content: req.body.content
});

// Save Enseigne in the database
enseigne.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Enseigne."
    });
});
};

// Retrieve and return all enseignes from the database.
exports.findAll = (req, res) => {
    Enseigne.find()
        .then(enseignes => {
            res.send(enseignes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving enseignes."
        });
    });

};

// Find a single enseigne with a enseigneId
exports.findOne = (req, res) => {
    Enseigne.findById(req.params.enseigneId)
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send(enseigne);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Error retrieving enseigne with id " + req.params.enseigneId
        });
    });

};

// Update a enseigne identified by the enseigneId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Enseigne content can not be empty"
        });
    }

    // Find enseigne and update it with the request body
    Enseigne.findByIdAndUpdate(req.params.enseigneId, {
        title: req.body.title || "Untitled Enseigne",
        content: req.body.content
    }, {new: true})
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send(enseigne);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Error updating enseigne with id " + req.params.enseigneId
        });
    });

};

// Delete a enseigne with the specified enseigneId in the request
exports.delete = (req, res) => {
    Enseigne.findByIdAndRemove(req.params.enseigneId)
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send({message: "Enseigne deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Could not delete enseigne with id " + req.params.enseigneId
        });
    });

};
