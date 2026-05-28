const dimensions = [
  { id: "analysis", name: "结构分析", description: "拆解问题、识别关键变量、用证据形成判断。" },
  { id: "userInsight", name: "用户洞察", description: "理解人的需求、情绪、动机和真实使用场景。" },
  { id: "creation", name: "创意表达", description: "提出新角度，把想法变成内容、概念或体验。" },
  { id: "execution", name: "执行推进", description: "把目标拆成步骤，推动交付和复盘。" },
  { id: "research", name: "探索研究", description: "学习未知领域，查证信息并持续实验。" },
  { id: "systems", name: "系统组织", description: "建立流程、规则、资源配置和长期秩序。" },
  { id: "communication", name: "沟通影响", description: "协调分歧、表达观点、推动共识和信任。" },
  { id: "stability", name: "稳定耐心", description: "承受重复、细节、长期跟进和高质量交付。" },
  { id: "autonomy", name: "自主探索", description: "在开放空间中自驱定义问题和寻找路径。" },
  { id: "commercial", name: "商业敏感", description: "关注价值、成本、增长、交易和可持续结果。" },
];

const questionModules = [
  { from: 0, to: 11, name: "自然行为", shortName: "行为" },
  { from: 12, to: 19, name: "价值权衡", shortName: "权衡" },
  { from: 20, to: 27, name: "压力消耗", shortName: "压力" },
  { from: 28, to: 31, name: "一致性校准", shortName: "校准" },
];

const questions = [
  {
    text: "接到一个陌生项目时，你最自然的第一步是？",
    options: [
      option("拆目标和约束", "先弄清问题、边界和成功标准", { analysis: 3, systems: 1 }, ["structured"]),
      option("找真实使用者聊", "先理解谁受影响、他们真正需要什么", { userInsight: 3, communication: 1 }, ["people"]),
      option("快速做个小样", "先试跑一版，用结果校准方向", { execution: 3, research: 1 }, ["iteration"]),
      option("找灵感和案例", "先看类似作品和新鲜做法", { creation: 3, research: 1 }, ["creative"]),
    ],
  },
  {
    text: "一场讨论陷入混乱时，你更可能扮演什么角色？",
    options: [
      option("抓关键矛盾", "把大家真正争论的问题说清楚", { analysis: 3, communication: 1 }, ["structured"]),
      option("翻译不同立场", "让各方听懂彼此的顾虑", { communication: 3, userInsight: 1 }, ["people"]),
      option("定下一步动作", "明确谁做什么、什么时候给结果", { execution: 3, systems: 1 }, ["delivery"]),
      option("提出新方向", "换一个角度让讨论重新打开", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "你最有成就感的工作瞬间通常来自？",
    options: [
      option("判断被验证", "之前的分析后来证明是对的", { analysis: 3, research: 1 }, ["evidence"]),
      option("用户被帮助", "别人因为你的工作变得更顺畅", { userInsight: 3, communication: 1 }, ["people"]),
      option("东西按时上线", "复杂任务终于稳定交付", { execution: 3, stability: 1 }, ["delivery"]),
      option("作品被记住", "你的表达、设计或创意被认可", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "面对一堆资料，你更常怎么处理？",
    options: [
      option("归纳框架", "提炼结构、变量和结论", { analysis: 3, systems: 1 }, ["structured"]),
      option("寻找趋势", "关注新变化和未来可能性", { research: 3, autonomy: 1 }, ["learning"]),
      option("转成方案", "把资料变成可执行计划", { execution: 3, commercial: 1 }, ["delivery"]),
      option("变成内容", "把信息讲得更清楚、更吸引人", { creation: 2, communication: 2 }, ["creative"]),
    ],
  },
  {
    text: "团队里出现重复低效的问题，你更想做什么？",
    options: [
      option("找根因", "先确认问题为什么反复发生", { analysis: 3, research: 1 }, ["evidence"]),
      option("建流程", "做模板、规范和检查机制", { systems: 3, stability: 1 }, ["process"]),
      option("推动执行", "先把卡住的环节推进掉", { execution: 3, communication: 1 }, ["delivery"]),
      option("重新设计体验", "让这个流程对使用者更友好", { userInsight: 2, creation: 2 }, ["people"]),
    ],
  },
  {
    text: "如果要学习一个新领域，你最常用的方法是？",
    options: [
      option("系统阅读", "按主题整理资料和笔记", { research: 3, systems: 1 }, ["learning"]),
      option("找人请教", "访谈有经验的人，理解真实场景", { userInsight: 2, communication: 2 }, ["people"]),
      option("做小实验", "用一个真实任务边做边学", { execution: 2, research: 2 }, ["iteration"]),
      option("拆优秀案例", "分析它为什么有效、哪里可借鉴", { analysis: 2, creation: 2 }, ["evidence"]),
    ],
  },
  {
    text: "当目标很模糊但时间紧，你更倾向于？",
    options: [
      option("先定义判断标准", "没有标准就容易忙错方向", { analysis: 3, systems: 1 }, ["structured"]),
      option("先对齐关键人", "确认各方对结果的期待", { communication: 3, userInsight: 1 }, ["people"]),
      option("先推进最小版本", "让事情进入可反馈状态", { execution: 3, research: 1 }, ["iteration"]),
      option("先找差异化切口", "避免做成普通方案", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "你更愿意负责哪类任务？",
    options: [
      option("复杂决策支持", "帮团队判断选哪条路", { analysis: 3, commercial: 1 }, ["evidence"]),
      option("用户需求理解", "发现真实问题和痛点", { userInsight: 3, research: 1 }, ["people"]),
      option("项目落地推进", "把计划变成结果", { execution: 3, systems: 1 }, ["delivery"]),
      option("内容/品牌表达", "让观点被看见、被记住", { creation: 3, communication: 1 }, ["creative"]),
    ],
  },
  {
    text: "你最容易注意到一个方案里的什么问题？",
    options: [
      option("逻辑漏洞", "前后因果不成立或证据不足", { analysis: 3, stability: 1 }, ["evidence"]),
      option("用户不买账", "看起来好，但使用者可能无感", { userInsight: 3, commercial: 1 }, ["people"]),
      option("无法落地", "资源、时间和责任边界不清楚", { execution: 2, systems: 2 }, ["delivery"]),
      option("缺少亮点", "没有记忆点，不容易传播", { creation: 3, commercial: 1 }, ["creative"]),
    ],
  },
  {
    text: "和别人合作时，你最常贡献什么？",
    options: [
      option("清晰判断", "把复杂问题说成几个关键判断", { analysis: 3, communication: 1 }, ["structured"]),
      option("关系协调", "让不同角色更愿意配合", { communication: 3, userInsight: 1 }, ["people"]),
      option("稳定推进", "持续盯进度、补漏洞、交付结果", { execution: 2, stability: 2 }, ["delivery"]),
      option("新鲜想法", "提供更有吸引力的表达和方案", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "看到一个产品或服务时，你更常先想什么？",
    options: [
      option("商业上是否成立", "成本、收入、增长空间怎么样", { commercial: 3, analysis: 1 }, ["commercial"]),
      option("用户是否真的需要", "痛点是不是足够真实", { userInsight: 3, research: 1 }, ["people"]),
      option("流程是否顺畅", "哪里会卡住、哪里能优化", { systems: 2, execution: 2 }, ["process"]),
      option("表达是否吸引人", "视觉、文案、故事有没有记忆点", { creation: 3, communication: 1 }, ["creative"]),
    ],
  },
  {
    text: "你更适合哪种问题？",
    options: [
      option("有数据但结论不清", "需要从信息中判断方向", { analysis: 3, research: 1 }, ["evidence"]),
      option("人和需求很复杂", "需要理解动机与关系", { userInsight: 3, communication: 1 }, ["people"]),
      option("目标明确但推进困难", "需要拆步骤和控风险", { execution: 3, systems: 1 }, ["delivery"]),
      option("普通方案缺少突破", "需要创意和差异化", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },

  {
    text: "如果只能选一个，你更看重工作的哪种回报？",
    options: [
      option("成长速度", "能持续学到新东西", { research: 2, autonomy: 2 }, ["learning"]),
      option("稳定确定", "节奏清楚、风险可控", { stability: 3, systems: 1 }, ["stable"]),
      option("影响他人", "能真实帮助用户或团队", { userInsight: 2, communication: 2 }, ["people"]),
      option("商业结果", "能看到价值、收入或增长", { commercial: 3, execution: 1 }, ["commercial"]),
    ],
  },
  {
    text: "你更能接受哪种工作状态？",
    options: [
      option("高自由但不确定", "自己定义路径和标准", { autonomy: 3, research: 1 }, ["autonomy"]),
      option("低自由但稳定", "明确流程和预期，长期深耕", { stability: 3, systems: 1 }, ["stable"]),
      option("高协作高沟通", "频繁对齐、推动多方共识", { communication: 3, userInsight: 1 }, ["people"]),
      option("高压力高回报", "目标强、节奏快、结果导向", { commercial: 2, execution: 2 }, ["commercial"]),
    ],
  },
  {
    text: "一个岗位吸引你，最可能因为它能让你？",
    options: [
      option("解决难题", "处理复杂、模糊、有挑战的问题", { analysis: 2, research: 2 }, ["evidence"]),
      option("创造作品", "产出可展示、可传播的东西", { creation: 3, autonomy: 1 }, ["creative"]),
      option("连接他人", "影响、协调或帮助真实的人", { communication: 2, userInsight: 2 }, ["people"]),
      option("做出结果", "把目标变成可衡量成果", { execution: 2, commercial: 2 }, ["delivery"]),
    ],
  },
  {
    text: "你更不愿意牺牲什么？",
    options: [
      option("判断质量", "不能为了快而牺牲逻辑和证据", { analysis: 3, stability: 1 }, ["evidence"]),
      option("表达空间", "不能完全没有创意和观点", { creation: 3, autonomy: 1 }, ["creative"]),
      option("关系信任", "不能只看指标、不顾人和体验", { userInsight: 2, communication: 2 }, ["people"]),
      option("执行效率", "不能一直讨论却没有推进", { execution: 3, systems: 1 }, ["delivery"]),
    ],
  },
  {
    text: "当你选择发展方向时，更想优先验证什么？",
    options: [
      option("我是否真的擅长", "用作品、案例和反馈证明能力", { stability: 2, analysis: 2 }, ["evidence"]),
      option("我是否长期有兴趣", "看自己会不会持续主动投入", { autonomy: 2, research: 2 }, ["learning"]),
      option("市场是否需要", "判断这个方向有没有需求和机会", { commercial: 3, analysis: 1 }, ["commercial"]),
      option("环境是否适合", "看团队、节奏和沟通方式是否匹配", { systems: 2, userInsight: 2 }, ["process"]),
    ],
  },
  {
    text: "你更偏好的团队文化是？",
    options: [
      option("理性透明", "用事实、数据和逻辑讨论问题", { analysis: 2, stability: 2 }, ["evidence"]),
      option("开放创造", "鼓励新想法和试错", { creation: 2, autonomy: 2 }, ["creative"]),
      option("彼此信任", "沟通充分，尊重人的感受", { communication: 2, userInsight: 2 }, ["people"]),
      option("目标明确", "节奏清晰，交付标准明确", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },
  {
    text: "如果两份工作薪资相近，你更愿意选？",
    options: [
      option("研究分析岗", "长期处理信息和判断", { analysis: 2, research: 2 }, ["evidence"]),
      option("内容创意岗", "持续做表达和作品", { creation: 3, communication: 1 }, ["creative"]),
      option("客户/用户岗", "和真实需求、高频反馈打交道", { userInsight: 2, communication: 2 }, ["people"]),
      option("项目运营岗", "负责推进、协调和结果", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },
  {
    text: "你更愿意把时间投入到哪种练习？",
    options: [
      option("案例拆解", "训练判断和分析框架", { analysis: 3, commercial: 1 }, ["evidence"]),
      option("作品创作", "训练表达、设计或内容产出", { creation: 3, stability: 1 }, ["creative"]),
      option("访谈沟通", "训练提问、倾听和影响", { userInsight: 2, communication: 2 }, ["people"]),
      option("项目管理", "训练计划、推进和复盘", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },

  {
    text: "以下哪种工作最容易消耗你？",
    options: [
      option("每天重复填表", "流程固定，变化很少", { stability: -2, autonomy: 2, research: 1 }, ["routineDrain"]),
      option("天天陌生销售", "高频陌生沟通和强成交压力", { communication: -2, commercial: 1, autonomy: 1 }, ["socialDrain"]),
      option("长期没人反馈", "不知道做得好不好，也看不到影响", { userInsight: -1, execution: -1, research: 1 }, ["feedbackDrain"]),
      option("一直开放发散", "没有边界、计划和交付标准", { systems: -2, execution: -1, creation: 1 }, ["ambiguityDrain"]),
    ],
  },
  {
    text: "你最怕哪种岗位要求？",
    options: [
      option("只要照做", "不需要判断，也不能提出改进", { analysis: -2, autonomy: 2 }, ["routineDrain"]),
      option("随时救火", "目标反复变，永远赶进度", { stability: -2, execution: 1 }, ["chaosDrain"]),
      option("强社交绑定", "大量寒暄、应酬、关系维护", { communication: -2, analysis: 1 }, ["socialDrain"]),
      option("纯自我驱动", "几乎没人给反馈和结构", { autonomy: -1, systems: 1, stability: 1 }, ["isolationDrain"]),
    ],
  },
  {
    text: "压力上来时，你最常见的反应是？",
    options: [
      option("先找原因", "弄清问题来源再行动", { analysis: 2, stability: 1 }, ["evidence"]),
      option("先找人对齐", "确认期待，避免误解扩大", { communication: 2, userInsight: 1 }, ["people"]),
      option("先处理最急的", "把局面稳住再复盘", { execution: 2, stability: 1 }, ["delivery"]),
      option("先换个方案", "寻找更灵活的替代路径", { autonomy: 2, research: 1 }, ["iteration"]),
    ],
  },
  {
    text: "如果连续一个月工作没有变化，你更可能？",
    options: [
      option("继续优化细节", "把质量做得更稳定", { stability: 3, systems: 1 }, ["stable"]),
      option("寻找改进空间", "看哪里能更高效", { systems: 2, analysis: 2 }, ["process"]),
      option("明显失去动力", "希望有新问题和新挑战", { autonomy: 2, research: 2 }, ["routineDrain"]),
      option("尝试新的表达", "给重复工作加入新形式", { creation: 2, execution: 1 }, ["creative"]),
    ],
  },
  {
    text: "以下哪种环境会让你更难发挥？",
    options: [
      option("没有证据，只凭感觉拍板", "不重视分析和复盘", { analysis: -2, research: 1 }, ["lowEvidenceDrain"]),
      option("所有事情都要自己猜", "没有目标、反馈和资源", { systems: -1, stability: -1, autonomy: 1 }, ["ambiguityDrain"]),
      option("每天都要强势推销", "需要持续外向和成交", { communication: -1, commercial: 1 }, ["socialDrain"]),
      option("完全不能创新", "只能按旧办法做", { creation: -2, autonomy: 1 }, ["routineDrain"]),
    ],
  },
  {
    text: "面对批评或否定，你更希望对方给你什么？",
    options: [
      option("具体证据", "哪里不成立、为什么不成立", { analysis: 2, stability: 1 }, ["evidence"]),
      option("用户反馈", "谁不满意、真实反应是什么", { userInsight: 2, research: 1 }, ["people"]),
      option("下一步标准", "改到什么程度算通过", { execution: 2, systems: 1 }, ["delivery"]),
      option("表达建议", "怎样更有吸引力和说服力", { creation: 2, communication: 1 }, ["creative"]),
    ],
  },
  {
    text: "如果项目长期没有明确负责人，你会？",
    options: [
      option("推动明确责任", "不然很难有结果", { execution: 2, systems: 2 }, ["delivery"]),
      option("先把问题写清", "让大家看到关键矛盾", { analysis: 2, communication: 1 }, ["structured"]),
      option("协调相关人", "先建立基本共识", { communication: 2, userInsight: 1 }, ["people"]),
      option("退出低效循环", "不想长期陷在无结构环境里", { autonomy: 2, stability: 1 }, ["ambiguityDrain"]),
    ],
  },
  {
    text: "你最不适合长期处在哪种节奏里？",
    options: [
      option("每天重复且无成长", "几乎没有新东西可学", { research: -2, autonomy: 1 }, ["routineDrain"]),
      option("每天高频沟通但无沉淀", "一直说话，很少形成成果", { communication: -1, systems: 1 }, ["socialDrain"]),
      option("一直分析但不行动", "迟迟没有反馈和结果", { execution: -1, commercial: 1 }, ["analysisParalysisDrain"]),
      option("一直赶工但不复盘", "永远救火，质量不可控", { stability: -2, systems: 1 }, ["chaosDrain"]),
    ],
  },

  {
    text: "回看过去让你做得不错的事，最像哪一种？",
    options: [
      option("把复杂事讲清楚", "别人因此更容易判断", { analysis: 3, communication: 1 }, ["evidence"]),
      option("把人的需求摸清楚", "别人觉得你很懂他们", { userInsight: 3, communication: 1 }, ["people"]),
      option("把事情推进完成", "即使琐碎也能交付", { execution: 3, stability: 1 }, ["delivery"]),
      option("把普通事做出亮点", "形式、表达或体验更有吸引力", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "别人最常因为什么来找你帮忙？",
    options: [
      option("帮忙分析判断", "想听你怎么拆问题", { analysis: 3, research: 1 }, ["evidence"]),
      option("帮忙沟通理解", "想让你判断人的想法", { userInsight: 2, communication: 2 }, ["people"]),
      option("帮忙推进落地", "想让你把事管起来", { execution: 2, systems: 2 }, ["delivery"]),
      option("帮忙想创意", "想让你提供新表达和新点子", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "如果必须补一项能力，你最愿意补？",
    options: [
      option("数据和商业分析", "让判断更有证据", { analysis: 2, commercial: 2 }, ["evidence"]),
      option("用户研究和访谈", "更懂真实需求", { userInsight: 3, research: 1 }, ["people"]),
      option("项目管理和执行", "让想法稳定落地", { execution: 2, systems: 2 }, ["delivery"]),
      option("表达和设计能力", "让成果更有吸引力", { creation: 2, communication: 2 }, ["creative"]),
    ],
  },
  {
    text: "你希望测试结果最帮助你判断什么？",
    options: [
      option("我真正擅长什么", "找到核心能力证据", { analysis: 2, stability: 1 }, ["evidence"]),
      option("我适合服务谁", "找到更匹配的人群和需求", { userInsight: 2, communication: 1 }, ["people"]),
      option("我怎么落地选择", "找到下一步行动计划", { execution: 2, systems: 1 }, ["delivery"]),
      option("我该探索什么方向", "找到更有可能性的职业路径", { research: 2, autonomy: 1 }, ["learning"]),
    ],
  },
];

const careers = [
  career("产品策略 / 产品经理", { analysis: 3, userInsight: 3, execution: 2, communication: 2, commercial: 2 }, ["ambiguityDrain", "socialDrain"], "适合处理模糊需求、拆解用户问题并推动方案落地。", "如果你不喜欢跨部门协调或模糊需求，会明显消耗。", "从产品分析、用户问题拆解、AI 工具型产品项目切入。"),
  career("数据分析师", { analysis: 4, stability: 3, research: 2, commercial: 2 }, ["lowEvidenceDrain", "routineDrain"], "适合从数据和证据中提炼判断。", "如果你很排斥清洗数据和长期独立分析，需要谨慎。", "从 Excel/SQL/可视化和业务分析小项目切入。"),
  career("商业分析 / 咨询助理", { analysis: 4, commercial: 3, communication: 2, research: 2 }, ["lowEvidenceDrain", "socialDrain"], "适合拆解商业问题、建立框架并输出建议。", "如果你抗拒高强度表达和快速切换项目，会有压力。", "从行业研究、竞品分析和商业案例拆解切入。"),
  career("用户研究员", { userInsight: 4, research: 3, analysis: 2, communication: 2 }, ["socialDrain", "feedbackDrain"], "适合通过访谈、观察和证据理解人的真实需求。", "如果你不喜欢反复沟通和整理质性信息，需要谨慎。", "从访谈提纲、用户画像和可用性测试切入。"),
  career("客户成功 / 解决方案顾问", { communication: 4, userInsight: 3, execution: 2, commercial: 2 }, ["socialDrain", "chaosDrain"], "适合理解客户问题、协调资源并推动结果。", "如果你不喜欢高频沟通和客户压力，会被消耗。", "从客户需求梳理、方案演示和服务流程优化切入。"),
  career("内容策划 / 新媒体运营", { creation: 4, userInsight: 2, communication: 2, stability: 2 }, ["routineDrain", "feedbackDrain"], "适合把观点、趋势和用户需求变成持续内容。", "如果你不愿稳定产出和接受反馈，长期会吃力。", "从选题库、短文案、账号分析和作品集切入。"),
  career("品牌创意 / 广告文案", { creation: 4, communication: 3, userInsight: 2, commercial: 2 }, ["routineDrain", "lowEvidenceDrain"], "适合用表达、故事和概念影响认知。", "如果你讨厌反复改稿和商业约束，需要谨慎。", "从品牌案例拆解、命名、slogan 和 campaign 概念切入。"),
  career("交互设计 / UX 设计", { userInsight: 3, creation: 3, analysis: 2, systems: 2 }, ["feedbackDrain", "routineDrain"], "适合把用户需求转成清晰体验和界面流程。", "如果你只喜欢视觉表达、不喜欢验证和约束，可能落差较大。", "从流程图、低保真原型和可用性测试切入。"),
  career("项目管理 / 项目协调", { execution: 4, systems: 3, communication: 2, stability: 2 }, ["chaosDrain", "ambiguityDrain"], "适合把目标拆成计划、责任和交付节奏。", "如果你不喜欢追进度和处理冲突，会消耗。", "从项目看板、风险清单和复盘模板切入。"),
  career("运营管理 / 流程优化", { systems: 4, execution: 3, stability: 2, analysis: 2 }, ["chaosDrain", "routineDrain"], "适合建立机制、优化流程并让系统长期稳定。", "如果你需要持续新鲜感，纯流程维护会消耗。", "从 SOP、指标看板和流程改造小项目切入。"),
  career("行业研究 / 知识管理", { research: 4, analysis: 3, systems: 2, stability: 2 }, ["routineDrain", "lowEvidenceDrain"], "适合持续学习、整理信息并输出判断。", "如果你需要大量社交反馈，这类工作可能偏孤独。", "从主题研究、资料库和行业简报切入。"),
  career("AI 工具应用 / 自动化顾问", { research: 3, systems: 3, execution: 2, commercial: 2 }, ["routineDrain", "ambiguityDrain"], "适合学习新工具、把流程变得更高效。", "如果你不喜欢持续更新技能，会很快落后。", "从自动化工作流、提示词模板和效率工具案例切入。"),
  career("教育内容 / 课程策划", { research: 3, creation: 3, userInsight: 2, systems: 2 }, ["feedbackDrain", "routineDrain"], "适合把知识转成别人能理解和使用的内容。", "如果你不愿打磨结构和教学反馈，需要谨慎。", "从课程大纲、知识卡片和学习路径设计切入。"),
  career("销售 / 商务拓展", { communication: 4, commercial: 4, execution: 2, stability: 1 }, ["socialDrain", "feedbackDrain"], "适合高频沟通、识别机会并推动交易。", "如果你抗拒陌生沟通、被拒绝和业绩压力，不建议优先。", "从顾问式销售、行业客户研究和提案演示切入。"),
  career("行政 / 供应链 / 质量支持", { systems: 3, stability: 4, execution: 3 }, ["routineDrain", "autonomyDrain"], "适合稳定流程、细节管理和长期跟进。", "如果你强烈需要创造和探索，可能很快觉得受限。", "从流程台账、供应链协调和质量检查机制切入。"),
  career("自由职业 / 创作者", { creation: 4, autonomy: 4, commercial: 2, execution: 2 }, ["isolationDrain", "analysisParalysisDrain"], "适合强自主、强表达、能持续做作品的人。", "如果执行和商业意识不足，收入和交付会不稳定。", "从作品集、服务包和稳定获客渠道切入。"),
];

const environmentRules = {
  fit: [
    { tag: "structured", text: "有清晰目标、证据和判断标准的环境" },
    { tag: "people", text: "能接触真实用户、客户或协作对象的环境" },
    { tag: "delivery", text: "有节奏、有责任边界、能持续交付的环境" },
    { tag: "creative", text: "允许表达观点、打磨作品和尝试新形式的环境" },
    { tag: "learning", text: "能持续学习新领域、新工具和新方法的环境" },
    { tag: "process", text: "重视流程建设、复盘和长期优化的环境" },
    { tag: "commercial", text: "能看见价值、增长、成本和交易结果的环境" },
  ],
  drain: {
    routineDrain: "高度重复、低变化、几乎没有成长空间的工作",
    socialDrain: "高频陌生沟通、强成交压力或大量应酬的工作",
    feedbackDrain: "长期没有反馈、看不到用户或成果影响的环境",
    ambiguityDrain: "目标、责任和标准长期不清晰的环境",
    chaosDrain: "持续救火、目标反复变化且缺少复盘的环境",
    lowEvidenceDrain: "只凭感觉拍板、不重视证据和逻辑的环境",
    isolationDrain: "几乎没有协作和外部反馈、完全自我驱动的环境",
    analysisParalysisDrain: "长期分析但迟迟没有行动和结果的环境",
    autonomyDrain: "严格照做、不能提出改进或自主判断的环境",
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

function option(label, desc, scores, tags = []) {
  return { label, desc, scores, tags };
}

function career(name, weights, riskTags, reason, risk, entry) {
  return { name, weights, riskTags, reason, risk, entry };
}

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
  el.moreCareersButton.addEventListener("click", () => showToast("职业方向会在完成测评后统一生成。"));
  el.saveButton.addEventListener("click", () => showToast("已在本机保留当前进度。"));
  el.profileButton.addEventListener("click", () => showToast("当前版本展示本次职业匹配报告。"));
}

function renderSteps() {
  el.stepList.innerHTML = "";
  questions.forEach((_, index) => {
    const module = getQuestionModule(index);
    const item = document.createElement("li");
    item.innerHTML = `<span class="step-dot">${index + 1}</span><span>${module.shortName} ${index + 1}</span>`;
    el.stepList.appendChild(item);
  });
}

function renderQuestion() {
  setMode("assessment");
  el.quizView.hidden = false;
  el.resultView.hidden = true;
  el.insightPanel.hidden = true;
  el.insightPanel.style.display = "none";

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
  question.options.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.classList.toggle("selected", answers[current]?.index === index);
    button.innerHTML = `
      <span class="option-key">${String.fromCharCode(65 + index)}</span>
      <span>
        <span class="option-title">${choice.label}</span>
        <span class="option-desc">${choice.desc}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      answers[current] = { ...choice, index };
      renderQuestion();
    });
    el.options.appendChild(button);
  });
}

function getQuestionModule(index) {
  return questionModules.find((item) => index >= item.from && index <= item.to) ?? questionModules[0];
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

function getTagCounts() {
  const counts = {};
  answers.filter(Boolean).forEach((answer) => {
    answer.tags.forEach((tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1;
    });
  });
  return counts;
}

function getSortedTraits() {
  const scores = getScores();
  return dimensions
    .map((dimension) => ({ ...dimension, score: scores[dimension.id] }))
    .sort((a, b) => b.score - a.score);
}

function getCareerMatches() {
  const scores = getScores();
  const tags = getTagCounts();
  const maxScore = Math.max(...Object.values(scores).map((value) => Math.max(value, 0)), 1);

  return careers
    .map((item) => {
      const weighted = Object.entries(item.weights).reduce((sum, [key, weight]) => {
        return sum + ((Math.max(scores[key] ?? 0, 0) / maxScore) * weight);
      }, 0);
      const riskPenalty = item.riskTags.reduce((sum, tag) => sum + (tags[tag] ?? 0) * 0.9, 0);
      const score = weighted - riskPenalty;
      return { ...item, score };
    })
    .sort((a, b) => b.score - a.score);
}

function getResultData() {
  const sorted = getSortedTraits();
  const tags = getTagCounts();
  const careerMatches = getCareerMatches();
  const core = sorted.slice(0, 2);
  const support = sorted.slice(2, 5);
  const nonDominant = sorted.slice(-3).reverse();
  const dominantTags = Object.entries(tags).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([tag]) => tag);
  const drainTags = Object.entries(tags)
    .filter(([tag]) => tag.endsWith("Drain"))
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);

  return {
    sorted,
    tags,
    careerMatches,
    core,
    support,
    nonDominant,
    highCareers: careerMatches.slice(0, 5),
    growthCareers: careerMatches.slice(5, 10),
    cautionCareers: careerMatches.slice(-5).reverse(),
    fitEnvironments: getFitEnvironments(dominantTags),
    drainEnvironments: getDrainEnvironments(drainTags, nonDominant),
    title: `主导优势：${core.map((item) => item.name).join(" + ")}`,
    summary: `你的结果更偏向 ${core.map((item) => item.name).join("、")}，辅助倾向是 ${support.map((item) => item.name).join("、")}。报告采用相对排序和职业标签匹配，不用单纯百分比判断“高低”。`,
  };
}

function getFitEnvironments(tags) {
  const matched = environmentRules.fit.filter((item) => tags.includes(item.tag)).map((item) => item.text);
  return unique([...matched, "有真实反馈、能验证能力证据的环境"]).slice(0, 6);
}

function getDrainEnvironments(drainTags, nonDominant) {
  const fromTags = drainTags.map((tag) => environmentRules.drain[tag]).filter(Boolean);
  const fromLowTraits = nonDominant.map((item) => `${item.name}要求很高、但你目前不是主导优势的岗位`);
  return unique([...fromTags, ...fromLowTraits]).slice(0, 6);
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

  const result = getResultData();
  setMode("result");
  el.quizView.hidden = true;
  el.resultView.hidden = false;
  el.insightPanel.hidden = false;
  el.insightPanel.style.display = "grid";

  el.resultTitle.textContent = result.title;
  el.resultSummary.textContent = `${result.summary} 这份测试用于职业探索和自我理解，不构成心理、医疗、录用或职业诊断建议。`;

  renderTraitList(el.topTalentList, result.core);
  renderTraitList(el.sceneList, result.support, "辅助倾向");
  renderTraitList(el.growthCareerList, result.nonDominant, "非主导倾向");
  renderCareerList(el.highCareerList, result.highCareers, "match");
  renderCareerList(el.cautionList, result.cautionCareers, "caution");
  renderList(el.actionList, [
    "选择 1 个高匹配职业，做 1 个 3-7 天的小项目验证。",
    "访谈 2 位目标岗位从业者，确认真实工作内容和消耗点。",
    "为前三优势各准备 1 个真实案例，作为能力证据。",
    "对谨慎职业先做低成本体验，不要直接长期投入。",
    "用岗位 JD 对照你的主导优势、非主导倾向和消耗环境。",
  ]);
  renderList(el.methodList, [
    ...result.fitEnvironments.map((item) => `适配：${item}`),
    ...result.drainEnvironments.map((item) => `谨慎：${item}`),
  ]);
  renderInsights(result);
}

function renderInsights(result = getResultData()) {
  el.dimensionList.innerHTML = "";
  const groups = [
    ["核心优势", result.core],
    ["辅助倾向", result.support],
    ["非主导倾向", result.nonDominant],
  ];

  groups.forEach(([label, traits]) => {
    const block = document.createElement("div");
    block.className = "trait-group";
    block.innerHTML = `<h3>${label}</h3>${traits.map((trait) => `<span>${trait.name}</span>`).join("")}`;
    el.dimensionList.appendChild(block);
  });

  el.careerPreviewList.innerHTML = result.highCareers.slice(0, 3).map((item, index) => `
    <article class="career-card">
      <h3>${index + 1}. ${item.name}</h3>
      <p>${item.reason}</p>
    </article>
  `).join("");
}

function renderTraitList(target, traits, prefix = "") {
  target.innerHTML = traits.map((trait) => {
    const label = prefix ? `${prefix}：${trait.name}` : trait.name;
    return `<li><strong>${label}</strong><span>${trait.description}</span></li>`;
  }).join("");
}

function renderCareerList(target, items, type) {
  target.innerHTML = items.map((item) => {
    const secondary = type === "caution" ? item.risk : item.entry;
    const label = type === "caution" ? "谨慎原因" : "适合切入";
    return `
      <li class="job-match">
        <strong>${item.name}</strong>
        <span>${item.reason}</span>
        <em>${label}：${secondary}</em>
      </li>
    `;
  }).join("");
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function setMode(mode) {
  el.workspace.classList.toggle("assessment-mode", mode === "assessment");
  el.workspace.classList.toggle("result-mode", mode === "result");
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
