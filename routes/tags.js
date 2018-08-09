'use strict';
const express = require('express');
const knex = require('../knex');
const router = express.Router();

/* ========== GET ========== */
router.get('/', (req, res, next) => {
  
  knex.select('id', 'name')
    .from('tags')
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      next(err);
    });
});

/* ========== GET by id ========== */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex
    .first('id', 'name')
    .from('tags')
    .where('id', id)
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
/* ========== update by id ========== */
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

  knex('tags')
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

/* ========== POST/CREATE ITEM ========== */
router.post('/', (req, res, next) => {
  const { name } = req.body;

  /***** Never trust users. Validate input *****/
  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const newItem = { name };

  knex.insert(newItem)
    .into('tags')
    .returning(['id', 'name'])
    .then((results) => {
      // Uses Array index solution to get first item in results array
      const result = results[0];
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('tags')
    .where('id', id)
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;