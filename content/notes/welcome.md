---
title: how this site works
date: 2026-09-28
description: A test note that shows everything the markdown pipeline supports.
tags: [meta]
draft: true
---

This note is a working example of everything the site renders. Open `content/` in Obsidian and write the same way you always do.

## math

Inline math like $\mathcal{L}(\theta) = -\sum_t \log p_\theta(x_t \mid x_{<t})$ just works, and so does display math:

$$
\text{attn}(Q,K,V) = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

## callouts

> [!note] Obsidian callouts
> Written as `> [!note]`, `> [!tip]`, `> [!warning]`, `> [!quote]` and so on.

> [!tip]- Collapsible, too
> Add a `-` after the type and the callout starts closed.

## links

Wikilinks resolve across the vault: [[publications]], [[home|the about page]], or a heading like [[publications#medscore-2026]].

Images go in `content/attachments/` and embed with `![[file.png]]`.

## code

```python
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("gpt2", output_hidden_states=True)
```
