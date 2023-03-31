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

//-------------Magic-------------------------------//
//-------------Magic-------------------------------//
app.get("/magic/:question", (req, res) =>{
  const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  //We can't use spaces in the url, so we use %20to express a space in the url.//
  const answer = Math.floor(Math.random() * 20);
  const response = responses[answer]
  // Send the magic 8 ball response back between html <h1>tags
  res.send(`<h1>The answer to your question is: ${response} </h1>`)

})

//-------------Beer-------------------------------//
//-------------Beer-------------------------------//

//(On the home page (get "/"), users should see: "99 Bottles of beer on the wall")//
app.get('/', (req, res) => {
  res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>');
});

app.get('/:number_of_bottles', (req, res) => {
  const numOfBottles = parseInt(req.params.number_of_bottles);
  
  //---Bottles Left? ---------//
  //---Bottles Left? ---------//

  if (numOfBottles > 0) {
    let nextNumOfBottles = numOfBottles - 1;
    let link = `<a href="/${nextNumOfBottles}">Take one down, pass it around</a>`;
        
    //--Show the number of bottles and the link to take one down--//
     //--Show the number of bottles and the link to take one down--//
    res.send(`<h1>${bottlesLeft} of beer on the wall</h1>${link}`);
    
    // if there are 0 bottles left, add a link to start over
    if (nextNumOfBottles === 0) {
      res.send(`<br><a href="/">Start over</a>`);
    }
  } else {
    // if there are 0 bottles left, show a message and a link to start over
    res.send(`<h1>No more bottles of beer on the wall</h1><a href="/">Start over</a>`);
  }
});

//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
