import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, MessageSquare, Twitter } from "lucide-react";

export function JoinDaoSection() {
  return (
    <section id="join" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Join The DAO</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Becoming a member of CryptoSI DAO is simple and rewarding. Here’s how you can join:
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 pt-12">
          <div className="grid gap-1 text-center">
            <h3 className="text-lg font-bold">1. Buy Our Token</h3>
            <p className="text-sm text-muted-foreground">
              Use the widget below to purchase our token on various chains.
            </p>
            <div className="mt-4">
                <Card className="bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader>
                        <CardTitle>Token Purchase Widget</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">[Widget Placeholder]</p>
                    </CardContent>
                </Card>
            </div>
          </div>
          <div className="grid gap-1 text-center">
            <h3 className="text-lg font-bold">2. Connect with Us</h3>
            <p className="text-sm text-muted-foreground">
              Join our community on Discord, participate in our forum discussions, and follow us on social media.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="outline">
                <Link href="https://discord.gg/63JbDWV">
                  <svg className="w-4 h-4 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8854-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.618 1.2299a18.1044 18.1044 0 00-3.4737 0c-.1716-.4054-.407-1.002-.618-1.2299a.0741.0741 0 00-.0785-.0371 19.7364 19.7364 0 00-4.8854 1.5152.069.069 0 00-.032.0599c-.0422.3245-.0599.517-.086.7441-.0262.227-.0262.3245-.0262.3245s.227.4202.4284.8245a18.3276 18.3276 0 002.3218 2.0661c-.5574.456-.9928.981-1.3282 1.5298a.0741.0741 0 00.0262.0954c.262.1488.5828.2828.8805.4168a.0741.0741 0 00.0954-.0105c.4202-.3753.804-.7768 1.1394-1.2037a12.9377 12.9377 0 002.0499.0105c.3353.427.7191.8285 1.1289 1.2037a.0741.0741 0 00.0954.0105c.2977-.134.6185-.268.8805-.4168a.0741.0741 0 00.0262-.0954c-.3353-.5488-.7707-1.0738-1.3282-1.5298a18.293 18.293 0 002.3218-2.0661c.2014-.4042.4284-.8245.4284-.8245s0-.0975-.0262-.3245c-.0262-.227-.0438-.4196-.086-.7441a.069.069 0 00-.032-.06.0262.0262 0 000 0zM8.02 15.3312c-.954 0-1.7342-.9139-1.7342-2.0468s.7802-2.0468 1.7342-2.0468c.954 0 1.7342.9139 1.7342 2.0468s-.7802 2.0468-1.7342 2.0468zm7.9578 0c-.954 0-1.7342-.9139-1.7342-2.0468s.7802-2.0468 1.7342-2.0468c.954 0 1.7342.9139 1.7342 2.0468s-.7802 2.0468-1.7342 2.0468z" /></svg>
                  Join Discord
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#governance">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Forum
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://twitter.com/Crypto_SI">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-1 text-center">
            <h3 className="text-lg font-bold">3. Get Involved</h3>
            <p className="text-sm text-muted-foreground">
              Participate in governance by voting on proposals, contributing to projects, and taking on roles within the DAO.
            </p>
            <div className="mt-4">
                <Button asChild>
                    <Link href="#governance">
                        View Proposals <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
         <div className="text-center mt-12">
            <p className="text-muted-foreground">
                Join us today and be part of a thriving community shaping the future of decentralized finance.
            </p>
        </div>
      </div>
    </section>
  );
}
