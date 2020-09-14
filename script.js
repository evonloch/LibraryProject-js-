let myLibrary = [];

function Book(name, author, page, read) {
  // the constructor...
  this.name = name,
  this.author = author,
  this.page = page,
  this.read = read;
}

var book1 = new Book("Harry Potter", "JK Rowling", 250, true);
var book2 = new Book("1984", "George Orwell", 310, false);

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(book1);
  myLibrary.push(book2);
}

function addToContainer(){
  const container = document.querySelector('#container');
  
  myLibrary.forEach((x)=>{
    const content = document.createElement('div');
content.classList.add('card');

	const p = document.createElement('p');
	p.textContent = x.name;

	content.appendChild(p);

	const p2 = document.createElement('p');
	p2.textContent = x.author;

	content.appendChild(p2);

	const p3 = document.createElement('p');
	p3.textContent = `${x.page} pages.`;


	content.appendChild(p3);





container.appendChild(content);
  })
  
  
}

function display(name, author, nrPages){

	 const container = document.querySelector('#container');
  
 
    const content = document.createElement('div');
	content.classList.add('card');

	const p = document.createElement('p');
	p.textContent = name;

	content.appendChild(p);

	const p2 = document.createElement('p');
	p2.textContent = author;

	content.appendChild(p2);

	const p3 = document.createElement('p');
	p3.textContent = `${nrPages} pages.`;


	content.appendChild(p3);





container.appendChild(content);

}

function addBook(){
	var name = prompt("What's the books name?");
    var author = prompt("What's the author's name?");
    var nrPages = parseInt(prompt("How many pages does this book have?")); 
    var book = Book(name, author, nrPages, true);
    display(name, author, nrPages);

}

document.getElementById("submitButton").addEventListener("click", addBook);


