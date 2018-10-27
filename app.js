var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var newSignUpSchema = new mongoose.Schema({ 
    Name : String,
    Age: Number,
    Address: String,
    Phone: String,
    Email: String
});

var swagSchema = new mongoose.Schema({
    NameOfItem : String,
    PriceOfItem : String,
    ImageOfItem : String
})

var newSignUp = mongoose.model("newSignUp", newSignUpSchema);
var swag = mongoose.model("swag", swagSchema);



// newSignUp.create(
//     {
//         Name : "John",
//         Age: 22,
//         Address : "43-23 Kissena Blvd, Flushing, NY 11355",
//         Phone: "63521291271",
//         Email: "john@aol.com"
//     }, function(err, newSignUp) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Newly created SignUp");
//             console.log(newSignUp);
//         }
//     });

app.get("/", function(req, res){
    res.render("index");
});

// app.get("/farmInfo", function(req, res){
//     res.render("farm.info");
// });

// app.get("/", function(req, res){
//     res.render("app.html");
// });

// app.get("/", function(req, res){
//     res.render("app.html");
// });

// app.get("/", function(req, res){
//     res.render("app.html");
// });

// app.get("/", function(req, res){
//     res.render("app.html");
// });

// app.get("/", function(req, res){
//     res.render("app.html");
// });


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Green City Force Server Has Started!");
});
