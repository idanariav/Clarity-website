---
title: Accessibility
description: Clarity's WCAG 2.1 AA accessibility conformance statement — what's implemented today and what's not yet.
---

# Accessibility Statement

_Last updated: August 27, 2026_

> **Note:** this is a self-assessment against WCAG success criteria, not a certified VPAT or a third-party audit.

Clarity targets **[WCAG 2.1](https://www.w3.org/TR/WCAG21/) Level AA** as its accessibility standard. This page
summarizes current conformance status for procurement, security, and accessibility reviews.

## What's implemented

**Keyboard**
- The board is fully keyboard-operable: arrow keys move focus between cards, Enter opens the focused card, and
  Space picks up/drops a card to move or reorder it — an accessible alternative to pointer drag-and-drop, not a
  pointer-only interaction.
- The sidebar board list and other primary lists (Habits, Packing) are keyboard-reachable with arrow-key
  navigation.
- Global shortcuts are user-rebindable and documented in-app.

**Screen readers**
- Dragging a card, list, or board announces what's happening through a live region — which item moved, where it
  landed, and its position — rather than relying on generic drag-and-drop announcements.
- Board columns and cards carry list/list-item semantics and labels so their structure is conveyed, not just their
  visual layout.
- Interactive controls carry accessible labels.

**Focus management**
- Every dialog, popover, and menu traps focus while open, restores focus to the element that opened it on close,
  and closes on Escape.

**Color contrast**
- Text and UI-component color contrast is checked against WCAG 2.1 AA (4.5:1 for text, 3:1 for large text and
  non-text UI components) across all six built-in theme presets — Default, Dracula, Nord, Tokyo Night, Solarized
  Light, and Gruvbox — enforced by an automated test tied to the actual theme code, so it can't silently drift out
  of date.

## Known gaps

- No full manual walkthrough with a screen reader (VoiceOver, NVDA) has been done yet — the above is built and
  tested against WCAG success criteria, but hasn't had a dedicated assistive-technology QA pass.
- The mobile companion app has two custom modal surfaces that haven't had the same focus-management audit as the
  desktop dialogs.
- Secondary views (calendar sections, integration managers) inherit accessibility from shared dialog/menu
  components but haven't had a dedicated review beyond that.

## Feedback

Found an accessibility issue, or need something not covered here for a procurement review? Email
**[idan@idanariav.com](mailto:idan@idanariav.com)**.
