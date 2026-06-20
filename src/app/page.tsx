import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { AppIdeasSection } from "@/components/app-ideas-section";
import { DashboardSection } from "@/components/dashboard-section";
import { HowValueCreatedSection } from "@/components/how-value-created-section";
import { ReportingSection } from "@/components/reporting-section";
import { GovernanceSection } from "@/components/governance-section";
// import { StakingSection } from "@/components/staking-section";
import { CipSection } from "@/components/cip-section";
import { JoinDaoSection } from "@/components/join-dao-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <PortfolioSection />
        <AppIdeasSection />
        <DashboardSection />
        <HowValueCreatedSection />
        <ReportingSection />
        <GovernanceSection />
        {/* <StakingSection /> */}
        <CipSection />
        <RoadmapSection />
        <JoinDaoSection />
        <OpenSourceSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
