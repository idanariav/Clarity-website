# Google Play listing — agreed copy

Source of truth for the Play Console text. Lives at the repo root, outside `docs/` and `src/pages/`, so
Docusaurus does not publish it. Update this file first, then paste into the console.

**Status:** DRAFT (2026-09-21) — not yet agreed. Before finalizing, verify every feature below works on the
Android build and matches the Data safety form.

## Store rules this copy follows (companion-app model)

- No prices, no "buy/subscribe at our website", no link to checkout or pricing (Play payments policy; Apple
  3.1.1 / 3.1.3(b) for the future iOS listing). Re-check current policy text before each submission — the
  external-purchase rules changed recently.
- Trial and paid-plan requirement are disclosed, but without naming a price or a place to buy.
- Claims about data must match the privacy policy and Data safety form.

## App title (30 chars max)

Clarity HQ

## Short description (80 chars max)

Kanban boards, habits and a query language for people who've outgrown to-do lists.

## Full description (4000 chars max)

Clarity HQ is a task manager built for people who've outgrown a plain to-do list — a full Kanban board with the organization of a project tool, minus the overhead.

BOARDS THAT SCALE WITH YOU
Tasks, projects, milestones, tags, custom fields, and checklists — organize a quick errand list or a multi-month project on the same board.

HABITS, PACKING LISTS, AND MORE
Track daily habits with streaks, build reusable packing lists, and set up rewards to keep yourself motivated — all alongside your tasks, not in a separate app.

FIND ANYTHING, INSTANTLY
The built-in query language lets you filter boards by any combination of tag, project, priority, or due date — no digging through menus.

CONNECT THE TOOLS YOU ALREADY USE
• Two-way sync with Jira — move a card, update the issue, and back
• Two-way sync with Google Calendar — push tasks and focus sessions onto your calendar
• Turn a Slack message into a task by pasting its link
• See a linked GitHub pull request's status right on the card
Integrations are optional and off until you connect them.

WIDGETS THAT KEEP YOU ON TRACK
Home screen widgets surface today's tasks and habit streaks without opening the app.

YOUR DATA, YOUR DEVICE
Clarity HQ is local-first: your boards live in a database on your device first, and it works offline. Cloud Sync is optional and off unless you turn it on — use it to keep your boards current across your other signed-in devices.

No ads. Crash reporting is opt-in and off by default.

ACCOUNT AND TRIAL
A Clarity account is required. Includes a 30-day free trial; continued use after the trial requires an active plan on your account.

Also available on desktop.

## Open items to verify before agreeing

- [ ] Jira, Google Calendar, Slack link import and GitHub PR status all work on the Android build (docs say
      Obsidian sync is desktop-only — check the others).
- [ ] "Database on your device" — if we want to say "encrypted", confirm how the Android DB is encrypted.
- [ ] Data safety form declares: account info, optional Cloud Sync content, opt-in Sentry crash reports, and
      each integration's data flow.
- [ ] App access notes: demo account with a non-expiring entitlement (`internal`/`lifetime`) for reviewers.
