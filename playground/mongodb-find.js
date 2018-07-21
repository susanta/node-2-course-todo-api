// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

//    db.collection('Todos').find({
//        _id: ObjectID('5b52dd0c83ab42023cefe104')
//     }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });

//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos Count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });

    db.collection('Users').find({name: 'Susanta'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch User', err);
    });

    // client.close();
});