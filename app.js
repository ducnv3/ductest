var express = require('express');
var app = express();
const path = require('path');

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

const router = express.Router();
app.use('/', router);
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/listUsers', function (req, res) {
	console.log( res );
	res.send( {data:"ssss"} );
	start();
 })

 app.post('/listUsers', function (req, res) {
	console.log( res );
	res.send( {
		data: {
			"id": "cmpl-6gAwDSaoqyxaTxFlLZ2YV0Uo5au2n",
			"object": "text_completion",
			"created": 1675509841,
			"model": "text-davinci-003",
			"choices": [
				{
					"text": "\n\nBill Gates là nhà tỉ phú, nhà sáng lập và CEO của tập đoàn Microsoft. Ông là một trong những con người giàu nhất trên thế giới và đã tích cực hỗ trợ công tác quỹ từ thiện.",
					"index": 0,
					"logprobs": null,
					"finish_reason": "stop"
				}
			],
			"usage": {
				"prompt_tokens": 6,
				"completion_tokens": 138,
				"total_tokens": 144
			}
		}
	} );
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


