const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  findSteps,
  
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

function findSteps(id) {
  return db('steps')
    .where({scheme_id: id})
    .then(steps => {
      return steps
    })
}

// add(scheme)

// update(changes, id)

// remove(id)