import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dapps = [
  {
    name: "QuantumLeap Finance",
    description: "A decentralized exchange with advanced liquidity solutions and minimal slippage.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    hint: "abstract blockchain",
    tags: ["DeFi", "DEX"],
  },
  {
    name: "NexusMarket",
    description: "A peer-to-peer NFT marketplace for rare digital collectibles and art.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    hint: "digital art",
    tags: ["NFT", "Marketplace"],
  },
  {
    name: "Sentinel Protocol",
    description: "Decentralized identity and data management protocol putting users in control.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    hint: "security shield",
    tags: ["Identity", "Data"],
  },
  {
    name: "EchoLend",
    description: "A lending and borrowing platform with competitive interest rates and flash loans.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    hint: "financial chart",
    tags: ["DeFi", "Lending"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">dApp Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curated selection of innovative decentralized applications powered by the CryptoSI DAO.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {dapps.map((dapp) => (
            <Card key={dapp.name} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={dapp.imageUrl}
                  alt={dapp.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={dapp.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold font-body">{dapp.name}</CardTitle>
                <CardDescription className="mt-2">{dapp.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                    {dapp.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
