var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    name : {
        type : String,
        unique : true
    },
    department : String,
    description : String,
    skills : [{
        name : String,
        skillType : String,
        rating : Number
    }],
    employees : [{
        id : String,
        name : String,
        validated : Number,
        skills : [{
            name : String,
            skillType : String,
            rating : Number
        }]
    }]
});

var Team = module.exports = mongoose.model('team',teamSchema);

module.exports.getTeams = function(callback,limit){
    Team.find()
    .select('_id name department description skills employees')
    .limit(limit)
    .exec(callback);
}

module.exports.getSkills = function(id,callback){
    Team.findById(id,callback)
    .select('skills');
}

module.exports.getEmployees = function(id,callback){
    Team.findById(id,callback)
    .select('employees');
}

module.exports.addTeam = function(team,callback){
    Team.create(team, callback);
}

module.exports.addEmployee = function(id, employee,callback){
    Team.update( { _id: id }, 
        { $push: { employees: employee } },callback);
}

module.exports.addSkill = function(id, skill,callback){
    Team.update( { _id: id }, 
        { $push: { skills : skill } },callback);
}

module.exports.employeeUser = function(id, employeeId,callback){
    Team.find({ _id : id 
        , employees : 
        {$elemMatch: {id: employeeId}}
    },{'employees.$' : 1})
    .exec(callback);
}

module.exports.getSkill = function(id,callback){
    Team.findById(id)
    .select('skills.name skills.rating skills.skillType')
    .exec(callback);
}

module.exports.updateEmp = function(id, employee, callback){
    Team.findOneAndUpdate(
        { "_id": id, "employees._id": employee._id },
        { 
            "$set": {
                "employees.$": employee
            }
        },callback
    );
}

module.exports.validateStatus = function(id,employeeId,status,callback){
    Team.findOneAndUpdate(
        { "_id": id, "employees.id": employeeId },
        { 
            "$set": {
                "employees.$.validated": status
            }
        },callback
    );
}