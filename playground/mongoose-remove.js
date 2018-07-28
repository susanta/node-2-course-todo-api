const {ObjectID} = require('mongodb');

const {mongooes} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b5c7d74468eeb064c7d9dd7'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5b5c7d74468eeb064c7d9dd7').then((todo) => {
    console.log(todo);
});