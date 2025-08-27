// Summarize Proposal Flow
'use server';

/**
 * @fileOverview A flow to summarize project proposals for quick evaluation.
 *
 * - summarizeProposal - A function that summarizes a given project proposal.
 * - SummarizeProposalInput - The input type for the summarizeProposal function.
 * - SummarizeProposalOutput - The return type for the summarizeProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProposalInputSchema = z.object({
  proposalText: z
    .string()
    .describe('The full text content of the project proposal.'),
});
export type SummarizeProposalInput = z.infer<typeof SummarizeProposalInputSchema>;

const SummarizeProposalOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the project proposal.'),
});
export type SummarizeProposalOutput = z.infer<typeof SummarizeProposalOutputSchema>;

export async function summarizeProposal(input: SummarizeProposalInput): Promise<SummarizeProposalOutput> {
  return summarizeProposalFlow(input);
}

const summarizeProposalPrompt = ai.definePrompt({
  name: 'summarizeProposalPrompt',
  input: {schema: SummarizeProposalInputSchema},
  output: {schema: SummarizeProposalOutputSchema},
  prompt: `You are an AI assistant that helps DAO members quickly understand project proposals.\n\nGiven the following project proposal text, create a concise summary that captures the key points, goals, and potential impact of the proposal. The summary should be brief and easy to understand.\n\nProject Proposal:\n{{{proposalText}}}`,
});

const summarizeProposalFlow = ai.defineFlow(
  {
    name: 'summarizeProposalFlow',
    inputSchema: SummarizeProposalInputSchema,
    outputSchema: SummarizeProposalOutputSchema,
  },
  async input => {
    const {output} = await summarizeProposalPrompt(input);
    return output!;
  }
);
