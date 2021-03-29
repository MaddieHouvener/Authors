const { Authors } = require('../models/authors.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//creating new authors
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Authors.create({
        name
    })
        .then(authors => response.json(authors))
        .catch(err => response.status(400).json(err));
}

//finding all authors - read the authors
module.exports.getAllAuthors = (request, response) => {
    //.sort is case sensitive so whatever is being typed in has to be Capitlized(this sorts the data alphabetically)
    Authors.find().sort("name")
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json(err))
}

//finding just one author - read one product
module.exports.getAuthors = (request, response) => {
    Authors.findOne({ _id: request.params.id })
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

//updating a author with db
module.exports.updateAuthors = (request, response) => {
    Authors.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updateAuthors => response.json(updateAuthors))
        .catch(err => response.status(400).json(err))
}

//deleting products
module.exports.deleteAuthors = (request, response) => {
    Authors.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
