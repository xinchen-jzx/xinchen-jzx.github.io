---
layout: page
title: NUDT-Compiler
description: for CSC-2024 Compiler Design Contest
img: assets/img/1_SysYCompiler24/NUDT-SysY-Compiler.png
importance: 2
category: fun
---

github repository:
- <a href="https://github.com/xinchen-jzx/SysYCompiler2024">xinchen-jzx/SysYCompiler2024</a>

Contributors:
- <a href="https://houhuawei23.github.io/">Huawei Hou</a>, <a href="https://github.com/TernaryExplorer">Xiangsheng Tang</a>, <a href="https://gitee.com/westme10n">Fuzhong Yang</a>, <a href="https://xinchen-jzx.github.io/">Zexin Jian</a>

---

NUDT SysYCompiler is a general compiler targeting RISC-V hardware. It implements two-level intermediate representations (IR and MIR) by imitating <a href="https://mlir.llvm.org/">LLVM MLIR</a> and <a href="https://github.com/dtcxzyw/cmmc">CMMC</a> designs, and implements several important compilation optimization technologies including dead code elimination, loop stripping, loop parallelization, etc. The following figure shows the workflow of NUDT SysYCompiler.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_SysYCompiler24/workflow.png" title="Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    NUDT SysTCompiler Workflow
</div>

For more details, please check the <a href="https://github.com/xinchen-jzx/SysYCompiler2024">Github</a> repository.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_SysYCompiler24/csc24-riscv.png" title="csc24-riscv" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_SysYCompiler24/Result.png" title="Result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>