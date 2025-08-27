import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ReportingSection } from "@/components/reporting-section";
import { GovernanceSection } from "@/components/governance-section";
import { StakingSection } from "@/components/staking-section";
// import { ProposalSection } from "@/components/proposal-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <ReportingSection />
        <GovernanceSection />
        <StakingSection />
        {/* <ProposalSection /> */}
      </main>
      <Footer />
    </div>
  );
}
