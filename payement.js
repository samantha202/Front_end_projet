
var express = require('express');
var stripe = require('stripe')('sk_test_51IbmXgDHFVIVSFomAaXfbLiNm7d645xuVgi02lJI5dV2rG0vbWcSLSEUBFMWrnJVeQXBfcOH6Dk0eyApQrrK8nIT00kCd3cCG1');
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var cors = require('cors');
var originsWhitelist = [
'http://localhost:4200'
];
var corsOptions = {
origin: function(origin, callback){
var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
callback(null, isWhitelisted);
},
credentials:true
}
app.use(cors(corsOptions));
//fin du cross origin 
app.post("/charge", (req, res) => {
   var charge = stripe.customers
   .create({
     name: req.body.nom,
     email: req.body.email,
     source: req.body.token
   })
   .then(customer =>
      stripe.charges.create({
       amount: req.body.mont* 100,
       currency: "eur",
       customer: customer.id
      },(err,charge)=>{
        if(err){
        console.log(" "+err);
      }
      res.json({
       success :true,
       message :"paiement effectué"
      })
    })
  )
})

app.listen(3000,()=>{
console.log('le serveur a commence a ecouter sur le port 3000');
});