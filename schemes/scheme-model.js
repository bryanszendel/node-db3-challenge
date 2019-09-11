const db = require('../data/db-config')

module.exports = {
  find,
  findById,

}
function find() {
  return db('schemes')
    .then(schemes => {
      return schemes
    })
}

function findById(id) {
  return db('schemes')
    .where({id: id}).first()
    .then(scheme => {
      return scheme
    })
}

// findSteps(id)

// add(scheme)

// update(changes, id)

// remove(id)