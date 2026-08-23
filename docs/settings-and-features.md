---
sidebar_position: 6
---

# Settings & Features

Open **Settings** from the sidebar. It holds the feature on/off switches, appearance, keyboard shortcuts, and the entry points to the power features documented below.

## Feature toggles

Most non-core features can be switched off to declutter the UI. Core features (boards, lists, cards, search, theme) have no switch and are always available. **Turning a feature off hides its UI and stops its background work, but keeps your data** — turn it back on and everything returns.

### Organization

| Feature | What it controls |
| --- | --- |
| **Views & Overview** | Saved cross-board filtered views and the multi-view dashboard. |
| **Day Planner** | Time-block your day: drag tasks onto an agenda alongside calendar events. |
| **Quick Add** | The keyboard-triggered popup to capture a task with date, priority, labels, and destination. |
| **Projects** | Group tasks into projects with sequential or parallel ordering. |
| **Task Dependencies** | Mark a task as blocked until one or more other tasks are done. |
| **Tags** | Color-coded labels you can attach to tasks across boards. |
| **Custom Fields** | Structured metadata (select, text, number…) shown on cards. |
| **Checklist** | A simple checklist of done/not-done sub-items inside a task. |
| **Task Duration** | Plan how long a task should take and track logged vs. planned time. |
| **Flexible Tasks** | Mark a task flexible: roll its do date to today or expire it automatically instead of going overdue. |
| **Reminders** | Get notified before a task's time, or repeatedly while a task sits untouched. |
| **Templates** | Reusable task blueprints applied with the `~name` quick-add token. |
| **Automations** | Event-driven actions that run when tasks are created or completed. |
| **Column Rules** | Automatically color cards in a list based on filter rules. |

### Integrations

| Feature | What it controls |
| --- | --- |
| **Jira Sync** | Two-way sync that imports Jira issues into columns. |
| **Google Calendar** | Two-way sync of tasks and calendar events. |
| **Slack Import** | Turn Slack messages into tasks from their permalink. |

See [Integrations](integrations.md) for setup.

## Appearance

- **Theme** — choose a preset: **Default**, **Dracula**, **Nord**, **Tokyo Night**, **Solarized Light**, or **Gruvbox**. Some are light, some dark.
- **Light/Dark + Accent** — when using the **Default** theme you also get a light/dark toggle and an **accent color**: Blue, Purple, Green, Teal, Orange, or Pink.
- **Card layout** — **Full** (all card metadata visible) or **Compact** (quieter cards), with per-attribute toggles for what compact cards show (tags, Jira key, milestone, custom fields, checklist progress).

## Keyboard shortcuts

Global shortcuts (all rebindable here):

| Default key | Action |
| --- | --- |
| **n** | New task — focus the first list's quick-add |
| **a** | Open the Quick Add popup |
| **t** | Cycle theme (light / dark / system) |
| **?** | Show the shortcuts cheat-sheet |
| **[** | Previous board |
| **]** | Next board |

**Reserved** shortcuts (shown for reference, not rebindable): **1–9** switch to the nth board, **⌘↵** save in the task dialog, **Esc** close dialog / clear selection.

**To rebind:** click a shortcut row in Settings, press the new key combo, and it's saved. Combos that clash with reserved shortcuts are blocked. Press **?** anytime to see the current bindings.

---

## Power features

Each below lists *what it does · how to use it · when it shows up · a use case*.

### Reminders

- **What:** native notifications for a task. Two kinds: **time-based** (fire before the task's do/deadline time, or at a custom moment) and **activity** (re-fire on an interval while the task sits untouched).
- **How:** open a task → Reminders. For time reminders pick an anchor (do date, deadline, or custom) and an offset (on time, 30 min, 1 hour, 1 day before…). For activity reminders set the repeat interval.
- **When:** delivered as OS notifications while the app is running.
- **Use case:** "remind me 1 hour before this deadline", or "nudge me every day until I touch this."

### Recurring tasks

- **What:** a task that regenerates the next occurrence when you complete it.
- **How:** open a task → Recurrence. Choose frequency (daily / weekly / monthly / yearly) and interval (e.g. every 3 months = quarterly), the weekly weekdays or the monthly pattern (a day-of-month, or an "nth weekday" like *last Friday*), and an end rule (never / until a date / after N times). Choose **mode**: *schedule* (next slot is fixed regardless of when you finish) or *completion* (next slot is measured from when you complete it).
- **When:** the next occurrence appears when you mark the current one done.
- **Use case:** weekly reports, quarterly reviews, "water the plants every 3 days."

### Flexible tasks

- **What:** an opt-in mode for tasks whose do date you don't fully control — "nice to have, not a must." A flexible task never shows as overdue in Today/Overview or on the board; instead, if it's still incomplete once its do date has passed, it's either **rolled** to today (repeating until you complete it) or **expired** (deleted). A real deadline you also set on the task is unaffected and still signals overdue normally.
- **How:** open a task → **Flexible** → choose *Off*, *Roll to tomorrow if missed*, or *Expire if missed*. Also filterable in CQL/views (`flexibility is roll`, `flexibility is set`, …).
- **When:** checked whenever the app is open, roughly once a minute — there's no fixed midnight job, so the rollover/expiry lands the next time the app polls after the day changes.
- **Use case:** "donate blood" — something you want to do but can't schedule precisely (no blood drive yet, no free slot) — set to *Roll* so it keeps surfacing as today's work without ever guilt-tripping you as overdue.

### Templates

- **What:** reusable task blueprints.
- **How:** Templates manager — set a title prefix, notes, default priority, default project/milestone, default tags, default custom-field values, and date offsets (start/do/deadline relative to the day you create the task). Apply a template by typing `~templatename` in Quick Add, or from a list's menu.
- **When:** applied at task creation.
- **Use case:** a "Bug report" template that pre-fills priority, tags, and a notes checklist.

### Custom Fields

- **What:** structured metadata on tasks — types **text**, **number**, **date**, or **select** (with options).
- **How:** Fields manager — create fields and toggle **Show on card** (renders in card metadata) and **Quick edit** (editable from the card's hover row). Set values per task in the editor.
- **When:** appear on cards/editor wherever enabled.
- **Use case:** an "Effort" number field you can sort, filter (`field:"Effort" >= 3`), color cards by, and total with Column Rules.

### Automations

- **What:** event-driven actions that run automatically.
- **How:** Automations manager — pick a **trigger** (task **created** or **completed**), an optional **filter** to narrow which tasks qualify, and one or more **actions**: *update* fields (priority, dates, notes, project, add/remove tags), *move* to a board+list, *complete*, or *create from a template* (the new task's title can include `{{title}}`, the trigger task's title). Enable/disable each and set their order.
- **When:** fire on the matching create/complete event. Automation-caused events don't re-trigger automations, so they can't loop.
- **Use case:** "when a task is completed, create a follow-up from the *Review* template"; "when a P1 task is created, move it to the *Now* list."

### Column Rules

- **What:** per-list alerts that **color the list** when it gets overloaded.
- **How:** Column Rules editor for a list — choose a **metric** (task **count**, or **sum** of a number custom field), an **operator** (greater/less than), a **threshold**, an optional **filter** to scope which tasks count, and a **color**. The first matching rule wins.
- **When:** the list outline takes the rule's color while the condition holds.
- **Use case:** turn the *Doing* list red when it holds more than 5 tasks (WIP limit), or when total *Effort* exceeds your capacity.

### Day Planner

- **What:** a time-blocking view for a single day.
- **How:** open **Planner**. The left pane lists tasks that need scheduling; the right pane is a 24-hour timeline showing your Google Calendar events (if synced) and **focus sessions**. Drag a task onto the timeline to schedule a session; drag to a trash zone to remove it; use the arrows to change day.
- **When:** it's its own view, opened from the sidebar.
- **Use case:** plan your day by dragging today's tasks into real time slots around your meetings. Sessions can sync to Google Calendar — see [Integrations](integrations.md#google-calendar).

### Projects

- **What:** group a board's tasks into projects, with an ordering discipline.
- **How:** create projects (each has a color and icon). Assign tasks via the editor, Quick Add `@project`, or the bulk bar. Choose **sequential** (tasks unlock one after another) or **parallel** (all available at once). Switch the project view between **List** and **Timeline (Gantt)**; on the timeline you can drag milestone/task dates to reschedule.
- **When:** projects appear as a filter in the board header and as a grouping in views.
- **Use case:** run a multi-step initiative where some work must happen in order, and see it on a timeline.
