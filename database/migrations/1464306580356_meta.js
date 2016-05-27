'use strict'

const Schema = use('Schema')

class MetaSchema extends Schema {

  up () {
    this.create('metas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('metas')
  }

}

module.exports = MetaSchema
