"use server";

import { summarizeProposal } from "@/ai/flows/summarize-proposal";

type FormState = {
  summary?: string | null;
  error?: string | null;
};

export async function submitProposal(
  proposalText: string
): Promise<FormState> {
  if (!proposalText) {
    return { error: "Proposal text cannot be empty." };
  }

  try {
    const result = await summarizeProposal({ proposalText });
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    // In a real app, you'd want to log this error to a monitoring service
    return {
      error:
        "There was an issue with the AI summarization service. Please try again later.",
    };
  }
}
