var express = require('express');
var app = express();
var router = express.Router();

const http = require('http');
const { Configuration, OpenAIApi } = require("openai");
app.use(express.json()) 

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const hostname = '127.0.0.1';
const port = 3000;

var server = app.listen(process.env.PORT, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
 })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//  // start();
// });


app.get('/listUsers', function (req, res) {
	console.log( res );
	res.send( {data:"ssss"} );
	start();
 })

 app.post('/listUsers', function (req, res) {
	console.log( res );
	res.send( {data:"ssss"} );
	start();
 })

 app.post('/gpt', function (req, res) {
	const {data} = req.body;
	console.log( 	data );
	start(data, res);
	//res.send( {data:"ssss"} );
 })

async function start(value, res) {
	const response = await openai.createCompletion({
	  model: "text-davinci-003",
	  prompt: value,
	  temperature: 0.9,
	  max_tokens: 150,
	  top_p: 1,
	  frequency_penalty: 0,
	  presence_penalty: 0.6,
	  stop: [" Human:", " AI:"],
	});
	
	console.log(response.data);
	res.send( {data: response.data} );
}


