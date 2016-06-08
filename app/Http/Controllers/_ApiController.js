'use strict'

const inflect = require('i')()

// class RestfulController {
class RestfulController {

  // create - POST /api/:resource
  * store (request, response) {
    const model = this.resource(request.param('resource'))
    const data = request.input('model')
    const result = yield model.create(data)
    // todo: better response? handleError
    response.json(result)
  }

  // readMany - GET /api/:resource
  * index (request, response) {
    const model = this.resource(request.param('resource'))
    const query = model.query()
    const where = JSON.parse(request.input('query'))
    if (where) {
      query.where(where)
    }
    const results = yield query.fetch()
    response.json(results)
  }

  // query - POST /api/:resource/query
  * query (request, response) {
    console.log('query():request', request.params(), request.get())

    const model = this.resource(request.param('resource'))
    const query = model.query()

    let where = request.input('where')
    console.log('query():where', where, typeof where)
    if (where) {
      if (!Array.isArray(where)) {
        where = [where]
      }
      where.map((q) => {
        query.where(q)
      })
    }

    const filters = request.input('filters')
    console.log('query():filters', filters, typeof filters)
    if (Array.isArray(filters)) {
      filters.map((q) => {
        // the following needs node v5 or higher for spread operator
        // let f = q.filter
        // query[q.method](...f)
        // workaround, omit the option to have operator:
        query[q.method](q.filter[0], q.filter[1])
      })
    }

    const related = request.input('related')
    console.log('query():related', related)
    if (related) {
      query.with(related)
    }

    const orderBy = request.input('orderBy')
    console.log('query():orderBy', orderBy)
    if (typeof orderBy === 'string') {
      query.orderBy = orderBy.split(' ')
    } else if (typeof orderBy === 'object' && !Array.isArray(orderBy)) {
      query.orderBy = [orderBy.column, orderBy.direction || 'asc']
    }
    if (Array.isArray(orderBy)) {
      query.orderBy(orderBy[0], orderBy[1] || 'asc')
    }

    const limit = request.input('limit')
    console.log('query():limit', limit)
    if (limit) {
      query.limit(limit)
    }

    const offset = request.input('offset')
    console.log('query():offset', offset)
    if (offset) {
      query.offset(offset)
    }

    const results = yield query.fetch()
    // console.log('index():results', results)
    response.json(results)
  }

  // readOne - GET /api/:resource/:id
  * show (request, response) {
    console.log('show()', request.all())
    const model = this.resource(request.param('resource'))
    const query = model.query().where({ id: request.param('id') })

    const related = request.input('related')
    console.log('show():related', related)
    if (related) {
      query.with(related)
    }

    const result = yield query.first()
    console.log('show():result', result)
    response.json(result)
  }

  // update - PATCH /api/:resource/:id
  * update (request, response) {
    const model = this.resource(request.param('resource'))
    const data = request.input('model')
    const instance = yield model.find(request.param('id'))
    if (data.meta) {
      data.meta = JSON.stringify(data.meta)
    }
    const result = yield instance.update(data)
    response.json(result)
  }

  // delete - DELETE /api/:resource/:id
  * destroy (request, response) {
    const model = this.resource(request.param('resource'))
    const record = yield model.find(request.param('id'))
    const result = yield record.delete()
    response.json(result)
  }

  // return model instance from :resource
  resource (resource) {
    const _model = 'App/Model/' + inflect.classify(resource)
    const model = use(_model)
    return model
  }
}

// module.exports = RestfulController
module.exports = RestfulController
