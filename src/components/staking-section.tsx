import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Gem, Leaf } from "lucide-react";

const stakingOptions = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "CSI Single Staking",
        description: "Stake your native CSI tokens to earn a stable APY and participate in governance.",
        apy: "8.5%",
    },
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: "CSI/ETH Liquidity Pool",
        description: "Provide liquidity to the CSI/ETH pool on QuantumLeap to earn trading fees and bonus rewards.",
        apy: "24.2%",
    },
    {
        icon: <Leaf className="w-8 h-8 text-primary" />,
        title: "Eco-Yield Farming",
        description: "Farm yields on partner protocols with a focus on sustainable and green DeFi projects.",
        apy: "15.8%",
    },
]

export function StakingSection() {
  return (
    <section id="staking" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Staking & Yield Farming</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Put your assets to work. Earn rewards and contribute to the DAO's liquidity and stability.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
            {stakingOptions.map((option) => (
                <Card key={option.title} className="flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="items-center">
                        {option.icon}
                        <CardTitle className="mt-4 text-center font-body">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                        <CardDescription className="text-center">
                            {option.description}
                        </CardDescription>
                        <div className="my-6 text-center">
                            <p className="text-sm text-muted-foreground">Current APY</p>
                            <p className="text-4xl font-bold text-primary">{option.apy}</p>
                        </div>
                        <Button className="w-full mt-auto">Start Earning</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
