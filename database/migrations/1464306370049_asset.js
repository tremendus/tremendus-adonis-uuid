'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {

  up () {
    this.create('assets', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('assets')
  }

}

module.exports = AssetSchema
