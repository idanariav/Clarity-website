---
sidebar_position: 5
---

# Integrations

Clarity connects to Jira, GitHub, Google Calendar, Slack, and Obsidian, and exposes your tasks to AI assistants and scripts through a built-in command-line tool. Each integration can be switched off in **Settings → feature toggles** (Integrations group). Open each integration's manager from the **status indicator in the sidebar** or from Settings.

---

## Jira

Two-way sync that pulls Jira issues into your boards as cards.

**Setup**
1. Open the **Jira** manager (sidebar status indicator or Settings).
2. Enter your **Jira URL** and an **API token** (create one from your Jira account's *API tokens* page).

![The Jira setup dialog with fields for Site, Email, and API Token, and a Test & save button](/img/screenshots/integration-jira.png)

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

## GitHub

Read-only branch/PR status shown on Jira-linked cards.

**Setup**
1. Open the **GitHub** manager (sidebar status indicator or Settings).
2. Enter your **GitHub organization** and a read-only **personal access token** — a fine-grained PAT with *Pull requests* and *Metadata* set to Read (approved for the org), or a classic token with the `repo` scope authorized for SSO.
3. Click **Test & save**. Your token is stored in a permission-restricted local file, not in the app's synced database.

![The GitHub setup dialog with fields for Organization and Personal access token](/img/screenshots/github-status.png)

**What it shows**
- Applies only to cards already linked to a Jira issue (see [Jira](#jira) above) — GitHub matches the task's Jira key against branch names on open (and recently closed) pull requests across the org.
- A status glyph appears on the card: **PR clean** (open, no unresolved review comments), **PR attention** (open, unresolved review comments), or **Merged/closed**.
- Click the glyph to open the pull request on GitHub. Clarity never writes to GitHub.
- Refreshes automatically about every **10 minutes**; a **Refresh now** button in the GitHub manager triggers an immediate sync.

**Use cases:** see at a glance which Jira-linked cards have a PR waiting on your review versus one that's already shipped.

---

## Google Calendar

Two-way sync between your tasks and your calendar.

**Setup**
1. Open the **Google Calendar** manager.
2. Complete the Google **OAuth** sign-in (opens your browser). Your credentials are stored in a permission-restricted local file, not in the app's synced database.
3. Choose which **calendars** to sync.

**What syncs**
- Tasks that have a dated time, and **focus sessions** you create in the [Day Planner](settings-and-features#day-planner), push out as calendar events.
- Calendar events can be pulled in.
- Per calendar, choose whether its all-day and/or timed events show up in day-scoped views (e.g. Today) and the mobile Today screen — toggle this in the calendar's row in the manager.
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

## Obsidian Bases

Bind a task to an Obsidian Bases view to see how much work is left, without leaving Clarity. Desktop only.

**Setup**
1. Open a task and find the **Obsidian Base** section, then **Link a base…**.
2. Choose a `.base` file (Obsidian's Bases plugin file) from the list, or type its path.
3. Enter the **view** name defined inside that base.
4. Optionally set a **vault** name — leave blank to use the active vault.

![A task's Obsidian Base section in its empty state, reading \"Not linked to a base\" with a \"Link a base…\" action](/img/screenshots/obsidian-base-field.png)

**What it shows**
- **Next up** — the first item in the view's results.
- **Remaining** — how many items the view currently matches.
- Read-only: Clarity queries the base via Obsidian's own CLI and never writes back.
- Refreshes automatically about every **10 minutes**; a **Sync now** button in the task re-syncs immediately.
- Desktop only: because syncing talks to a locally-running desktop Obsidian install, it doesn't run at all when you're using Clarity's mobile view.

**Use cases:** track progress on an Obsidian-managed reading list, backlog, or project note straight from its linked Clarity task.

---

## AI assistant (CLI)

Clarity ships a **command-line tool** so AI assistants (e.g. Claude Code) and scripts can read and manage your tasks using the same database the app uses. Changes it makes appear in the app automatically.

**Installing the CLI**
1. Open **Settings → Advanced**, where the **Command-Line Tool** section walks through installation (macOS only; nothing is installed until you do this).
2. **Node.js on PATH** — required first. If it's missing, Settings shows a link to nodejs.org.
3. Click **Install** to download the CLI matching your app version and link it onto your PATH (this asks for your admin password once). If it's already installed but out of date, the button reads **Reinstall**.

**What it can do**

*Read*
- **`workspace`** — discover your boards, lists, projects, tags, custom fields, milestones, views, and the CQL guide. (Run this first to learn your names.)
- **`task query`** — find tasks with a [CQL](views-and-cql#cql--clarity-query-language) filter.
- **`task get`** — fetch one task in full.
- **`view run`** — run one of your saved views.

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

**Simplest version — one line, full [Quick Add](boards-and-tasks#quick-add) syntax:**

1. Shortcuts → **New Shortcut**.
2. Add **Ask for Input** (Text) — this is where you'll type the task, e.g. `Buy milk tomorrow @Groceries #errand !2`.
3. Add **URL Encode** (search the actions library), fed by the previous step's output.
4. Add **Text**, set to `clarity://quickadd?text=` followed by the encoded result from step 3.
5. Add **Open URLs**, passing the composed text from step 4.
6. Name the shortcut (e.g. "Quick Add to Clarity") and save.

Run it from Spotlight, a keyboard shortcut (Shortcuts → shortcut details → add one), or say "Hey Siri, Quick Add to Clarity."

**Structured version — separate fields instead of typed syntax:** build the URL the same way, but add more query params instead of (or alongside) `text`: `&project=<name>`, `&tags=<comma-separated names>`, `&board=<name>`, `&priority=<1-4>`, `&doDate=<YYYY-MM-DD>`, `&deadline=<YYYY-MM-DD>`, `&startDate=<YYYY-MM-DD>` — each URL-encoded the same way. These win over anything typed in `text`, so a shortcut can mix a free-text title with a **Choose from Menu** step for the project. Project/tag/board names that don't match an existing one are ignored rather than failing the task.
