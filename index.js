var AWS = require('aws-sdk');

AWS.config.update({
accessKeyId: 'AWSAccessKeyId',
secretAccessKey: 'AWSSecretKey',
region: 'ap-southeast-2' 
//https://docs.aws.amazon.com/pt_br/sns/latest/dg/sns-supported-regions-countries.html Site onde mostra Regiões e países suportados.

});

var sns = new AWS.SNS();

var Numero = 'Numero que vai receber'

sns.publish({
Message: 'Mensagem',
Subject: '',
PhoneNumber: Numero
}, (err, result)=>{
console.log("Info da Menssagem: ", err,result);
});






