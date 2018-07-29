var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Team = require('D:/Summer of 18/knowledgeTraceability/models/team');

mongoose.connect('mongodb://127.0.0.1:27017/knowledgeTraceability');
var db = mongoose.connection;

router.post('/employeeLogin', function(req,res){
    var body = req.body;
    Team.employeeUser(body.id,body.employeeId,function(err,emp){
        if(err){
            throw err;
        }
        res.json(emp);
    });
});

router.post('/getSkills', function(req,res){
    var body = req.body;
    Team.getSkill(body.id,function(err,skills){
        if(err){
            throw err;
        }
        res.json(skills);
    });
});

router.put('/update',function(req,res){
    var body = req.body;
    Team.updateEmp(body.id,body.employee,function(err){
        if(err){
            throw err;
        }
        res.json({ changeSuccess : true });
    })
});

module.exports = router;