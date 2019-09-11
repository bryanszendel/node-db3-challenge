const db = require('../data/db-config')

module.exports = {
  find,
}
function find() {
  return db('schemes')
    .then(schemes => {
      return schemes
    })
}

// findById(id)

// findSteps(id)

// add(scheme)

// update(changes, id)

// remove(id)