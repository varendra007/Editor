const express = require("express")
const path = require("path");
  
const app = express();
const port = process.env.PORT || 8080;
  
// Setting path for public directory 
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
  
// Handling request 
app.post("/request", (req, res) => {
   res.json([{
      name_recieved: req.body.name,
      designation_recieved: req.body.designation
   }])
})
  
// Server Setup
app.listen(port, () => {
   console.log(`server is running at ${port}`);
});
