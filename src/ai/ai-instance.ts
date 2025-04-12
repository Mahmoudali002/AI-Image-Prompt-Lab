import {genkit} from 'genkit'; 
import {googleAI} from '@genkit-ai/googleai';

const apiKey = process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  console.error(
    'GOOGLE_GENAI_API_KEY is not set. Please set it in your .env file.\n' +
      'You can get one at https://makersuite.google.com/app/apikey',
  );
  throw new Error('GOOGLE_GENAI_API_KEY is not set');
}

let googleAIPlugin;

try {
  googleAIPlugin = googleAI({
    apiKey,
  });
} catch (error) {
  console.error('Error initializing Google AI plugin:', error);
  throw new Error('Failed to initialize Google AI plugin');
}

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAIPlugin,
  ],
  model: 'googleai/gemini-2.0-flash',
});

