const express = require('express');
const mongoose = require('mongoos');
const bodyParser = require('body-paser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(‘public’)); // Serve HTML and JS files from the ‘public’ folder
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
document.getElementById('employeeForm').addEventListener('submit', function (e) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const dojField = document.getElementById('doj');
    if (!nameField.checkValidity()) {
    Alert('Invalid name format. Use 3-12 capital letters only.');
    e.preventDefault();
    return;
    }
    if (!emailField.checkValidity()) {
    Alert('Invalid email format.');
    e.preventDefault();
    return;
   }
   if (!dojField.checkValidity()) {
   Alert('Invalid date. Use a date between 1-1-2010 and 31-12-2022.');
   e.preventDefault();
   return;
   }
   });
const detailsSchema = new mongoose.Schema({Name: String,Email: String,Doj: Date});
const Detail = mongoose.model('Detail', detailsSchema);
app.post('/submit', (req, res) => {
 const name = req.body.name.toUpperCase().trim();
 const email = req.body.email;
 const doj = req.body.doj;
 const newDetail = new Detail({ name, email, doj });
 newDetail.save((err) => {
 if (err) {
 console.error(err);
 res.redirect('/error.html'); // Redirect to an error page if there's an issue.
 } else {
 res.redirect('/success.html'); // Redirect to a success page after successful insertion.
 }
 });
});
app.listen(3000, () => {
 Console.log('Server started on port 3000');
});