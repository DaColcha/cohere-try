import examples from './examples';

const cohere = require('cohere-ai');
cohere.init('tPgdL0VP7EbnQiEkymbVuZto6DQlGHDNzq3HnYTh')

const inputs = ['Quiero cambiar mi contraseña'];

(async () => {
  const response = await cohere.classify({
    inputs: inputs,
    examples: examples,
  });
  console.log(response);
})();

// const cohere = require('cohere-ai');
// cohere.init('tPgdL0VP7EbnQiEkymbVuZto6DQlGHDNzq3HnYTh'); 

// const inputs = '¿Cuáles son los beneficios del reciclaje?';
// //¿Cómo puedo educar a mis hijos sobre la importancia del reciclaje?
// //¿Cuáles son los beneficios del reciclaje?
// //¿Cómo puedo empezar a reciclar en mi área?
// //¿Cómo puedo reducir mi huella de carbono personal?

// (async () => {
//   const response = await cohere.generate({
//     model: 'command',
//     prompt: `Eres un experto en reciclaje y cuidado del medioambiente. ${inputs}. Usa una respuesta corta y en español`,
//     max_tokens: 300,
//     temperature: 0.3, 
//     k :50, 
//   });
//   console.log(response.body.generations[0].text);
// })();