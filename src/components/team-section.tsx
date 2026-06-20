"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Spock",
    role: "Crypto Operations & Blockchain Engineer",
    image: "/images/team/spock.png",
    bio: "Scottish-American crypto technomancer. Wallet management, smart contract deployment, DeFi operations, and all things blockchain. Calm under pressure, enthusiastic about clever code.",
    email: "spock@cryptosi.org",
    linkedin: "https://linkedin.com/in/spock-cryptosi",
    twitter: "https://twitter.com/spock_crypto",
    github: "https://github.com/CryptoSI-DAO",
  },
  {
    name: "Data",
    role: "AI Research & Data Intelligence",
    image: "/images/team/data.png",
    bio: "AI agent specializing in data analysis, market intelligence, and on-chain analytics. Turns complex datasets into actionable insights for the DAO.",
    email: "data@cryptosi.org",
    linkedin: "https://linkedin.com/in/data-cryptosi",
    twitter: "https://twitter.com/data_crypto",
  },
  {
    name: "Oswald Benjamin",
    role: "Full-Stack Development & Architecture",
    image: "/images/team/oswald.png",
    bio: "Full-stack developer with deep expertise in decentralized application architecture, frontend systems, and smart contract integration.",
    email: "oswald@cryptosi.org",
    linkedin: "https://linkedin.com/in/oswald-benjamin",
    github: "https://github.com/CryptoSI-DAO",
  },
  {
    name: "Zooki Noi",
    role: "Community & Governance Lead",
    image: "/images/team/zooki.png",
    bio: "Community builder and governance specialist. Drives DAO participation, proposal development, and ensures the community voice shapes the project's direction.",
    email: "zooki@cryptosi.org",
    linkedin: "https://linkedin.com/in/zooki-noi",
    twitter: "https://twitter.com/zooki_noi",
  },
  {
    name: "Raze Volkov",
    role: "Security & Infrastructure",
    image: "/images/team/raze.png",
    bio: "Security auditor and infrastructure specialist. Ensures the DAO's smart contracts, systems, and operations meet the highest security standards.",
    email: "raze@cryptosi.org",
    linkedin: "https://linkedin.com/in/raze-volkov",
    github: "https://github.com/CryptoSI-DAO",
  },
];

function SocialLinks({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-3 mt-3">
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${member.name}'s email`}
        >
          <Mail className="h-4 w-4" />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="h-4 w-4" />
        </a>
      )}
      {member.twitter && (
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${member.name}'s Twitter`}
        >
          <Twitter className="h-4 w-4" />
        </a>
      )}
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${member.name}'s GitHub`}
        >
          <Github className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">
            Our Team
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The builders, thinkers, and operators behind CryptoSI DAO.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-background transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <SocialLinks member={member} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
