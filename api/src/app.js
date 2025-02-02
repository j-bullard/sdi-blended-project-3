var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors');

var indexRouter = require('./routes/index')
const orgsRouter = require('./routes/organizations')
const buildsRouter = require('./routes/launch_builds')
const roomsRouter = require('./routes/rooms')
const directoryRouter = require('./routes/directory')

var app = express()
app.use(cors());
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/api/v1/orgs', orgsRouter)
app.use('/api/v1/builds', buildsRouter)
app.use('/api/v1/rooms', roomsRouter)
app.use('/api/v1/directory', directoryRouter)

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).send(err.message)

})


module.exports = app
