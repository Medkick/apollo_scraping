// Entry Point of the API Server

const express = require('express');
const Specialties = require('./scraping_logic');
console.log(Specialties)

/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/
const app = express();


app.get('/test', async (req, res, next) => {
    const response = await Specialties();
    res.send(response);

})
const PORT = 8080;
// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(PORT, () => {
    console.log("server running")
    let host = server.address().address
    let port = server.address().port
    console.log("address", server.address())
    console.log("host", host);
    console.log("port", port);
})
