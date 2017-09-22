const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

let randomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min)
}

let randomNumber = function (min, max) {

}

let rightNumber = randomNumber(0, 10)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/help', (req, res) => {
  res.sendFile(__dirname + '/views/help.html')
})

app.post('/guess', (req, res) => {
  const chosenNumber = req.body.chosenNumber
  res.redirect('/guess/' + chosenNumber)
})

app.get('/guess/:number', (req, res) => {
  const guessedRight = req.params['number'] == rightNumber
  if (guessedRight) {
    res.render('result', {guessedRight})
  } else {
    res.render('result', {guessedRight})
  }
})

app.get('/update/:start/:end', (req, res) => {
  rightNumber = randomNumber(req.params['start'], req.params['end'])
  res.redirect('/')
})

app.listen(6969, () => {
  console.log("Rodando!")
})
