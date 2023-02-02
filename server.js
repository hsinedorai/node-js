//import express
const express = require('express')


// responsable pour recupere (recevoir) data sous format  object
// const bodyParser = require('body-parser').urlencoded({ extended: true })




const app = express()
// app.use(express.json())
// app.use(bodyParser)

// importation du path
const path = require('path')




const b = express.urlencoded({ extended: true })

//ejs pour partager les donnees du serveur vers fichier html
app.set('view engine', 'ejs')
app.set('views', 'views')




// express basé sur middlewares:functions :executer si il ya request from client 



app.use(express.static(path.join(__dirname, 'assets')))

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({
//    extended: true
// }));


//morgen importation

const logger=require('morgan')
const morgan = require('morgan')



// importer student route 
const StudentRoute=require('./routes/routeStudent')

app.use(morgan('combined'))

app.use('/student',StudentRoute)






//démarrer le serveur
app.listen(5000, () => console.log('serveur run on port 5000'))


















