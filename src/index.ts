import params  from './params';

const cohere = require('cohere-ai');
cohere.init('tPgdL0VP7EbnQiEkymbVuZto6DQlGHDNzq3HnYTh'); 

const inputs = 'recomendaciones para empezar a andar en bicicleta';
//qué colores debo usar para separar los residuos en mi casa 
//beneficios de reciclar
//como debo separar los residuos en mi casa
//consejos para empezar a reciclar
//beneficios de andar en bicicleta

(async () => {
  //genera la respuesta a la solicitud
  const response = await cohere.generate(params(inputs));
  //imprime la respuesta
  console.log(response.body.generations[0].text);
})();
