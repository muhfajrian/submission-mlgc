const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

async function getData() {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  return predictCollection.get();
}

module.exports = { storeData, getData };