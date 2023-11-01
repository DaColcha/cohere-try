import {type  CohereParams} from './types/params';

const params = (inputs: string) : CohereParams => {
    return { 
        model: 'command',
        prompt: `You are a "recycling" and "cycling" expert willing to answer questions
        about best practices in recycling, waste management, biodiversity conservation or advices 
        to start cycling and any other topic related to the environment and cycling. Answer the following question: ${inputs}.
        Provide a short, precise and useful answer in "spanish".`,
        temperature:0.3, 
        k :72, 
        p:0.9
    }
}

export default params;
