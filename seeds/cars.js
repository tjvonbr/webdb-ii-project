
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate() // resets 
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '123456789abcdefgh',
          make: 'Honda', 
          model: 'Civic LX',
          mileage: 85000,
          transmission: null,
          status: 'used'
        },
      ]);
    });
};
