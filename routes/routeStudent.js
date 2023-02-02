
const express = require('express')
const route = express.Router()


const b = express.urlencoded({ extended: true })



var students = [
    { id: 0, firstName: 'hsine', lastName: 'dorai', speciality: 'programmer' },
    { id: 1, firstName: 'aziz', lastName: 'sboui', speciality: 'programmer' },
    { id: 2, firstName: 'kais', lastName: 'ajili', speciality: 'programmer' },
    { id: 3, firstName: 'mohamed', lastName: 'smaoui', speciality: 'programmer' }

]



// route.get('/', (req, res, next) => {

//     res.send('home page')


// })


route.get('/', (req, res, next) => {

    res.send(students)


})



route.get('/student/:id', (req, res, next) => {

    // let newid = req.params.id
    let newstudent = students.find(student => student.id == req.params.id)
    if (newstudent) {
        res.send(newstudent)
    } else {
        res.send('we dont have this student ')
    }



})


route.delete('/delete/:id', (req, res) => {

    let student = students.find(student => student.id == req.params.id)
    let positionStudent = students.indexOf(student)
    let newstudents = students.splice(positionStudent, 0)
    res.send(newstudents)


})



route.post('/add', b, (req, res) => {
    let newstudent = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        speciality: req.body.speciality
    }

    students.push(newstudent)
    res.send(students)
})


route.put('/update/:id', b, (req, res) => {

    let student = students.find(studentt => studentt.id == req.params.id)

    student.firstName = req.body.firstName
    student.lastName = req.body.lastName
    student.speciality = req.body.speciality

    res.send(student)


})

module.exports=route