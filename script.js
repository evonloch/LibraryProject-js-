let myLibrary = [];

function Book(name, author, page, read) {
  // the constructor...
  this.name = name,
  this.author = author,
  this.page = page,
  this.read = read,
}

var book1 = new Book("Harry Potter", "JK Rowling", 250, true);
var book2 = new Book("1984", "George Orwell", 310, false);

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(book1);
  myLibrary.push(book2);
}

