const { Vonage } = require('@vonage/server-sdk')
const vonage = new Vonage({
    apiKey: "f3195426",
    apiSecret: "1xBac5k1bF3NwRbO"
  })
  


'use strict';
var conexion = require('../config/db');

var phone = "";
// Campos del producto (Objeto) 
var SMS = function (producto) {
    this.nombre = producto.nombre;
    this.telefono = producto.telefono;
    phone = this.telefono;
};


//funcion de crear
SMS.create = function (newEmp, result) {
    conexion.query("insert into sms set ?", newEmp, function (err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            sendSMS()
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


//funcion de consultar
SMS.findAll = function (result) {
    conexion.query("Select * from sms", function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{ 
        console.log(res)
        result(null, res);
      }
    });
  }; 

  //variables de telefono
  const from = "573222618817"
  var to = "";
  const text = 'Esto es un mensaje de prueba'

  async function sendSMS() {
    to = "57"+phone
    // console.log(to)
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        console.log('--------------------------------------------');
}

module.exports = SMS;


