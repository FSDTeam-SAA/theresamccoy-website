import { Certification } from "@/features/landing/components/training";
import { MarketplaceTiers } from "../components/marketplace-tiers";
import { MarketplaceBrowser } from "../components/marketplace-browser";
import { SiteShell } from "../components/site-shell";

export function MarketplacePage() {
  return (
    <SiteShell active="Marketplace" header={false}>
      <MarketplaceBrowser />
      <Certification />
      <MarketplaceTiers />
    </SiteShell>
  );
}
