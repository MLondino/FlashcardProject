function totalBooksCount(books) {
  return books.reduce((acc, book) => acc +1, 0);
}

function totalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc +1, 0);
}


function booksBorrowedCount(books) {
  let results = books.map(book => book.borrows).flat();
  return results.reduce((acc, result) => {
    if (result.returned == false) {
      acc += 1;
    }
    return acc;
  }, 0);

}

function getMostCommonGenres(books) {
  let result = books.reduce((acc, book) => {
  if(acc[book.genre]) {
      acc[book.genre]++
   } else {
     acc[book.genre] = 1
   };
    return acc;
  }, {})
console.log(result)

  
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
