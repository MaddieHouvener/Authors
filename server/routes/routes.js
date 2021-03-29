const AuthorsController = require('../controllers/authors.controller');

module.exports = function(app){
    // app.get('/', AuthorsController.getAllAuthors);
    app.post('/authors', AuthorsController.createAuthor);
    app.get('/authors', AuthorsController.getAllAuthors);
    app.get('/authors/:id', AuthorsController.getAuthors);
    app.put('/authors/:id', AuthorsController.updateAuthors);
    app.delete('/authors/:id', AuthorsController.deleteAuthors);
}
