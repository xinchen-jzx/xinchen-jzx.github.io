---
layout: page
title: LLM-KnowledgeBoundary24
description: NeurIPS24 - Perception of Knowledge Boundaries for LLMs via Semi-open-ended Question Answering
img: assets/img/4_LLM-KnowledgeBoundary24/LLM-KnowledgeBoundaries.png
importance: 1
category: work
related_publications: true
giscus_comments: true

bibliography: LLM-KnowledgeBoundary24.bib
---

Zhihua Wen, Zhiliang Tian, Zexin Jian, Zhen Huang, Pei Ke, Yifu Gao, Minlie Huang, Dongsheng Li

# Abstract

Large Language Models (LLMs) are widely used for knowledge-seeking purposes yet suffer from hallucinations. The knowledge boundary of an LLM limits its factual understanding, beyond which it may begin to hallucinate. Investigating the perception of LLMs'knowledge boundary is crucial for detecting hallucinations and LLMs' reliable generation. Current studies perceive LLMs' knowledge boundary on questions with a concrete answer (close-ended questions) while paying limited attention to semi-open-ended questions that correspond to many potential answers. Some researchers achieve it by judging whether the question is answerable or not. However, this paradigm is not so suitable for semi-open-ended questions, which are usually partially answerable questions containing both answerable answers and ambiguous (unanswerable) answers. Ambiguous answers are essential for knowledge-seeking, but they may go beyond the knowledge boundary of LLMs. In this paper, we perceive the LLMs' knowledge boundary with semi-open-ended questions by discovering more ambiguous answers. First, we apply an LLM-based approach to construct semi-open-ended questions and obtain answers from a target LLM. Unfortunately, the output probabilities of mainstream black-box LLMs are inaccessible to sample for low-probability ambiguous answers. Therefore, we apply an open-sourced auxiliary model to explore ambiguous answers for the target LLM. We calculate the nearest semantic representation for existing answers to estimate their probabilities, with which we reduce the generation probability of high-probability existing answers to achieve a more effective generation. Finally, we compare the results from the RAG-based evaluation and LLM self-evaluation to categorize four types of ambiguous answers that are beyond the knowledge boundary of the target LLM. Following our method, we construct a dataset to perceive the knowledge boundary for GPT-4. We find that GPT-4 performs poorly on semi-open-ended questions and is often unaware of its knowledge boundary. Besides, our auxiliary model, LLaMA-2-13B, is effective in discovering many ambiguous answers, including correct answers neglected by GPT-4 and delusive wrong answers GPT-4 struggles to identify. 

---

Our framework consists of three parts. We first exploit the instruction-following ability of a strong LLM to create a dataset consisting of semi-open-ended questions on various domains with LLM's answers. To discover more pieces of unfamiliar knowledge for the target LLM, we apply an open-sourced auxiliary model to incur more ambiguous answers by encouraging more distinctive generations. Finally, we evaluate whether the ambiguous answers to each question are beyond the knowledge boundary of the target LLM by comparing the self-evaluation results against RAG-based evaluation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/4_LLM-KnowledgeBoundary24/LLM-KnowledgeBoundaries.png" title="Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The overview of our framework
</div>
