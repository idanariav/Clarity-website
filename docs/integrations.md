---
sidebar_position: 5
---

# Integrations

Clarity connects to Jira, Google Calendar, and Slack, and exposes your tasks to AI assistants and scripts through a built-in command-line tool. Each integration can be switched off in **Settings → feature toggles** (Integrations group). Open each integration's manager from the **status indicator in the sidebar** or from Settings.

---

## Jira

Two-way sync that pulls Jira issues into your boards as cards.

**Setup**
1. Open the **Jira** manager (sidebar status indicator or Settings).
2. Enter your **Jira URL** and an **API token** (create one from your Jira account's *API tokens* page).

**Imports**
- Create one or more named **imports**, each with a **JQL** query (e.g. `assignee = currentUser() AND statusCategory != Done`).
- Pick a destination **board + list**. Matching issues appear there as cards with a **status pill** showing the Jira status.

**Two-way sync**
- Status changes flow both ways (Clarity ↔ Jira).
- Auto-sync runs about every **10 minutes**; a **manual sync** button is available.

**Unlinking**
- If you drag a card out of its import's JQL results, it becomes **unlinked** — kept in Clarity but no longer synced.

**Use cases:** triage your Jira queue inside your personal board, mix Jira issues with non-Jira tasks, and update status without leaving Clarity.

---

## Google Calendar

Two-way sync between your tasks and your calendar.

**Setup**
1. Open the **Google Calendar** manager.
2. Complete the Google **OAuth** sign-in (opens your browser). Your credentials are stored securely in your operating system's keychain.
3. Choose which **calendars** to sync.

**What syncs**
- Tasks that have a dated time, and **focus sessions** you create in the [Day Planner](settings-and-features.md#day-planner), push out as calendar events.
- Calendar events can be pulled in.
- Sync runs about every **10 minutes** (staggered after Jira) plus a manual trigger.

**Use cases:** see your tasks and meetings together, block focus time that shows up on your shared calendar, and avoid double-booking.

---

## Slack

Turn a Slack message into a task.

**Setup**
1. Open the **Slack** manager and connect your Slack workspace.

**Importing**
1. In Slack, copy a message's **permalink** (message ⋯ menu → *Copy link*).
2. In Clarity, paste the permalink, choose a destination **board + list**, and a task is created from the message.

**Use case:** capture "can you handle this?" Slack asks as real tasks without retyping them.

---

## AI assistant (CLI)

Clarity ships a **command-line tool** so AI assistants (e.g. Claude Code) and scripts can read and manage your tasks using the same database the app uses. Changes it makes appear in the app automatically.

**What it can do**

*Read*
- **`workspace`** — discover your boards, lists, projects, tags, custom fields, milestones, perspectives, and the CQL guide. (Run this first to learn your names.)
- **`task query`** — find tasks with a [CQL](perspectives-and-cql.md#cql--clarity-query-language) filter.
- **`task get`** — fetch one task in full.
- **`perspective run`** — run one of your saved perspectives.

*Write*
- **`task create`**, **`task update`**, **`task complete`**, **`task delete`**
- **`milestone-create`**
- **`tag`**, **`project`** (create / rename / recolor / delete)
- **`task bulk-create`**, **`task bulk-update`** (create or update many tasks at once — `bulk-update` can target tasks by a CQL filter)

**Example asks**
- "What P1 tasks are overdue across all my boards?" → `task query 'priority = 1 and deadline is overdue'`.
- "Create three subtasks under the *v1* milestone." → `task bulk-create`.
- "Push every task tagged *#errands* to next week." → `task bulk-update` filtered by `tag:errands`.

For technical details (command list, schemas, setup), see `cli/README.md` in the app's source.

## macOS Shortcuts

Clarity registers the `clarity://` URL scheme on its Mac app, so the Shortcuts app (or Siri, or a keyboard shortcut, or a script) can create tasks without opening Clarity first.

**Simplest version — one line, full [Quick Add](boards-and-tasks.md#quick-add) syntax:**

1. Shortcuts → **New Shortcut**.
2. Add **Ask for Input** (Text) — this is where you'll type the task, e.g. `Buy milk tomorrow @Groceries #errand !2`.
3. Add **URL Encode** (search the actions library), fed by the previous step's output.
4. Add **Text**, set to `clarity://quickadd?text=` followed by the encoded result from step 3.
5. Add **Open URLs**, passing the composed text from step 4.
6. Name the shortcut (e.g. "Quick Add to Clarity") and save.

Run it from Spotlight, a keyboard shortcut (Shortcuts → shortcut details → add one), or say "Hey Siri, Quick Add to Clarity."

**Structured version — separate fields instead of typed syntax:** build the URL the same way, but add more query params instead of (or alongside) `text`: `&project=<name>`, `&tags=<comma-separated names>`, `&board=<name>`, `&priority=<1-4>`, `&doDate=<YYYY-MM-DD>`, `&deadline=<YYYY-MM-DD>`, `&startDate=<YYYY-MM-DD>` — each URL-encoded the same way. These win over anything typed in `text`, so a shortcut can mix a free-text title with a **Choose from Menu** step for the project. Project/tag/board names that don't match an existing one are ignored rather than failing the task.
