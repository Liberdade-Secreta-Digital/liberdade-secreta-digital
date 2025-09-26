'use server';

/**
 * @fileOverview Generates persuasive, but fake, testimonials for the ebook landing page using generative AI.
 *
 * - generatePersuasiveTestimonials - A function that generates persuasive testimonials.
 * - GeneratePersuasiveTestimonialsInput - The input type for the generatePersuasiveTestimonials function.
 * - GeneratePersuasiveTestimonialsOutput - The return type for the generatePersuasiveTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersuasiveTestimonialsInputSchema = z.object({
  ebookTitle: z.string().describe('The title of the ebook.'),
  ebookPrice: z.string().describe('The price of the ebook.'),
  targetAudience: z.string().describe('The target audience for the ebook.'),
  keyBenefits: z.array(z.string()).describe('The key benefits of the ebook.'),
});
export type GeneratePersuasiveTestimonialsInput = z.infer<
  typeof GeneratePersuasiveTestimonialsInputSchema
>;

const GeneratePersuasiveTestimonialsOutputSchema = z.object({
  testimonials: z.array(z.string()).describe('The generated testimonials.'),
});
export type GeneratePersuasiveTestimonialsOutput = z.infer<
  typeof GeneratePersuasiveTestimonialsOutputSchema
>;

export async function generatePersuasiveTestimonials(
  input: GeneratePersuasiveTestimonialsInput
): Promise<GeneratePersuasiveTestimonialsOutput> {
  return generatePersuasiveTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersuasiveTestimonialsPrompt',
  input: {
    schema: GeneratePersuasiveTestimonialsInputSchema,
  },
  output: {
    schema: GeneratePersuasiveTestimonialsOutputSchema,
  },
  prompt: `You are a marketing expert tasked with generating persuasive testimonials for an ebook.

Ebook Title: {{ebookTitle}}
Ebook Price: {{ebookPrice}}
Target Audience: {{targetAudience}}
Key Benefits:
{{#each keyBenefits}}
- {{this}}
{{/each}}

Generate 3 diverse testimonials that focus on the emotional and practical benefits of the ebook, highlighting aspects like increased anonymity, ease of use, and value for money. The testimonials should sound authentic and address potential customer hesitations.  The testimonials should be short, no more than one or two sentences each.

Output the testimonials as a JSON array of strings under the "testimonials" key.

Example:
{
  "testimonials": [
    "I was able to become anonymous on the internet in just two days! - Fake Name",
    "Finally, I can say what I want without worrying. - Fake Name",
    "The price is amazing considering how much value you get! - Fake Name"
  ]
}
`,
});

const generatePersuasiveTestimonialsFlow = ai.defineFlow(
  {
    name: 'generatePersuasiveTestimonialsFlow',
    inputSchema: GeneratePersuasiveTestimonialsInputSchema,
    outputSchema: GeneratePersuasiveTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
