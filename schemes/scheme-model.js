const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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
    .orderBy('step_number')
    .then(steps => {
      return steps
    })
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(scheme => {
      return scheme
    })
}

function update(changes, id) {
  return db('schemes')
    .where({id: id})
    .update(changes)
    .then(updated => {
      return updated
    })
}

function remove(id) {
  return db('schemes')
    .where({id: id})
    .del()
}