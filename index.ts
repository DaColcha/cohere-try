const cohere = require('cohere-ai');
cohere.init('tPgdL0VP7EbnQiEkymbVuZto6DQlGHDNzq3HnYTh'); 

const inputs = 'cómo debo separar los residuos en mi casa';
//qué colores debo usar para separar los residuos en mi casa 
//beneficios de reciclar
//como debo separar los residuos en mi casa
//consejos para empezar a reciclar
//beneficios de andar en bicicleta

(async () => {
  const response = await cohere.generate({
    model: 'command',
    prompt: `You are a "recycling" and "environment" expert willing to answer questions
    about best practices in recycling, waste management, biodiversity conservation or
    any other topic related to the environment. Answer the following question: ${inputs}.
    Provide a short, precise and useful answer in "spanish".`,
    temperature:0.3, 
    k :75, 
    p:0.9
  });
  console.log(response.body.generations[0].text);
})();
