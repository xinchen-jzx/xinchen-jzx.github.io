---
layout: page
title: NUDT-OS
description: Open source project miniRust
img: assets/img/2_miniRust/NUDT-OS.png
importance: 1
category: fun
---

github repository:
- <a href="https://github.com/xinchen-jzx/mini-Rust">xinchen-jzx/mini-Rust</a>

Contributors:
- <a href="https://github.com/flying-rind">Rongda Deng</a>, <a href="https://xinchen-jzx.github.io/">Zexin Jian</a>

---

NUDT-OS aims to start from the UNIX-like macro kernel, absorb and learn the design ideas of the micro kernel, and pursue the balance between system performance and reliable security.
- In response to the security issues of traditional macro kernels, NUDT-OS runs non-core system services in independent kernel threads to enhance system security and reliability. All kernel threads share the address space, and the Rust language features ensure the memory isolation between threads.
- In response to the performance problems caused by frequent IPC in the micro kernel, the kernel threads of NUDT-OS share the address space, and different threads can communicate directly, avoiding IPC overhead.

The overall kernel architecture diagram is as follows:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_miniRust/workflow.png" title="Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    NUDT-OS Architecture
</div>

For more details, please check the <a href="https://github.com/xinchen-jzx/mini-Rust">Github</a> repository.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_miniRust/Result.jpg" title="Result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
