import Books from '../../mongo/index' 


export const loadAllBooks = (root, args, context ) => {
  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: {
        name: 'JKR',
        age: 98,
      },
    },
    {
      title: 'Jurassic Park',
      author: {
        name: 'Michael Crichton',
        age: 33,
      },
    },
  ];
  // const books = Books.find()
  return books
}