var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();
app.use(bodyParser.json());

var team_api = require('./server/routes/team_api');
var employee_api = require('./server/routes/employee_api');

//Angular Dist output folder
app.use(express.static(path.join(__dirname,'dist')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//API location
app.use('/team_api',team_api);
app.use('/employee_api',employee_api);

//Send all other requests to the Angular app
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
} );

//Set Port
const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running on port' + port));