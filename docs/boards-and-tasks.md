---
sidebar_position: 3
---

# Boards & Tasks

The core of Clarity: boards hold lists, lists hold task cards.

## Boards

A board is one Kanban workspace with its own lists and sorting.

- **Create / switch:** click **+** in the sidebar to add a board; click a board to switch, or press **1–9** for the 1st–9th board, or **[** / **]** to move left/right.
- **Rename / reorder:** double-click a board name to rename; drag boards to reorder.
- **Icon:** pick a board icon from the icon picker.
- **Sort mode:** each board sorts its cards by **manual** (drag to arrange), **priority**, **deadline**, **do date**, **start date**, or **created**. Choose it from the board header.
- **Card color mode:** see [Card colors](#card-colors) below.

## Lists (columns)

Lists are the columns within a board (e.g. *To Do / Doing / Done*).

- **Add** a list with **+**, **reorder** by dragging, **rename** inline, and collapse/expand or remove lists.
- Lists can carry **Column Rules** that highlight them when they get too full — see [Settings & features → Column Rules](settings-and-features.md#column-rules).

## Cards (tasks)

A card is a task. Create one by typing in a list's quick-add box, or with the Quick Add popup (**a**). Click a card to open the full editor; drag it to move between lists or reorder.

### Quick Add

Press **a** for the Quick Add popup, or type in any list's quick-add box. As you type the **title**, Clarity recognizes shorthand **tokens** and lifts them out of the title:

| Token | Effect | Example |
| --- | --- | --- |
| `!1` `!2` `!3` `!4` | Set priority **P1–P4** | `Fix login !1` |
| `#tag` | Attach a tag (you can add several) | `Email #work #urgent` |
| `@project` | Assign to a project | `Draft spec @website` |
| `$board` | Set the destination board | `Fix login $engineering` |
| `~template` | Apply a template | `~standup notes` |
| *natural-language date* | Set the **do date** | `Call Sam tomorrow`, `Review in 2 days`, `Pay rent May 25`, `Plan last friday of may` |

Notes on matching:
- Tags / projects / boards / templates only match things that **already exist** (case-insensitive, spaces ignored). Unmatched tokens stay in the title.
- Priority, project, board, template, and date take the **first** match; **tags** accept all matches.
- Dates use forward-date logic ("tomorrow", "in 3 months", a weekday, or a specific date). Vague phrases like a bare month or a bare time are ignored on purpose.
- In the popup, the date/priority/project/tag **icon pickers** override what you typed for that attribute (tags merge); the **Board** picker works the same way for `$board`.
- `$board` is only recognized in the Quick Add popup (**a**), which shows a destination list/project picker to match — not in a list's inline quick-add box, since that box already implies its destination.

### The task editor

Click a card to open the detail editor. Fields available:

| Field | Notes |
| --- | --- |
| **Title** | The task name. |
| **Notes** | Free-text description. |
| **Priority** | P1–P4, or none. |
| **Start date** | When the task becomes available (before it, the task is *deferred*). |
| **Do date** + time | When you plan to work on it; the time anchors time-based reminders. |
| **Deadline** + time | When it's due; the time anchors time-based reminders. |
| **Duration** | Planned minutes (estimated effort). *(if the Task Duration feature is on)* |
| **Checklist** | Done/not-done sub-items. *(if Checklist is on)* |
| **Tags** | Multiple color-coded labels. *(if Tags is on)* |
| **Project** | Group the task into a project. *(if Projects is on)* |
| **Milestone** | Attach the task to a milestone (parent). |
| **Depends on** | Block this task until one or more other tasks on the same board are done. *(if Task Dependencies is on)* |
| **Custom fields** | Structured metadata you've defined. *(if Custom Fields is on)* |
| **Reminders** | Time-based or activity nudges. *(if Reminders is on)* — see [Settings & features → Reminders](settings-and-features.md#reminders) |
| **Recurrence** | Make the task repeat. — see [Settings & features → Recurring tasks](settings-and-features.md#recurring-tasks) |
| **Flexible** | Roll the do date to today, or expire the task, instead of it going overdue. *(if Flexible Tasks is on)* — see [Settings & features → Flexible tasks](settings-and-features.md#flexible-tasks) |
| **Jira link** | Status syncs with the linked Jira issue. — see [Integrations → Jira](integrations.md#jira) |

Press **⌘↵** (or **Ctrl+↵**) to save, **Esc** to close.

## Availability: available / deferred / blocked

Every active task has a computed **availability** (you don't set it directly):

- **Available** — ready to work on now.
- **Deferred** — its **start date** is still in the future.
- **Blocked** — it's waiting on something earlier: a child of a milestone that isn't its turn yet, a task in a **sequential** project/milestone whose predecessors aren't done, or a task listed in its **Depends on** field that isn't done yet.

Use the board header's **Show** control to either hide unavailable tasks or show them greyed out.

## Bulk actions

Select multiple cards (Ctrl/Cmd-click or Shift-click) to reveal the bulk action bar, where you can move them to a list/project, assign a milestone, add/remove tags, set priority, mark done/reopen, or delete — all at once.

## Card colors

The board header's **Card color** control tints cards by a chosen dimension:

| Mode | Color comes from |
| --- | --- |
| **None** | No tint. |
| **By Project** | The project's stripe color. |
| **By Date** | Bucketed: overdue / today / future (uses the deadline, falling back to the do date). |
| **By Priority** | The P1–P4 colors. |
| **By Custom Field** | A select field's option colors. |

## Milestones

A milestone is a parent task that groups child tasks and tracks their progress (done/total). Assign a task to a milestone from its editor or the bulk bar. Milestones can be **sequential** (children unlock in order) or **parallel** (all available at once), which feeds the [availability](#availability-available--deferred--blocked) rules. Milestones also appear on the project timeline — see [Settings & features → Projects](settings-and-features.md#projects).
