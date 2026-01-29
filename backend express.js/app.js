// importing express

const express = require("express")

// assigning variable

const app = express()

app.use(express.json())

// get request

app.get("/",(req,res)=>{
   res.send("Data fetched successfully") 
})

// post request

app.post('/post',(req,res)=>{
    const {username,password} = req.body
    res.json({message:`user added successfully with the following deails ${username} and my password is ${password}`})
})

// Start the server

app.listen(1000,()=>{
    console.log("Server started and runned successfully")
})