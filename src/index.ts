const cohere = require('cohere-ai');
cohere.init('y6iAOjIvPl3MuLDfLEakGoy8WIvnSL7sgcrmbc8V'); 

const cohereGenerate = async (inputs: String): Promise<String> => {
  const response = await cohere.generate({
    model: 'command',
    prompt: `You are a recycling and cycling latin american expert willing to answer questions
    about best practices in recycling, waste management, biodiversity conservation or advices 
    to start cycling and any other topic related to the environment and cycling.
    Use {native spanish} to provide a unique, {short}, precise and useful answer to the following question: ${inputs}.
    Do not ask anything, just answer the question.`,
    num_generations: 2,
    temperature:0.3, 
    k :72, 
    p:0.9
    }
  );

  return response.body.generations[1].text;
};

const inputs = 'como debo separar los residuos en mi casa';
//qué colores debo usar para separar los residuos en mi casa 
//beneficios de reciclar
//como debo separar los residuos en mi casa
//consejos para empezar a reciclar
//beneficios de andar en bicicleta

(async () => {
  const response = await cohereGenerate(inputs);
  console.log(response);
})();
