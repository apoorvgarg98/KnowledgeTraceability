var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Manager = require('../../models/manager');
Team = require('../../models/team');

mongoose.connect('mongodb://127.0.0.1:27017/knowledgeTraceability');
var db = mongoose.connection;

router.post('/managerLogin',function(req,res){
        var manager = req.body;
    Manager.checkUser(manager, function(err,manager){
        if(err){
            throw err;
        }
        res.json(manager);
    })
});

router.get('/teams',function(req,res){
    Team.getTeams(function(err,team){
        if(err){
            throw err;
        }
        res.json(team);
    })
});

router.post('/addTeam',function(req,res){
    var team = req.body;
    Team.addTeam(team,function(err,team){
        if(err){
            throw err;
        }
        res.json(team);
    })
});

router.post('/addEmployee',function(req,res){
    var body = req.body;
    Team.addEmployee(body.id,body.employee,function(err,employee){
        if(err){
            throw err;
        }
        res.json({
            id : employee.id,
            name : employee.name,
            validated : employee.validated,
            skills : employee.skills
        } );
    })    
});

router.post('/addSkill',function(req,res){
    var body = req.body;
    Team.addSkill(body.id,body.skill,function(err,skill){
        if(err){
            throw err;
        }
        res.json(skill);
    })    
});

router.post('/updateValidate',function(req,res){
    var body = req.body;
    Team.validateStatus(body.id,body.employeeId,body.status,function(err){
        if(err){
            throw err;
        }
        res.json({updateStatus : true});
    })
});
module.exports = router;