const bookManager = require('./modules/example-07');


bookManager.createBook('Juan', 'El principito 2' , 'Libro infantil. ');
bookManager.listBooks();

bookManager.bookDescription(1);

bookManager.deleteBook(2);
bookManager.listBooks();