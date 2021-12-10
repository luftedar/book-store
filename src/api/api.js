const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E0wnoGqC3httDh8BB8Bp/books';

export const addBookToApi = async (book) => {
  await fetch(URL, {
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
};

export const removeBookFromApi = async (id) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

export const getAllBooksFromApi = async () => {
  const req = await fetch(URL);
  const books = await req.json();
  return books;
};

export default { addBookToApi, removeBookFromApi, getAllBooksFromApi };
