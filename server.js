const express = require('express')
const next = require('next')

const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      app.render(req, res, '/post', { title: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, () => {
      console.log('> Ready on http://localhost:3000')
    })
  })
