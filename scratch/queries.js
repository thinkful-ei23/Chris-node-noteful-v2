'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let searchId = 1003;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchId) {
//       queryBuilder.where('notes.id', searchId);
//     }
//   })
//   .then(results => {
//     console.log(results[0]);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let id = 1003;
// knex('notes')
//   .where('notes.id', id)
//   .update('title', 'my new lady gaga title')
//   .then(item => {
//     console.log(JSON.stringify(item, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });
// let id = 1003;
// let oldObj = {title: '7 things you didnt know lady gaga had in common with dogs', content: 'Ahfiuahifhaihwtiahfusvanfhwuioahvgfiwagbvhniuwasgbhiaghbwui4bw4viogtaunsiuehfuiaehgnaiheutiuewyuie4tvwtuw4tfhvati4gvuyw4btvniuawtbuiwgauiwtgvbuiwgtbvuiwagbva7wtfsdfjhgasvhcjkshiahvauibwjbushvbsihvsbsuyvsbuyshuesvgusbeubisucuiehis'};
// knex('notes')
//   .where('notes.id', id)
//   .update(oldObj)
//   .then(item => {
//     console.log(JSON.stringify(item, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });