const dimensions = [
  { id: "logic", name: "逻辑分析", description: "拆解问题、判断因果、形成清晰结论。" },
  { id: "creative", name: "创意表达", description: "提出新角度，把想法转化成内容、概念或体验。" },
  { id: "people", name: "人际影响", description: "理解他人、沟通协作、推动共识与信任。" },
  { id: "execution", name: "执行推进", description: "把目标落到步骤、节奏、交付和复盘里。" },
  { id: "research", name: "探索研究", description: "学习未知领域，查证信息，形成方法论。" },
  { id: "systems", name: "系统组织", description: "建立流程、规则、资源配置和长期秩序。" },
  { id: "values", name: "价值驱动", description: "被意义、影响、成长或作品感持续牵引。" },
  { id: "resilience", name: "压力韧性", description: "在变化、冲突和不确定中保持恢复与推进。" },
];

const questions = [
  { text: "面对复杂问题时，我会先拆解结构、找出关键变量，再决定怎么行动。", scores: { logic: 2, systems: 1 } },
  { text: "我经常能想到别人没提过的角度、标题、方案或表达方式。", scores: { creative: 2, research: 1 } },
  { text: "我能比较快地察觉他人的情绪、顾虑或真实需求。", scores: { people: 2, values: 1 } },
  { text: "我喜欢把模糊目标变成清单、时间表、优先级和可交付结果。", scores: { execution: 2, systems: 1 } },
  { text: "遇到不熟悉的领域时，我会主动查资料、做笔记、验证判断。", scores: { research: 2, logic: 1 } },
  { text: "我容易看到流程里的漏洞，并想办法让它更稳定、更省力。", scores: { systems: 2, execution: 1 } },
  { text: "如果一件事有明确意义或能帮助他人，我会更愿意长期投入。", scores: { values: 2, people: 1 } },
  { text: "压力变大时，我通常能先稳住节奏，再处理眼前最重要的事。", scores: { resilience: 2, execution: 1 } },

  { text: "比起马上执行，我更想先弄清楚目标、边界和成功标准。", scores: { logic: 2, research: 1 } },
  { text: "我能把抽象想法变成故事、画面、文案、演示或产品概念。", scores: { creative: 2, people: 1 } },
  { text: "讨论中，我常常能把不同人的意见翻译成大家都能接受的说法。", scores: { people: 2, logic: 1 } },
  { text: "我完成任务时很在意细节、稳定性和按时交付。", scores: { execution: 2, resilience: 1 } },
  { text: "我喜欢研究趋势、新工具、新方法，并思考它们能用在哪里。", scores: { research: 2, creative: 1 } },
  { text: "我擅长组织资源、协调节奏，让一个项目一步步推进。", scores: { systems: 2, execution: 1 } },
  { text: "我会认真思考一份工作是否符合我的价值观和长期方向。", scores: { values: 2, research: 1 } },
  { text: "被质疑或遇到反馈时，我能相对冷静地筛选有用信息。", scores: { resilience: 2, people: 1 } },

  { text: "我喜欢用数据、证据或案例来支持自己的判断。", scores: { logic: 2, research: 1 } },
  { text: "我不太满足于照搬现成方案，更想重新设计一个更有记忆点的做法。", scores: { creative: 2, values: 1 } },
  { text: "我愿意通过访谈、观察或反馈，理解真实用户或同事的需求。", scores: { people: 2, research: 1 } },
  { text: "我在快节奏任务里会主动区分什么必须现在做、什么可以放后。", scores: { execution: 2, logic: 1 } },
  { text: "我对“为什么会这样”很敏感，喜欢追溯原因而不是只看表面。", scores: { research: 2, logic: 1 } },
  { text: "如果团队反复踩同一个坑，我会想建立模板、规范或检查机制。", scores: { systems: 2, resilience: 1 } },
  { text: "比起只拿到短期结果，我更在意这件事是否让我成长或产生影响。", scores: { values: 2, creative: 1 } },
  { text: "事情突然变化时，我通常能快速调整方案，而不是长时间卡住。", scores: { resilience: 2, execution: 1 } },

  { text: "我能从一堆信息中抓出关键矛盾，并判断最值得解决的问题。", scores: { logic: 2, systems: 1 } },
  { text: "我会下意识关注一个产品、页面、活动或表达方式是否有吸引力。", scores: { creative: 2, values: 1 } },
  { text: "我适合在需要信任、协调、引导和共情的场景中发挥作用。", scores: { people: 2, resilience: 1 } },
  { text: "看到事情停在想法阶段太久，我会想推动它进入下一步。", scores: { execution: 2, systems: 1 } },
  { text: "我愿意为了弄懂一个问题，连续阅读、比较资料并做实验。", scores: { research: 2, resilience: 1 } },
  { text: "我喜欢把零散信息整理成结构化文档、流程图或知识库。", scores: { systems: 2, logic: 1 } },
  { text: "如果工作只有重复执行、没有成长和意义，我会明显失去动力。", scores: { values: 2, creative: 1 } },
  { text: "我能接受阶段性不确定，只要能持续看到反馈并修正方向。", scores: { resilience: 2, research: 1 } },
];

const scale = [
  { value: 1, label: "非常不像我", desc: "几乎不会这样做" },
  { value: 2, label: "不太像我", desc: "偶尔会这样做" },
  { value: 3, label: "说不准", desc: "取决于情境" },
  { value: 4, label: "比较像我", desc: "多数时候如此" },
  { value: 5, label: "非常像我", desc: "这很符合我" },
];

const questionModules = [
  { from: 0, to: 7, name: "能力倾向" },
  { from: 8, to: 15, name: "工作偏好" },
  { from: 16, to: 23, name: "动机价值" },
  { from: 24, to: 31, name: "压力与风险" },
];

const methodNotes = [
  "优先看前三项优势的组合，而不是只看最高分；真实职业通常需要能力、动机和环境同时匹配。",
  "高匹配职业代表更容易调用当前优势，可发展职业代表需要补充作品、经验或行业知识后再进入。",
  "谨慎选择不是绝对不能做，而是提示这些岗位或环境可能长期消耗你，需要额外验证。",
  "建议结合真实经历、作品证据、他人反馈和目标岗位 JD 一起判断，不把测试结果当成唯一答案。",
];

const profiles = {
  logic: {
    name: "结构判断者",
    headline: "你擅长看清问题结构，把复杂信息变成可靠判断。",
    scenes: ["复杂问题拆解", "商业或产品决策", "数据与案例分析"],
    highCareers: ["产品经理", "商业分析师", "数据分析师", "咨询顾问"],
    growthCareers: ["战略运营", "用户研究", "行业研究", "解决方案顾问"],
    caution: ["高度重复且不需要判断的岗位", "只追求速度、不允许澄清问题的环境"],
    actions: ["每周拆解 1 个真实商业案例", "练习用一页纸表达问题、证据和建议", "补充数据分析或行业知识"],
  },
  creative: {
    name: "创意表达者",
    headline: "你擅长把想法变成有吸引力的内容、概念或体验。",
    scenes: ["内容与品牌表达", "体验设计", "从 0 到 1 概念生成"],
    highCareers: ["内容策划", "品牌创意", "视觉设计", "交互设计"],
    growthCareers: ["新媒体运营", "广告文案", "产品体验", "活动策划"],
    caution: ["完全按模板执行、不能表达观点的岗位", "只看产量不看质量和审美的环境"],
    actions: ["整理 6 个作品案例形成作品集", "练习把创意绑定具体用户问题", "用反馈迭代而不是只凭灵感判断"],
  },
  people: {
    name: "关系连接者",
    headline: "你擅长理解他人，在协作、沟通和信任中创造价值。",
    scenes: ["跨团队协作", "客户或用户沟通", "组织氛围与共识推动"],
    highCareers: ["客户成功", "人力资源", "用户研究", "销售顾问"],
    growthCareers: ["社群运营", "培训发展", "公共关系", "组织发展"],
    caution: ["长期孤立、几乎没有人际反馈的岗位", "只靠情绪劳动但缺少业务成长的环境"],
    actions: ["练习结构化访谈和复盘记录", "补充业务指标意识", "建立可迁移的沟通案例库"],
  },
  execution: {
    name: "结果推进者",
    headline: "你擅长把目标落到行动里，并稳定推进到结果。",
    scenes: ["项目交付", "运营执行", "高节奏任务推进"],
    highCareers: ["项目管理", "产品运营", "活动执行", "运营管理"],
    growthCareers: ["流程优化", "供应链协调", "质量管理", "增长运营"],
    caution: ["目标频繁变动却没有决策边界的环境", "只有救火、没有复盘和成长的岗位"],
    actions: ["建立项目看板和复盘模板", "练习识别优先级与风险", "把执行经验沉淀成流程资产"],
  },
  research: {
    name: "探索研究者",
    headline: "你擅长学习未知领域，从信息和实验中发现新可能。",
    scenes: ["行业研究", "新工具应用", "知识整理与验证"],
    highCareers: ["行业研究员", "AI 工具应用", "知识管理", "教育内容策划"],
    growthCareers: ["技术支持", "创新项目孵化", "研究助理", "用户洞察"],
    caution: ["长期重复执行、缺少学习空间的岗位", "只要求立刻给答案、不允许验证的环境"],
    actions: ["选一个领域做 30 天主题研究", "输出可复用的方法论笔记", "把研究结论转成小实验"],
  },
  systems: {
    name: "系统组织者",
    headline: "你擅长建立秩序、流程和资源配置，让事情长期稳定运转。",
    scenes: ["流程建设", "资源协调", "团队或业务运营体系"],
    highCareers: ["运营管理", "项目管理", "流程优化", "行政与组织支持"],
    growthCareers: ["供应链管理", "质量管理", "业务运营", "知识库管理"],
    caution: ["缺少规则、长期混乱且无人支持优化的环境", "只做临时杂事、不允许建立机制的岗位"],
    actions: ["把一个重复任务标准化成 SOP", "学习项目管理和流程设计工具", "训练用指标观察系统运行效果"],
  },
  values: {
    name: "意义驱动者",
    headline: "你需要从工作中看到成长、影响或作品感，才更容易长期投入。",
    scenes: ["公益或教育场景", "用户价值明确的产品", "能持续成长的复合任务"],
    highCareers: ["教育内容", "社会创新项目", "用户体验策略", "品牌内容"],
    growthCareers: ["产品运营", "组织文化", "职业发展顾问", "社区运营"],
    caution: ["价值冲突明显的行业或岗位", "只有短期指标、看不到人的真实反馈的工作"],
    actions: ["写下你最在意的 5 个职业回报", "用真实岗位 JD 对照价值匹配度", "寻找能看到用户反馈的小项目"],
  },
  resilience: {
    name: "韧性适应者",
    headline: "你能在变化和压力中恢复节奏，适合处理不确定性较高的任务。",
    scenes: ["高变化项目", "跨部门问题解决", "危机处理与持续迭代"],
    highCareers: ["创业团队运营", "客户成功", "项目协调", "解决方案顾问"],
    growthCareers: ["增长运营", "业务支持", "产品运营", "服务设计"],
    caution: ["持续高压但没有支持系统的岗位", "冲突很多却没有清晰责任边界的环境"],
    actions: ["建立个人压力预警清单", "练习把突发问题拆成可控行动", "选择既有挑战也有反馈的环境"],
  },
};

const answers = Array(questions.length).fill(null);
let current = 0;

const el = {
  workspace: document.querySelector("#app-main"),
  questionNumber: document.querySelector("#questionNumber"),
  questionTotal: document.querySelector("#questionTotal"),
  moduleName: document.querySelector("#moduleName"),
  sideCurrent: document.querySelector("#sideCurrent"),
  sideTotal: document.querySelector("#sideTotal"),
  questionText: document.querySelector("#questionText"),
  options: document.querySelector("#options"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  startButton: document.querySelector("#startButton"),
  dimensionList: document.querySelector("#dimensionList"),
  careerPreviewList: document.querySelector("#careerPreviewList"),
  stepList: document.querySelector("#stepList"),
  quizView: document.querySelector("#quizView"),
  resultView: document.querySelector("#resultView"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  insightPanel: document.querySelector("#insightPanel"),
  topTalentList: document.querySelector("#topTalentList"),
  sceneList: document.querySelector("#sceneList"),
  highCareerList: document.querySelector("#highCareerList"),
  growthCareerList: document.querySelector("#growthCareerList"),
  cautionList: document.querySelector("#cautionList"),
  actionList: document.querySelector("#actionList"),
  methodList: document.querySelector("#methodList"),
  restartButton: document.querySelector("#restartButton"),
  reviewButton: document.querySelector("#reviewButton"),
  showAllButton: document.querySelector("#showAllButton"),
  stripResultButton: document.querySelector("#stripResultButton"),
  saveButton: document.querySelector("#saveButton"),
  profileButton: document.querySelector("#profileButton"),
  moreCareersButton: document.querySelector("#moreCareersButton"),
  toast: document.querySelector("#toast"),
};

function init() {
  el.questionTotal.textContent = questions.length;
  el.sideTotal.textContent = questions.length;
  renderSteps();
  renderQuestion();
  bindEvents();
}

function bindEvents() {
  el.prevButton.addEventListener("click", () => {
    current = Math.max(0, current - 1);
    renderQuestion();
  });

  el.nextButton.addEventListener("click", () => {
    if (answers[current] === null) {
      showToast("先选一个最接近你的答案，再进入下一题。");
      return;
    }

    if (current === questions.length - 1) {
      showResult();
      return;
    }

    current += 1;
    renderQuestion();
  });

  el.startButton.addEventListener("click", () => document.querySelector("#app-main").scrollIntoView({ block: "start" }));
  el.restartButton.addEventListener("click", restart);
  el.reviewButton.addEventListener("click", () => {
    el.resultView.hidden = true;
    el.quizView.hidden = false;
    renderQuestion();
  });

  el.showAllButton.addEventListener("click", tryShowResult);
  el.stripResultButton.addEventListener("click", tryShowResult);
  el.moreCareersButton.addEventListener("click", () => showToast("职业方向会随你的优势组合实时更新。"));
  el.saveButton.addEventListener("click", () => showToast("已在本机保留当前进度。"));
  el.profileButton.addEventListener("click", () => showToast("当前版本展示本次深度测评画像。"));
}

function renderSteps() {
  el.stepList.innerHTML = "";
  questions.forEach((_, index) => {
    const item = document.createElement("li");
    const module = getQuestionModule(index);
    item.innerHTML = `<span class="step-dot">${index + 1}</span><span>${module.shortName} ${index + 1}</span>`;
    el.stepList.appendChild(item);
  });
}

function renderQuestion() {
  setMode("assessment");
  el.quizView.hidden = false;
  el.resultView.hidden = true;
  el.insightPanel.hidden = true;
  const question = questions[current];
  el.questionNumber.textContent = current + 1;
  el.sideCurrent.textContent = current + 1;
  el.moduleName.textContent = getQuestionModule(current).name;
  el.questionText.textContent = question.text;
  el.prevButton.disabled = current === 0;
  el.nextButton.textContent = current === questions.length - 1 ? "查看结果" : "下一题";

  document.querySelectorAll(".step-list li").forEach((item, index) => {
    item.classList.toggle("active", index === current);
    item.classList.toggle("done", answers[index] !== null);
  });

  el.options.innerHTML = "";
  scale.forEach((choice) => {
    const option = {
      ...choice,
      scores: multiplyScores(question.scores, choice.value),
    };
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.classList.toggle("selected", answers[current]?.value === choice.value);
    button.innerHTML = `
      <span class="option-key">${choice.value}</span>
      <span>
        <span class="option-title">${choice.label}</span>
        <span class="option-desc">${choice.desc}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      answers[current] = option;
      renderQuestion();
    });
    el.options.appendChild(button);
  });
}

function getQuestionModule(index) {
  const module = questionModules.find((item) => index >= item.from && index <= item.to) ?? questionModules[0];
  return {
    ...module,
    shortName: module.name.slice(0, 2),
  };
}

function multiplyScores(scores, value) {
  return Object.fromEntries(Object.entries(scores).map(([key, score]) => [key, score * value]));
}

function getScores() {
  const scores = Object.fromEntries(dimensions.map((dimension) => [dimension.id, 0]));
  answers.filter(Boolean).forEach((answer) => {
    Object.entries(answer.scores).forEach(([key, value]) => {
      scores[key] += value;
    });
  });
  return scores;
}

function getSortedScores() {
  const scores = getScores();
  return dimensions
    .map((dimension) => ({ ...dimension, score: scores[dimension.id] }))
    .sort((a, b) => b.score - a.score);
}

function getPercent(score, maxScore) {
  return Math.round((score / maxScore) * 100);
}

function getResultData() {
  const sorted = getSortedScores();
  const topThree = sorted.slice(0, 3);
  const primary = topThree[0]?.score ? profiles[topThree[0].id] : profiles.logic;
  const secondary = profiles[topThree[1]?.id] ?? profiles.research;
  const tertiary = profiles[topThree[2]?.id] ?? profiles.execution;
  const maxScore = Math.max(16, sorted[0]?.score ?? 0);

  const isBalanced = topThree[0]?.score && topThree[0].score - topThree[2].score <= Math.max(5, topThree[0].score * 0.1);
  const title = isBalanced
    ? `复合型画像：${topThree.map((item) => item.name).join(" + ")}`
    : `${primary.name}：${primary.headline}`;

  return {
    sorted,
    topThree,
    primary,
    secondary,
    tertiary,
    maxScore,
    title,
    summary: isBalanced
      ? `你的优势不是单点突出，而是由 ${topThree.map((item) => item.name).join("、")} 共同构成。你更适合复合型工作：既需要判断，也需要推进或协作。`
      : `${primary.headline} 同时，你的 ${topThree[1].name} 和 ${topThree[2].name} 也会影响职业选择，所以推荐结果会按组合来判断。`,
  };
}

function renderInsights() {
  const { sorted, maxScore, primary, secondary, tertiary } = getResultData();
  el.dimensionList.innerHTML = "";

  dimensions.forEach((dimension) => {
    const score = sorted.find((item) => item.id === dimension.id)?.score ?? 0;
    const percent = getPercent(score, maxScore);
    const row = document.createElement("div");
    row.className = "dimension-row";
    row.innerHTML = `
      <div class="dimension-top"><span>${dimension.name}</span><span>${percent}%</span></div>
      <div class="meter"><span style="width:${percent}%"></span></div>
    `;
    el.dimensionList.appendChild(row);
  });

  const careers = unique([...primary.highCareers, ...secondary.growthCareers, ...tertiary.growthCareers]).slice(0, 3);
  el.careerPreviewList.innerHTML = careers.map((career, index) => `
    <article class="career-card">
      <h3>${index + 1}. ${career}</h3>
      <p>${index === 0 ? primary.headline : dimensions[index + 1]?.description ?? secondary.headline}</p>
    </article>
  `).join("");
}

function tryShowResult() {
  const missing = answers.findIndex((answer) => answer === null);
  if (missing !== -1) {
    current = missing;
    renderQuestion();
    showToast(`还差第 ${missing + 1} 题，完成后就能查看结果。`);
    return;
  }
  showResult();
}

function showResult() {
  if (answers.some((answer) => answer === null)) {
    tryShowResult();
    return;
  }

  const { topThree, primary, secondary, tertiary, title, summary } = getResultData();
  setMode("result");
  el.quizView.hidden = true;
  el.resultView.hidden = false;
  el.insightPanel.hidden = false;
  el.resultTitle.textContent = title;
  el.resultSummary.textContent = `${summary} 这份测试用于自我探索和职业方向参考，不构成心理、医疗或职业诊断。`;

  renderList(el.topTalentList, topThree.map((item) => `${item.name}：${item.description}`));
  renderList(el.sceneList, unique([...primary.scenes, ...secondary.scenes, ...tertiary.scenes]).slice(0, 6));
  renderList(el.highCareerList, unique([...primary.highCareers, ...secondary.highCareers]).slice(0, 7));
  renderList(el.growthCareerList, unique([...primary.growthCareers, ...secondary.growthCareers, ...tertiary.growthCareers]).slice(0, 7));
  renderList(el.cautionList, unique([...primary.caution, ...secondary.caution, ...tertiary.caution]).slice(0, 5));
  renderList(el.actionList, unique([...primary.actions, ...secondary.actions, ...tertiary.actions]).slice(0, 6));
  renderList(el.methodList, methodNotes);
  renderInsights();
}

function setMode(mode) {
  el.workspace.classList.toggle("assessment-mode", mode === "assessment");
  el.workspace.classList.toggle("result-mode", mode === "result");
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function unique(items) {
  return [...new Set(items)];
}

function restart() {
  answers.fill(null);
  current = 0;
  renderQuestion();
  showToast("已重置，可以重新开始。");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("show");
  toastTimer = window.setTimeout(() => el.toast.classList.remove("show"), 2200);
}

init();
