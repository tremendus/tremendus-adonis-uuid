'use strict'

const Schema = use('Schema')

class MetaSchema extends Schema {

  up () {
    this.create('metas', (table) => {
      table.increments()
      table.uuid('uuid').notNullable().unique().index()
      table.timestamps()
    })
  }

  down () {
    this.drop('metas')
  }

}

module.exports = MetaSchema
