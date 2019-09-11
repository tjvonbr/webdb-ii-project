const express = require('express');

const db = require('../data/dataConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error fetching the cars." })
    });
});

router.get('/:id', (req, res) => {
  db('cars')
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error fetching this car." })
    });
});

router.post('/', (req, res) => {
  const carData = req.body;

  db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        })
    })
    .catch(err => {
      console.log('POST ERROR', err);
      res.status(500).json({ error: "There was an error posting a new car." })
    });
});

module.exports = router;