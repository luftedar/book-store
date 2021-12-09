const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E0wnoGqC3httDh8BB8Bp/books';

export const addBookToApi = async (book) => {
  const newBook = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
  });
  return newBook.status === 201;
};

export const removeBookFromApi = async (id) => {
  const bookWillRemove = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return bookWillRemove === 'The Book Deleted';
};

export const getAllBooksFromApi = async () => {
  const req = await fetch(URL);
  const books = await req.json();
  return books;
};

export default { addBookToApi, removeBookFromApi, getAllBooksFromApi };
