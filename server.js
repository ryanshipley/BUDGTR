//Initialize basic server elements.
const express = require("express");
const app = express();


app.use(express.urlencoded({extended: false}));

/*Get "/" sets the "/" route.
@param req the request.
@param res the response.
@send send the response.
*/
app.get("/", (req, res)=>{
    res.send("yo");
});

//Listen to port 3000.
app.listen(3000);