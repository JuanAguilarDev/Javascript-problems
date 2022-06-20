const fs = require('fs');
const path = '../data/books.json';

// Intialize the path
try {
    if(!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]')
    }
}catch (err) {
    console.log(err);
}

// To list books
const listBooks = ()=>{
    try {
        const books = JSON.parse(fs.readFileSync(path, 'utf8'));
        if(books.length > 0) {
            console.log('Libros disponibles: 📚');
            books.map((book, index) => {
                console.log(`${index+1}. ${book.tittle}`);
            });

            // Could return the book selected with a menu

        }else{
            console.log('Parece que por ahora no existe un libro disponible 🫥 , pero pude comezar por agregar uno 🥳');
        }
    }catch(err){
        console.log(err)
    }
};

// Show book description

const bookDescription = (numberOfBook) => {
    try{
        let books = JSON.parse(fs.readFileSync(path, 'utf8'));
        let index = books.findIndex(book => book.id == numberOfBook);
        if(index == -1){
            console.log('El libro que busca no se encuentra dentro de la base de datos. 😖');
        }else{
            console.log(`La descripcion del libro ${books[index].tittle} es: `);
            console.log(books[index].description);
        }
    }catch(err){
        console.log(err);
    }
}

// Create a new book
const createBook = (author, tittle, description) =>{
    try{
        let books = JSON.parse(fs.readFileSync(path, 'utf8'));
        let flag = books.filter(book => book.tittle === tittle).length > 0 ? true : false;
        if(flag){
            console.log('Parece que este libro ya existe. 😖');
        }else{
            let id = books.length+1 
            let data = {
                id,
                tittle,
                author, 
                description
            };
            books.push(data);
            fs.writeFileSync(path, JSON.stringify(books));
            console.log(`Se ha agregado un libro con id: ${id} de manera exitosa. ✅`)
        }
    }catch(err){
        console.log(err);
    }
};

// Delete books
const deleteBook = (numberOfBook) =>{
    try{
        let books = JSON.parse(fs.readFileSync(path, 'utf8'));
        let index = books.findIndex(book => book.id == numberOfBook);
        if(index == -1){
            console.log('El libro que busca no se encuentra dentro de la base de datos. 😖');
        }else{
            let data = books.filter(book => book.id === numberOfBook-1);
            fs.writeFileSync(path, JSON.stringify(data));
            console.log(`${books[index].tittle} ha sido eliminado de manera exitosa. ✅`);
        }
    }catch(err){
        console.log('Error: ' + err);
    }
};

// Edit the book
const editBooks = (numberOfBook,title, author, description) => {
    try{
        let books = JSON.parse(fs.readFileSync(path, 'utf8'));
        let index = books.findIndex(book => book.id == numberOfBook);
        if(index == -1){
            console.log('El libro que busca no se encuentra dentro de la base de datos. 😖');
        }else{
            let newData = {
                id: books[index].id, 
                title,
                author,
                description
            }
            books[index] = newData;
            fs.writeFileSync(path, JSON.stringify(books));
            console.log(`El libro con el id ${index+1} ha sido actualizado correctamente. `);
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    listBooks, 
    createBook, 
    editBooks,
    bookDescription,
    deleteBook
}
