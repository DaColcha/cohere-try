const cohere = require('cohere-ai');
cohere.init('tPgdL0VP7EbnQiEkymbVuZto6DQlGHDNzq3HnYTh'); 

const cohereGenerate = async (inputs: String): Promise<String> => {
  const response = await cohere.generate({
    model: 'command',
    prompt: `You are a "recycling" and "cycling" expert willing to answer questions
    about best practices in recycling, waste management, biodiversity conservation or advices 
    to start cycling and any other topic related to the environment and cycling. Answer the following question: ${inputs}.
    Provide a short, precise and useful answer in "spanish".`,
    temperature:0.3, 
    k :72, 
    p:0.9
    }
  );

  return response.body.generations[0].text;
};

const inputs = 'recomendaciones para empezar a andar en bicicleta';
//qué colores debo usar para separar los residuos en mi casa 
//beneficios de reciclar
//como debo separar los residuos en mi casa
//consejos para empezar a reciclar
//beneficios de andar en bicicleta

(async () => {
  const response = await cohereGenerate(inputs);
  console.log(response);
})();
