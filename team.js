const express = require('express'),
    bodyParser = require('body-parser');
const assignments = express.Router()

var uuid = require('uuid-v4');

const teams = []



team.get('/', function (req, res) {
    //console.log('get, delivering:',deliveredAssignments)
    //TODO: check if there is a filter, and filter
    res.json(team)

})

team.post('/', function (req, res) {
    const newTeam = req.body
    newTeam.teamID = uuid()
    newTeam.dateUpdated = new Date()
    newTeam.is_still_in = boolean
    newTeam.name = String
    newTeam.push(newTeam)
    res.json(newTeam)
})

teams.get('/:name', function (req, res) {
    const name = req.params.name
    const i = teams.findIndex(item => {return item.name === name})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(teams[i])
    }
})

teams.put('/:name', function (req, res) {
    const name = req.params.name
    const i = teams.findIndex(item => {return item.name === name})
    teams[i] = req.body
    teams[i].teamID = teamID
    teams[i].dateUpdated = new Date()
    newTeam.is_still_in = is_still_in
    newTeam.name = name
    res.json(teams[i])
})

teams.delete('/:name', function (req, res) {
    const name = req.params.name
    if (!name) res.sendStatus(404)
    const i = teams.findIndex(item => {return item.name === name})
    const deleted = teams[i]
    teams.splice(i,1)
    res.sendStatus(204)
})

module.exports = teams