var express = require("express"),
	ejs = require("ejs"),
	request = require("request");

var app = express();
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/api/menu/', function(req, res){
	request("http://ba-js-test.herokuapp.com/api/deliveries", function(error, response, body){
		if(!error && response.statusCode === 200) {
			var json = JSON.parse(body);
			res.send(json.deliveries);
		}else {
			res.send({"error": error, "status": response.statusCode})
		}
	});
});


app.listen(process.env.PORT || 5000, function() {
	console.log("Listening on port "+ this.address().port);
});