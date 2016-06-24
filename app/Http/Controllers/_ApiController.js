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
        console.log('where.map', q)
        // filter out type = 0 for selects to avoid complex logic in client
        if (!q.type || q.type && String(q.type) !== '0') {
          query.where(q)
        }
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
        // duplicated below
        if (q.filter.length === 2) {
          query[q.method](q.filter[0], q.filter[1])
        } else if (q.filter.length === 3) {
          query[q.method](q.filter[0], q.filter[1], q.filter[2])
        }
      })
    } else if (typeof filters === 'object') {
      for (let field in filters) {
        let q = filters[field]
        // duplicated above
        if (q.method && q.value) {
          query[q.method](field, q.operator || '=', q.value)
        }
      }
    }

    const related = request.input('related')
    console.log('query():related', related)
    if (related) {
      query.with(related)
    }

    let sort = request.input('sort') || request.input('orderBy')
    let direction = request.input('direction') || 'asc'
    if (typeof sort === 'string') {
      sort = [sort, direction]
    } else if (typeof sort === 'object' && !Array.isArray(sort)) {
      sort = [sort.column, sort.direction || direction]
    }
    if (Array.isArray(sort)) {
      query.orderBy(sort[0], sort[1] || 'asc')
    }

    const page = parseInt(request.input('page')) || 1
    const limit = parseInt(request.input('limit'))
    console.log('query():page,limit', page, limit)
    const result = yield query.paginate(page, limit)

    const _meta = result.meta
    const collection = result.toJSON().data
    const meta = {
      total: _meta.total,
      pages: _meta.lastPage,
      count: collection.length
    }
    const data = { meta, collection }

    // return response.status(401).json(data)
    return response.json(data)

    // bypass, while test pagination above
    // clone the query chain to get count before limit and offset
    // const queryCount = query.clone()
    // const countResult = yield queryCount.count()
    // const total = countResult[0]['count(*)']
    //
    // const limit = request.input('limit')
    // console.log('query():limit', limit)
    // if (limit) {
    //   query.limit(limit)
    // }
    //
    // // hard offset
    // const offset = request.input('offset')
    // console.log('query():offset', offset)
    // if (offset) {
    //   query.offset(offset)
    // } else {
    //   // soft offset
    //   const page = request.input('page')
    //   if (limit) {
    //     const _offset = limit * ((page || 1) - 1)
    //     console.log('softOffset', _offset)
    //     query.offset(_offset)
    //   }
    // }
    // // fetch results
    // const results = yield query.fetch()
    // const collection = results.toJSON()
    // // console.log('index():results', results)
    //
    // // formulate response
    // const data = {
    //   collection: collection,
    //   meta: {
    //     total,
    //     count: collection.length,
    //     pages: Math.ceil(total / limit)
    //   }
    // }
    // response.json(data)
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
    console.log('destroy()record', record)
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
