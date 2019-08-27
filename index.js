const app = require('./app')
const port = 3000
app.set('port', port)

/* eslint no-console: 0 */
app.listen(app.get('port'), () => {
  console.log(`Running on port ${port}`)
})
