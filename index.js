const express = require("express"); 
const app = express()


const testRoutes = require("./routes/test.js")
app.use("/api/", testRoutes)

app.use("*", (req, res) => {

    let path = req.originalUrl
    res.send(JSON.stringify(path))

})

app.listen(8000, () => { })