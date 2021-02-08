function findAccountById(accounts, id) {
  let found = accounts.find((ident) => ident.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return accounts
}

function numberOfBorrows(account, books) {
  let counter = 0
  for (let book in books) {
    let borrower = books[book].borrows
    for(let index = 0; index < borrower.length; index++) {
      if (borrower[index].id === account.id) {
        counter += 1
      }
    }
  }
  return counter
}


function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = []
  let finalList = []  
  for (let book in books) {
    let borrower = books[book].borrows
    for(let index = 0; index < borrower.length; index++) {
      if (borrower[index].id === account.id) {
        if (borrower[index].returned === false) {
          borrowedBooks.push(books[book])
        }
      }
    }
  }
  for (let index = 0; index < borrowedBooks.length; index++) {
    let bookAuthor = authors.find((author) => author.id === borrowedBooks[index].authorId)
    let bookWithAuthor = {...borrowedBooks[index], Author: bookAuthor}
    //
    finalList.push(bookWithAuthor)
  }
  return finalList
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
