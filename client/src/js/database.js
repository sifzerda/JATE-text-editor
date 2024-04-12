import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
console.log('Post to the database');

const contentDb = await openDB('content', 1);
const tx = contentDb.transaction('content', 'readwrite');
const store = tx.objectStore('content');
const request = store.add({ id: 1, jate: content });
const result = await request;
console.error('putDb not implemented');
console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const contentDb = await openDB('content', 1);
  const tx = contentDb.transaction('content', 'readonly');
  const store = tx.objectStore('content');
  const request = store.getAll();
  const result = await request;
  console.error('getDb not implemented');
  console.log('result.value', result);
  return result;
}

initdb();
