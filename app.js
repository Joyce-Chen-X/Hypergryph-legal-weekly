const modules = [
  {
    id: "overview",
    label: "总览",
    subtitle: "成果与数据概览",
    description: "汇总本周核心成果、风险提醒、运营数据与新增事项。",
  },
  {
    id: "project",
    label: "项目支持",
    subtitle: "游戏项目法务支持",
    description: "覆盖 DM01、RM42 及其他项目支持事项，集中呈现项目风险、处理口径与文档状态。",
  },
  {
    id: "data",
    label: "专项合规",
    subtitle: "系统与专项治理",
    description: "跟踪专项治理、系统整改与资讯看板建设，区分进度表和总表。",
  },
  {
    id: "litigation",
    label: "争议与诉讼",
    subtitle: "诉讼案件管理",
    description: "展示诉讼进度表与总表，支持点击标题查看详情。",
  },
  {
    id: "labor",
    label: "劳动人事与职能",
    subtitle: "劳动信安职能",
    description: "整合劳动人事、信安及职能支持事项，统一展示当前进展。",
  },
  {
    id: "investment",
    label: "战略投资",
    subtitle: "投资项目管理",
    description: "跟踪战略投资项目与非项目事项，展示项目类型、上周与本周进展。",
  },
  {
    id: "governance",
    label: "公司治理",
    subtitle: "主体治理事项",
    description: "跟踪公司治理事项，展示区域、上周与本周进展。",
  },
  {
    id: "ip",
    label: "IP资产与保护",
    subtitle: "专利商标软著维权",
    description: "汇总商标、专利、著作权、素材及其他 IP 事项，按所属项目和当前进展统一呈现。",
  },
  {
    id: "operations",
    label: "法务运营支持",
    subtitle: "AI系统流程运营",
    description: "拆分重点推进与日常维护，覆盖 AI 能力、法务系统、流程沉淀、运营支持及其他事项。",
  },
];

const weeks = [
  { id: "0608-0612", label: "0608-0612", title: "June【0608-0612】" },
  { id: "0602-0606", label: "0602-0606", title: "June【0602-0606】" },
  { id: "0518-0522", label: "0518-0522", title: "May【0518-0522】" },
  { id: "0511-0515", label: "0511-0515", title: "May【0511-0515】" },
];

const overviewSnapshots = [
  {
    view: "project",
    title: "项目支持",
    tone: "project",
    highlights: [
      "RM42 RuStore 上架发行方案已形成发行架构建议。",
      "DM01 协议条款、技能描述及境外合规事项完成关键口径输出。",
    ],
  },
  {
    view: "data",
    title: "专项合规",
    tone: "data",
    highlights: [
      "个人信息处理系统摸底形成初步整改方案。",
      "专项合规资讯可视化继续优化一页纸看板。",
    ],
  },
  {
    view: "litigation",
    title: "争议与诉讼",
    tone: "litigation",
    highlights: [
      "新增诱导充值类客诉诉讼纳入节点跟踪。",
      "历史同类案件完成撤诉、结案状态复核。",
    ],
  },
  {
    view: "labor",
    title: "劳动人事与职能",
    tone: "labor",
    highlights: [
      "外包、解除及候选人竞业事项持续给出处置建议。",
      "信安人员事项完成定级或处置建议，职能合同支持持续推进。",
    ],
  },
  {
    view: "investment",
    title: "战略投资",
    tone: "investment",
    highlights: [
      "巨大战舰项目首批尽调材料收悉，补充清单进入反馈阶段。",
      "加拿大 Pengonauts 项目交易文件初稿收悉并进入审阅。",
    ],
  },
  {
    view: "governance",
    title: "公司治理",
    tone: "governance",
    highlights: [
      "公司主体外显、隐藏必要性完成梳理并进入内部评估。",
    ],
  },
  {
    view: "ip",
    title: "IP资产与保护",
    tone: "ip",
    highlights: [
      "商标、专利、著作权及字体素材等 IP 分类事项维持统一跟踪口径。",
    ],
  },
  {
    view: "operations",
    title: "法务运营支持",
    tone: "operations",
    highlights: [
      "AI 能力建设推进内部 Skill 小课堂和工具安排。",
      "法务系统完成测试复盘，流程沉淀和运营事项持续维护。",
    ],
  },
];

const riskHighlights = [
  {
    title: "RM42 RuStore 上架发行方案",
    level: "高",
    source: "项目支持",
    text: "涉及制裁、监管和资金链路安排，已形成发行架构建议，仍需持续关注方案落地。",
  },
  {
    title: "个人信息处理系统整改",
    level: "高",
    source: "专项合规",
    text: "账号、客服系统涉及明文导出、超期存储和权限审批问题，已形成初步整改方案。",
  },
  {
    title: "诱导充值类客诉诉讼",
    level: "高",
    source: "争议与诉讼",
    text: "本周新增相关诉讼案件，需持续跟踪案由、诉讼地位、开庭及结案节点。",
  },
];

const operationsData = [
  {
    id: "complaint",
    title: "客诉案件",
    current: 0,
    total: 56,
    headlineLabel: "本周新增",
    status: "本周无新增",
    formUrl: "#complaint-form",
    accent: "#6f8f83",
    newItems: [],
    comboChart: {
      title: "国家分布趋势",
      lineLabel: "合计趋势",
      countries: ["韩国", "日本", "欧盟", "其他海外地区", "美国", "港台地区", "印尼", "俄罗斯", "未知来源"],
      series: [
        {
          name: "客诉数量",
          color: "#e9b44c",
          values: [16, 10, 7, 7, 7, 4, 2, 2, 1],
        },
      ],
    },
  },
  {
    id: "litigation",
    title: "诉讼案件",
    current: 1,
    total: 9,
    headlineLabel: "本周新增",
    status: "本周新增 1 起",
    formUrl: "#litigation-form",
    accent: "#6f8f83",
    newItems: [
      {
        title: "诱导充值类客诉诉讼",
        country: "待同步",
        background: "新增相关诉讼案件，需持续跟踪案由、诉讼地位、开庭及结案节点。",
      },
    ],
    comboChart: {
      title: "案由分布趋势",
      lineLabel: "合计趋势",
      countries: ["诱导充值"],
      series: [
        {
          name: "诉讼数量",
          color: "#e9b44c",
          values: [1],
        },
      ],
    },
  },
  {
    id: "rights",
    title: "用户行权案件",
    current: 2,
    total: 26,
    headlineLabel: "本周新增",
    status: "本周新增 2 起",
    formUrl: "#rights-form",
    accent: "#6f8f83",
    newItems: [
      {
        title: "用户行权新增案件 1",
        country: "待同步",
        background: "本周新增用户行权案件，国家与案件背景待业务同步。",
      },
      {
        title: "用户行权新增案件 2",
        country: "待同步",
        background: "本周新增用户行权案件，国家与案件背景待业务同步。",
      },
    ],
    comboChart: {
      title: "国家分布趋势",
      lineLabel: "合计趋势",
      emptyText: "国家明细待同步",
      countries: ["待同步"],
      series: [
        {
          name: "行权数量",
          color: "#e9b44c",
          values: [0],
        },
      ],
    },
  },
  {
    id: "weekly-operations",
    title: "本周运营数据汇总",
    current: 206,
    total: 206,
    status: "本周汇总",
    formUrl: "#weekly-operations-form",
    accent: "#6f8f83",
    metrics: [
      ["协同数量", 42],
      ["审批数量", 128],
      ["用印数量", 36],
      ["效率时长", "待同步"],
    ],
  },
];

const moduleItems = {
  project: [
    {
      name: "DM01 联动协议与技能描述评估",
      result: "完成协议条款结论，并对角色技能描述与实际时间不一致风险给出评估口径。",
      status: "已完成",
      risk: "中",
      project: "DM01",
      projectGroup: "IP",
      source: "项目法务",
      supportDoc: null,
      history: [
        ["0608-0612", "协议定稿，商业化描述风险评估完成。"],
        ["0602-0606", "角色技能描述与实际机制差异进入法务评估。"],
        ["0518-0522", "联动协议关键条款进入谈判。"],
      ],
    },
    {
      name: "RM42 RuStore 上架发行方案",
      result: "结合制裁、监管和资金链路风险，形成发行架构建议。",
      status: "推进中",
      risk: "高",
      project: "RM42",
      projectGroup: "项目合规",
      source: "项目法务",
      supportDoc: null,
      history: [
        ["0608-0612", "输出 SPV 与资金链路建议。"],
        ["0602-0606", "完成 RU STORE 合规分析初稿。"],
        ["0511-0515", "发行风险进入专项评估。"],
      ],
    },
    {
      name: "SKPORT 境外合规要求",
      result: "美国心理健康警示与私密影像举报下架流程已与业务对齐。",
      status: "推进中",
      risk: "中",
      project: "SKPORT",
      projectGroup: "专项合规",
      source: "项目法务/数据组",
      supportDoc: null,
      history: [
        ["0608-0612", "美国和印尼合规要求与业务对齐。"],
        ["0511-0515", "社区接入方案与行业调研完成。"],
      ],
    },
  ],
  data: [
    {
      name: "个人信息处理系统摸底专项",
      result: "明文导出、超期存储、权限审批等问题已形成初步整改方案。",
      background: "账号、客服系统个人信息处理链路治理。",
      progress: "明文导出、超期存储、权限审批等问题已形成初步整改方案。",
      status: "推进中",
      weeklyChange: "本周新增",
      risk: "高",
      project: "账号/客服系统",
      source: "数据组",
      history: [
        ["0608-0612", "与系统相关老师沟通问题和整改路径。"],
        ["0511-0515", "推进数据分类分级与评估流程字段优化。"],
      ],
    },
    {
      name: "专项合规资讯可视化",
      result: "持续更新专项合规资讯页面，增强一页纸看板的可读性。",
      background: "合规资讯页面与一页纸看板建设。",
      progress: "持续更新专项合规资讯页面，增强一页纸看板的可读性。",
      status: "推进中",
      risk: "低",
      project: "合规看板",
      source: "数据组/法务运营",
      history: [
        ["0608-0612", "看板进入第二版优化。"],
        ["0602-0606", "初版已向 Elsa 汇报。"],
      ],
    },
  ],
  investment: [
    {
      type: "project",
      projectName: "巨大战舰投资项目",
      phase: "投中",
      region: "境内",
      projectType: "股权投资",
      status: "推进中",
      background: "境内投资项目",
      specificMatter: "尽调材料收悉及补充清单反馈",
      lastWeekProgress: "TS 审阅并反馈战投。",
      currentWeekProgress: "首批尽调材料已收悉，补充清单进入反馈阶段。",
      nextWeekPlan: "待业务同步",
    },
    {
      type: "project",
      projectName: "加拿大 Pengonauts 项目",
      phase: "投中",
      region: "境外",
      projectType: "股权投资",
      status: "推进中",
      background: "境外投资项目",
      specificMatter: "交易文件初稿审阅及补充尽调清单反馈",
      lastWeekProgress: "补充尽调清单已反馈。",
      currentWeekProgress: "交易文件初稿已收悉，审阅中。",
      nextWeekPlan: "待业务同步",
    },
    {
      type: "governance",
      title: "公司主体外显/隐藏评估",
      detail: "梳理公司主体外显/隐藏必要性，进入内部评估。",
      background: "公司主体外显/隐藏必要性需内部评估。",
      region: "境内",
      lastWeekProgress: "梳理公司主体外显/隐藏必要性。",
      currentWeekProgress: "进入内部评估。",
      status: "推进中",
      owner: "法务运营/公司事务",
      nextAction: "待业务同步",
    },
    {
      type: "other",
      title: "战投事项管理台账",
      detail: "梳理战略投资项目与非项目事项的周度跟踪口径，沉淀统一台账。",
      background: "战略投资项目与非项目事项需要统一台账持续跟踪。",
      workContent: "梳理周度跟踪口径，补齐项目阶段、材料节点和协同方信息。",
      status: "推进中",
      owner: "战投/法务运营",
      nextAction: "补齐项目阶段、材料节点和协同方信息。",
    },
  ],
  ip: [
    {
      title: "商标",
      detail: "本周明细待同步，暂不展示结论。",
      gameProject: "待业务同步",
      progress: "待业务同步",
    },
    {
      title: "专利",
      detail: "本周明细待同步，暂不展示结论。",
      gameProject: "待业务同步",
      progress: "待业务同步",
    },
    {
      title: "著作权",
      detail: "本周明细待同步，暂不展示结论。",
      gameProject: "待业务同步",
      progress: "待业务同步",
    },
    {
      title: "字体与素材",
      detail: "本周明细待同步，暂不展示结论。",
      gameProject: "待业务同步",
      progress: "待业务同步",
    },
    {
      title: "其他",
      detail: "本周明细待同步，暂不展示结论。",
      gameProject: "待业务同步",
      progress: "待业务同步",
    },
  ],
  dispute: [
    {
      id: "litigation-recharge-current",
      type: "litigation",
      category: "诉讼",
      name: "诱导充值类客诉诉讼",
      background: "新增诱导充值类客诉诉讼，需跟踪案件节点、证据口径与处理结果。",
      detail: "新增相关诉讼案件，需持续跟踪案由、诉讼地位、开庭及结案节点。",
      progress: "本周新增相关诉讼案件，部分历史案件按撤诉或结案处理。",
      status: "风险关注",
      riskType: "客诉-诱导充值",
      caseNature: "民事",
      caseStatus: "推进中",
      isNewThisWeek: true,
      risk: "高",
      project: "RM42/01",
      owner: "诉讼组",
      latestWeek: "0608-0612",
      timeline: [
        ["0608-0612", "新增 1 起相关诉讼案件，案由为诱导充值，并同步纳入风险跟踪。"],
        ["0602-0606", "部分案件完成开庭或按撤诉方向处理，继续补充案件节点。"],
        ["0511-0515", "4 件诱导充值类案件进行中，持续跟踪案由、诉讼地位和开庭安排。"],
      ],
    },
    {
      id: "litigation-recharge-history",
      type: "litigation",
      category: "诉讼",
      name: "历史诱导充值案件",
      background: "历史客诉诉讼案件留痕，用于观察同类案件数量、状态和处理结果。",
      detail: "历史客诉诉讼案件留痕，用于观察同类案件数量、状态和处理结果。",
      progress: "历史案件已进入持续跟踪口径。",
      status: "已结项",
      riskType: "客诉-诱导充值",
      caseNature: "民事",
      caseStatus: "已结案",
      risk: "中",
      project: "RM42/01",
      owner: "诉讼组",
      latestWeek: "0511-0515",
      timeline: [
        ["0608-0612", "历史同类案件完成状态复核，更新撤诉、结案和待跟进节点。"],
        ["0602-0606", "整理历史案件进展，补充开庭及处理结果留痕。"],
        ["0511-0515", "形成历史诱导充值案件总表，作为同类案件统计底稿。"],
      ],
    },
    {
      id: "labor-er-outsourcing",
      type: "labor",
      category: "ER",
      name: "外包与解除相关 ER 事项",
      background: "涉及外包管理、解除沟通、员工关系处理等劳动人事风险。",
      detail: "涉及外包管理、解除沟通、员工关系处理等劳动人事风险。",
      liaisonDepartment: "ER",
      workContent: "外包管理、解除沟通及员工关系处理风险评估。",
      progress: "本周持续给出处置建议，待业务同步后续沟通节点。",
      status: "推进中",
      risk: "中",
      project: "劳动人事",
      owner: "劳动人事组",
      latestWeek: "0608-0612",
      timeline: [
        ["0608-0612", "外包与解除相关事项持续给出处置建议，等待业务同步沟通结果。"],
        ["0602-0606", "梳理新加坡候选人用工风险，并与外部律师同步判断口径。"],
      ],
    },
    {
      id: "labor-noncompete-candidate",
      type: "labor",
      category: "竞业限制",
      name: "候选人竞业限制风险评估",
      background: "关注候选人竞业义务、入职安排和潜在争议风险。",
      detail: "关注候选人竞业义务、入职安排和潜在争议风险。",
      liaisonDepartment: "招聘",
      workContent: "候选人竞业义务、入职安排和潜在争议风险评估。",
      progress: "与业务及外部律师同步评估口径，形成初步处理建议。",
      status: "推进中",
      risk: "中",
      project: "招聘/用工",
      owner: "劳动人事组",
      latestWeek: "0602-0606",
      timeline: [
        ["0608-0612", "继续跟踪候选人竞业义务披露及入职安排风险。"],
        ["0602-0606", "与业务及外部律师同步竞业限制风险，形成初步处理建议。"],
      ],
    },
    {
      id: "security-personnel-matters",
      type: "security",
      category: "信安",
      name: "信安相关人员事项",
      background: "信安相关人员事项独立跟踪，覆盖定级、证据留存与后续处置。",
      detail: "涉及信息安全事件后的人员处置、证据留存和劳动关系处理建议。",
      workContent: "人员处置、证据留存和劳动关系处理建议。",
      progress: "多起信安事项完成定级或处置建议，后续视调查结果继续跟进。",
      status: "推进中",
      risk: "中",
      project: "信安",
      owner: "劳动人事组/信安",
      latestWeek: "0608-0612",
      timeline: [
        ["0608-0612", "多起信安事项完成定级或处置建议，后续视调查结果继续跟进。"],
        ["0602-0606", "配合信安侧梳理证据留存、人员处置和劳动关系风险。"],
      ],
    },
  ],
  operations: [
    {
      category: "ai",
      name: "AI 能力建设",
      result: "内部 Skill 小课堂、AI 工具安排、法官模拟器和合同审查 Demo 持续推进。",
      currentProgress: "内部 Skill 小课堂、AI 工具安排、法官模拟器和合同审查 Demo 持续推进。",
      nextPlan: "继续推进内部权限、试用反馈收集和重点场景落地。",
      collaborators: "诉讼组、劳动人事组、法务运营",
      scenario: "合同审查、诉讼/劳动人事模拟、团队知识复用",
      status: "推进中",
      risk: "低",
      project: "AI建设",
      source: "法务运营",
      history: [
        ["0608-0612", "开展 Skill 小课堂并推进内部大模型权限。"],
        ["0511-0515", "法官模拟器进入诉讼组和劳动人事组试用。"],
      ],
    },
    {
      category: "system",
      name: "法务系统建设",
      result: "合同系统测试、门户系统、工作台需求和合同分类路径形成阶段性结论。",
      background: "合同系统、门户系统与法务工作台建设。",
      currentProgress: "完成合同系统测试复盘，讨论合同分类推进路径。",
      nextStep: "继续收集工作台需求，推进系统分类与流程配置确认。",
      status: "推进中",
      risk: "中",
      project: "系统建设",
      source: "法务运营",
      history: [
        ["0608-0612", "完成合同系统测试复盘，讨论分类推进路径。"],
        ["0602-0606", "法务工作台项目启动，明确需求收集节奏。"],
      ],
    },
    {
      category: "knowledge",
      name: "流程与知识库沉淀",
      result: "合同流程、争议处理 SOP、知识库文章等内容持续整理，便于团队复用。",
      content: "合同流程、争议处理 SOP、知识库文章",
      scenario: "新人交接、跨组协作、事项标准化处理",
      status: "推进中",
      risk: "低",
      project: "流程知识库",
      source: "法务运营",
      history: [
        ["0608-0612", "整理合同流程和争议处理 SOP 的沉淀口径。"],
      ],
    },
    {
      category: "function",
      name: "Q2 预算调整",
      result: "预算调整方案已拟定，等待确认。",
      handled: "预算调整方案拟定，整理 2025 未结费用与战投预算新增需求。",
      pending: "等待预算调整方案确认。",
      status: "待确认",
      risk: "中",
      project: "预算",
      source: "法务运营",
      history: [
        ["0608-0612", "方案已拟定，待确认。"],
        ["0602-0606", "整理 2025 未结费用与战投预算新增需求。"],
      ],
    },
    {
      category: "other",
      name: "其他运营事项",
      result: "零散协同事项统一放入轻量跟踪池，本周暂无需单独升级的重点风险。",
      status: "持续维护",
      risk: "低",
      project: "其他事项",
      source: "法务运营",
      history: [["0608-0612", "本周暂无需单独升级的其他运营事项。"]],
    },
  ],
  support: [
    {
      category: "function",
      name: "合同审查与模板维护",
      result: "新大楼、团建、采购、外包、版权转让等合同持续审查和条款优化。",
      handled: "新大楼、团建、采购、外包、版权转让等合同持续审查和条款优化。",
      pending: "按业务反馈继续更新模板和重点条款。",
      status: "推进中",
      risk: "低",
      project: "职能支持",
      source: "职能线",
      history: [
        ["0608-0612", "多份合同完成重点条款修改。"],
        ["0602-0606", "外包协议条款更新与 NDA 优化。"],
      ],
    },
    {
      category: "function",
      name: "用印、归档与数据维护",
      result: "日常运营数据维护、流程支持和归档事项保持稳定处理。",
      handled: "日常运营数据维护、流程支持和归档事项保持稳定处理。",
      pending: "持续维护归档、用印和运营数据口径。",
      status: "推进中",
      risk: "低",
      project: "日常运营",
      source: "法务运营/职能线",
      history: [
        ["0608-0612", "持续维护运营数据与日常流程。"],
      ],
    },
  ],
};

let currentView = "overview";

const navIcons = {
  overview: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5"></rect><rect x="14" y="4" width="6" height="6" rx="1.5"></rect><rect x="4" y="14" width="6" height="6" rx="1.5"></rect><rect x="14" y="14" width="6" height="6" rx="1.5"></rect></svg>`,
  project: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h6l1.8 2h9.2v8.8a2.2 2.2 0 0 1-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2V7.5z"></path><path d="M3.5 7.5V5.9c0-1 .8-1.9 1.9-1.9h4l1.8 2h7.4c1 0 1.9.8 1.9 1.9v1.6"></path></svg>`,
  data: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.4c0 4.4-2.8 7.6-7 9.1-4.2-1.5-7-4.7-7-9.1V6l7-2.5z"></path><path d="M9 12l2 2 4-5"></path></svg>`,
  investment: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16"></path><path d="M5 8h14"></path><path d="M7 8l-3 6h6L7 8z"></path><path d="M17 8l-3 6h6l-3-6z"></path><path d="M8 20h8"></path></svg>`,
  governance: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h14"></path><path d="M7 6.5l-3 6h6l-3-6z"></path><path d="M17 6.5l-3 6h6l-3-6z"></path><path d="M12 4v15"></path><path d="M8 20h8"></path></svg>`,
  ip: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h12a1.5 1.5 0 0 1 1.5 1.5v8.2c0 .7-.3 1.3-.8 1.7L12 21l-6.7-5.1a2.1 2.1 0 0 1-.8-1.7V6A1.5 1.5 0 0 1 6 4.5z"></path><path d="M9 9.2h6M9 12.5h4"></path></svg>`,
  litigation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8 21 20H3L12 3.8z"></path><path d="M12 9v4.5"></path><path d="M12 17h.01"></path></svg>`,
  labor: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="12" height="16" rx="2"></rect><path d="M9 4h6v3H9z"></path><path d="M9 12h6M9 16h4"></path></svg>`,
  dispute: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8 21 20H3L12 3.8z"></path><path d="M12 9v4.5"></path><path d="M12 17h.01"></path></svg>`,
  operations: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9"></path><path d="M10 19V5"></path><path d="M16 19v-7"></path><path d="M22 19H2"></path></svg>`,
  support: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="12" height="16" rx="2"></rect><path d="M9 4h6v3H9z"></path><path d="M9 12h6M9 16h4"></path></svg>`,
};

function toneClass(index) {
  return ["teal", "green", "blue", "amber", "violet", "red"][index % 6];
}

function statusClass(status) {
  if (status === "已完成" || status === "已结项") return "done";
  if (status === "风险关注") return "risk";
  if (status === "待确认") return "pending";
  return "active";
}

function riskTone(risk) {
  if (risk === "高") return "red";
  if (risk === "中") return "amber";
  return "green";
}

function riskLabel(risk) {
  return `${risk}风险`;
}

const litigationRiskTypeClasses = {
  商业秘密泄露: "commercial-secret",
  游戏素材抄袭: "asset-copy",
  "企业字号/商标": "trademark",
  企业名誉: "reputation",
  衍生周边: "derivative",
  私服: "private-server",
  外挂: "cheat",
  不正当竞争: "unfair-competition",
  未成年人退款: "minor-refund",
  "客诉-诱导充值": "complaint-recharge",
  "客诉-抽卡规则": "complaint-gacha",
  "客诉-账户实名": "complaint-realname",
  "客诉-账户安全": "complaint-security",
};

function litigationRiskTypeClass(value) {
  return litigationRiskTypeClasses[value] || "default";
}

function litigationCaseStatus(item) {
  if (item.caseStatus) return item.caseStatus;
  if (item.status === "已结项" || item.status === "已完成") return "已结案";
  return "推进中";
}

function litigationMetaTags(item) {
  const riskType = item.riskType || "客诉-诱导充值";
  const caseNature = item.caseNature || "民事";
  const caseStatus = litigationCaseStatus(item);
  const statusClass = caseStatus === "已结案" ? "done" : "active";

  return `
    <div class="litigation-meta-tags">
      <span class="litigation-meta-tag litigation-risk-type litigation-risk-type--${litigationRiskTypeClass(riskType)}">${riskType}</span>
      <span class="litigation-meta-tag litigation-case-nature">${caseNature}</span>
      <span class="litigation-meta-tag litigation-case-status litigation-case-status--${statusClass}">${caseStatus}</span>
    </div>
  `;
}

const laborDepartmentClasses = {
  ER: "er",
  SSC: "ssc",
  OE: "oe",
  招聘: "recruiting",
  学习发展: "learning",
};

function laborDepartmentTag(department) {
  const label = department || "ER";
  const className = laborDepartmentClasses[label] || "er";
  return `<span class="labor-department-tag labor-department-tag--${className}">${label}</span>`;
}

function isWeeklyNew(item) {
  return item?.weeklyChange === "本周新增" || item?.isNewThisWeek === true;
}

function weeklyNewMarker(item) {
  return isWeeklyNew(item)
    ? `<span class="weekly-new-mark" title="本周新增" aria-label="本周新增">新</span>`
    : "";
}

function investmentPhaseTag(project) {
  if (!project?.phase) return "";
  const phaseClass = {
    投前: "pre",
    投中: "mid",
    投后: "post",
  }[project.phase] || "mid";

  return `<span class="investment-phase-tag investment-phase-tag--${phaseClass}">${project.phase}</span>`;
}

function investmentRegionTag(project) {
  if (!project?.region) return "";
  const regionClass = project.region === "境外" ? "offshore" : "domestic";

  return `<span class="investment-region-tag investment-region-tag--${regionClass}">${project.region}</span>`;
}

function investmentProjectTypeLabel(project) {
  return [project.phase, project.region, project.projectType || "投资项目"].filter(Boolean).join("-");
}

function investmentProjectTypeTag(project) {
  const regionClass = project?.region === "境外" ? "offshore" : "domestic";
  return `<span class="investment-project-type-tag investment-project-type-tag--${regionClass}">${investmentProjectTypeLabel(project)}</span>`;
}

function recordDetailLink(source, id, label) {
  return `
    <button
      class="record-detail-link"
      type="button"
      data-record-detail-source="${source}"
      data-record-detail-id="${id}"
      aria-label="查看${label}详情"
      title="点击查看详情"
    >
      ${label}
    </button>
  `;
}

function recordTimelineButton(source, id) {
  return `
    <button
      class="record-timeline-button"
      type="button"
      data-record-timeline-source="${source}"
      data-record-timeline-id="${id}"
      aria-label="点击查看时间轴"
    >
      点击查看时间轴
    </button>
  `;
}

function recordDetailField(label, content) {
  return `
    <div class="record-detail-field">
      <span class="record-detail-field-label">${label}</span>
      ${content}
    </div>
  `;
}

function groupTone(group) {
  if (group.includes("数据") || group.includes("专项")) return "group-data";
  if (group.includes("IP")) return "group-ip";
  if (group.includes("争议") || group.includes("人事") || group.includes("劳动")) return "group-dispute";
  if (group.includes("运营") || group.includes("组织")) return "group-ops";
  if (group.includes("战投") || group.includes("治理")) return "group-investment";
  return "group-project";
}

function renderNav() {
  const nav = document.querySelector("#moduleNav");
  nav.innerHTML = modules
    .map((module) => {
      return `
        <button class="nav-item ${module.id === currentView ? "active" : ""}" data-view-target="${module.id}">
          <span class="nav-icon">${navIcons[module.id] || navIcons.overview}</span>
          <span class="nav-copy">
            <span class="nav-label">${module.label}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function findWeek(weekId) {
  return weeks.find((week) => week.id === weekId) || weeks[0];
}

function findView(viewId) {
  if (viewId === "support") return modules.find((module) => module.id === "operations") || modules[0];
  if (viewId === "dispute") return modules.find((module) => module.id === "litigation") || modules[0];
  return modules.find((module) => module.id === viewId) || modules[0];
}

function currentWeekId() {
  const params = new URLSearchParams(window.location.search);
  const requestedWeek = params.get("week");
  return findWeek(requestedWeek).id;
}

function currentViewId() {
  const params = new URLSearchParams(window.location.search);
  const requestedView = params.get("view");
  return findView(requestedView).id;
}

function renderWeekSelector() {
  const current = currentWeekId();
  const label = document.querySelector("#weekButtonLabel");
  const menu = document.querySelector("#weekMenu");

  if (label) label.textContent = findWeek(current).label;
  if (!menu) return;

  menu.innerHTML = weeks
    .map(
      (week) => `
        <button
          class="week-option"
          type="button"
          role="option"
          aria-selected="${week.id === current ? "true" : "false"}"
          data-week-target="${week.id}"
          tabindex="-1"
        >
          <span class="week-check" aria-hidden="true"></span>
          <span>${week.label}</span>
        </button>
      `,
    )
    .join("");
}

function pageUrl(weekId = currentWeekId(), viewId = currentView) {
  const url = new URL(window.location.href);
  const nextView = findView(viewId).id;

  url.searchParams.set("week", findWeek(weekId).id);
  if (nextView === "overview") {
    url.searchParams.delete("view");
  } else {
    url.searchParams.set("view", nextView);
  }
  url.hash = "";
  return url.toString();
}

function setWeek(weekId) {
  const nextWeek = findWeek(weekId).id;

  window.history.replaceState({}, "", pageUrl(nextWeek, currentView));
  renderWeekSelector();
}

function isWeekMenuOpen() {
  return document.querySelector("#weekPicker")?.classList.contains("open") || false;
}

function setWeekMenu(open) {
  const picker = document.querySelector("#weekPicker");
  const button = document.querySelector("#weekButton");

  if (!picker || !button) return;
  picker.classList.toggle("open", open);
  button.setAttribute("aria-expanded", open ? "true" : "false");
}

function weekOptionButtons() {
  return Array.from(document.querySelectorAll(".week-option"));
}

function focusWeekOption(index) {
  const options = weekOptionButtons();
  if (!options.length) return;

  setWeekMenu(true);
  options[(index + options.length) % options.length].focus();
}

function renderHighlights() {
  const grid = document.querySelector("#highlightGrid");
  grid.classList.add("snapshot-grid");
  grid.innerHTML = overviewSnapshots
    .map(
      (snapshot) => `
        <button
          class="snapshot-card snapshot-card--${snapshot.tone} compact-record"
          type="button"
          data-view-target="${snapshot.view}"
          aria-label="查看${snapshot.title}"
        >
          <span class="snapshot-card-top">
            <span class="snapshot-title">${snapshot.title}</span>
          </span>
          <span class="snapshot-list">
            ${snapshot.highlights.map((item) => `<span class="snapshot-point">${item}</span>`).join("")}
          </span>
        </button>
      `,
    )
    .join("");
}

function renderRiskHighlights() {
  document.querySelector("#riskGrid").innerHTML = riskHighlights
    .map(
      (risk) => `
        <article class="risk-card compact-record">
          <strong>${risk.title}</strong>
          <div class="tag-row">
            <span class="tag ${groupTone(risk.source)}">${risk.source}</span>
            <span class="tag ${riskTone(risk.level)}">${riskLabel(risk.level)}</span>
          </div>
          <p><span class="content-label">概况</span>${risk.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderOpsDimensions(item) {
  if (!item.dimensions) return "";

  return `
    <div class="ops-dimension-grid ops-dimension-grid--${item.dimensions.length}">
      ${item.dimensions
        .map((dimension) => {
          const maxValue = Math.max(...(dimension.items || []).map(([, value]) => value), 1);

          return `
            <section class="ops-dimension-card">
              <h3>${dimension.title}</h3>
              ${
                dimension.items?.length
                  ? `<div class="mini-bars">
                      ${dimension.items
                        .map(
                          ([label, value]) => `
                            <div class="bar-row">
                              <span>${label}</span>
                              <span class="bar-track"><span class="bar-fill" style="width:${Math.max((value / maxValue) * 100, 4)}%; background:${item.accent}"></span></span>
                              <strong>${value} 起</strong>
                            </div>
                          `,
                        )
                        .join("")}
                    </div>`
                  : `<p class="ops-dimension-empty">待业务同步</p>`
              }
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderOpsComboChart(item) {
  const chart = item.comboChart;
  if (!chart?.countries?.length || !chart?.series?.length) return "";

  const width = 520;
  const height = 176;
  const margin = { top: 22, right: 16, bottom: 34, left: 30 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const colors = ["#e9b44c", "#f2c86a", "#d99a26", "#f8e0a8", "#6f8f83", "#dce8e3"];
  const totals = chart.countries.map((_, countryIndex) =>
    chart.series.reduce((sum, series) => sum + (Number(series.values?.[countryIndex]) || 0), 0),
  );
  const maxValue = Math.max(Math.ceil(Math.max(...totals, 1) * 1.15), 1);
  const step = chartWidth / chart.countries.length;
  const barWidth = Math.min(24, step * 0.36);
  const gridTicks = [...new Set([0, 0.5, 1].map((ratio) => Math.round(maxValue * ratio)))];
  const colorFor = (series, index) => series.color || colors[index % colors.length];
  const hasPositiveValue = totals.some((value) => value > 0);
  const shortCountryLabel = (country) =>
    ({
      其他海外地区: "其他海外",
      港台地区: "港台",
      未知来源: "未知",
    })[country] || country;

  if (!hasPositiveValue) {
    return `
      <section class="ops-combo-chart ops-combo-chart--empty" aria-label="${chart.title}">
        <div class="ops-combo-chart-head">
          <h3>${chart.title}</h3>
        </div>
        <div class="ops-chart-empty">${chart.emptyText || "明细待同步"}</div>
      </section>
    `;
  }

  const linePoints = totals.map((value, index) => {
    const x = margin.left + step * index + step / 2;
    const y = margin.top + chartHeight - (value / maxValue) * chartHeight;
    return { x, y, value };
  });

  const linePath = linePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");

  return `
    <section class="ops-combo-chart" aria-label="${chart.title}">
      <div class="ops-combo-chart-head">
        <h3>${chart.title}</h3>
        <div class="ops-combo-legend">
          ${chart.series
            .map(
              (series, index) => `
                <span><i class="ops-legend-bar" style="background:${colorFor(series, index)}"></i>${series.name}</span>
              `,
            )
            .join("")}
          <span><i class="ops-legend-line"></i>${chart.lineLabel}</span>
        </div>
      </div>
      <svg class="ops-combo-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${chart.title}">
        ${gridTicks
          .map((tick) => {
            const y = margin.top + chartHeight - (tick / maxValue) * chartHeight;
            return `
              <line class="ops-chart-grid" x1="${margin.left}" y1="${y.toFixed(1)}" x2="${width - margin.right}" y2="${y.toFixed(1)}"></line>
              <text class="ops-chart-axis" x="${margin.left - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end">${tick}</text>
            `;
          })
          .join("")}
        ${chart.countries
          .map((country, index) => {
            const labelX = margin.left + step * index + step / 2;
            const labelY = margin.top + chartHeight + 22;
            const totalHeight = (totals[index] / maxValue) * chartHeight;
            const valueY = margin.top + chartHeight - totalHeight - 8;
            let stackY = margin.top + chartHeight;
            const segments = chart.series
              .map((series, seriesIndex) => {
                const value = Number(series.values?.[index]) || 0;
                if (!value) return "";
                const segmentHeight = (value / maxValue) * chartHeight;
                stackY -= segmentHeight;

                return `
                  <rect class="ops-chart-bar" x="${(labelX - barWidth / 2).toFixed(1)}" y="${stackY.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${segmentHeight.toFixed(1)}" rx="9" fill="${colorFor(series, seriesIndex)}"></rect>
                `;
              })
              .join("");

            return `
              ${segments}
              <text class="ops-chart-value" x="${labelX.toFixed(1)}" y="${valueY.toFixed(1)}" text-anchor="middle">${totals[index]}</text>
              <text class="ops-chart-label" x="${labelX.toFixed(1)}" y="${labelY}" text-anchor="middle">${shortCountryLabel(country)}</text>
            `;
          })
          .join("")}
        <path class="ops-chart-line" d="${linePath}"></path>
        ${linePoints
          .map(
            (point) => `
              <circle class="ops-chart-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="3.5"></circle>
            `,
          )
          .join("")}
      </svg>
    </section>
  `;
}

function renderOperationsData() {
  document.querySelector("#opsGrid").innerHTML = operationsData
    .map(
      (item) => `
        <article class="ops-card ops-card--${item.id}">
          <div class="ops-top">
            <div>
              <div class="ops-title-line">
                <strong>${item.title}</strong>
                ${
                  item.metrics
                    ? `<span class="tag green">${item.status}</span>`
                    : `<button class="tag ops-new-link green" type="button" data-ops-new-id="${item.id}">${item.status}</button>`
                }
              </div>
            </div>
            ${
              item.metrics
                ? ""
                : `<div class="ops-number">
                    <span>${item.headlineLabel || "本周新增"}</span>
                    <strong>${item.current}</strong>
                  </div>`
            }
          </div>
          ${
            item.metrics
              ? `<div class="ops-metric-grid">
                  ${item.metrics
                    .map(
                      ([label, value]) => `
                        <div class="ops-metric">
                          <span>${label}</span>
                          <strong>${value}</strong>
                        </div>
                      `,
                    )
                    .join("")}
                </div>`
              : `${renderOpsComboChart(item) || renderOpsDimensions(item)}
                <p>历史累计 ${item.total} 起</p>`
          }
        </article>
      `,
    )
    .join("");
}

function renderOpsNewCards(item) {
  const newItems = item.newItems || [];

  if (!newItems.length) {
    return `<div class="ops-new-empty">本周暂无新增案件明细。</div>`;
  }

  return newItems
    .map(
      (entry) => `
        <article class="ops-new-item ops-new-item--${item.id}">
          <div class="ops-new-item-title">
            <span>标题</span>
            <strong>${entry.title}</strong>
          </div>
          <dl>
            <div>
              <dt>国家</dt>
              <dd>${entry.country || "待同步"}</dd>
            </div>
            <div>
              <dt>案件背景</dt>
              <dd>${entry.background || "待同步"}</dd>
            </div>
          </dl>
        </article>
      `,
    )
    .join("");
}

function closeOpsNewModal() {
  const modal = document.querySelector("#opsNewModal");
  if (!modal) return;

  modal.hidden = true;
  const list = modal.querySelector("#opsNewList");
  if (list) list.innerHTML = "";
  syncModalOpenState();
}

function openOpsNewModal(id) {
  const item = operationsData.find((entry) => entry.id === id);
  const modal = document.querySelector("#opsNewModal");
  if (!item || !modal) return;

  const title = modal.querySelector("#opsNewTitle");
  const meta = modal.querySelector("#opsNewMeta");
  const list = modal.querySelector("#opsNewList");

  title.textContent = `${item.title} · 新增数据`;
  meta.textContent = `${item.status} / 历史累计 ${item.total} 起`;
  list.innerHTML = renderOpsNewCards(item);

  modal.hidden = false;
  syncModalOpenState();
  modal.querySelector(".ops-new-close-button")?.focus();
}

const projectGroupLabels = [
  { label: "DM01", className: "dm01" },
  { label: "RM42", className: "rm42" },
  { label: "其他项目支持", className: "other" },
];

function projectGroupFor(item) {
  const projectName = item.project.toUpperCase();
  if (projectName.includes("DM01")) return "DM01";
  if (projectName.includes("RM42")) return "RM42";
  return "其他项目支持";
}

function projectScopeClass(scope) {
  if (scope === "数据合规" || scope === "专项合规") return "project-scope-data";
  if (scope === "IP") return "project-scope-ip";
  return "project-scope-compliance";
}

function renderSupportDoc(item) {
  const doc = item.supportDoc;
  const url = typeof doc === "string" ? doc : doc?.url;
  const label = typeof doc === "string" ? "查看文档" : doc?.label || "查看文档";

  return url
    ? `<a class="doc-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
    : `<span class="doc-empty">暂无文档</span>`;
}

function renderProjectSupportGroups(items) {
  return projectGroupLabels
    .map((group) => {
      const groupItems = items.filter((item) => projectGroupFor(item) === group.label);

      return `
        <section class="project-support-group project-support-group--${group.className}">
          <div class="project-group-heading">
            <div>
              <h3>${group.label}</h3>
            </div>
          </div>
          <div class="project-work-list">
            ${
              groupItems.length
                ? groupItems
                    .map(
                      (item) => `
                        <article class="work-row project-row compact-record">
                          <div class="project-copy">
                            <div class="project-title-row">
                              <strong>${item.name}</strong>
                              <div class="tag-row">
                                <span class="tag project-scope ${projectScopeClass(item.projectGroup)}">${item.projectGroup}</span>
                                <span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>
                              </div>
                            </div>
                            <p class="project-result-line">
                              <span class="content-label">概况</span>
                              <span class="project-result-text">${item.result}</span>
                            </p>
                          </div>
                          <div class="project-actions">
                            <div class="doc-cell">${renderSupportDoc(item)}</div>
                          </div>
                        </article>
                      `,
                    )
                    .join("")
                : `<div class="empty-group">本周暂无对应项目事项。</div>`
            }
          </div>
        </section>
      `;
    })
    .join("");
}

function renderIpAssetCards(items) {
  return items
    .map((item, index) => {
      const matters = item.matters || [item];

      return `
        <article class="ip-asset-card ip-asset-card--tone-${(index % 5) + 1}">
          <div class="ip-card-header">
            <h3>${item.title}</h3>
          </div>
          <div class="ip-card-item-list">
            <div class="ip-card-item-head-row">
              <span>标题</span>
              <span>详情</span>
              <span>所属项目</span>
              <span>进展</span>
            </div>
            ${matters
              .map(
                (matter) => `
                  <article class="ip-card-item-row">
                    <div class="ip-row-title">
                      <strong>${matter.itemTitle || matter.name || matter.title}</strong>
                    </div>
                    <div class="ip-row-detail">
                      <p>${matter.detail || "待业务同步"}</p>
                    </div>
                    <div class="ip-row-meta">
                      <strong>${matter.gameProject || matter.project || "待业务同步"}</strong>
                    </div>
                    <div class="ip-row-meta">
                      <strong>${matter.progress || "待业务同步"}</strong>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

const disputeSections = [
  {
    type: "litigation",
    label: "诉讼",
    className: "litigation",
    intro: "正在进行中的诉讼案件与总表，重点跟踪案由、节点和处理结果。",
  },
  {
    type: "labor",
    label: "劳动人事",
    className: "labor",
    intro: "",
  },
  {
    type: "security",
    label: "信安",
    className: "security",
    intro: "",
  },
];

function disputeProgressRow(item) {
  if (item.type === "litigation") {
    return `
      <article class="dispute-progress-row dispute-progress-row--current dispute-progress-row--litigation ${isWeeklyNew(item) ? "dispute-progress-row--new" : ""}">
        <div class="dispute-name-cell">
          <div class="record-title-line">
            <strong>${item.name}</strong>
            ${weeklyNewMarker(item)}
          </div>
          <p>${item.background || item.detail}</p>
        </div>
        <div>
          <p>${item.progress}</p>
        </div>
        ${litigationMetaTags(item)}
      </article>
    `;
  }

  if (item.type === "labor") {
    return `
      <article class="dispute-progress-row dispute-progress-row--current dispute-progress-row--labor ${isWeeklyNew(item) ? "dispute-progress-row--new" : ""}">
        <div class="dispute-name-cell">
          <div class="record-title-line">
            <strong>${item.name}</strong>
            ${weeklyNewMarker(item)}
          </div>
          <p>${item.background || item.detail}</p>
        </div>
        <div class="labor-department-cell">
          ${laborDepartmentTag(item.liaisonDepartment || item.category)}
        </div>
        <div>
          <p>${item.workContent || item.detail}</p>
        </div>
        <div>
          <p>${item.weeklyProgress || item.progress}</p>
        </div>
        <div class="dispute-status-cell">
          <span class="status ${statusClass(item.status)}">${item.status === "已结项" ? "已结项" : "推进中"}</span>
        </div>
      </article>
    `;
  }

  if (item.type === "security") {
    return `
      <article class="dispute-progress-row dispute-progress-row--current dispute-progress-row--security ${isWeeklyNew(item) ? "dispute-progress-row--new" : ""}">
        <div class="dispute-name-cell">
          <div class="record-title-line">
            <strong>${item.name}</strong>
            ${weeklyNewMarker(item)}
          </div>
          <p>${item.background || item.detail}</p>
        </div>
        <div>
          <p>${item.workContent || item.detail}</p>
        </div>
        <div>
          <p>${item.weeklyProgress || item.progress}</p>
        </div>
        <div class="dispute-status-cell">
          <span class="status ${statusClass(item.status)}">${item.status === "已结项" ? "已结项" : "推进中"}</span>
        </div>
      </article>
    `;
  }

  return `
    <article class="dispute-progress-row dispute-progress-row--current ${isWeeklyNew(item) ? "dispute-progress-row--new" : ""}">
      <div class="dispute-name-cell">
        <div class="record-title-line">
          <strong>${item.name}</strong>
          ${weeklyNewMarker(item)}
        </div>
      </div>
      <div>
        <p>${item.detail}</p>
      </div>
      <div>
        <p>${item.progress}</p>
      </div>
      <div class="dispute-status-cell">
        <span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>
        <span class="status ${statusClass(item.status)}">${item.status}</span>
      </div>
    </article>
  `;
}

function disputeProgressHeader(section) {
  const labels = {
    litigation: ["标题 + 背景", "当前进展", "风险类型/案件性质/状态"],
    labor: ["标题 + 背景", "对接部门", "工作内容", "本周进展", "状态"],
    security: ["标题 + 背景", "工作内容", "本周进展", "状态"],
  }[section?.type] || ["标题", "详情", "当前进展", "风险/状态"];

  return `
    <div class="dispute-progress-head-row ${
      section?.type === "litigation" ? "dispute-progress-head-row--litigation" : ""
    } ${section?.type === "labor" ? "dispute-progress-head-row--labor" : ""} ${
      section?.type === "security" ? "dispute-progress-head-row--security" : ""
    }">
      ${labels.map((label) => `<span>${label}</span>`).join("")}
    </div>
  `;
}

function renderDisputeProgressList(items, section) {
  if (!items.length) return `<div class="empty-group">暂无进行中事项。</div>`;

  if (section.type !== "labor") {
    return `
      ${disputeProgressHeader(section)}
      ${items.map((item) => disputeProgressRow(item)).join("")}
    `;
  }

  return `
    ${disputeProgressHeader(section)}
    ${items.map((item) => disputeProgressRow(item)).join("")}
  `;
}

function renderLaborOtherCard(items) {
  return `
    <section class="dispute-subcard labor-other-card">
      <div class="dispute-subhead">
        <h4>其他事项</h4>
        <span>${items.length} 项</span>
      </div>
      <div class="labor-other-list">
        <div class="labor-other-row labor-other-row--head">
          <span>标题 + 背景</span>
          <span>工作内容</span>
          <span>本周进展</span>
        </div>
        ${
          items.length
            ? items
                .map(
                  (item) => `
                    <article class="labor-other-row ${isWeeklyNew(item) ? "labor-other-row--new" : ""}">
                      <div class="labor-other-title-cell">
                        <div class="record-title-line">
                          <strong>${item.name}</strong>
                          ${weeklyNewMarker(item)}
                        </div>
                        <p>${item.background || item.detail}</p>
                      </div>
                      <span>${item.workContent || item.detail}</span>
                      <span>${item.weeklyProgress || item.progress}</span>
                    </article>
                  `,
                )
                .join("")
            : `<div class="empty-group">暂无其他事项。</div>`
        }
      </div>
    </section>
  `;
}

function disputeHistoryTags(item) {
  if (item.type === "litigation") return litigationMetaTags(item);

  if (item.type === "labor") {
    return `
      <div class="dispute-history-tags">
        ${laborDepartmentTag(item.liaisonDepartment || item.category)}
        <span class="status ${statusClass(item.status)}">${item.status === "已结项" ? "已结项" : "推进中"}</span>
      </div>
    `;
  }

  return `
    <div class="dispute-history-tags">
      <span class="status ${statusClass(item.status)}">${item.status}</span>
    </div>
  `;
}

function disputeTimelineModal() {
  return `
    <div class="dispute-timeline-modal" id="disputeTimelineModal" hidden>
      <div class="dispute-timeline-backdrop" data-dispute-timeline-close></div>
      <section class="dispute-timeline-card" role="dialog" aria-modal="true" aria-labelledby="disputeTimelineTitle">
        <div class="dispute-timeline-head">
          <div>
            <span id="disputeTimelineMeta" class="dispute-timeline-meta"></span>
            <h3 id="disputeTimelineTitle"></h3>
          </div>
          <button class="timeline-close-button" type="button" data-dispute-timeline-close aria-label="关闭时间轴">×</button>
        </div>
        <div class="dispute-timeline-list" id="disputeTimelineList"></div>
      </section>
    </div>
  `;
}

function fullTableModal() {
  return `
    <div class="full-table-modal" id="fullTableModal" hidden>
      <div class="full-table-backdrop" data-full-table-close></div>
      <section class="full-table-card" role="dialog" aria-modal="true" aria-labelledby="fullTableTitle">
        <div class="full-table-head">
          <div>
            <span id="fullTableMeta" class="full-table-meta"></span>
            <h3 id="fullTableTitle"></h3>
            <p id="fullTableHint" class="full-table-hint" hidden></p>
          </div>
          <button class="full-table-close-button" type="button" data-full-table-close aria-label="关闭查看全部">×</button>
        </div>
        <div class="full-table-content" id="fullTableContent"></div>
      </section>
    </div>
  `;
}

function renderFullTableButton(title, meta, hint = "", source = "") {
  return `
    <button
      class="table-action-button"
      type="button"
      data-full-table-title="${title}"
      data-full-table-meta="${meta}"
      data-full-table-hint="${hint}"
      data-full-table-source="${source}"
      aria-label="查看${title}全部内容"
    >
      <span>查看全部</span>
    </button>
  `;
}

function investmentProjects() {
  return (moduleItems.investment || []).filter((item) => item.type === "project");
}

function recordDetailDescriptor(source, id) {
  if (source === "dispute") {
    const item = findDisputeCase(id);
    if (!item) return null;

    return {
      source,
      id,
      title: item.name,
      meta: "",
      background: item.detail,
      progress: item.progress,
      riskTag: `<span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>`,
      statusTag: `<span class="status ${statusClass(item.status)}">${item.status}</span>`,
      className: `record-detail-row--dispute record-detail-row--${item.type} ${
        isWeeklyNew(item) ? "record-detail-row--new" : ""
      }`,
      marker: weeklyNewMarker(item),
      fields: [
        recordDetailField("详情", `<p>${item.detail}</p>`),
        recordDetailField("进展", `<p>${item.progress}</p>`),
        recordDetailField("风险", `<span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>`),
        recordDetailField("项目状态", `<span class="status ${statusClass(item.status)}">${item.status}</span>`),
      ],
    };
  }

  if (source === "data") {
    const item = moduleItems.data?.[Number(id)];
    if (!item) return null;

    return {
      source,
      id,
      title: item.name,
      meta: "",
      background: item.background,
      progress: item.progress,
      riskTag: `<span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>`,
      statusTag: `<span class="status ${statusClass(item.status)}">${item.status}</span>`,
      className: `record-detail-row--data ${isWeeklyNew(item) ? "record-detail-row--new" : ""}`,
      marker: weeklyNewMarker(item),
      fields: [
        recordDetailField("详情", `<p>${item.background}</p>`),
        recordDetailField("进展", `<p>${item.progress}</p>`),
        recordDetailField("风险", `<span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>`),
        recordDetailField("项目状态", `<span class="status ${statusClass(item.status)}">${item.status}</span>`),
      ],
    };
  }

  if (source === "investment") {
    const item = investmentProjects()[Number(id)];
    if (!item) return null;

    return {
      source,
      id,
      title: item.projectName,
      meta: "",
      background: item.background,
      progress: `上周进展：${item.lastWeekProgress} 本周进展：${item.currentWeekProgress}`,
      riskTag: investmentRegionTag(item),
      statusTag: `<span class="status ${statusClass(item.status)}">${item.status}</span>`,
      className: `record-detail-row--investment ${isWeeklyNew(item) ? "record-detail-row--new" : ""}`,
      prefixMarker: investmentPhaseTag(item),
      marker: weeklyNewMarker(item),
      fields: [
        recordDetailField("详情", `<p>${item.background}</p>`),
        recordDetailField("区域", investmentRegionTag(item)),
        recordDetailField("上周进展", `<p>${item.lastWeekProgress}</p>`),
        recordDetailField("本周进展", `<p>${item.currentWeekProgress}</p>`),
        recordDetailField("项目状态", `<span class="status ${statusClass(item.status)}">${item.status}</span>`),
      ],
    };
  }

  return null;
}

function recordDetailsForSource(source) {
  if (source?.startsWith("dispute:")) {
    const type = source.split(":")[1];
    return (moduleItems.dispute || [])
      .filter((item) => item.type === type)
      .map((item) => recordDetailDescriptor("dispute", item.id))
      .filter(Boolean);
  }

  if (source === "data") {
    return (moduleItems.data || [])
      .map((_, index) => recordDetailDescriptor("data", String(index)))
      .filter(Boolean);
  }

  if (source === "investment:project") {
    return investmentProjects()
      .map((_, index) => recordDetailDescriptor("investment", String(index)))
      .filter(Boolean);
  }

  return [];
}

function renderRecordDetailRows(records) {
  return records.length
    ? records
        .map(
          (record) =>
            record.source === "dispute" || record.source === "data" || record.source === "investment"
              ? `
                <article class="record-detail-row ${record.className || ""}">
                  <div class="record-detail-row-head record-detail-row-head--compact">
                    <div>
                      <div class="record-title-line record-detail-title-line">
                        ${record.prefixMarker || ""}
                        <strong>${record.title}</strong>
                        ${record.marker || ""}
                        ${record.riskTag || ""}
                      </div>
                      <p class="record-detail-background">${record.background || ""}</p>
                    </div>
                    <div class="record-detail-side-actions">
                      ${record.statusTag || ""}
                      ${recordTimelineButton(record.source, record.id)}
                    </div>
                  </div>
                  <div class="record-detail-progress-line">
                    <span class="record-detail-field-label">进展</span>
                    <p>${record.progress || ""}</p>
                  </div>
                </article>
              `
              : `
                <article class="record-detail-row ${record.className || ""}">
                  <div class="record-detail-row-head">
                    <div>
                      <span class="record-detail-field-label">标题</span>
                      <div class="record-title-line">
                        ${record.prefixMarker || ""}
                        <strong>${record.title}</strong>
                        ${record.marker || ""}
                      </div>
                      <p>${record.meta}</p>
                    </div>
                    ${recordTimelineButton(record.source, record.id)}
                  </div>
                  <div class="record-detail-grid">
                    ${record.fields.join("")}
                  </div>
                </article>
              `,
        )
        .join("")
    : `<div class="empty-group">暂无历史事项。</div>`;
}

function timelineDescriptor(source, id) {
  if (source === "dispute") {
    const item = findDisputeCase(id);
    if (!item) return null;
    return {
      title: item.name,
      meta: `${item.project} · ${item.owner} · ${item.category}`,
      entries: item.timeline || [],
    };
  }

  if (source === "data") {
    const item = moduleItems.data?.[Number(id)];
    if (!item) return null;
    return {
      title: item.name,
      meta: `${item.project} · ${item.source}`,
      entries: item.history || [],
    };
  }

  if (source === "investment") {
    const item = investmentProjects()[Number(id)];
    if (!item) return null;
    return {
      title: item.projectName,
      meta: item.background,
      entries: [
        ["上周进展", item.lastWeekProgress],
        ["本周进展", item.currentWeekProgress],
      ],
    };
  }

  return null;
}

function renderDisputeSectionCards(items, sectionTypes = disputeSections.map((section) => section.type)) {
  return disputeSections
    .filter((section) => sectionTypes.includes(section.type))
    .map((section) => {
          const sectionItems = items.filter((item) => item.type === section.type);
          const laborOtherItems = section.type === "labor" ? sectionItems.filter((item) => item.laborKind === "other") : [];
          const progressSourceItems =
            section.type === "labor" ? sectionItems.filter((item) => item.laborKind !== "other") : sectionItems;
          const activeItems =
            section.type === "labor" ? progressSourceItems : progressSourceItems.filter((item) => item.status !== "已结项");
          const activeNewItems = activeItems.filter(isWeeklyNew);

          return `
            <article class="dispute-section dispute-section--${section.className}">
              <div class="dispute-section-head">
                <div class="dispute-section-title">
                  <h3>${section.label}</h3>
                  ${section.intro ? `<p>${section.intro}</p>` : ""}
                </div>
              </div>

              <div class="dispute-section-body">
                <div class="dispute-left-stack">
                  ${renderDisputeProgressCard(section, activeItems, activeNewItems)}

                  ${section.type === "labor" ? renderLaborOtherCard(laborOtherItems) : ""}
                </div>

                ${renderDisputeHistoryCard(section, sectionItems)}
              </div>
            </article>
          `;
        })
    .join("");
}

function renderDisputeProgressCard(section, activeItems, activeNewItems, extraClass = "") {
  return `
    <section class="dispute-subcard dispute-progress-card ${extraClass}">
      <div class="dispute-subhead">
        <h4>进度表</h4>
        <span>${
          section.type === "labor"
            ? `${activeItems.length} 项${activeNewItems.length ? ` / ${activeNewItems.length} 项本周新增` : ""}`
            : `${activeItems.length} 项进行中${activeNewItems.length ? ` / ${activeNewItems.length} 项本周新增` : ""}`
        }</span>
      </div>
      <div class="dispute-progress-list">
        ${renderDisputeProgressList(activeItems, section)}
      </div>
    </section>
  `;
}

function renderDisputeHistoryCard(section, sectionItems, extraClass = "") {
  return `
    <section class="dispute-subcard dispute-history-card ${extraClass}">
      <div class="dispute-subhead">
        <div class="table-head-copy">
          <h4>总表</h4>
          <span class="timeline-hint" aria-label="点击标题可查看详情"><span aria-hidden="true">💡</span>点击标题可查看详情</span>
        </div>
        <div class="table-head-actions">
          <span>共 ${sectionItems.length} 条记录</span>
          ${
            sectionItems.length
              ? renderFullTableButton(
                  `${section.label} · 总表`,
                  `共 ${sectionItems.length} 条记录`,
                  "",
                  `dispute:${section.type}`,
                )
              : ""
          }
        </div>
      </div>
      <div class="dispute-history-list">
        ${
          sectionItems.length
            ? sectionItems
                .map(
                  (item) => `
                    <article class="dispute-history-row dispute-history-row--${section.type} ${
                      isWeeklyNew(item) ? "dispute-history-row--new" : ""
                    }">
                      <div class="dispute-history-title">
                        ${recordDetailLink("dispute", item.id, item.name)}
                        ${weeklyNewMarker(item)}
                      </div>
                      ${disputeHistoryTags(item)}
                    </article>
                  `,
                )
                .join("")
            : `<div class="empty-group">暂无历史事项。</div>`
        }
      </div>
    </section>
  `;
}

function renderLitigationDashboard(items) {
  const section = disputeSections.find((entry) => entry.type === "litigation");
  const sectionItems = items.filter((item) => item.type === section.type);
  const activeItems = sectionItems.filter((item) => item.status !== "已结项");
  const activeNewItems = activeItems.filter(isWeeklyNew);

  return `
    <section class="dispute-dashboard dispute-dashboard--flat">
      <div class="dispute-section-body dispute-section-body--flat dispute-section--${section.className}">
        <div class="dispute-left-stack">
          ${renderDisputeProgressCard(section, activeItems, activeNewItems, "dispute-subcard--primary")}
        </div>
        ${renderDisputeHistoryCard(section, sectionItems, "dispute-subcard--primary")}
      </div>
      ${disputeTimelineModal()}
      ${fullTableModal()}
    </section>
  `;
}

function renderDisputeRiskDashboard(items, sectionTypes) {
  return `
    <section class="dispute-dashboard">
      ${renderDisputeSectionCards(items, sectionTypes)}
      ${disputeTimelineModal()}
      ${fullTableModal()}
    </section>
  `;
}

function renderStrategyInvestmentWorkspace(projects, activeProjects, otherItems, newOtherItems, isPrimary = false) {
  const primaryClass = isPrimary ? " investment-subcard--primary" : "";
  return `
        <div class="investment-workspace">
          <div class="investment-left-stack">
            <section class="investment-subcard progress-register investment-progress-panel${primaryClass}">
              <div class="investment-subhead">
                <h4>进度表</h4>
              </div>
              <div class="investment-progress-table">
                <div class="investment-progress-row investment-progress-row--head">
                  <span>项目名称+背景</span>
                  <span>项目类型</span>
                  <span>上周进展</span>
                  <span>本周进展</span>
                </div>
                ${
                  activeProjects.length
                    ? activeProjects
                        .map(
                          (project) => `
                            <div class="investment-progress-row ${isWeeklyNew(project) ? "investment-progress-row--new" : ""}">
                              <div class="investment-progress-name">
                                <div class="record-title-line">
                                  <strong>${project.projectName}</strong>
                                  ${weeklyNewMarker(project)}
                                </div>
                                <p class="investment-project-matter">${project.specificMatter || project.currentWeekProgress}</p>
                              </div>
                              <span class="investment-project-type-cell">${investmentProjectTypeTag(project)}</span>
                              <span>${project.lastWeekProgress}</span>
                              <span>${project.currentWeekProgress}</span>
                            </div>
                          `,
                        )
                        .join("")
                    : `<div class="empty-group">暂无进行中项目。</div>`
                }
              </div>
            </section>

            <section class="investment-subcard investment-other-register${primaryClass}">
              <div class="investment-subhead">
                <h4>其他事项</h4>
                <span>非项目类事项${newOtherItems.length ? ` / ${newOtherItems.length} 项本周新增` : ""}</span>
              </div>
              <div class="investment-other-list">
                ${
                  otherItems.length
                    ? `
                        <div class="investment-other-row investment-other-row--head">
                          <span>标题+背景</span>
                          <span>工作内容</span>
                        </div>
                        ${otherItems
                          .map(
                            (item) => `
                              <article class="investment-other-row ${isWeeklyNew(item) ? "investment-other-row--new" : ""}">
                                <div class="investment-other-title-cell">
                                  <div class="record-title-line">
                                    <strong>${item.title}</strong>
                                    ${weeklyNewMarker(item)}
                                  </div>
                                  <p>${item.background || item.detail}</p>
                                </div>
                                <span>${item.workContent || item.nextAction}</span>
                              </article>
                            `,
                          )
                          .join("")}
                      `
                    : `<div class="empty-group">暂无其他事项。</div>`
                }
              </div>
            </section>
          </div>

            <section class="investment-subcard project-register investment-project-register-panel${primaryClass}">
              <div class="investment-subhead">
                <div class="table-head-copy">
                  <h4>总表</h4>
                  <span class="timeline-hint" aria-label="点击标题可查看详情"><span aria-hidden="true">💡</span>点击标题可查看详情</span>
                </div>
                <div class="table-head-actions">
                  <span>共 ${projects.length} 条记录</span>
                  ${
                    projects.length
                      ? renderFullTableButton(
                          "战略投资 · 总表",
                          `共 ${projects.length} 条记录`,
                          "",
                          "investment:project",
                        )
                      : ""
                  }
                </div>
              </div>
              <div class="investment-register-table">
                ${
                  projects.length
                    ? projects
                        .map(
                          (project, index) => `
                            <div class="investment-register-row ${isWeeklyNew(project) ? "investment-register-row--new" : ""}">
                              <div class="record-title-line">
                                ${recordDetailLink("investment", index, project.projectName)}
                                ${weeklyNewMarker(project)}
                              </div>
                              <span class="investment-project-type-cell">${investmentProjectTypeTag(project)}</span>
                            </div>
                          `,
                        )
                        .join("")
                    : `<div class="empty-group">暂无战略投资项目。</div>`
                }
              </div>
            </section>
        </div>
  `;
}

function renderInvestmentDashboard(items, mode = "all") {
  const governanceItems = items.filter((item) => item.type === "governance");
  const projects = items.filter((item) => item.type === "project");
  const activeProjects = projects.filter((project) => project.status === "推进中");
  const otherItems = items.filter((item) => item.type === "other");
  const newGovernanceItems = governanceItems.filter(isWeeklyNew);
  const newProjects = projects.filter(isWeeklyNew);
  const newOtherItems = otherItems.filter(isWeeklyNew);
  const strategyWorkspace = renderStrategyInvestmentWorkspace(projects, activeProjects, otherItems, newOtherItems);

  if (mode === "strategy") {
    return `
      <section class="investment-dashboard investment-dashboard--flat strategy-section">
        ${renderStrategyInvestmentWorkspace(projects, activeProjects, otherItems, newOtherItems, true)}
        ${disputeTimelineModal()}
        ${fullTableModal()}
      </section>
    `;
  }

  return `
    <section class="investment-dashboard">
      ${
        mode !== "strategy"
          ? `<article class="investment-section governance-section">
        <div class="investment-section-head">
          <div>
            <h3>公司治理</h3>
          </div>
          <span class="investment-count">${governanceItems.length} 项${newGovernanceItems.length ? ` / ${newGovernanceItems.length} 项本周新增` : ""}</span>
        </div>
        <div class="governance-list">
          ${
            governanceItems.length
              ? `
                  <div class="governance-item governance-item--head">
                    <span>标题+背景</span>
                    <span>区域</span>
                    <span>上周进展</span>
                    <span>本周进展</span>
                  </div>
                  ${governanceItems
                    .map(
                      (item) => `
                        <article class="governance-item ${isWeeklyNew(item) ? "governance-item--new" : ""}">
                          <div class="governance-title-cell">
                            <div class="record-title-line">
                              <strong>${item.title}</strong>
                              ${weeklyNewMarker(item)}
                            </div>
                            <p>${item.background || item.detail}</p>
                          </div>
                          <span class="investment-region-cell">${investmentRegionTag(item)}</span>
                          <span>${item.lastWeekProgress || item.detail}</span>
                          <span>${item.currentWeekProgress || item.nextAction}</span>
                        </article>
                      `,
                    )
                    .join("")}
                `
              : `<div class="empty-group">暂无公司治理事项。</div>`
          }
        </div>
      </article>`
          : ""
      }

      ${
        mode !== "governance"
          ? `<article class="investment-section strategy-section">
        <div class="investment-section-head">
          <div>
            <h3>战略投资</h3>
          </div>
          <div class="investment-mini-stats">
            <span>项目总数 <strong>${projects.length}</strong></span>
            <span>进行中 <strong>${activeProjects.length}</strong></span>
            <span>本周新增 <strong>${newProjects.length}</strong></span>
            <span>其他事项 <strong>${otherItems.length}</strong></span>
          </div>
        </div>

        ${strategyWorkspace}
      </article>`
          : ""
      }
      ${disputeTimelineModal()}
      ${fullTableModal()}
    </section>
  `;
}

function renderDataComplianceDashboard(items) {
  const activeItems = items
    .filter((item) => item.status === "推进中")
    .sort((a, b) => Number(isWeeklyNew(b)) - Number(isWeeklyNew(a)));
  const newItems = activeItems.filter(isWeeklyNew);

  return `
    <section class="data-compliance-dashboard">
      <article class="data-compliance-section data-progress-section">
        <div class="data-section-head">
          <div>
            <h3>进度表</h3>
          </div>
          <span class="data-section-note">${activeItems.length} 项推进中 / ${newItems.length} 项本周新增</span>
        </div>
        <div class="data-progress-list">
          ${
            activeItems.length
              ? activeItems
                  .map(
                    (item) => `
                      <article class="data-progress-row ${isWeeklyNew(item) ? "data-progress-row--new" : ""}">
                        <div class="data-progress-main">
                          <div class="data-progress-title">
                            <strong>${item.name}</strong>
                            ${weeklyNewMarker(item)}
                          </div>
                          <span>${item.background}</span>
                        </div>
                        <div class="data-progress-copy">
                          <span>项目进展</span>
                          <p>${item.progress}</p>
                        </div>
                        <span class="status ${statusClass(item.status)}">${item.status}</span>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="empty-group">暂无推进中的专项合规事项。</div>`
          }
        </div>
      </article>

      <article class="data-compliance-section data-register-section">
        <div class="data-section-head">
          <div class="table-head-copy">
            <h3>总表</h3>
            <span class="timeline-hint" aria-label="点击标题可查看详情"><span aria-hidden="true">💡</span>点击标题可查看详情</span>
          </div>
          <div class="table-head-actions">
            <span>共 ${items.length} 条记录</span>
            ${
              items.length
                ? renderFullTableButton(
                    "专项合规 · 总表",
                    `共 ${items.length} 条记录`,
                    "",
                    "data",
                  )
                : ""
            }
          </div>
        </div>
        <div class="data-register-list">
          ${items
            .map(
              (item, index) => `
                <article class="data-register-card ${isWeeklyNew(item) ? "data-register-card--new" : ""}">
                  <div>
                    <div class="record-title-line">
                      ${recordDetailLink("data", index, item.name)}
                      ${weeklyNewMarker(item)}
                    </div>
                    <p>${item.background}</p>
                  </div>
                  <span class="status ${statusClass(item.status)}">${item.status}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>
      ${disputeTimelineModal()}
      ${fullTableModal()}
    </section>
  `;
}

function opsFieldHeader(modifier, fields) {
  return `
    <div class="ops-field-head-row ops-field-head-row--${modifier}">
      ${fields.map((field) => `<span>${field}</span>`).join("")}
    </div>
  `;
}

function renderFunctionSupportSection(functionItems, title = "职能支持", emptyText = "暂无职能支持事项。") {
  return `
    <article class="ops-section ops-section--function">
      <div class="ops-section-head">
        <h3>${title}</h3>
        <span>${functionItems.length} 项</span>
      </div>
      <div class="ops-simple-list">
        ${
          functionItems.length
            ? `
                ${opsFieldHeader("function", ["事项", "本周处理", "待确认/风险"])}
                ${functionItems
                  .map(
                    (item) => `
                      <article class="ops-function-row">
                        <div>
                          <strong>${item.name}</strong>
                          <p>${item.project} · ${item.source}</p>
                        </div>
                        <div>
                          <p>${item.handled || item.result}</p>
                        </div>
                        <div>
                          <p>${item.pending || "暂无需升级事项。"}</p>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              `
            : `<div class="empty-group">${emptyText}</div>`
        }
      </div>
    </article>
  `;
}

function renderLaborFunctionDashboard(items) {
  const functionItems = moduleItems.support || [];

  return `
    <section class="dispute-dashboard labor-function-dashboard">
      ${renderDisputeSectionCards(items, ["labor", "security"])}
      <section class="ops-support-dashboard labor-function-support">
        <div class="ops-maintenance-grid labor-function-support-grid">
          ${renderFunctionSupportSection(functionItems, "职能支持", "暂无职能支持事项。")}
        </div>
      </section>
      ${disputeTimelineModal()}
      ${fullTableModal()}
    </section>
  `;
}

function renderOperationsSupportDashboard(items, options = {}) {
  const includeSupport = options.includeSupport !== false;
  const functionTitle = options.functionTitle || "职能支持";
  const allItems = includeSupport ? [...items, ...(moduleItems.support || [])] : [...items];
  const aiItems = allItems.filter((item) => item.category === "ai");
  const systemItems = allItems.filter((item) => item.category === "system");
  const knowledgeItems = allItems.filter((item) => item.category === "knowledge");
  const functionItems = allItems.filter((item) => item.category === "function");
  const otherItems = allItems.filter((item) => item.category === "other");

  const empty = (text) => `<div class="empty-group">${text}</div>`;

  return `
    <section class="ops-support-dashboard">
      <section class="ops-stage ops-stage--focus">
        <div class="ops-stage-head">
          <span>重点推进</span>
        </div>

        <div class="ops-focus-grid">
          <article class="ops-section ops-section--ai">
            <div class="ops-section-head">
              <h3>AI 能力建设</h3>
              <span>${aiItems.length} 项</span>
            </div>
            <div class="ops-system-list">
              ${
                aiItems.length
                  ? `
                      ${opsFieldHeader("system", ["事项", "当前进展"])}
                      ${aiItems
                      .map(
                        (item) => `
                          <article class="ops-system-row ops-system-row--ai">
                            <div>
                              <strong>${item.name}</strong>
                              <p>${item.scenario}</p>
                            </div>
                            <div>
                              <p>${item.currentProgress}</p>
                            </div>
                          </article>
                        `,
                      )
                      .join("")}
                    `
                  : empty("暂无 AI 能力建设事项。")
              }
            </div>
          </article>

          <article class="ops-section ops-section--system">
            <div class="ops-section-head">
              <h3>法务系统建设</h3>
              <span>${systemItems.length} 项</span>
            </div>
            <div class="ops-system-list">
              ${
                systemItems.length
                  ? `
                      ${opsFieldHeader("system", ["系统名称", "当前进展"])}
                      ${systemItems
                      .map(
                        (item) => `
                          <article class="ops-system-row">
                            <div>
                              <strong>${item.name}</strong>
                              <p>${item.background}</p>
                            </div>
                            <div>
                              <p>${item.currentProgress}</p>
                            </div>
                          </article>
                        `,
                      )
                      .join("")}
                    `
                  : empty("暂无法务系统建设事项。")
              }
            </div>
          </article>
        </div>
      </section>

      <section class="ops-stage ops-stage--maintenance">
        <div class="ops-stage-head">
          <span>日常维护</span>
        </div>

        <div class="ops-maintenance-grid">
          <article class="ops-section ops-section--knowledge">
            <div class="ops-section-head">
              <h3>流程与知识库沉淀</h3>
              <span>${knowledgeItems.length} 项</span>
            </div>
            <div class="ops-simple-list">
              ${
                knowledgeItems.length
                  ? `
                      ${opsFieldHeader("knowledge", ["流程名称", "沉淀内容", "适用场景"])}
                      ${knowledgeItems
                      .map(
                        (item) => `
                          <article class="ops-knowledge-row">
                            <div>
                              <strong>${item.name}</strong>
                            </div>
                            <div>
                              <p>${item.content}</p>
                            </div>
                            <div>
                              <p>${item.scenario}</p>
                            </div>
                          </article>
                        `,
                      )
                      .join("")}
                    `
                  : empty("暂无流程与知识库沉淀事项。")
              }
            </div>
          </article>

          ${renderFunctionSupportSection(functionItems, functionTitle, `暂无${functionTitle}事项。`)}

          <article class="ops-section ops-section--other">
            <div class="ops-section-head">
              <h3>其他事项</h3>
              <span>${otherItems.length} 项</span>
            </div>
            <div class="ops-simple-list">
              ${
                otherItems.length
                  ? `
                      ${opsFieldHeader("other", ["事项", "处理内容"])}
                      ${otherItems
                      .map(
                        (item) => `
                          <article class="ops-other-row">
                            <div>
                              <strong>${item.name}</strong>
                            </div>
                            <div>
                              <p>${item.result}</p>
                            </div>
                          </article>
                        `,
                      )
                      .join("")}
                    `
                  : empty("暂无其他事项。")
              }
            </div>
          </article>
        </div>
      </section>
    </section>
  `;
}

function renderModuleView(moduleId) {
  const module = modules.find((entry) => entry.id === moduleId);
  const items =
    moduleId === "governance"
      ? moduleItems.investment || []
      : moduleId === "litigation" || moduleId === "labor"
        ? moduleItems.dispute || []
        : moduleItems[moduleId] || [];
  const moduleHead = document.querySelector(".module-head");
  const detailMain = document.querySelector(".detail-main");
  const itemTable = document.querySelector("#itemTable");
  const moduleDescription = document.querySelector("#moduleDescription");

  moduleHead.hidden = false;
  detailMain.classList.remove(
    "project-detail-main",
    "data-compliance-detail-main",
    "ip-detail-main",
    "investment-detail-main",
    "dispute-detail-main",
    "operations-detail-main",
  );
  itemTable.className = "item-table";

  document.querySelector("#moduleTitle").textContent = module.label;
  if (moduleDescription) {
    moduleDescription.hidden = !module.description;
    moduleDescription.textContent = module.description || "";
  }

  if (moduleId === "project") {
    detailMain.classList.add("project-detail-main");
    itemTable.classList.add("project-table");
    itemTable.innerHTML = renderProjectSupportGroups(items);
    return;
  }

  if (moduleId === "data") {
    detailMain.classList.add("data-compliance-detail-main");
    itemTable.classList.add("data-compliance-table");
    itemTable.innerHTML = renderDataComplianceDashboard(items);
    return;
  }

  if (moduleId === "investment") {
    detailMain.classList.add("investment-detail-main");
    itemTable.classList.add("investment-table");
    itemTable.innerHTML = renderInvestmentDashboard(items, "strategy");
    return;
  }

  if (moduleId === "governance") {
    detailMain.classList.add("investment-detail-main");
    itemTable.classList.add("investment-table");
    itemTable.innerHTML = renderInvestmentDashboard(items, "governance");
    return;
  }

  if (moduleId === "ip") {
    detailMain.classList.add("ip-detail-main");
    itemTable.classList.add("ip-table");
    itemTable.innerHTML = renderIpAssetCards(items);
    return;
  }

  if (moduleId === "litigation") {
    detailMain.classList.add("dispute-detail-main");
    itemTable.classList.add("dispute-table");
    itemTable.innerHTML = renderLitigationDashboard(items);
    return;
  }

  if (moduleId === "labor") {
    detailMain.classList.add("dispute-detail-main");
    itemTable.classList.add("dispute-table");
    itemTable.innerHTML = renderLaborFunctionDashboard(items);
    return;
  }

  if (moduleId === "operations") {
    detailMain.classList.add("operations-detail-main");
    itemTable.classList.add("operations-table");
    itemTable.innerHTML = renderOperationsSupportDashboard(items, {
      includeSupport: false,
      functionTitle: "运营支持",
    });
    return;
  }

  itemTable.innerHTML = items
    .map(
      (item) => `
        <article class="work-row compact-record">
          <div>
            <strong>${item.name}</strong>
            <span class="meta-line">${item.project} · ${item.source}</span>
          </div>
          <p>${item.result}</p>
          <div class="tag-row">
            <span class="tag ${riskTone(item.risk)}">${riskLabel(item.risk)}</span>
            <span class="tag teal">${item.status}</span>
          </div>
          <span class="status ${statusClass(item.status)}">${item.status}</span>
        </article>
      `,
    )
    .join("");
}

function findDisputeCase(caseId) {
  return (moduleItems.dispute || []).find((item) => item.id === caseId);
}

function syncModalOpenState() {
  const hasOpenModal = [
    document.querySelector("#disputeTimelineModal"),
    document.querySelector("#fullTableModal"),
    document.querySelector("#opsNewModal"),
  ].some((modal) => modal && !modal.hidden);

  document.body.classList.toggle("modal-open", hasOpenModal);
}

function closeDisputeTimeline() {
  const modal = document.querySelector("#disputeTimelineModal");
  if (!modal) return;

  modal.hidden = true;
  syncModalOpenState();
}

function closeFullTableModal() {
  const modal = document.querySelector("#fullTableModal");
  if (!modal) return;

  modal.hidden = true;
  const content = modal.querySelector("#fullTableContent");
  if (content) {
    content.className = "full-table-content";
    content.innerHTML = "";
  }
  syncModalOpenState();
}

function openRecordDetailModal(source, id) {
  const modal = document.querySelector("#fullTableModal");
  const record = recordDetailDescriptor(source, id);
  if (!modal || !record) return;

  const title = modal.querySelector("#fullTableTitle");
  const meta = modal.querySelector("#fullTableMeta");
  const hint = modal.querySelector("#fullTableHint");
  const content = modal.querySelector("#fullTableContent");

  title.textContent = `${record.title} · 详情`;
  meta.textContent = record.meta;
  hint.textContent = "";
  hint.hidden = true;
  content.className = "full-table-content record-detail-list";
  content.innerHTML = renderRecordDetailRows([record]);

  modal.hidden = false;
  syncModalOpenState();
  modal.querySelector(".full-table-close-button")?.focus();
}

function openFullTableModal(trigger) {
  const modal = document.querySelector("#fullTableModal");
  if (!modal) return;

  const title = modal.querySelector("#fullTableTitle");
  const meta = modal.querySelector("#fullTableMeta");
  const hint = modal.querySelector("#fullTableHint");
  const content = modal.querySelector("#fullTableContent");
  const hintText = trigger.dataset.fullTableHint || "";
  const source = trigger.dataset.fullTableSource || "";
  const records = recordDetailsForSource(source);

  title.textContent = trigger.dataset.fullTableTitle || "查看全部";
  meta.textContent = trigger.dataset.fullTableMeta || "";
  hint.textContent = hintText;
  hint.hidden = !hintText;
  content.className = "full-table-content record-detail-list";
  content.innerHTML = renderRecordDetailRows(records);

  modal.hidden = false;
  syncModalOpenState();
  modal.querySelector(".full-table-close-button")?.focus();
}

function openRecordTimeline(source, id) {
  const timeline = timelineDescriptor(source, id);
  const modal = document.querySelector("#disputeTimelineModal");
  if (!timeline || !modal) return;

  const title = modal.querySelector("#disputeTimelineTitle");
  const meta = modal.querySelector("#disputeTimelineMeta");
  const list = modal.querySelector("#disputeTimelineList");

  title.textContent = timeline.title;
  meta.textContent = timeline.meta;
  list.innerHTML = timeline.entries?.length
    ? timeline.entries
        .map(
          ([period, detail]) => `
            <article class="timeline-entry">
              <time>${period}</time>
              <p>${detail}</p>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-group">暂无时间轴记录。</div>`;

  modal.hidden = false;
  syncModalOpenState();
  modal.querySelector(".timeline-close-button")?.focus();
}

function openDisputeTimeline(caseId) {
  openRecordTimeline("dispute", caseId);
}

function setView(view) {
  const nextView = findView(view).id;

  closeDisputeTimeline();
  closeFullTableModal();
  closeOpsNewModal();
  currentView = nextView;
  document.querySelector("#overviewView").classList.toggle("active", nextView === "overview");
  document.querySelector("#moduleView").classList.toggle("active", nextView !== "overview");
  document.body.classList.toggle("module-page", nextView !== "overview");
  const title = findView(nextView).label;
  document.querySelector("#viewTitle").textContent = title;
  window.history.replaceState({}, "", pageUrl(currentWeekId(), nextView));
  renderNav();
  if (nextView !== "overview") renderModuleView(nextView);
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const opsNewTarget = event.target.closest("[data-ops-new-id]");
    if (opsNewTarget) {
      event.preventDefault();
      openOpsNewModal(opsNewTarget.dataset.opsNewId);
      return;
    }

    if (event.target.closest("[data-ops-new-close]")) {
      event.preventDefault();
      closeOpsNewModal();
      return;
    }

    const recordTimelineTarget = event.target.closest("[data-record-timeline-source]");
    if (recordTimelineTarget) {
      event.preventDefault();
      openRecordTimeline(recordTimelineTarget.dataset.recordTimelineSource, recordTimelineTarget.dataset.recordTimelineId);
      return;
    }

    const recordDetailTarget = event.target.closest("[data-record-detail-source]");
    if (recordDetailTarget) {
      event.preventDefault();
      openRecordDetailModal(recordDetailTarget.dataset.recordDetailSource, recordDetailTarget.dataset.recordDetailId);
      return;
    }

    const timelineTarget = event.target.closest("[data-dispute-timeline]");
    if (timelineTarget) {
      event.preventDefault();
      openDisputeTimeline(timelineTarget.dataset.disputeTimeline);
      return;
    }

    if (event.target.closest("[data-dispute-timeline-close]")) {
      event.preventDefault();
      closeDisputeTimeline();
      return;
    }

    const fullTableTarget = event.target.closest("[data-full-table-title]");
    if (fullTableTarget) {
      event.preventDefault();
      openFullTableModal(fullTableTarget);
      return;
    }

    if (event.target.closest("[data-full-table-close]")) {
      event.preventDefault();
      closeFullTableModal();
      return;
    }

    const weekButton = event.target.closest("#weekButton");
    if (weekButton) {
      event.preventDefault();
      setWeekMenu(!isWeekMenuOpen());
      return;
    }

    const weekTarget = event.target.closest("[data-week-target]");
    if (weekTarget) {
      event.preventDefault();
      setWeek(weekTarget.dataset.weekTarget);
      setWeekMenu(false);
      document.querySelector("#weekButton")?.focus();
      return;
    }

    if (!event.target.closest("#weekPicker")) {
      setWeekMenu(false);
    }

    const viewTarget = event.target.closest("[data-view-target]");
    if (viewTarget) {
      setView(viewTarget.dataset.viewTarget);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

  });

  document.addEventListener("keydown", (event) => {
    const disputeModal = document.querySelector("#disputeTimelineModal");
    const fullTableModal = document.querySelector("#fullTableModal");
    const opsNewModal = document.querySelector("#opsNewModal");

    if (event.key === "Escape" && opsNewModal && !opsNewModal.hidden) {
      closeOpsNewModal();
      return;
    }

    if (event.key === "Escape" && disputeModal && !disputeModal.hidden) {
      closeDisputeTimeline();
      return;
    }

    if (event.key === "Escape" && fullTableModal && !fullTableModal.hidden) {
      closeFullTableModal();
      return;
    }

    const picker = document.querySelector("#weekPicker");
    if (!picker || !picker.contains(event.target)) return;

    const options = weekOptionButtons();
    const focusedIndex = options.indexOf(document.activeElement);
    const selectedIndex = Math.max(
      0,
      options.findIndex((option) => option.getAttribute("aria-selected") === "true"),
    );

    if (event.key === "Escape") {
      setWeekMenu(false);
      document.querySelector("#weekButton")?.focus();
      return;
    }

    if (event.key === "Tab") {
      setWeekMenu(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusWeekOption(focusedIndex >= 0 ? focusedIndex + 1 : selectedIndex);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusWeekOption(focusedIndex >= 0 ? focusedIndex - 1 : selectedIndex);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusWeekOption(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusWeekOption(options.length - 1);
      return;
    }

    if ((event.key === "Enter" || event.key === " ") && document.activeElement?.matches(".week-option")) {
      event.preventDefault();
      setWeek(document.activeElement.dataset.weekTarget);
      setWeekMenu(false);
      document.querySelector("#weekButton")?.focus();
    }
  });
}

function init() {
  const initialView = currentViewId();

  renderWeekSelector();
  renderHighlights();
  renderRiskHighlights();
  renderOperationsData();
  setView(initialView);
  bindEvents();
}

init();
