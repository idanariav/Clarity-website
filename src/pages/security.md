---
title: Security Policy
description: How to report a security issue in Clarity, and what to expect.
---

# Security Policy

_Last updated: August 24, 2026_

> **Note:** this is a standard template for a small, solo-operated software product, not a substitute for legal
> advice specific to your situation. It's provided here as a starting point and hasn't had a professional legal
> review.

## Reporting a vulnerability

Email **[idan@idanariav.com](mailto:idan@idanariav.com)** with details and, if you can, steps to reproduce. Please
don't open a public GitHub issue or disclose the issue publicly until we've had a chance to address it.

This is a solo-operated product, so response times are best-effort, not a contractual SLA:

- **Acknowledgement:** within 5 business days.
- **Initial assessment:** within 10 business days of acknowledgement.
- **Fix timeline:** depends on severity — we prioritize anything that exposes another user's account or data.

We'll keep you updated as we work on a fix, and — if you'd like — credit you once it ships.

## Scope

**In scope:**

- The Clarity desktop app (Windows/macOS/Linux builds) and its Android app.
- This website (`clarity.idanariav.com`).
- Our backend (Supabase project) to the extent it's reachable from the app or website.

**Out of scope:**

- Third-party services Clarity integrates with (Jira, Google, Slack, GitHub, Obsidian, Cloudflare, Resend) — please
  report issues in those directly to their own security teams.
- Social engineering, physical attacks, or denial-of-service testing against our infrastructure.
- Issues that require a jailbroken/rooted device or physical access to an unlocked, already-compromised device.

## Safe harbor

If you make a good-faith effort to comply with this policy while researching a vulnerability, we'll consider your
research authorized, won't pursue legal action against you for it, and won't report you to law enforcement for it.
This applies as long as you:

- Only interact with accounts and data you own, or have explicit permission to test with.
- Don't access, modify, or delete data beyond what's needed to demonstrate the issue.
- Don't degrade the service for other users (no automated scanning that generates significant load).
- Give us a reasonable chance to fix the issue before any public disclosure.

## Subprocessors

Clarity shares data with a small number of named third parties as part of running the product — see our
[Privacy Policy](/privacy-policy#who-we-share-data-with) for the full list of what's sent to each and why. In
short: **Supabase** (backend/auth/sync), **Resend** (transactional email), and **Cloudflare** (bot-check on
sign-in). A payment processor will be added here once checkout ships. We don't use any analytics, crash-reporting,
or advertising subprocessors.

## Contact

**[idan@idanariav.com](mailto:idan@idanariav.com)** — also see our machine-readable
[`/.well-known/security.txt`](/.well-known/security.txt) ([RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)).

For accessibility conformance details (relevant to some procurement reviews alongside this policy), see our
[Accessibility Statement](/accessibility).
