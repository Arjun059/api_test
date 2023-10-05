const express = require("express"); 
const app = express()


app.get("/hello", (req, res) => {
    res.send("hello You")
})

app.get("/test", (req, res) => {
    res.send("Testing ")
})
 

app.listen(8000, () => {

})