const express = require("express"); 
const app = express()


const testRoutes = require("./routes/test.js")
app.use("/api/", testRoutes)

app.listen(8000, () => { })