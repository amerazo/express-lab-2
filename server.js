//-----------Enable Express --------------------------//
//-----------Enable Express --------------------------//
const express = require('express');
const app = express();

//-----------Greeting--------------------------//
//-----------Greeting--------------------------//
// app.set('view engine', 'ejs');
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name
  res.send(`Hey there, ${req.params.name}`);
})

//-----------Tip Calculator------------------------//
//-----------Tip Calculator------------------------//
app.get("/tip/:total/:percentage", (req, res) =>{
  const total = req.params.total
  const tipPercent =  req.params.percentage/100
  const tipAmount = total * tipPercent
  res.send("Your tip amount is $" + tipAmount)
  // console.log('total');
})

//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
