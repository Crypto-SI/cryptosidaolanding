# Decentralised Forum Platform Research — CryptoSI DAO

**Issue:** #3 — Investigate decentralised forum platforms for Community Governance integration
**Date:** 2026-06-08
**Author:** Spock, for CryptoSI DAO

---

## Executive Summary

CryptoSI DAO currently has **no forum or discussion platform** for community governance. The landing page's Governance section shows hardcoded placeholder data. This document evaluates 5 options and makes a recommendation.

**TL;DR Recommendation:** Start with **Snapshot** (for off-chain voting + proposals) + **Discourse** (for rich discussions). This is the same combo used by Aave, Uniswap, Compound, and hundreds of DAOs. Snapshot handles the governance side natively, Discourse handles community discussion.

---

## Option 1: Snapshot (snapshot.org)

### What it is
The dominant off-chain voting platform for DAOs. Gasless voting, token-weighted, supports multiple chains including Arbitrum.

### Pros
- **Purpose-built for DAO governance** — proposals, voting, delegation, all token-weighted
- **Gasless** — votes are signed messages, no transactions needed
- **Arbitrum native** — full support, subgraph available on Arbitrum
- **Free to use** — creating a space is free, voting is free
- **Huge ecosystem** — used by Aave, Uniswap, Lido, ENS, Arbitrum DAO, etc.
- **GraphQL API + Subgraph** — easy to query proposals, votes, spaces programmatically
- **Token-gating** — can restrict voting to CRDD holders
- **Snapshot.js SDK** — JavaScript library for building custom UIs
- **SafeSnap integration** — can connect to the Aragon DAO for on-chain execution

### Cons
- **No built-in discussion threads** — proposals have a description field but no comment/reply system
- **Requires The Graph API key** for subgraph queries (free tier available)
- **Off-chain only** — votes don't execute on-chain by themselves (need SafeSnap or manual execution)
- **No CryptoSI space yet** — need to create one

### API Access
```graphql
# Subgraph endpoint (Arbitrum)
https://gateway.thegraph.com/api/[api-key]/subgraphs/id/HuLBhuKuknXEEUmVmKR8Lsmpi5h1SfNLGcaa1e9tWyMG

# Example query — get proposals for a space
{
  proposals(first: 10, where: { space: "cryptosidao.eth" }) {
    id
    title
    body
    state
    choices
    scores
    start
    end
    author
  }
}
```

### Cost
- **Free** — creating a space, creating proposals, voting
- The Graph API key: free tier (sufficient for a small DAO)

### Integration Complexity
**Low.** Create a space → get API key → query subgraph → display in React. The Snapshot.js SDK handles auth and voting.

---

## Option 2: Commonwealth (commonwealth.im)

### What it is
All-in-one DAO coordination platform. Combines discussions, proposals, voting, and token launching. Recently rebranded to "Common". Supports 100,000+ communities, 4M+ users.

### Pros
- **All-in-one** — discussions + proposals + voting in a single platform
- **Multi-chain** — supports Ethereum, Arbitrum, Base, Solana, SUI, etc.
- **Token-gating** — communities can be gated by any token (CRDD)
- **Rich discussions** — threaded comments, reactions, nested replies
- **API available** — REST API for fetching threads, comments, proposals
- **Well-funded** — $20M raised from Polychain, Dragonfly, Framework, Spark
- **Partners include** Uniswap, Base, Arbitrum, Snapshot, Binance Wallet, OKX

### Cons
- **Centralised** — the platform is run by Commonwealth Labs (decentralisation in progress)
- **API documentation is sparse** — docs site is incomplete
- **Less proven for pure governance** — more of a community platform than a governance tool
- **Custom domain requires paid plan**

### Cost
- **Free tier** available for basic communities
- **Pro plan** pricing not publicly listed (contact sales)

### Integration Complexity
**Medium.** API exists but documentation is limited. Would need to reverse-engineer or contact their team.

---

## Option 3: Discourse (discourse.org)

### What it is
The gold standard for forum software. Open source, self-hostable, used by Ethereum Foundation, Gnosis, and many DAOs for community discussion.

### Pros
- **Best-in-class discussions** — threaded replies, categories, tags, search, moderation
- **Open source** — can self-host for full control
- **Rich API** — comprehensive REST + GraphQL API
- **Token-gating possible** — via DiscourseConnect or custom plugin
- **Proven at scale** — Ethereum Foundation, Gnosis, and hundreds of communities
- **Custom domain** — forum.cryptosidao.org
- **Full ownership** — you control the data

### Cons
- **Not governance-native** — no built-in voting or proposal system (need plugins)
- **Hosted plan costs $100/month** (Pro plan with API access)
- **Self-hosting requires DevOps** — Docker setup, maintenance, updates
- **No on-chain integration** out of the box

### Cost
- **Self-hosted:** Free (but needs server + maintenance)
- **Hosted Pro:** $100/month (includes API, custom domain, plugins)

### Integration Complexity
**Medium-High.** API is well-documented but Discourse is a full application, not a widget. Would need to either embed via iframe or build a custom frontend against the API.

---

## Option 4: Aragon Built-in Governance

### What it is
The CryptoSI DAO is already deployed on Aragon (Arbitrum). Aragon has built-in proposal creation and voting.

### Pros
- **Already deployed** — no new platform needed
- **On-chain** — votes execute directly through the DAO
- **Token-weighted** — uses CRDD for voting power
- **No additional cost** — included with the Aragon DAO

### Cons
- **No discussion feature** — proposals have a description but no comments/replies
- **No API for discussions** — Aragon doesn't provide a forum
- **Limited UX** — the Aragon UI is functional but not community-oriented
- **Not a forum** — it's a governance tool, not a discussion platform

### Cost
- **Free** — already included

### Integration Complexity
**Low for voting, N/A for discussions.** Can query Aragon DAO data via their subgraph, but there's no discussion data to fetch.

---

## Option 5: Discord + Collab.Land

### What it is
Token-gated Discord channels using Collab.Land or similar bots. Community already has a Discord (linked from the Join section).

### Pros
- **Already have Discord** — community is there
- **Token-gating** — Collab.Land can gate channels by CRDD holdings
- **Real-time chat** — familiar UX for crypto natives
- **Free** — Discord is free, Collab.Land has a free tier

### Cons
- **Not a forum** — chat is ephemeral, not structured discussion
- **No governance features** — no proposals, no voting
- **Centralised** — Discord owns the platform
- **Poor for proposals** — threads get buried, no formal structure
- **No API for governance** — Discord API is for bots, not governance

### Cost
- **Free**

### Integration Complexity
**Low for chat, N/A for governance.** Discord is not a governance platform.

---

## Comparison Matrix

| Feature | Snapshot | Commonwealth | Discourse | Aragon | Discord |
|---------|----------|-------------|-----------|--------|---------|
| **Proposals** | ✅ Native | ✅ Native | ❌ Plugin | ✅ Native | ❌ |
| **Voting** | ✅ Gasless | ✅ | ❌ Plugin | ✅ On-chain | ❌ |
| **Discussions** | ❌ Basic | ✅ Rich | ✅ Rich | ❌ | ✅ Chat |
| **Token-gating** | ✅ | ✅ | ⚠️ Plugin | ✅ Native | ⚠️ Bot |
| **API** | ✅ GraphQL | ⚠️ REST | ✅ REST | ✅ Subgraph | ⚠️ Bot |
| **Arbitrum support** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Cost** | Free | Free tier | $100/mo or self-host | Free | Free |
| **Integration** | Low | Medium | Medium-High | Low | Low |
| **Decentralised** | ✅ | ⚠️ Partial | ⚠️ Self-host | ✅ | ❌ |

---

## Recommendation

### Phase 1: Snapshot (Immediate — 1-2 days)
Create a Snapshot space for CryptoSI DAO. This gives us:
- Off-chain proposal creation and voting
- Token-weighted voting with CRDD
- GraphQL API to display active proposals on the landing page
- Integration with the existing Aragon DAO via SafeSnap (future)

**Steps:**
1. Go to snapshot.org and create a space (e.g., `cryptosidao.eth`)
2. Configure voting settings (CRDD as voting token, Arbitrum network)
3. Get a free The Graph API key
4. Update the GovernanceSection component to query the Snapshot subgraph
5. Replace hardcoded discussions with real proposals

### Phase 2: Discourse (Medium-term — 1-2 weeks)
Set up a Discourse forum for rich community discussions:
- Self-host on a small VPS (~$10/mo) or use hosted Pro ($100/mo)
- Categories: Proposals, General, Development, Treasury, Governance
- Token-gate certain categories to CRDD holders
- Link from the landing page's Governance section

### Phase 3: Commonwealth (Evaluate)
Keep on the radar. If they improve their API docs and add more governance features, could replace Discourse as an all-in-one solution.

---

## Open Questions

1. **CRDD token for voting:** Is CRDD an ERC20Votes token (with delegation)? Snapshot needs this for token-weighted voting. If not, we may need a custom voting strategy.
2. **Aragon ↔ Snapshot bridge:** Should Snapshot votes trigger on-chain execution via SafeSnap, or remain off-chain signalling?
3. **Discourse hosting:** Self-host (cheaper, more work) or hosted Pro (easier, $100/mo)?
4. **Custom domain:** forum.cryptosidao.org for Discourse? governance.cryptosidao.org for Snapshot?

---

## Related Issues

- [Issue #3](https://github.com/CryptoSI-DAO/cryptosidaolanding/issues/3) — This research task
- [Issue #1](https://github.com/CryptoSI-DAO/cryptosidaolanding/issues/1) — DAO Dashboard (could integrate Snapshot voting)
- [Issue #5](https://github.com/CryptoSI-DAO/cryptosidaolanding/issues/5) — Connect Wallet (needed for Snapshot voting UX)
