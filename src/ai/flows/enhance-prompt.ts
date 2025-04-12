'use server'; 

/**
 * @fileOverview Enhances a given prompt by suggesting improvements based on common patterns and successful prompts.
 *
 * - enhancePrompt - A function that takes a prompt as input and returns suggestions for improvement.
 * - EnhancePromptInput - The input type for the enhancePrompt function.
 * - EnhancePromptOutput - The return type for the enhancePrompt function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const EnhancePromptInputSchema = z.object({
  prompt: z.string().describe('The prompt to be enhanced.'),
});
export type EnhancePromptInput = z.infer<typeof EnhancePromptInputSchema>;

const EnhancePromptOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('Suggestions for improving the prompt.'),
});
export type EnhancePromptOutput = z.infer<typeof EnhancePromptOutputSchema>;

export async function enhancePrompt(input: EnhancePromptInput): Promise<EnhancePromptOutput> {
  try {
    const result = await enhancePromptFlow(input);
    if (!result) {
      console.error('enhancePromptFlow returned null or undefined');
      return { suggestions: [] }; // Return a default value or handle the error appropriately
    }
    return result;
  } catch (error) {
    console.error("Error in enhancePrompt:", error);
    // Handle the error, e.g., return a default value or re-throw the error
    return { suggestions: [] }; // Return a default value
  }
}

const enhancePromptPrompt = ai.definePrompt({
  name: 'enhancePromptPrompt',
  input: {
    schema: z.object({
      prompt: z.string().describe('The prompt to be enhanced.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions:
        z.array(z.string()).describe('Suggestions for improving the prompt.'),
    }),
  },
  prompt: `You are an AI prompt enhancement tool.  A user will provide you with a prompt, and you will provide suggestions for improving it based on common patterns and successful prompts.

Original Prompt: {{{prompt}}}

Suggestions:
`,
});

const enhancePromptFlow = ai.defineFlow<
  typeof EnhancePromptInputSchema,
  typeof EnhancePromptOutputSchema
>(
  {
    name: 'enhancePromptFlow',
    inputSchema: EnhancePromptInputSchema,
    outputSchema: EnhancePromptOutputSchema,
  },
  async input => {
    try {
      const {output} = await enhancePromptPrompt(input);
      if (!output) {
        console.error('enhancePromptPrompt returned null or undefined');
        return { suggestions: [] }; // Handle the error appropriately
      }
      return output!;
    } catch (error) {
      console.error("Error in enhancePromptFlow:", error);
      // Handle the error, e.g., return a default value or re-throw the error
      return { suggestions: [] }; // Return a default value
    }
  }
);
