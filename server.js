//Initialize basic server elements.
const express = require("express");
const app = express();
const budget = require("./models/budget.js");

app.use(express.urlencoded({extended: false}));

/*Get "/" sets the "/" route.
@param req the request.
@param res the response.
@send send the response.
*/
app.get("/", (req, res)=>{
    res.send("yo");
});

/*Get "/budgets" sets the "/budgets" route.
@param req the request.
@param res the response.
@render render the response.
@param budget the budget array.
@param bankAccount the bankAccount variable.
*/
app.get("/budgets", (req, res) =>{
    res.render("index.ejs",{
        budget,
    });
});

/*Get "/budgets/new" sets the "/budgets/new" route.
@param req the request.
@param res the response.
@render render the response.
*/
app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs");
});

/*Post "/budgets" posts the "/" route.
@param req the request.
@param res the response.
@push push the new object into the budget array.
@redirect redirect the user to the "/budgets" path.
*/
app.post("/budgets", (req, res)=>{
    budget.push(req.body),
    res.redirect("/budgets");
});

/*Get "/budgets/:id" sets the "/budgets/:id" route.
@param req the request.
@param res the response.
@render render the response.
@param budget the budget object matching the index.
*/
app.get("/budgets/:id", (req, res) =>{
    res.render("show.ejs" , {
        budget : budget[req.params.id],
    });
});

//Listen to port 3000.
app.listen(3000);