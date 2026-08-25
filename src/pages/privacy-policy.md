---
title: Privacy Policy
description: What Clarity collects, where it's stored, and who it's shared with.
---

# Privacy Policy

_Last updated: August 25, 2026_

> **Note:** this is a standard template for a small, solo-operated software product, not a substitute for legal
> advice specific to your situation. It's provided here as a starting point and hasn't had a professional legal
> review.

This Privacy Policy explains what data Clarity (the "App"), operated by **Idan Ariav** ("we", "us"), collects,
where it's stored, and who it's shared with. It's meant to be read alongside our [Terms & Conditions](/terms).

Clarity is a **local-first** app: your boards and tasks live in a database on your own device first, and are only
sent anywhere else if you turn on Cloud Sync or connect an integration.

## Data we collect

### Account data

Creating an account (email + password, or "Continue with Google/Apple") is handled by our backend provider,
Supabase, using its built-in authentication service. We receive and store your **email address**, an **encrypted
password hash** (never your plain-text password), and, if you use Google or Apple sign-in, the basic profile
identifiers those providers return (typically your name and email). We don't use this to advertise to you.

### Your content — boards, tasks, and everything in them

Titles, notes, dates, tags, checklists, custom fields, projects, milestones, habits, rewards, and packing lists you
create in Clarity are stored in a local, **encrypted-at-rest** database on your device (via SQLCipher).

If **Cloud Sync** is on (included with subscriptions; not included with a Lifetime purchase — see our
[Terms](/terms#plans)), this same content is also sent to our Supabase-hosted backend so it's available on your
other signed-in devices. If Cloud Sync is off, none of it leaves your device.

### Diagnostics, analytics, and advertising

**We don't use any of these.** Clarity has no crash-reporting SDK, no analytics or usage-tracking SDK, and no
advertising SDK of any kind — nothing beyond what's described on this page leaves your device.

## Who we share data with

Clarity only talks to the services below — each one only when the related feature is on, and only with the data
that feature needs.

| Recipient | What we send | Why |
| --- | --- | --- |
| **Supabase** (our backend) | Your account (email, password hash, OAuth identity), and — if Cloud Sync is on — your task/board content, habits, rewards, packing lists, and app preferences | Account login and cross-device sync. Hosted on Supabase's own cloud infrastructure. |
| **Resend** (email delivery) | Your email address, and the content of account emails (email verification, password reset) | Delivers the transactional emails Supabase's authentication system sends on our behalf — sent from `noreply@clarity.idanariav.com`. |
| **Cloudflare** (Turnstile) | Standard bot-check browser signals | Blocks automated sign-up/sign-in abuse. Shown on the sign-in, sign-up, and password-reset screens. |
| **Atlassian (Jira)** *(if you connect it)* | Your API token (for authentication) and a status-change request when you move a linked task | Two-way status sync with your Jira issues. |
| **Google (Calendar)** *(if you connect it)* | Your OAuth token, and task titles for tasks/focus sessions you push to your calendar | Two-way sync between your tasks and your Google Calendar. |
| **Slack** *(if you connect it)* | Your OAuth token; nothing is sent automatically — only used to fetch a message's text when you manually paste its permalink | Turns a Slack message you choose into a task. |
| **GitHub** *(if you connect it)* | Your personal access token (read-only) | Looks up PR/branch status for Jira-linked cards. Clarity never writes to GitHub. |
| **Obsidian** *(if you use it)* | Nothing — Clarity only runs a query against Obsidian on your own machine, with no network request of any kind | Shows progress from a linked Obsidian Bases view. |
| **A payment processor** *(not yet live)* | Not applicable yet — Clarity doesn't process payments directly today. When checkout ships, a named third-party payment processor will handle it, and this page will be updated before that happens. | Billing. |

None of the above sell your data or use it for advertising.

### A note on Jira and GitHub content

If Jira is connected, an issue's summary, description, status, due date, and priority are copied into the matching
Clarity task, and (like the rest of your task content) sync to Supabase if Cloud Sync is on. GitHub only ever
supplies a pull request's status/URL — never its title or contents.

### A note on Obsidian Bases

Obsidian querying itself never leaves your device. However, the base file path, view name, and vault name you enter
to set up the link, along with the resulting "Next up" / "Remaining" summary, are stored as part of the linked
task — so if Cloud Sync is on, those specific values (not the full contents of your Obsidian vault) do sync to
Supabase like the rest of that task.

## How your data is stored on your device

Your local database is encrypted at rest. Integration credentials (Jira API tokens, GitHub tokens, Google/Slack
OAuth tokens) are kept in a separate, permission-restricted file outside that database — never in the synced
database itself, and never sent to Supabase. On Android, these credentials are additionally protected by the
device's hardware-backed encrypted storage (Android Keystore).

## Data retention & deletion

You can delete your account at any time from within the App. This removes your account and Supabase-synced data
from our backend. Since Clarity is local-first, deleting your account doesn't remotely wipe the copy of your data
already stored on your own device(s) — you're always in control of that locally.

## Your rights (GDPR/CCPA)

Wherever these rights apply to you, here's how to exercise them directly in the App — no request or wait required:

- **Access / portability ("give me everything you have"):** Settings → Privacy → **Export my data** writes a
  single JSON file with every board, task, habit, reward, packing list, and setting stored on that device —
  the same data Cloud Sync mirrors to our backend if it's on.
- **Deletion ("delete me"):** Settings → Account → **Delete account** permanently removes your account and its
  synced data from our backend (see "Data retention & deletion" above for what stays on-device).
- **Know what we collect and share:** the "Data we collect" and "Who we share data with" sections above are a
  complete account.

Something these don't cover? Email us at the address below and we'll handle it directly.

## Children's privacy

Clarity isn't directed at children, and we don't knowingly collect data from anyone under 13 (or the minimum age
required by your local law). If you believe a child has provided us data, contact us and we'll delete it.

## International data transfers

Our service providers (Supabase, Resend, Cloudflare, Google, GitHub, Slack, Atlassian) operate global
infrastructure, so your data may be processed outside your own country. Each of these providers maintains its own
safeguards for handling international data transfers.

## Changes to this policy

We may update this Privacy Policy from time to time; continued use of the App after a change means you accept the
updated policy. Material changes — such as adding a new integration, sub-processor, or a payment processor — will
be reflected here before they take effect.

## Security

Found a security issue? See our [Security Policy](/security) for how to report it.

## Contact

Questions about this policy, or to request account/data deletion: **[idan@idanariav.com](mailto:idan@idanariav.com)**.
