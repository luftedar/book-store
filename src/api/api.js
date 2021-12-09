const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E0wnoGqC3httDh8BB8Bp/books';

export const addBookToApi = async (book) => {
  const newBook = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });
  return newBook;
};

export const removeBookFromApi = async (id) => {
  const bookWillRemove = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return bookWillRemove;
};

export const getAllBooksFromApi = async () => {
  const books = await fetch(URL).json(); // BURAYA DİKKAT
  return books;
};

export default { addBookToApi, removeBookFromApi, getAllBooksFromApi };
