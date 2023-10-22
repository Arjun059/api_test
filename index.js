const express = require("express"); 
const app = express()


const testRoutes = require("./routes/test.js")
app.use("/api/", testRoutes)

app.all("*", (req, res) => {    

  res.send("api route get ")

})

app.listen(8000, () => { })
