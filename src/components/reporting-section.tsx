import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, LandPlot, HandCoins } from "lucide-react";
import { TreasuryChart } from "./treasury-chart";

export function ReportingSection() {
  return (
    <section id="reporting" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Transparent Financials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Full transparency into the DAO's treasury and financial activities. All data is verifiable on-chain.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-4 pt-12 sm:grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Treasury Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,458,039.42</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value Locked (TVL)</CardTitle>
              <LandPlot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$78,210,991.00</div>
              <p className="text-xs text-muted-foreground">Across all portfolio dApps</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staking Rewards Paid</CardTitle>
              <HandCoins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,102,492.71</div>
              <p className="text-xs text-muted-foreground">Total rewards distributed to date</p>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto pt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Treasury Growth</CardTitle>
                </CardHeader>
                <CardContent>
                    <TreasuryChart />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
