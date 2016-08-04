/**
 * Created by endof on 8/2/2016.
 */


const https = require('https');
// const console = require('console').Console;


// export let setsCards = () => {
//     return http.get('https://api.magicthegathering.io/v1/cards?page=5&pageSize=10', (response) => {
//         console.log(`Got Response: ${response.statusCode}`);
//         response.resume();
//         return response;
//     }).on('error', (error) => {
//         console.log(error);
//     });
//     // return cards;
// };



exports.setsCards = https.get('https://api.magicthegathering.io/v1/cards?page=5&pageSize=10', (response) => {
        console.log(`Got Response: ${response.statusCode}`);
        // console.log(`Got Response: ${JSON.parse(response)}`);
        response.resume();
        console.log('hello world');
        response.on('data', (d) => {
            console.log(`BODY: ${d}`);
            // process.stdout.write(d);
        });
        return response;
    }).on('error', (error) => {
        console.log(error);
    });
    // return cards;

// console.log('hello world');

// var postData = querystring.stringify({
//     'msg' : 'Hello World!'
// });
//
// var options = {
//     protocol: 'https:',
//     hostname: 'api.magicthegathering.io',
//     port: 80,
//     path: '/v1/cards?page=5&pageSize=10',
//     method: 'GET' //,
//     // headers: {
//     //     'Content-Type': 'application/x-www-form-urlencoded',
//     //     'Content-Length': Buffer.byteLength(postData)
//     // }
// };
//
// var req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data in response.');
//     });
// });
//
// req.on('error', (e) => {
//     console.log(`problem with request: ${e.message}`);
// });
//
// // write data to request body
// // req.write(postData);
// req.end();