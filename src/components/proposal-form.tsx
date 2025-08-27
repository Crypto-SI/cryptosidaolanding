"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// import { submitProposal } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Loader2, Lightbulb } from "lucide-react";

const ProposalFormSchema = z.object({
  proposal: z
    .string()
    .min(50, { message: "Proposal must be at least 50 characters long." })
    .max(5000, { message: "Proposal cannot exceed 5000 characters." }),
});

type ProposalFormValues = z.infer<typeof ProposalFormSchema>;

export function ProposalForm() {
  // const [summary, setSummary] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(ProposalFormSchema),
    defaultValues: {
      proposal: "",
    },
  });

  async function onSubmit(data: ProposalFormValues) {
    setIsPending(true);
    // setSummary(null);
    try {
      // const result = await submitProposal(data.proposal);
      // if (result.error) {
      //   throw new Error(result.error);
      // }
      // setSummary(result.summary ?? null);
      toast({
        title: "Proposal Submitted",
        description: "Your proposal has been submitted for review.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error Submitting Proposal",
        description:
          error instanceof Error ? error.message : "An unknown error occurred.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="proposal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Project Proposal</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your project, its goals, and its potential impact on the CryptoSI DAO..."
                    className="min-h-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Proposal"
            )}
          </Button>
        </form>
      </Form>
      {/* {summary && (
        <Card className="mt-6 bg-secondary">
          <CardHeader>
            <div className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <CardTitle className="font-body">AI-Generated Summary</CardTitle>
            </div>
            <CardDescription>
                This is a summary of the proposal for quick review.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{summary}</p>
          </CardContent>
        </Card>
      )} */}
    </>
  );
}
