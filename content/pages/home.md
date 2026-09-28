---
title: about
description: PhD student at Boston University working on interpretability, alignment and robustness of language models.
---

I'm a first-year PhD student in Computer Science at [Boston University](https://www.bu.edu/cs/), advised by [Aaron Mueller](https://aaronmueller.github.io/). I work on **interpretability, alignment and robustness** of language models.

I want to understand how language models learn, represent knowledge, and decide what to say, and to use that understanding to make them more reliable. I'm especially interested in how training data and post-training objectives shape behaviors like **sycophancy**, and whether targeted changes to data or internal representations can fix those behaviors without costing useful capabilities.

Before BU, I spent a few years at the [Center for Language and Speech Processing](https://www.clsp.jhu.edu/) at Johns Hopkins (where I also did my MS), working with [Mark Dredze](https://www.cs.jhu.edu/~mdredze/), [Daniel Khashabi](https://danielkhashabi.com/) and [David Yarowsky](https://www.cs.jhu.edu/~yarowsky/), and with [John W. Ayers](https://johnwayers.com/) on AI for health. That work is why I care about settings where factuality, trust and clear communication matter.

## what i'm working on

- **sycophancy** — can a small set of carefully designed corrective examples teach models to stop agreeing with incorrect user claims, without hurting accuracy or instruction following?
- **how opinions move representations** — where inside the model does a user's stated opinion start changing the answer, and does corrective training change that process?
- **selective steering** — low-rank representation interventions with a token-wise selector that suppress a targeted behavior while leaving everything else alone
- **tracing behavior through training** — when do sycophancy, deception or reward hacking emerge, and which training data are responsible?
- **reliable evaluation** — measuring factuality and faithfulness with interpretable, cheap signals instead of relying on an LLM judge ([[publications#medscore-2026|MedScore]])

More broadly, I think about knowledge localization and editing, reasoning versus memorization, and models that keep learning from interaction and feedback.

If any of this overlaps with what you're working on, reach out.

## service

- Reviewer: ACL Rolling Review (July 2025), EMNLP 2026 DocInsights Workshop
