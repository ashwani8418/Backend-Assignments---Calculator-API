const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res)=>{
    res.send("Hello world!");
});

app.post("/add", (req, res)=>{
    if((typeof(req.body.num1) === 'string' || typeof(req.body.num2) === 'string')){
        res.send({
            message: "Invalid data types"
        })
    }else{
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        result = num1 + num2;
        if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
            res.send({
                message: "Underflow"
            })
        }else if(result > 1000000 || num1 > 100000 || num2 > 100000){
            res.send({
                message: "Overflow"
            })
        }else{
            res.send({
                status: "success",
                message: "the sum of given two numbers",
                sum: result
                });
        }
    }
});

app.post("/sub", (req, res)=>{
    if((typeof(req.body.num1) === 'string' || typeof(req.body.num2) === 'string')){
        res.send({
            message: "Invalid data types"
        })
    }else{
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        result = num1 - num2;
        if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
            res.send({
                message: "Underflow"
            })
        }else if(result > 1000000 || num1 > 100000 || num2 > 100000){
            res.send({
                message: "Overflow"
            })
        }else{
            res.send({
                status: "success",
                message: "the difference of given two numbers",
                difference: result
                });
        }
    }
});

app.post("/multiply", (req, res)=>{
    if((typeof(req.body.num1) === 'string' || typeof(req.body.num2) === 'string')){
        res.send({
            message: "Invalid data types"
        })
    }else{
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        result = num1 * num2;
        if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
            res.send({
                message: "Underflow"
            })
        }else if(result > 1000000 || num1 > 100000 || num2 > 100000){
            res.send({
                message: "Overflow"
            })
        }else{
            res.send({
                status: "success",
                message: "The product of given numbers",
                result: result
                });
        }
    }
});

app.post("/divide", (req, res)=>{
    if((typeof(req.body.num1) === 'string' || typeof(req.body.num2) === 'string')){
        res.send({
            message: "Invalid data types"
        })
    }else{
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        if(num2 === 0){
            res.send({
                status: "error",
                message: "Cannot divide by zero"
            })
        }
        result = num1 / num2;
        if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
            res.send({
                message: "Underflow"
            })
        }else if(result > 1000000 || num1 > 100000 || num2 > 100000){
            res.send({
                message: "Overflow"
            })
        }else{
            res.send({
                status: "success",
                message: "The division of given numbers",
                result: result
                });
        }
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;