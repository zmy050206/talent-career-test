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
  { id: "technical", name: "技术建构", description: "理解工具、系统、代码、设备或工程原理并解决问题。" },
  { id: "practical", name: "动手实操", description: "通过制作、操作、维护、现场处理把事情做出来。" },
  { id: "care", name: "照护服务", description: "提供支持、陪伴、教学、照护和细致服务。" },
  { id: "compliance", name: "规则合规", description: "理解制度、风险、标准、流程和边界。" },
  { id: "teaching", name: "教学引导", description: "把知识、方法或经验转化为别人能理解和练习的路径。" },
  { id: "spatialAesthetic", name: "空间审美", description: "理解形状、空间、色彩、材料、风格和视觉秩序。" },
  { id: "physicalEnergy", name: "身体协调", description: "适应体力、动作、节奏、现场移动和身体表达。" },
  { id: "leadership", name: "组织管理", description: "带领团队、配置资源、承担责任并推动更大范围结果。" },
];

const questionModules = [
  { from: 0, to: 11, name: "做事反应", shortName: "反应" },
  { from: 12, to: 19, name: "投入偏好", shortName: "投入" },
  { from: 20, to: 27, name: "消耗方式", shortName: "消耗" },
  { from: 28, to: 35, name: "能力线索", shortName: "线索" },
  { from: 36, to: 43, name: "环境需要", shortName: "环境" },
  { from: 44, to: 55, name: "现实选择", shortName: "选择" },
];

const questions = [
  {
    text: "遇到一件没做过的事（比如学新技能、准备活动、帮人解决问题）时，你最自然的第一步是？",
    options: [
      option("理清目标和限制", "先弄清要做到什么、有哪些条件", { analysis: 3, systems: 1 }, ["structured"]),
      option("问问相关的人", "先理解谁会用到、谁需要被帮助", { userInsight: 3, communication: 1 }, ["people"]),
      option("先做一小版", "先试一下，再根据反馈调整", { execution: 3, research: 1 }, ["iteration"]),
      option("找参考和灵感", "先看类似做法和新鲜点子", { creation: 3, research: 1 }, ["creative"]),
    ],
  },
  {
    text: "大家一起商量一件事但越聊越乱时，你更可能做什么？",
    options: [
      option("抓关键矛盾", "把大家真正争论的问题说清楚", { analysis: 3, communication: 1 }, ["structured"]),
      option("翻译不同立场", "让各方听懂彼此的顾虑", { communication: 3, userInsight: 1 }, ["people"]),
      option("定下一步动作", "明确接下来谁做什么、什么时候完成", { execution: 3, systems: 1 }, ["delivery"]),
      option("提出新方向", "换一个角度让讨论重新打开", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "你最有成就感的时刻通常来自？",
    options: [
      option("判断被验证", "之前的分析后来证明是对的", { analysis: 3, research: 1 }, ["evidence"]),
      option("别人被帮助", "对方因为你的帮助变得更顺畅", { userInsight: 3, communication: 1 }, ["people"]),
      option("事情顺利完成", "复杂任务终于按计划完成", { execution: 3, stability: 1 }, ["delivery"]),
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
    text: "一件事总是重复出错或效率很低，你更想做什么？",
    options: [
      option("找根因", "先确认问题为什么反复发生", { analysis: 3, research: 1 }, ["evidence"]),
      option("建流程", "做模板、规范和检查机制", { systems: 3, stability: 1 }, ["process"]),
      option("推动执行", "先把卡住的环节推进掉", { execution: 3, communication: 1 }, ["delivery"]),
      option("重新设计体验", "让做这件事的人更省力、更舒服", { userInsight: 2, creation: 2 }, ["people"]),
    ],
  },
  {
    text: "如果要学习一个新领域，你最常用的方法是？",
    options: [
      option("系统阅读", "按主题整理资料和笔记", { research: 3, systems: 1 }, ["learning"]),
      option("找人请教", "问有经验的人，理解真实情况", { userInsight: 2, communication: 2 }, ["people"]),
      option("做小实验", "用一个真实任务边做边学", { execution: 2, research: 2 }, ["iteration"]),
      option("拆优秀案例", "分析它为什么有效、哪里可借鉴", { analysis: 2, creation: 2 }, ["evidence"]),
    ],
  },
  {
    text: "当目标很模糊但时间紧，你更倾向于？",
    options: [
      option("先定义判断标准", "没有标准就容易忙错方向", { analysis: 3, systems: 1 }, ["structured"]),
      option("先问清相关人", "确认大家对结果的期待", { communication: 3, userInsight: 1 }, ["people"]),
      option("先推进最小版本", "让事情进入可反馈状态", { execution: 3, research: 1 }, ["iteration"]),
      option("先找差异化切口", "避免做成普通方案", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "如果让你在一件共同完成的事里选一部分，你更愿意负责？",
    options: [
      option("判断选哪条路", "把信息理清，帮大家做选择", { analysis: 3, commercial: 1 }, ["evidence"]),
      option("理解真实需要", "发现别人真正卡在哪里", { userInsight: 3, research: 1 }, ["people"]),
      option("把计划做出来", "把想法拆成步骤并推进完成", { execution: 3, systems: 1 }, ["delivery"]),
      option("把表达做好", "让观点被看见、被记住", { creation: 3, communication: 1 }, ["creative"]),
    ],
  },
  {
    text: "你最容易注意到一个方案里的什么问题？",
    options: [
      option("逻辑漏洞", "前后因果不成立或证据不足", { analysis: 3, stability: 1 }, ["evidence"]),
      option("别人不买账", "看起来好，但真正使用的人可能无感", { userInsight: 3, commercial: 1 }, ["people"]),
      option("难以完成", "时间、资源和分工不清楚", { execution: 2, systems: 2 }, ["delivery"]),
      option("缺少亮点", "没有记忆点，不容易传播", { creation: 3, commercial: 1 }, ["creative"]),
    ],
  },
  {
    text: "和别人合作时，你最常贡献什么？",
    options: [
      option("清晰判断", "把复杂问题说成几个关键判断", { analysis: 3, communication: 1 }, ["structured"]),
      option("关系协调", "让不同角色更愿意配合", { communication: 3, userInsight: 1 }, ["people"]),
      option("稳定推进", "持续盯进度、补漏洞、完成结果", { execution: 2, stability: 2 }, ["delivery"]),
      option("新鲜想法", "提供更有吸引力的表达和方案", { creation: 3, autonomy: 1 }, ["creative"]),
    ],
  },
  {
    text: "看到一个新东西（商品、工具、活动或内容）时，你更常先想什么？",
    options: [
      option("值不值得做", "成本、价值、机会空间怎么样", { commercial: 3, analysis: 1 }, ["commercial"]),
      option("别人是否真的需要", "这个需求是不是足够真实", { userInsight: 3, research: 1 }, ["people"]),
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
    text: "如果只能选一个，你更看重一件长期投入的事带来哪种回报？",
    options: [
      option("成长速度", "能持续学到新东西", { research: 2, autonomy: 2 }, ["learning"]),
      option("稳定确定", "节奏清楚、风险可控", { stability: 3, systems: 1 }, ["stable"]),
      option("影响他人", "能真实帮助别人或改善体验", { userInsight: 2, communication: 2 }, ["people"]),
      option("现实回报", "能看到价值、收入或成长机会", { commercial: 3, execution: 1 }, ["commercial"]),
    ],
  },
  {
    text: "你更能接受哪种长期做事状态？",
    options: [
      option("高自由但不确定", "自己定义路径和标准", { autonomy: 3, research: 1 }, ["autonomy"]),
      option("低自由但稳定", "明确流程和预期，长期深耕", { stability: 3, systems: 1 }, ["stable"]),
      option("高协作高沟通", "频繁对齐、推动多方共识", { communication: 3, userInsight: 1 }, ["people"]),
      option("高压力高回报", "目标强、节奏快、结果导向", { commercial: 2, execution: 2 }, ["commercial"]),
    ],
  },
  {
    text: "一个方向吸引你，最可能因为它能让你？",
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
    text: "当你选择一个发展方向时，更想优先验证什么？",
    options: [
      option("我是否真的擅长", "用作品、案例和反馈证明能力", { stability: 2, analysis: 2 }, ["evidence"]),
      option("我是否长期有兴趣", "看自己会不会持续主动投入", { autonomy: 2, research: 2 }, ["learning"]),
      option("现实是否需要", "判断这个方向有没有需求和机会", { commercial: 3, analysis: 1 }, ["commercial"]),
      option("环境是否适合", "看节奏、沟通方式和规则是否匹配", { systems: 2, userInsight: 2 }, ["process"]),
    ],
  },
  {
    text: "你更偏好哪种一起做事的氛围？",
    options: [
      option("理性透明", "用事实、数据和逻辑讨论问题", { analysis: 2, stability: 2 }, ["evidence"]),
      option("开放创造", "鼓励新想法和试错", { creation: 2, autonomy: 2 }, ["creative"]),
      option("彼此信任", "沟通充分，尊重人的感受", { communication: 2, userInsight: 2 }, ["people"]),
      option("目标明确", "节奏清晰，完成标准明确", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },
  {
    text: "如果几条发展路线条件差不多，你更愿意选？",
    options: [
      option("研究分析路线", "长期处理信息和判断", { analysis: 2, research: 2 }, ["evidence"]),
      option("内容创意路线", "持续做表达和作品", { creation: 3, communication: 1 }, ["creative"]),
      option("沟通服务路线", "和真实需求、高频反馈打交道", { userInsight: 2, communication: 2 }, ["people"]),
      option("组织推进路线", "负责计划、协调和结果", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },
  {
    text: "你更愿意把时间投入到哪种练习？",
    options: [
      option("案例拆解", "训练判断和分析框架", { analysis: 3, commercial: 1 }, ["evidence"]),
      option("作品创作", "训练表达、设计或内容产出", { creation: 3, stability: 1 }, ["creative"]),
      option("访谈沟通", "训练提问、倾听和影响", { userInsight: 2, communication: 2 }, ["people"]),
      option("计划推进", "训练计划、协调和复盘", { execution: 2, systems: 2 }, ["delivery"]),
    ],
  },

  {
    text: "以下哪种状态最容易消耗你？",
    options: [
      option("每天机械重复", "流程固定，变化很少", { stability: -2, autonomy: 2, research: 1 }, ["routineDrain"]),
      option("天天主动推销", "高频陌生沟通和强说服压力", { communication: -2, commercial: 1, autonomy: 1 }, ["socialDrain"]),
      option("长期没人反馈", "不知道做得好不好，也看不到影响", { userInsight: -1, execution: -1, research: 1 }, ["feedbackDrain"]),
      option("一直开放发散", "没有边界、计划和完成标准", { systems: -2, execution: -1, creation: 1 }, ["ambiguityDrain"]),
    ],
  },
  {
    text: "你最怕哪种做事要求？",
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
    text: "如果连续一个月每天做的事都差不多，你更可能？",
    options: [
      option("继续优化细节", "把质量做得更稳定", { stability: 3, systems: 1 }, ["stable"]),
      option("寻找改进空间", "看哪里能更高效", { systems: 2, analysis: 2 }, ["process"]),
      option("明显失去动力", "希望有新问题和新挑战", { autonomy: 2, research: 2 }, ["routineDrain"]),
      option("尝试新的表达", "给重复事情加入新形式", { creation: 2, execution: 1 }, ["creative"]),
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
      option("真实反馈", "谁不满意、真实反应是什么", { userInsight: 2, research: 1 }, ["people"]),
      option("下一步标准", "改到什么程度算通过", { execution: 2, systems: 1 }, ["delivery"]),
      option("表达建议", "怎样更有吸引力和说服力", { creation: 2, communication: 1 }, ["creative"]),
    ],
  },
  {
    text: "如果一件共同完成的事长期没人牵头，你会？",
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
      option("把事情推进完成", "即使琐碎也能完成到位", { execution: 3, stability: 1 }, ["delivery"]),
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
    text: "如果现在必须补一项能力，你最愿意补？",
    options: [
      option("数据和价值分析", "让判断更有证据", { analysis: 2, commercial: 2 }, ["evidence"]),
      option("需求理解和访谈", "更懂真实需求", { userInsight: 3, research: 1 }, ["people"]),
      option("计划管理和执行", "让想法稳定落地", { execution: 2, systems: 2 }, ["delivery"]),
      option("表达和设计能力", "让成果更有吸引力", { creation: 2, communication: 2 }, ["creative"]),
    ],
  },
  {
    text: "你希望测试结果最帮助你判断什么？",
    options: [
      option("我真正擅长什么", "找到核心能力证据", { analysis: 2, stability: 1 }, ["evidence"]),
      option("我适合服务谁", "找到更匹配的人群和需求", { userInsight: 2, communication: 1 }, ["people"]),
      option("我怎么落地选择", "找到下一步行动计划", { execution: 2, systems: 1 }, ["delivery"]),
      option("我该探索什么方向", "找到更有可能性的未来路径", { research: 2, autonomy: 1 }, ["learning"]),
    ],
  },
  {
    text: "如果回想学习或生活中你更容易做好的事，最像哪一种？",
    options: [
      option("把难题讲清楚", "能把复杂知识拆给别人听懂", { analysis: 2, care: 2 }, ["teaching"]),
      option("修好或做出东西", "通过工具、材料或设备解决问题", { practical: 3, technical: 1 }, ["handsOn"]),
      option("发现规则漏洞", "能看出流程、制度或风险哪里不严谨", { compliance: 3, analysis: 1 }, ["compliance"]),
      option("安排现场秩序", "活动、场地、人和物能被你组织顺畅", { systems: 2, execution: 2 }, ["onsite"]),
    ],
  },
  {
    text: "做小组作业或活动时，你常被分配什么任务？",
    options: [
      option("查资料和写框架", "负责把内容逻辑搭起来", { research: 2, analysis: 2 }, ["evidence"]),
      option("做展示和表达", "负责讲清楚、做 PPT 或包装亮点", { creation: 2, communication: 2 }, ["creative"]),
      option("跑腿协调和落地", "负责联系、准备、现场推进", { practical: 2, execution: 2 }, ["handsOn"]),
      option("核对细节和规范", "负责检查格式、数据、规则和风险", { compliance: 2, stability: 2 }, ["compliance"]),
    ],
  },
  {
    text: "如果要连续练一项技能，你更愿意练？",
    options: [
      option("编程/自动化/工具", "用技术让流程更高效", { technical: 3, research: 1 }, ["technical"]),
      option("手工/设备/制作", "通过动手把东西做出来", { practical: 3, stability: 1 }, ["handsOn"]),
      option("教学/陪伴/咨询", "帮助别人理解或解决问题", { care: 3, communication: 1 }, ["teaching"]),
      option("财务/法律/制度", "处理规则、数字和风险边界", { compliance: 3, analysis: 1 }, ["compliance"]),
    ],
  },
  {
    text: "你更能接受哪种慢功夫？",
    options: [
      option("反复调试", "一点点定位系统或工具问题", { technical: 2, stability: 2 }, ["technical"]),
      option("反复打磨手感", "通过练习提升操作和制作质量", { practical: 2, stability: 2 }, ["handsOn"]),
      option("反复陪伴沟通", "用耐心帮助别人慢慢变化", { care: 2, userInsight: 2 }, ["care"]),
      option("反复核查规则", "确保数字、条款、流程没有风险", { compliance: 2, stability: 2 }, ["compliance"]),
    ],
  },
  {
    text: "面对真实现场的突发状况，你更可能？",
    options: [
      option("先稳住人", "安抚情绪、解释情况、协调期待", { communication: 2, care: 2 }, ["people"]),
      option("先处理物", "检查设备、材料、场地和具体问题", { practical: 3, execution: 1 }, ["onsite"]),
      option("先看规则", "确认流程、责任和风险边界", { compliance: 3, systems: 1 }, ["compliance"]),
      option("先找替代方案", "用现有资源快速绕过问题", { execution: 2, autonomy: 2 }, ["iteration"]),
    ],
  },
  {
    text: "你更愿意深入哪类知识？",
    options: [
      option("人和教育", "心理、学习、沟通、成长", { care: 2, userInsight: 2 }, ["teaching"]),
      option("技术和工程", "代码、设备、系统、工具", { technical: 3, research: 1 }, ["technical"]),
      option("经营和机会", "行业、增长、交易、经营", { commercial: 3, analysis: 1 }, ["commercial"]),
      option("规则和制度", "法律、财务、审计、政策", { compliance: 3, stability: 1 }, ["compliance"]),
    ],
  },
  {
    text: "以下哪种成果最让你踏实？",
    options: [
      option("一个清晰结论", "别人能据此做判断", { analysis: 3, communication: 1 }, ["evidence"]),
      option("一个可用工具", "真的能被使用或提升效率", { technical: 2, practical: 2 }, ["technical"]),
      option("一个被照顾好的人", "对方因为你获得支持或改善", { care: 3, userInsight: 1 }, ["care"]),
      option("一个零差错流程", "风险被控制，结果稳定", { compliance: 2, systems: 2 }, ["compliance"]),
    ],
  },
  {
    text: "别人夸你时，哪种评价最接近真实？",
    options: [
      option("你很会分析", "能抓住关键并说清楚", { analysis: 3, communication: 1 }, ["evidence"]),
      option("你很会做事", "动手快，现场问题能处理", { practical: 3, execution: 1 }, ["handsOn"]),
      option("你很可靠细心", "不容易漏细节和风险", { stability: 2, compliance: 2 }, ["compliance"]),
      option("你很会照顾人", "能让人感到被理解和支持", { care: 3, userInsight: 1 }, ["care"]),
    ],
  },
  {
    text: "你更希望长期待着的环境提供什么？",
    options: [
      option("专业深度", "能持续提升一门硬技能", { technical: 2, research: 2 }, ["technical"]),
      option("现场反馈", "能马上看到操作和服务效果", { practical: 2, care: 1, execution: 1 }, ["onsite"]),
      option("稳定规则", "职责、流程、边界都清楚", { compliance: 2, stability: 2 }, ["stable"]),
      option("自主空间", "能自己定义路径和方法", { autonomy: 3, creation: 1 }, ["autonomy"]),
    ],
  },
  {
    text: "如果一件事需要经常面对陌生人，你的感觉更接近？",
    options: [
      option("愿意主动沟通", "交流本身能带来信息和机会", { communication: 3, commercial: 1 }, ["people"]),
      option("可以，但要有目的", "有明确问题或任务时能沟通", { userInsight: 2, analysis: 1, compliance: 1 }, ["structured"]),
      option("更适合熟人和长期关系", "需要信任和稳定互动", { care: 2, stability: 2 }, ["care"]),
      option("更想少沟通多做事", "希望靠作品、技术或结果表达", { technical: 1, practical: 2, autonomy: 1 }, ["isolationDrain"]),
    ],
  },
  {
    text: "你对“稳定组织/规则清晰/路径明确”的态度更像？",
    options: [
      option("很有吸引力", "稳定、制度和边界让我安心", { compliance: 2, stability: 3 }, ["stable"]),
      option("可以接受", "只要还有成长和专业提升", { research: 2, compliance: 1 }, ["learning"]),
      option("不太适合", "我更需要自主和变化", { autonomy: 3, creation: 1 }, ["autonomy"]),
      option("看具体内容", "如果能解决真实问题就可以", { analysis: 1, userInsight: 1, execution: 1 }, ["structured"]),
    ],
  },
  {
    text: "你是否愿意为未来方向额外学习硬技能或考证？",
    options: [
      option("愿意学技术", "代码、工具、系统、自动化都可以", { technical: 3, research: 1 }, ["technical"]),
      option("愿意考证", "财务、法务、教师、心理、医疗等证书", { compliance: 2, stability: 2 }, ["certification"]),
      option("愿意做作品", "作品集、案例、内容、设计练习", { creation: 2, autonomy: 2 }, ["creative"]),
      option("愿意积累经验", "通过练习、服务和现场体验慢慢进入", { practical: 2, care: 1, execution: 1 }, ["handsOn"]),
    ],
  },
  {
    text: "你对收入波动和不确定性的接受度？",
    options: [
      option("可以接受较大波动", "只要自由度和上限更高", { autonomy: 3, commercial: 1 }, ["autonomy"]),
      option("可以接受阶段波动", "前提是能积累作品或技能", { creation: 1, technical: 1, research: 2 }, ["learning"]),
      option("更希望稳定收入", "稳定感对我很重要", { stability: 3, compliance: 1 }, ["stable"]),
      option("看成长回报", "如果能提升长期价值，可以承受一点波动", { commercial: 2, execution: 1, research: 1 }, ["commercial"]),
    ],
  },
  {
    text: "如果未来要换一个方向，你更愿意从哪里切入？",
    options: [
      option("从作品切入", "先做可展示案例证明能力", { creation: 2, autonomy: 1, execution: 1 }, ["creative"]),
      option("从技能切入", "先补硬技能和工具能力", { technical: 3, research: 1 }, ["technical"]),
      option("从证书切入", "先获得门槛和专业背书", { compliance: 2, stability: 2 }, ["certification"]),
      option("从服务切入", "先从真实的人、需求或现场体验开始", { care: 1, practical: 2, communication: 1 }, ["handsOn"]),
    ],
  },
  {
    text: "你更不想长期忍受哪种代价？",
    options: [
      option("长期没有成长", "每天重复，不需要学习", { research: -2, autonomy: 1 }, ["routineDrain"]),
      option("长期高频社交", "每天大量陌生沟通和关系维护", { communication: -2, care: 1 }, ["socialDrain"]),
      option("长期细节零差错", "一直核对规则、数字和流程", { compliance: -1, stability: -1, autonomy: 1 }, ["detailDrain"]),
      option("长期现场奔波", "大量体力、现场和突发处理", { practical: -1, stability: 1 }, ["onsiteDrain"]),
    ],
  },
  {
    text: "你最希望未来形成哪种长期身份？",
    options: [
      option("专业判断者", "别人相信你的分析和建议", { analysis: 2, commercial: 1, research: 1 }, ["evidence"]),
      option("创造者", "别人通过作品认识你", { creation: 3, autonomy: 1 }, ["creative"]),
      option("技术/手艺人", "靠硬技能解决实际问题", { technical: 2, practical: 2 }, ["technical"]),
      option("支持者/教育者", "帮助他人变好、变清楚、变稳定", { care: 3, communication: 1 }, ["teaching"]),
    ],
  },
  {
    text: "如果要从零做一个真实作品，你更想做哪类？",
    options: [
      option("一个可用工具", "能自动化、计算、查询或提升效率", { technical: 3, analysis: 1 }, ["technical"]),
      option("一个空间/视觉方案", "房间布置、海报、摄影、陈列或造型", { spatialAesthetic: 3, creation: 1 }, ["aesthetic"]),
      option("一个教学方案", "让别人能按步骤学会一件事", { teaching: 3, care: 1 }, ["teaching"]),
      option("一个现场活动", "把人、物料、流程和突发都安排好", { leadership: 2, practical: 2 }, ["onsite"]),
    ],
  },
  {
    text: "你更能接受哪种投入强度？",
    options: [
      option("长时间脑力专注", "持续分析、写作、建模或调试", { analysis: 2, technical: 2 }, ["deepWork"]),
      option("长时间站立走动", "现场服务、巡查、活动、护理或运动", { physicalEnergy: 3, practical: 1 }, ["physical"]),
      option("长时间面对人", "讲解、沟通、陪伴、服务和协调", { communication: 2, care: 2 }, ["people"]),
      option("长时间核对细节", "数据、条款、账目、风险和规范", { compliance: 2, stability: 2 }, ["compliance"]),
    ],
  },
  {
    text: "你对空间、形象、材料和风格的敏感度更像？",
    options: [
      option("很敏感", "容易注意布局、色彩、质感和搭配", { spatialAesthetic: 3, creation: 1 }, ["aesthetic"]),
      option("偏实用", "更关心好不好用、结不结实", { practical: 2, systems: 1, technical: 1 }, ["handsOn"]),
      option("偏规则", "更关心是否合规、安全、标准", { compliance: 3, stability: 1 }, ["compliance"]),
      option("偏人感受", "更关心人在空间里是否舒服", { userInsight: 2, care: 1, spatialAesthetic: 1 }, ["people"]),
    ],
  },
  {
    text: "如果你负责带几个人完成一件事，你最想先做什么？",
    options: [
      option("明确目标和分工", "让每个人知道该做什么", { leadership: 3, systems: 1 }, ["management"]),
      option("建立规则和节奏", "让协作更稳定、更可复盘", { systems: 2, compliance: 1, leadership: 1 }, ["process"]),
      option("照顾大家状态", "让参与者有安全感和动力", { care: 2, communication: 2 }, ["people"]),
      option("盯住实际结果", "让这件事产出可衡量价值", { commercial: 2, execution: 1, leadership: 1 }, ["commercial"]),
    ],
  },
  {
    text: "你更愿意进入哪种能力训练路径？",
    options: [
      option("证书和资格路径", "教师、财务、法务、医疗、工程等", { compliance: 2, stability: 1, teaching: 1 }, ["certification"]),
      option("作品和审美路径", "设计、摄影、内容、造型、空间等", { spatialAesthetic: 2, creation: 2 }, ["aesthetic"]),
      option("技术和工具路径", "代码、设备、自动化、数据、工程等", { technical: 3, research: 1 }, ["technical"]),
      option("现场和服务路径", "活动、门店、护理、餐旅、维修等", { practical: 2, physicalEnergy: 1, care: 1 }, ["onsite"]),
    ],
  },
  {
    text: "哪种成就更容易让你愿意坚持几年？",
    options: [
      option("带好一群人", "大家成长，目标也能完成", { leadership: 3, communication: 1 }, ["management"]),
      option("做成一门手艺", "技术或作品越来越成熟", { practical: 2, stability: 1, spatialAesthetic: 1 }, ["handsOn"]),
      option("帮助一类人", "持续改善他们的学习、健康或生活", { care: 3, teaching: 1 }, ["care"]),
      option("建立一套系统", "流程、工具或组织长期运转", { systems: 2, technical: 1, compliance: 1 }, ["process"]),
    ],
  },
  {
    text: "你更不想长期处在哪种代价里？",
    options: [
      option("体力消耗大", "长期站立、搬动、奔波、夜班或户外", { physicalEnergy: -2, stability: 1 }, ["physicalDrain"]),
      option("审美反馈反复", "作品被反复修改、主观评价很多", { spatialAesthetic: -1, creation: -1, stability: 1 }, ["aestheticDrain"]),
      option("要带人担责", "结果和人际问题都要你扛", { leadership: -2, autonomy: 1 }, ["managementDrain"]),
      option("持续教学陪伴", "重复讲解、等待别人慢慢改变", { teaching: -1, care: -1, execution: 1 }, ["careDrain"]),
    ],
  },
  {
    text: "如果让你选择一个低成本验证练习，你最愿意做？",
    options: [
      option("给朋友讲一节课", "设计 15 分钟讲解并收反馈", { teaching: 3, communication: 1 }, ["teaching"]),
      option("改造一个角落", "做空间布置、收纳、陈列或拍摄方案", { spatialAesthetic: 3, practical: 1 }, ["aesthetic"]),
      option("组织一次小活动", "负责流程、分工、物料和现场", { leadership: 2, execution: 1, practical: 1 }, ["onsite"]),
      option("做一个效率工具", "用表格、脚本或 AI 简化重复任务", { technical: 2, systems: 2 }, ["technical"]),
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
  career("软件开发 / 技术支持", { technical: 4, analysis: 2, stability: 2, research: 2 }, ["routineDrain", "feedbackDrain"], "适合用技术、工具和系统解决具体问题。", "如果你不愿长期学习和调试，技术岗会很快变得吃力。", "从小工具、网页、自动化脚本或测试用例切入。"),
  career("工程制造 / 设备维护", { practical: 4, technical: 3, stability: 2, compliance: 2 }, ["onsiteDrain", "detailDrain"], "适合在真实设备、流程和现场问题中发挥动手能力。", "如果你不接受现场奔波、规范约束和安全责任，需要谨慎。", "从设备原理、工艺流程和故障排查清单切入。"),
  career("教师 / 培训师", { care: 4, communication: 3, research: 2, stability: 1 }, ["socialDrain", "feedbackDrain"], "适合把知识转化成他人能理解、能行动的学习体验。", "如果你不喜欢持续表达和面对不同学习状态，会被消耗。", "从试讲、课程大纲和学习反馈设计切入。"),
  career("心理/社工/照护服务", { care: 4, userInsight: 3, stability: 2, compliance: 1 }, ["socialDrain", "chaosDrain"], "适合支持真实的人，提供陪伴、照护和长期帮助。", "如果你情绪边界弱或难以承受慢变化，需要先低成本体验。", "从志愿服务、助人项目和专业伦理学习切入。"),
  career("财务 / 审计 / 风控", { compliance: 4, stability: 3, analysis: 2, commercial: 1 }, ["detailDrain", "routineDrain"], "适合处理数字、规则、风险和准确性要求高的工作。", "如果你排斥长期细节核对和制度约束，不建议优先。", "从会计基础、财报阅读和风险清单切入。"),
  career("法务 / 合规 / 行政制度", { compliance: 4, analysis: 2, stability: 2, communication: 1 }, ["detailDrain", "routineDrain"], "适合理解规则边界、识别风险并形成规范表达。", "如果你需要高创造空间或不喜欢条款细节，会消耗。", "从合同条款拆解、制度流程和案例检索切入。"),
  career("公务/事业单位综合岗", { compliance: 3, stability: 3, communication: 2, systems: 2 }, ["routineDrain", "autonomyDrain"], "适合稳定组织、规范流程、公共服务和综合协调。", "如果你强烈需要高自主和快速变化，需要谨慎判断。", "从公文写作、政策理解和综合事务练习切入。"),
  career("活动执行 / 现场运营", { practical: 3, execution: 3, communication: 2, systems: 2 }, ["onsiteDrain", "chaosDrain"], "适合现场协调、资源调度和突发问题处理。", "如果你不喜欢奔波、临场变化和细节压力，需要谨慎。", "从小活动流程表、物料清单和应急预案切入。"),
  career("空间设计 / 室内陈列", { spatialAesthetic: 4, creation: 2, practical: 2, userInsight: 1 }, ["aestheticDrain", "routineDrain"], "适合处理空间、风格、材料和视觉秩序。", "如果你不喜欢主观审美反馈和反复修改，需要谨慎。", "从房间改造、软装陈列和视觉方案切入。"),
  career("摄影 / 影视 / 编导", { spatialAesthetic: 3, creation: 3, communication: 1, physicalEnergy: 1 }, ["aestheticDrain", "onsiteDrain"], "适合通过画面、镜头和叙事表达观点。", "如果你不接受现场奔波和反复修改，可能消耗。", "从短片、摄影作品集和剪辑练习切入。"),
  career("餐饮 / 酒店 / 旅游服务", { care: 3, practical: 3, communication: 2, physicalEnergy: 2 }, ["physicalDrain", "socialDrain"], "适合现场服务、体验改善和高频真实反馈。", "如果你不适应体力节奏和情绪劳动，需要谨慎。", "从门店观察、服务流程和客户反馈切入。"),
  career("美容美发 / 手工艺 / 维修", { practical: 4, spatialAesthetic: 2, stability: 2, communication: 1 }, ["detailDrain", "physicalDrain"], "适合通过手艺、工具和持续练习形成专业价值。", "如果你不喜欢长期练习手感和服务反馈，需要谨慎。", "从 7 天作品练习、工具熟悉和客户沟通切入。"),
  career("体育训练 / 运动健康", { physicalEnergy: 4, care: 2, teaching: 2, compliance: 1 }, ["physicalDrain", "careDrain"], "适合身体示范、训练陪伴和健康改善场景。", "如果你不接受体力消耗和安全责任，需要谨慎。", "从训练计划、动作示范和基础运动知识切入。"),
  career("人力资源 / 组织发展", { communication: 3, care: 2, compliance: 2, leadership: 2 }, ["socialDrain", "routineDrain"], "适合理解人、岗位、制度和组织协作。", "如果你不喜欢处理人际复杂性和制度沟通，会消耗。", "从 JD、面试题、培训方案和员工体验调研切入。"),
  career("团队管理 / 门店管理", { leadership: 4, execution: 3, commercial: 2, communication: 2 }, ["managementDrain", "chaosDrain"], "适合带人、管现场、看指标并对结果负责。", "如果你不想承担团队压力和经营责任，需要谨慎。", "从排班、目标拆解、服务检查和经营复盘切入。"),
  career("农业 / 园艺 / 环保", { practical: 3, physicalEnergy: 2, care: 2, stability: 2 }, ["physicalDrain", "routineDrain"], "适合自然、户外、长期照料和现场观察类工作。", "如果你不适应户外和长期慢反馈，需要谨慎。", "从植物观察、环保志愿和农业技术资料切入。"),
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

const motivationRules = {
  learning: "持续学习新领域、新工具和新方法",
  creative: "做出可展示、可传播、有个人表达的作品",
  people: "理解真实的人，并通过沟通产生帮助或影响",
  delivery: "把目标推进成看得见的结果",
  evidence: "用证据、逻辑和案例做出可靠判断",
  commercial: "看到价值、增长、交易或可持续结果",
  autonomy: "拥有自主定义问题和路径的空间",
  process: "建立秩序、流程和可复用机制",
  stable: "在稳定节奏里长期打磨质量",
};

const careerMeta = {
  "产品策略 / 产品经理": {
    category: "产品与运营类",
    gaps: ["跨部门影响力", "商业敏感", "需求优先级判断"],
    task: "选一个常用 App，访谈 3 个用户，写 1 页问题分析和改进方案。",
    keywords: ["产品助理", "产品运营", "用户增长", "AI 产品"],
  },
  "数据分析师": {
    category: "商业与分析类",
    gaps: ["SQL/Excel", "数据清洗耐心", "业务指标理解"],
    task: "找一份公开数据，完成清洗、可视化和 3 条业务结论。",
    keywords: ["数据分析", "商业分析", "BI", "运营分析"],
  },
  "商业分析 / 咨询助理": {
    category: "商业与分析类",
    gaps: ["行业知识", "结构化表达", "高强度资料处理"],
    task: "拆解一个行业或公司，输出市场、用户、竞品和机会判断。",
    keywords: ["商业分析", "战略运营", "咨询助理", "行业分析"],
  },
  "用户研究员": {
    category: "用户与研究类",
    gaps: ["访谈设计", "质性分析", "报告表达"],
    task: "围绕一个产品完成 5 份访谈，整理用户痛点和机会点。",
    keywords: ["用户研究", "用户洞察", "UX Research", "用研实习"],
  },
  "客户成功 / 解决方案顾问": {
    category: "服务与客户类",
    gaps: ["客户沟通", "方案演示", "业务理解"],
    task: "为一个假想客户写一份问题诊断和解决方案演示稿。",
    keywords: ["客户成功", "解决方案顾问", "售前顾问", "客户运营"],
  },
  "内容策划 / 新媒体运营": {
    category: "设计与内容类",
    gaps: ["稳定产出", "数据复盘", "选题判断"],
    task: "选择一个主题连续产出 7 条内容，并记录点击、收藏和反馈。",
    keywords: ["内容运营", "新媒体运营", "内容策划", "账号运营"],
  },
  "品牌创意 / 广告文案": {
    category: "设计与内容类",
    gaps: ["商业约束", "反复改稿", "策略简报理解"],
    task: "为一个产品写 3 套不同定位的 slogan、海报文案和传播概念。",
    keywords: ["广告文案", "品牌策划", "创意策划", "品牌内容"],
  },
  "交互设计 / UX 设计": {
    category: "设计与体验类",
    gaps: ["原型工具", "可用性验证", "信息架构"],
    task: "重画一个常用功能流程，做低保真原型并请 3 个人试用。",
    keywords: ["交互设计", "UX 设计", "产品设计", "体验设计"],
  },
  "项目管理 / 项目协调": {
    category: "产品与运营类",
    gaps: ["风险管理", "冲突协调", "进度追踪"],
    task: "把一个小项目拆成里程碑、责任人、风险清单和复盘模板。",
    keywords: ["项目助理", "项目管理", "PMO", "项目协调"],
  },
  "运营管理 / 流程优化": {
    category: "稳定流程类",
    gaps: ["指标看板", "流程诊断", "跨角色推动"],
    task: "选择一个重复流程，画出流程图并提出 3 个效率优化点。",
    keywords: ["运营管理", "流程优化", "业务运营", "效率运营"],
  },
  "行业研究 / 知识管理": {
    category: "商业与分析类",
    gaps: ["长期阅读", "资料管理", "结论表达"],
    task: "做一个 30 天主题研究，沉淀资料库和 5 页研究简报。",
    keywords: ["行业研究", "知识管理", "研究助理", "信息分析"],
  },
  "AI 工具应用 / 自动化顾问": {
    category: "技术与工具类",
    gaps: ["工具学习", "流程建模", "业务场景理解"],
    task: "用 AI 或自动化工具改造一个重复流程，记录前后效率差异。",
    keywords: ["AI 应用", "自动化", "效率工具", "AI 运营"],
  },
  "教育内容 / 课程策划": {
    category: "教育与咨询类",
    gaps: ["教学结构", "学习反馈", "知识转译"],
    task: "把一个知识点设计成 20 分钟课程，包含大纲、练习和反馈题。",
    keywords: ["课程策划", "教育内容", "教研", "学习设计"],
  },
  "销售 / 商务拓展": {
    category: "服务与客户类",
    gaps: ["抗拒绝能力", "成交意识", "陌生沟通"],
    task: "选一个产品，写客户画像、拜访话术和 1 页提案。",
    keywords: ["销售顾问", "商务拓展", "BD", "客户经理"],
  },
  "行政 / 供应链 / 质量支持": {
    category: "稳定流程类",
    gaps: ["长期细节耐心", "规范意识", "协同跟进"],
    task: "为一个流程建立台账、检查清单和异常处理规则。",
    keywords: ["行政", "供应链协调", "质量管理", "流程支持"],
  },
  "自由职业 / 创作者": {
    category: "自由职业/创业类",
    gaps: ["稳定获客", "报价与交付", "自我管理"],
    task: "做一个作品集页面，设计 1 个服务包和 3 个获客渠道。",
    keywords: ["自由职业", "内容创作者", "独立设计师", "个人品牌"],
  },
  "软件开发 / 技术支持": {
    category: "技术与工具类",
    gaps: ["编程基础", "调试耐心", "工程化思维"],
    task: "做一个小工具或脚本，解决一个真实重复问题，并记录调试过程。",
    keywords: ["前端开发", "技术支持", "软件测试", "低代码开发"],
  },
  "工程制造 / 设备维护": {
    category: "制造与工程类",
    gaps: ["设备原理", "现场安全", "规范操作"],
    task: "选择一个设备或流程，画出工作原理和故障排查清单。",
    keywords: ["设备维护", "工艺工程", "制造工程", "现场技术"],
  },
  "教师 / 培训师": {
    category: "教育与咨询类",
    gaps: ["课程设计", "课堂表达", "学习反馈"],
    task: "把一个知识点设计成 15 分钟讲解，并找 3 个人试讲收反馈。",
    keywords: ["教师", "培训师", "助教", "课程顾问"],
  },
  "心理/社工/照护服务": {
    category: "照护与服务类",
    gaps: ["专业伦理", "情绪边界", "长期陪伴能力"],
    task: "参与一次志愿服务或助人项目，记录服务对象需求和你的能量变化。",
    keywords: ["社工", "心理助理", "康复支持", "养老服务"],
  },
  "财务 / 审计 / 风控": {
    category: "财务与规则类",
    gaps: ["财务知识", "合规意识", "细节准确性"],
    task: "练习整理一份收支表或公司财报，找出风险点和异常项。",
    keywords: ["财务助理", "审计", "风控", "会计"],
  },
  "法务 / 合规 / 行政制度": {
    category: "财务与规则类",
    gaps: ["法律基础", "制度理解", "风险表达"],
    task: "选择一个常见合同或制度条款，整理风险点和注意事项。",
    keywords: ["法务助理", "合规", "行政管理", "制度流程"],
  },
  "公务/事业单位综合岗": {
    category: "公共与稳定类",
    gaps: ["公文表达", "政策理解", "稳定执行"],
    task: "练习写一份通知、纪要或政策解读，检查表达是否准确规范。",
    keywords: ["事业单位", "综合管理", "行政文秘", "公共服务"],
  },
  "活动执行 / 现场运营": {
    category: "现场与服务类",
    gaps: ["现场应变", "供应商协调", "风险预案"],
    task: "为一个小活动写流程表、物料表、人员分工和应急预案。",
    keywords: ["活动执行", "现场运营", "会务", "展会执行"],
  },
  "空间设计 / 室内陈列": {
    category: "空间与审美类",
    gaps: ["空间软件", "材料工艺", "审美表达"],
    task: "选一个房间或店铺角落，做一页改造方案：动线、色彩、收纳和预算。",
    keywords: ["室内设计助理", "软装陈列", "空间设计", "视觉陈列"],
  },
  "摄影 / 影视 / 编导": {
    category: "艺术传播类",
    gaps: ["镜头语言", "剪辑工具", "现场协作"],
    task: "围绕一个主题拍 10 张照片或 1 分钟短片，并写出创作意图。",
    keywords: ["摄影助理", "短视频编导", "剪辑", "内容制作"],
  },
  "餐饮 / 酒店 / 旅游服务": {
    category: "现场与服务类",
    gaps: ["服务标准", "体力节奏", "现场应变"],
    task: "观察一家门店的服务流程，记录 3 个体验问题和改进建议。",
    keywords: ["酒店管培", "餐饮运营", "旅游顾问", "门店服务"],
  },
  "美容美发 / 手工艺 / 维修": {
    category: "手工技能与实操类",
    gaps: ["手感训练", "工具熟练度", "客户沟通"],
    task: "选择一项手艺做 7 天练习，记录作品变化和反馈。",
    keywords: ["美发助理", "美甲师", "维修学徒", "工艺制作"],
  },
  "体育训练 / 运动健康": {
    category: "艺术体育与身体类",
    gaps: ["训练理论", "身体示范", "安全边界"],
    task: "设计一份 7 天基础训练计划，并记录执行反馈。",
    keywords: ["健身教练", "运动康复助理", "体育培训", "赛事执行"],
  },
  "人力资源 / 组织发展": {
    category: "公共服务与组织类",
    gaps: ["招聘面试", "组织理解", "制度沟通"],
    task: "为一个岗位写 JD、面试问题和候选人评价表。",
    keywords: ["HR 助理", "招聘专员", "培训专员", "组织发展"],
  },
  "团队管理 / 门店管理": {
    category: "经营管理与创业类",
    gaps: ["带人能力", "经营指标", "现场管理"],
    task: "为一家小店设计一周排班、销售目标和服务检查表。",
    keywords: ["门店管理", "储备干部", "店长助理", "运营主管"],
  },
  "农业 / 园艺 / 环保": {
    category: "自然与现场类",
    gaps: ["自然知识", "长期照料", "户外适应"],
    task: "做一个植物或环境观察记录，连续 7 天记录变化和维护动作。",
    keywords: ["园艺师助理", "环保项目", "农业技术", "生态运营"],
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
  motivationList: document.querySelector("#motivationList"),
  environmentList: document.querySelector("#environmentList"),
  highCareerList: document.querySelector("#highCareerList"),
  growthCareerList: document.querySelector("#growthCareerList"),
  riskList: document.querySelector("#riskList"),
  cautionList: document.querySelector("#cautionList"),
  actionList: document.querySelector("#actionList"),
  methodList: document.querySelector("#methodList"),
  credibilityLabel: document.querySelector("#credibilityLabel"),
  credibilityReason: document.querySelector("#credibilityReason"),
  quickCareerList: document.querySelector("#quickCareerList"),
  avoidSummary: document.querySelector("#avoidSummary"),
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
      return { ...item, ...(careerMeta[item.name] ?? {}), score };
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
  const credibility = getCredibility(sorted, tags);
  const dominantTags = Object.entries(tags).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([tag]) => tag);
  const drainTags = Object.entries(tags)
    .filter(([tag]) => tag.endsWith("Drain"))
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
  const motivations = getMotivations(tags);

  return {
    sorted,
    tags,
    credibility,
    careerMatches,
    core,
    support,
    nonDominant,
    highCareers: careerMatches.slice(0, 3),
    growthCareers: careerMatches.slice(3, 7),
    cautionCareers: careerMatches.slice(-4).reverse(),
    motivations,
    fitEnvironments: getFitEnvironments(dominantTags),
    drainEnvironments: getDrainEnvironments(drainTags, nonDominant),
    title: `主导优势：${core.map((item) => item.name).join(" + ")}`,
    summary: `你的结果更偏向 ${core.map((item) => item.name).join("、")}，辅助倾向是 ${support.map((item) => item.name).join("、")}。报告采用相对排序和职业标签匹配，不用单纯百分比判断“高低”。`,
  };
}

function getCredibility(sorted, tags) {
  const selectedPositions = answers.filter(Boolean).map((answer) => answer.index);
  const maxSamePosition = Math.max(0, ...[0, 1, 2, 3].map((index) => selectedPositions.filter((value) => value === index).length));
  const topGap = (sorted[0]?.score ?? 0) - (sorted[2]?.score ?? 0);
  const contradictionCount = (tags.routineDrain ?? 0) + (tags.socialDrain ?? 0) + (tags.ambiguityDrain ?? 0) + (tags.chaosDrain ?? 0);

  if (maxSamePosition >= answers.length * 0.7) {
    return {
      label: "较低",
      reason: "同一选项位置出现过多，可能存在快速作答或位置偏好，建议重新认真作答一次。",
    };
  }

  if (topGap <= 2 || contradictionCount >= 7) {
    return {
      label: "中等",
      reason: "多个方向接近或消耗项较多，说明你可能处在探索期，建议结合真实项目继续验证。",
    };
  }

  return {
    label: "较高",
    reason: "选项分布相对均衡，主导优势与消耗项有明显区分，结果具备较好的参考价值。",
  };
}

function getMotivations(tags) {
  const topTags = Object.entries(tags)
    .filter(([tag]) => motivationRules[tag])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => motivationRules[tag]);
  return unique(topTags.length ? topTags : ["通过真实任务验证能力并获得成长反馈"]);
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
  el.credibilityLabel.textContent = result.credibility.label;
  el.credibilityReason.textContent = result.credibility.reason;
  el.quickCareerList.innerHTML = result.highCareers.slice(0, 3).map((item) => `<span>${item.name}</span>`).join("");
  el.avoidSummary.textContent = result.drainEnvironments.slice(0, 2).join("；") || "暂未出现明显高消耗环境，但仍建议通过真实任务验证。";

  renderTraitList(el.topTalentList, result.core);
  renderList(el.motivationList, result.motivations);
  renderList(el.environmentList, result.fitEnvironments);
  renderCareerList(el.highCareerList, result.highCareers, "match");
  renderCareerList(el.growthCareerList, result.growthCareers, "growth");
  renderList(el.riskList, result.drainEnvironments);
  renderCareerList(el.cautionList, result.cautionCareers, "caution");
  renderList(el.actionList, [
    `优先选择「${result.highCareers[0]?.name ?? "高匹配方向"}」，完成一个 3-7 天的小项目验证。`,
    result.highCareers[0]?.task ?? "围绕目标职业做一个可展示的小作品。",
    "访谈 2 位目标岗位从业者，确认真实工作内容和消耗点。",
    `为 ${result.core.map((item) => item.name).join("、")} 各准备 1 个真实案例，作为能力证据。`,
  ]);
  renderList(el.methodList, [
    "先看主导优势与动机是否一致，再看职业对这些能力的真实要求。",
    "高匹配职业代表当前优势更容易被调用，可发展职业代表需要补足能力缺口后再进入。",
    "谨慎职业不是绝对不能做，而是需要先验证消耗点和补齐缺口。",
    "如果结果可信度为中等或较低，建议重新作答或用真实项目验证。",
  ]);
  renderInsights(result);
  document.querySelector("#app-main").scrollIntoView({ block: "start" });
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
    const gaps = item.gaps?.length ? `<em>能力缺口：${item.gaps.slice(0, 3).join("、")}</em>` : "";
    const task = item.task ? `<em>验证任务：${item.task}</em>` : "";
    const keywords = item.keywords?.length ? `<em>搜索关键词：${item.keywords.join("、")}</em>` : "";
    return `
      <li class="job-match">
        <strong>${item.name}${item.category ? ` <small>${item.category}</small>` : ""}</strong>
        <span>${item.reason}</span>
        <em>${label}：${secondary}</em>
        ${type === "caution" ? "" : gaps}
        ${type === "match" ? task + keywords : ""}
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
