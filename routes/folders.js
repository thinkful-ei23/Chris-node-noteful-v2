'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex
    .first('id', 'name')
    .from('folders')
    .where('id', id)
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      next(err);
    });

  // Put update an item
  router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    /***** Never trust users - validate input *****/
    const updateObj = {};
    const updateableFields = 'name';
    if (updateableFields in req.body) {
      updateObj[updateableFields] = req.body[updateableFields];
    }

    /***** Never trust users - validate input *****/
    if (!updateObj.name) {
      const err = new Error('Missing `name` in request body');
      err.status = 400;
      return next(err);
    }

    knex('folders')
      .where('id', id)
      .update(updateObj)
      .then(item => {
        if (item) {
          res.json(item);
        } else {
          next();
        }
      })
      .catch(err => {
        next(err);
      });
  });

  // Post (insert) an item
  router.post('/', (req, res, next) => {
    const { name } = req.body;

    const newItem = { name };
    /***** Never trust users - validate input *****/
    if (!newItem.name) {
      const err = new Error('Missing `name` in request body');
      err.status = 400;
      return next(err);
    }
    // knex.insert(newItem)
    //   .into('notes')

    knex('folders')
      .insert(newItem)
      .then(item => {
        if (item) {
          res.location(`http://${req.headers.host}/folders/${item.id}`).status(201).json(item);
        }
      })
      .catch(err => { next(err); });
  });
  // Delete an item
  router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    knex('folders')
      .where('id', id)
      .del()
      .then(() => {
        res.sendStatus(204);
      })
      .catch(err => {
        next(err);
      });
  });

});

module.exports = router;