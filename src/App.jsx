import React, { useState, useEffect } from 'react';
import { ChevronRight, Mail, Phone, MapPin, X, ChevronDown, ExternalLink, FileText, Calendar, Briefcase, Award, Sparkles } from 'lucide-react';

export default function LynnPortfolio() {
  const [language, setLanguage] = useState('zh');
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'experience', 'projects', 'honors', 'skills', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    zh: {
      nav: {
        home: '首页',
        experience: '实习经验',
        projects: '项目经验',
        honors: '荣誉获奖',
        skills: '技能',
        portfolio: '作品集',
        contact: '联系我'
      },
      hero: {
        greeting: '你好，我是',
        name: '陈琳',
        description: '擅长产品设计与数据分析，熟练运用 Axure、Figma 进行原型设计与 PRD 撰写。具备扎实的数据分析能力，掌握 MySQL、Python、FineBI、Tableau 等工具。拥有丰富的运营和策划经验，善于内容策划与数据复盘。注重需求分析与团队协作，具备良好的项目管理与沟通能力。',
        cta: '教育经历',
        contact: '联系我'
      },
      resume: {
        title: '教育背景',
        education: {
          title: '教育背景',
          items: [
            {
              school: '华中科技大学',
              degree: '图书情报（硕士）',
              period: '2025-09 ~ 至今',
              courses: '软科学研究方法、情报理论与实践、管理计量分析、知识管理与创新实践、信息资源检索与利用、实践领域案例分析、数据治理与系统设计实践'
            },
            {
              school: '华中师范大学',
              degree: '电子商务（本科）',
              period: '2021-09 ~ 2025-06',
              gpa: '学分绩 85.70/100 | 专业前10% | 优秀毕业生',
              courses: '互联网产品设计、用户体验设计、市场调研方法、MySQL、Python程序设计、大数据可视化分析、商务数据分析、网络营销、管理统计学、消费者行为学'
            }
          ]
        },
        skills: {
          title: '核心能力',
          items: [
            '产品设计：Axure、Figma、原型设计、PRD撰写',
            '数据分析：MySQL、Python、FineBI、Tableau',
            '运营能力：新媒体运营、内容策划、数据复盘',
            '软技能：需求分析、项目管理、团队协作'
          ]
        },
        honors: {
          title: '荣誉证书',
          items: [
            '软考中级数据库工程师',
            '计算机等级考试二、三、四级证书',
            '英语六级 540分',
            '校三好学生、树人奖学金'
          ]
        }
      },
      experience: {
        title: '实习经验',
        viewMore: '查看详情',
        viewLess: '收起',
        jobs: [
          {
            company: '炫图AI',
            role: '产品实习生',
            period: '2025-07 ~ 2025-10',
            location: '线上',
            summary: '负责多平台内容策略与产品功能策划，实现3个月涨粉3000+，获赞14w+',
            duties: [
              '负责多平台内容策略制定，输出差异化内容，提升用户活跃度、互动率与曝光转化',
              '参与产品功能策划落地，开发竞品/用户调研，收集用户反馈，输出优化方案',
              '跟踪核心数据实现，完成数据复盘分析，为产品迭代提供支撑'
            ],
            achievements: [
              '3个月涨粉3000+，获赞14w+，单条曝光50w+',
              '"多场景化"策略被采纳，直接用于产品功能迭代决策'
            ],
            tags: ['内容策略', '产品策划', '数据分析', '用户调研']
          },
          {
            company: '意尚国际供应链股份有限公司',
            role: '直播/新媒体运营',
            period: '2024-06 ~ 2024-10',
            location: '武汉',
            summary: '负责抖音/小红书账号从0-1搭建，策划热点内容与直播运营',
            duties: [
              '负责抖音/小红书账号从0-1搭建，策划热点内容与活动，积攒平台用户群体',
              '执行直播运营，负责互动玩法设计，提升用户粘性、运营社区运营变量'
            ],
            achievements: [
              '实现抖音及小红书双平台账号从0到1的成功孵化',
              '策划并执行多场产品专场直播，提升用户活跃度和转化率'
            ],
            tags: ['直播运营', '账号孵化', '内容策划', '社群运营']
          }
        ]
      },
      projects: {
        title: '项目经验',
        viewMore: '查看详情',
        viewLess: '收起',
        list: [
          {
            name: '正大杯全国大学生市场调查与分析大赛',
            subtitle: '国家二等奖',
            period: '2025-10 ~ 2026-05',
            role: '团队成员',
            team: '5人团队',
            summary: '围绕AI居家照护主题开展市场调研，完成从问题定义到方案输出的完整分析',
            description: '聚焦AI居家照护领域，通过系统化市场调研方法，挖掘用户真实需求，设计产品服务方案与推广策略，最终荣获国家二等奖。',
            responsibilities: '市场调研、用户需求分析、数据建模、方案设计、报告撰写',
            process: [
              '市场调研：围绕AI居家照护主题设计调研方案，确定研究方法论',
              '数据收集：完成问卷调研与深度访谈，获取一手用户数据',
              '数据分析：运用数据建模与统计分析方法，提炼核心洞察',
              '需求挖掘：基于数据分析结果，挖掘用户痛点与真实需求',
              '方案设计：设计产品服务方案与市场推广策略，对接市场需求'
            ],
            highlights: [
              '输出完整市场分析报告，涵盖市场概况、用户画像、竞品分析',
              '成功挖掘用户痛点，设计针对性产品服务方案',
              '数据统筹分析、逻辑推演清晰，从问题定义到方案求解形成完整闭环',
              '荣获正大杯全国大学生市场调查与分析大赛国家二等奖'
            ],
            metrics: {
              award: '国家二等奖',
              duration: '8个月',
              methods: '问卷+访谈+建模'
            },
            tags: ['市场调研', '数据分析', '用户研究', '方案设计']
          },
          {
            name: 'ICooking',
            subtitle: '智能食谱生成APP - 课程项目',
            period: '2023-11 ~ 2024-02',
            role: '项目负责人',
            team: '5人团队',
            summary: '互联网产品设计课程项目，完成产品需求分析与交互原型设计',
            description: '这是一个产品设计课程项目。我们设想设计一款能够根据用户食材和偏好生成食谱的App，完成了从需求调研到原型设计的基础流程。',
            responsibilities: '负责需求调研、竞品分析、功能规划、原型绘制、文档撰写',
            process: [
              '需求调研：通过问卷和访谈了解用户做菜痛点，明确产品方向',
              '竞品分析：参考市面上的食谱类App，分析功能特点',
              '功能设计：规划智能生成、食谱推荐等基础功能',
              '原型制作：使用Axure绘制主要页面的交互原型',
              '文档输出：整理产品需求文档，记录设计思路'
            ],
            highlights: [
              '完成产品调研与需求分析，输出调研报告',
              '使用Axure制作交互原型，涵盖核心功能流程',
              '撰写产品需求文档，梳理功能逻辑',
              '通过这个项目学习了完整的产品设计流程'
            ],
            metrics: {
              duration: '4个月',
              deliverables: '原型+PRD',
              tools: 'Axure'
            },
            tags: ['课程项目', '产品设计', 'Axure', '需求分析']
          },
          {
            name: '宠它',
            subtitle: '宠物健康管理APP - 课程项目',
            period: '2023-09 ~ 2025-11',
            role: '项目负责人',
            team: '6人团队',
            summary: '电子商务课程项目，设计宠物健康管理类产品原型',
            description: '这是一个持续时间较长的课程项目。我们针对养宠人群的健康管理需求，设计了一款包含咨询、档案、社区等功能的App概念原型。',
            responsibilities: '负责用户调研、需求整理、功能设计、原型制作、文档编写',
            process: [
              '用户调研：通过问卷和访谈了解养宠人群的需求和痛点',
              '需求整理：梳理出咨询、档案、社区等主要功能方向',
              '功能设计：规划各模块的基本功能和交互流程',
              '原型制作：使用Figma制作产品原型图',
              '文档编写：整理需求文档，记录设计过程'
            ],
            highlights: [
              '规划了咨询、档案、指南、社区等7个功能模块',
              '通过用户访谈积累了需求调研经验',
              '使用Figma完成产品原型设计',
              '整理了较为详细的需求文档'
            ],
            metrics: {
              duration: '持续2年',
              modules: '7个模块',
              tools: 'Figma'
            },
            tags: ['课程项目', '产品设计', 'Figma', '用户调研']
          }
        ]
      },
      portfolio: {
        title: '作品集',
        subtitle: '精选作品展示',
        items: [
          {
            title: 'ICooking 产品设计文档',
            type: 'PRD',
            description: '完整的产品需求文档，包含市场分析、竞品分析、功能架构、交互设计等',
            date: '2024-02',
            tags: ['产品需求', '原型设计', '交互设计'],
            preview: '包含用户画像、功能架构图、核心流程图、高保真原型等完整产品文档...',
            link: 'https://my.feishu.cn/wiki/F3ggwRD35iDTspkwhi9cl0Gtn2c?from=from_copylink'
          },
          {
            title: '宠它 APP 原型设计',
            type: 'Prototype',
            description: '基于Figma的高保真交互原型，包含7大功能模块完整交互流程',
            date: '2024-11',
            tags: ['Figma', '原型设计', '交互流程'],
            preview: '首页设计、咨询流程、健康档案、社区交互等完整原型展示...',
            link: 'https://my.feishu.cn/wiki/BytCwxvgJiiRXokVQOEcQAdfnVe?from=from_copylink'
          },
          {
            title: 'Picwiz 竞品分析报告',
            type: 'Analysis',
            description: 'AI图像生成工具市场分析，包含竞品对比、SWOT分析、优化建议',
            date: '2025-08',
            tags: ['竞品分析', '市场调研', 'SWOT'],
            preview: '市场概况、竞品功能对比矩阵、用户体验评估、产品优化建议...',
            link: 'https://my.feishu.cn/wiki/FFc4wH8y1iDu0Ck9vjLcoFW0nCh?from=from_copylink'
          },
          {
            title: '竞品营销内容研究',
            type: 'Research',
            description: '基于小红书平台的竞品营销策略分析，包含内容策略、用户互动、增长模式',
            date: '2025-09',
            tags: ['内容研究', '营销策略', '小红书'],
            preview: '平台生态分析、爆款内容拆解、用户行为洞察、营销策略建议...',
            link: 'https://my.feishu.cn/wiki/OCWew7MvniyRK2kK3aocuMS3nvo?from=from_copylink'
          },
          {
            title: '产品体验报告',
            type: 'Report',
            description: '深度产品体验分析与问题整理，包含用户旅程、痛点挖掘、优化方案',
            date: '2024-06',
            tags: ['产品体验', '用户研究', '问题分析'],
            preview: '体验流程梳理、核心问题识别、用户反馈整合、改进建议输出...',
            link: 'https://my.feishu.cn/wiki/VzfJwXF8OiuJ4RkDqTocO9pfnhe?from=from_copylink'
          },
          {
            title: '兴趣圈热点元素调研',
            type: 'Research',
            description: '恋与深空&韩女兴趣圈热点元素深度调研，洞察用户偏好与内容趋势',
            date: '2025-10',
            tags: ['用户调研', '热点分析', '内容趋势'],
            preview: '兴趣圈画像、热点元素提取、内容偏好分析、运营策略建议...',
            link: 'https://my.feishu.cn/wiki/Pp2AwSiGJiA4rwkCthhcDLzbnPb?from=from_copylink'
          }
        ]
      },
      skills: {
        title: '技能展示',
        categories: [
          {
            name: '产品设计',
            icon: '🎨',
            items: ['Axure', 'Figma', '原型设计', 'PRD撰写', '用户体验设计', '交互设计']
          },
          {
            name: '数据分析',
            icon: '📊',
            items: ['MySQL', 'Python', 'FineBI', 'Tableau', '数据可视化', '商务数据分析']
          },
          {
            name: '运营能力',
            icon: '📱',
            items: ['新媒体运营', '内容策划', '数据复盘', '竞品分析', 'A/B测试', '增长策略']
          },
          {
            name: '软技能',
            icon: '💡',
            items: ['需求分析', '项目管理', '团队协作', '用户调研', '市场分析', '沟通能力']
          }
        ]
      },
      contact: {
        title: '联系我',
        subtitle: '期待与您交流',
        info: [
          { icon: 'mail', label: '邮箱', value: '2655486219@qq.com', link: 'mailto:2655486219@qq.com' },
          { icon: 'phone', label: '电话', value: '153-2721-2973', link: 'tel:15327212973' },
          { icon: 'location', label: '位置', value: '武汉，中国', link: null },
          { icon: 'xiaohongshu', label: '小红书', value: 'HelloMoney💲🐈', link: 'https://www.xiaohongshu.com/user/profile/60246ed30000000001009a74' }
        ]
      },
      footer: {
        copyright: '© 2024 陈琳 (Lynn). 保留所有权利.',
        made: '用心制作'
      }
    },
    en: {
      nav: {
        home: 'Home',
        experience: 'Experience',
        projects: 'Projects',
        honors: 'Honors',
        skills: 'Skills',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello, I\'m',
        name: 'Lynn',
        description: 'Specialized in product design and data analysis, proficient in Axure and Figma for prototyping and PRD writing. Skilled in MySQL, Python, FineBI, and Tableau for data-driven insights. Experienced in operations and strategic planning with expertise in content planning and data review. Strong focus on requirement analysis, team collaboration, and project management.',
        cta: 'Education',
        contact: 'Contact Me'
      },
      resume: {
        title: 'Education Background',
        education: {
          title: 'Education',
          items: [
            {
              school: 'Huazhong University of Science & Technology',
              degree: 'Master of Library and Information Science',
              period: 'Sep 2025 ~ Present',
              courses: 'Soft Science Research, Information Theory & Practice, Quantitative Management Analysis, Knowledge Management & Innovation, Information Resource Retrieval, Case Analysis, Data Governance & System Design'
            },
            {
              school: 'Central China Normal University',
              degree: 'Bachelor of E-Commerce',
              period: 'Sep 2021 ~ Jun 2025',
              gpa: 'GPA: 85.70/100 | Top 10% | Outstanding Graduate',
              courses: 'Internet Product Design, UX Design, Market Research Methods, MySQL, Python Programming, Big Data Visualization, Business Data Analysis, Online Marketing, Management Statistics, Consumer Behavior'
            }
          ]
        },
        skills: {
          title: 'Core Competencies',
          items: [
            'Product Design: Axure, Figma, Prototyping, PRD Writing',
            'Data Analysis: MySQL, Python, FineBI, Tableau',
            'Operations: Social Media, Content Planning, Data Review',
            'Soft Skills: Requirement Analysis, Project Management, Team Collaboration'
          ]
        },
        honors: {
          title: 'Honors & Certifications',
          items: [
            'Database Engineer (Intermediate)',
            'Computer Level Exam (Level 2, 3, 4)',
            'CET-6: 540',
            'Outstanding Student, Scholarship Recipient'
          ]
        }
      },
      experience: {
        title: 'Work Experience',
        viewMore: 'View Details',
        viewLess: 'Collapse',
        jobs: [
          {
            company: 'Xuantu AI',
            role: 'Product Intern',
            period: 'Jul 2025 ~ Oct 2025',
            location: 'Remote',
            summary: 'Led multi-platform content strategy and product planning, achieved 3000+ followers growth in 3 months',
            duties: [
              'Developed multi-platform content strategies, created differentiated content to boost user engagement and conversion',
              'Participated in product feature planning, conducted competitive and user research, collected feedback',
              'Tracked core metrics, completed data reviews to support product iteration'
            ],
            achievements: [
              'Grew by 3,000 followers in 3 months, 140k+ likes, single post reached 500k+ views',
              'Multi-scenario strategy adopted by team for product feature decisions'
            ],
            tags: ['Content Strategy', 'Product Planning', 'Data Analysis', 'User Research']
          },
          {
            company: 'Yishang International',
            role: 'Live Streaming & Social Media Operations',
            period: 'Jun 2024 ~ Oct 2024',
            location: 'Wuhan',
            summary: 'Built accounts from 0 to 1, planned trending content and live streaming operations',
            duties: [
              'Built Douyin/Xiaohongshu accounts from scratch, planned trending content and campaigns',
              'Executed live streaming operations, designed interactive mechanics to boost user engagement'
            ],
            achievements: [
              'Successfully launched accounts on dual platforms from 0 to 1',
              'Planned multiple product live streams with enhanced user activity and conversion'
            ],
            tags: ['Live Streaming', 'Account Growth', 'Content Planning', 'Community']
          }
        ]
      },
      projects: {
        title: 'Project Experience',
        viewMore: 'View Details',
        viewLess: 'Collapse',
        list: [
          {
            name: 'Zhengda Cup National Competition',
            subtitle: 'Market Research & Analysis - 2nd Prize',
            period: 'Oct 2025 ~ May 2026',
            role: 'Team Member',
            team: '5-person team',
            summary: 'AI-powered elderly care market research, completed comprehensive analysis from problem definition to solution',
            description: 'Focused on AI home care, conducted systematic market research, identified user needs, and designed product service solutions, winning national 2nd prize.',
            responsibilities: 'Market research, user needs analysis, data modeling, solution design, report writing',
            process: [
              'Research Design: Designed research framework for AI home care theme',
              'Data Collection: Conducted surveys and in-depth interviews',
              'Data Analysis: Applied statistical modeling to extract insights',
              'Needs Discovery: Identified pain points based on data analysis',
              'Solution Design: Designed product service and marketing strategies'
            ],
            highlights: [
              'Delivered complete market analysis report covering market overview and competitive landscape',
              'Successfully identified user pain points and designed targeted solutions',
              'Clear data analysis and logical reasoning from problem definition to solution',
              'Awarded National 2nd Prize in Zhengda Cup Competition'
            ],
            metrics: {
              award: 'National 2nd Prize',
              duration: '8 months',
              methods: 'Survey+Interview+Modeling'
            },
            tags: ['Market Research', 'Data Analysis', 'User Research', 'Solution Design']
          },
          {
            name: 'ICooking',
            subtitle: 'Smart Recipe App - Course Project',
            period: 'Nov 2023 ~ Feb 2024',
            role: 'Project Lead',
            team: '5-person team',
            summary: 'Product design course project, completed requirement analysis and prototype design',
            description: 'A product design course project where we conceptualized an app that generates recipes based on user ingredients and preferences. Completed the basic process from requirement research to prototype design.',
            responsibilities: 'Requirement research, competitive analysis, feature planning, prototype design, documentation',
            process: [
              'User Research: Conducted surveys and interviews to understand cooking pain points',
              'Competitive Analysis: Studied existing recipe apps and analyzed features',
              'Feature Design: Planned basic functions including smart generation and recommendations',
              'Prototyping: Created interactive prototypes for main pages using Axure',
              'Documentation: Organized product requirements and documented design thinking'
            ],
            highlights: [
              'Completed product research and requirement analysis',
              'Created interactive prototypes using Axure covering core functions',
              'Wrote product requirement document organizing feature logic',
              'Learned complete product design process through this project'
            ],
            metrics: {
              duration: '4 months',
              deliverables: 'Prototype + PRD',
              tools: 'Axure'
            },
            tags: ['Course Project', 'Product Design', 'Axure', 'Requirements']
          },
          {
            name: 'PetCare',
            subtitle: 'Pet Health Management - Course Project',
            period: 'Sep 2023 ~ Nov 2025',
            role: 'Project Lead',
            team: '6-person team',
            summary: 'E-commerce course project, designed pet health management product prototype',
            description: 'A long-term course project where we designed an app concept for pet health management, including consultation, health records, and community features.',
            responsibilities: 'User research, requirement organization, feature design, prototype creation, documentation',
            process: [
              'User Research: Conducted surveys and interviews to understand pet owner needs',
              'Requirement Organization: Identified main features like consultation, records, and community',
              'Feature Design: Planned basic functions and interaction flows for each module',
              'Prototyping: Created product prototypes using Figma',
              'Documentation: Organized requirement documents and recorded design process'
            ],
            highlights: [
              'Planned 7 functional modules including consultation, records, guides, and community',
              'Gained requirement research experience through user interviews',
              'Completed product prototype design using Figma',
              'Organized detailed requirement documentation'
            ],
            metrics: {
              duration: '2 years',
              modules: '7 modules',
              tools: 'Figma'
            },
            tags: ['Course Project', 'Product Design', 'Figma', 'User Research']
          }
        ]
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Selected Works',
        items: [
          {
            title: 'ICooking Product Document',
            type: 'PRD',
            description: 'Complete product requirement document with market analysis',
            date: 'Feb 2024',
            tags: ['Product', 'Prototype', 'Interaction'],
            preview: 'User personas, architecture, flow diagrams, prototypes...',
            link: 'https://my.feishu.cn/wiki/F3ggwRD35iDTspkwhi9cl0Gtn2c?from=from_copylink'
          },
          {
            title: 'PetCare Prototype',
            type: 'Prototype',
            description: 'High-fidelity Figma prototype with 7 modules',
            date: 'Nov 2024',
            tags: ['Figma', 'Prototype', 'Interaction'],
            preview: 'Homepage, consultation flow, health records, community...',
            link: 'https://my.feishu.cn/wiki/BytCwxvgJiiRXokVQOEcQAdfnVe?from=from_copylink'
          },
          {
            title: 'Picwiz Competitive Analysis',
            type: 'Analysis',
            description: 'AI image generation tool market analysis with SWOT',
            date: 'Aug 2025',
            tags: ['Analysis', 'Research', 'SWOT'],
            preview: 'Market overview, feature matrix, UX evaluation...',
            link: 'https://my.feishu.cn/wiki/FFc4wH8y1iDu0Ck9vjLcoFW0nCh?from=from_copylink'
          },
          {
            title: 'Marketing Content Research',
            type: 'Research',
            description: 'Xiaohongshu platform competitive marketing strategy analysis',
            date: 'Sep 2025',
            tags: ['Content', 'Marketing', 'Xiaohongshu'],
            preview: 'Platform ecosystem, viral content breakdown, growth strategies...',
            link: 'https://my.feishu.cn/wiki/OCWew7MvniyRK2kK3aocuMS3nvo?from=from_copylink'
          },
          {
            title: 'Product Experience Report',
            type: 'Report',
            description: 'In-depth product experience analysis and issue identification',
            date: 'Jun 2024',
            tags: ['UX Research', 'Analysis', 'Optimization'],
            preview: 'User journey mapping, pain point discovery, improvement proposals...',
            link: 'https://my.feishu.cn/wiki/VzfJwXF8OiuJ4RkDqTocO9pfnhe?from=from_copylink'
          },
          {
            title: 'Fandom Trend Research',
            type: 'Research',
            description: 'Love and Deepspace & Korean trends fandom research',
            date: 'Oct 2025',
            tags: ['User Research', 'Trend Analysis', 'Content'],
            preview: 'Fandom profiling, trending elements, content preferences...',
            link: 'https://my.feishu.cn/wiki/Pp2AwSiGJiA4rwkCthhcDLzbnPb?from=from_copylink'
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          {
            name: 'Product Design',
            icon: '🎨',
            items: ['Axure', 'Figma', 'Prototyping', 'PRD', 'UX Design', 'Interaction']
          },
          {
            name: 'Data Analysis',
            icon: '📊',
            items: ['MySQL', 'Python', 'FineBI', 'Tableau', 'Visualization', 'Analytics']
          },
          {
            name: 'Operations',
            icon: '📱',
            items: ['Social Media', 'Content', 'Data Review', 'Analysis', 'A/B Testing', 'Growth']
          },
          {
            name: 'Soft Skills',
            icon: '💡',
            items: ['Requirements', 'Project Mgmt', 'Collaboration', 'Research', 'Market', 'Communication']
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Looking forward to connecting',
        info: [
          { icon: 'mail', label: 'Email', value: '2655486219@qq.com', link: 'mailto:2655486219@qq.com' },
          { icon: 'phone', label: 'Phone', value: '+86 153-2721-2973', link: 'tel:15327212973' },
          { icon: 'location', label: 'Location', value: 'Wuhan, China', link: null },
          { icon: 'xiaohongshu', label: 'Xiaohongshu', value: 'HelloMoney💲🐈', link: 'https://www.xiaohongshu.com/user/profile/60246ed30000000001009a74' }
        ]
      },
      footer: {
        copyright: '© 2024 Lynn (Chen Lin). All rights reserved.',
        made: 'Made with passion'
      }
    }
  };

  const t = content[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .portfolio {
          --color-bg: #f8f9fb;
          --color-text: #2d3748;
          --color-text-secondary: #64748b;
          
          /* 多彩色板 - 基于山水画配色 */
          --color-blue: #8fa8bd;
          --color-blue-light: #c5d7e5;
          --color-purple: #b8a8c8;
          --color-purple-light: #d4c4e0;
          --color-pink: #d4a6b8;
          --color-pink-light: #f0d8e0;
          --color-mint: #a8c5b0;
          --color-mint-light: #d0e8d5;
          --color-lavender: #c8b8d4;
          --color-cream: #f4f0e8;
          --color-lake: #7a9cb0;
          --color-mountain: #a8a0b8;
          
          --font-display: 'Playfair Display', serif;
          --font-body-en: 'Inter', sans-serif;
          --font-body-zh: 'Noto Sans SC', sans-serif;
          
          min-height: 100vh;
          background: linear-gradient(180deg, #f8f9fb 0%, #eef1f7 50%, #e8ebf2 100%);
          color: var(--color-text);
          font-family: var(--font-body-zh);
        }

        .portfolio.en {
          font-family: var(--font-body-en);
        }

        /* Language Toggle */
        .lang-toggle {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 1000;
          display: flex;
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(138, 168, 189, 0.25);
          overflow: hidden;
          border: 2px solid rgba(138, 168, 189, 0.3);
        }

        .lang-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-btn.active {
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          color: white;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          z-index: 999;
          padding: 1.5rem 3rem;
          transform: translateY(${isLoaded ? 0 : -100}%);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-lake), var(--color-mountain));
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section - 山水画风格背景 */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 3rem 4rem;
          position: relative;
          overflow: hidden;
          background-image: 
            linear-gradient(to bottom, 
              rgba(244, 240, 232, 0.3) 0%,
              rgba(244, 240, 232, 0.5) 15%,
              rgba(248, 249, 251, 0.7) 40%,
              rgba(248, 249, 251, 0.85) 70%,
              rgba(248, 249, 251, 0.95) 100%
            ),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 900"%3E%3Cdefs%3E%3ClinearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%23f4f0e8;stop-opacity:1" /%3E%3Cstop offset="25%" style="stop-color:%23e8dcd8;stop-opacity:1" /%3E%3Cstop offset="50%" style="stop-color:%23d8c8d0;stop-opacity:1" /%3E%3Cstop offset="75%" style="stop-color:%23c8b8d4;stop-opacity:0.8" /%3E%3C/linearGradient%3E%3ClinearGradient id="lake" x1="0%" y1="0%" x2="0%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%23a8c5d5;stop-opacity:0.6" /%3E%3Cstop offset="50%" style="stop-color:%238fa8bd;stop-opacity:0.7" /%3E%3Cstop offset="100%" style="stop-color:%237a9cb0;stop-opacity:0.8" /%3E%3C/linearGradient%3E%3CradialGradient id="sun" cx="50%" cy="50%" r="50%"%3E%3Cstop offset="0%" style="stop-color:%23fff8f0;stop-opacity:0.4" /%3E%3Cstop offset="50%" style="stop-color:%23f4e8d8;stop-opacity:0.2" /%3E%3Cstop offset="100%" style="stop-color:%23f4f0e8;stop-opacity:0" /%3E%3C/radialGradient%3E%3C/defs%3E%3C!-- Sky Background --%3E%3Crect width="1400" height="900" fill="url(%23sky)"/%3E%3C!-- Sun/Moon --%3E%3Cellipse cx="1100" cy="180" rx="80" ry="80" fill="url(%23sun)"/%3E%3Ccircle cx="1100" cy="180" r="50" fill="%23fff" opacity="0.6"/%3E%3C!-- Distant Mountains Layer 1 --%3E%3Cpath d="M0,350 Q150,280 300,320 T600,300 Q750,280 900,310 T1200,290 L1400,310 L1400,400 Q1200,420 1000,390 T600,410 Q400,430 200,410 L0,400 Z" fill="%23c8b8d4" opacity="0.15"/%3E%3C!-- Distant Mountains Layer 2 --%3E%3Cpath d="M0,380 Q200,310 400,350 T800,330 Q1000,310 1200,360 L1400,370 L1400,450 Q1200,470 1000,440 T600,460 Q300,480 0,460 Z" fill="%23b8a8c8" opacity="0.2"/%3E%3C!-- Main Mountains --%3E%3Cpath d="M0,450 Q100,380 200,430 Q350,390 500,460 Q650,410 800,470 Q950,430 1100,490 Q1250,450 1400,510 L1400,560 L0,560 Z" fill="%23a8a0b8" opacity="0.3"/%3E%3C!-- Peak Mountain --%3E%3Cpath d="M850,420 L1000,320 L1150,440 L1150,560 L850,560 Z" fill="%23988ca8" opacity="0.35"/%3E%3Cpath d="M950,340 L1000,320 L1050,340 L1050,380 L950,380 Z" fill="%23fff" opacity="0.3"/%3E%3C!-- Forest Foreground --%3E%3Cpath d="M0,520 Q150,500 300,530 T600,520 Q800,510 1000,540 T1400,530 L1400,650 L0,650 Z" fill="%23a8c5b0" opacity="0.35"/%3E%3Cpath d="M0,560 Q200,540 400,570 T800,560 Q1000,550 1200,580 L1400,590 L1400,650 L0,650 Z" fill="%23b4d4c8" opacity="0.3"/%3E%3C!-- Tree Silhouettes --%3E%3Cellipse cx="80" cy="550" rx="35" ry="55" fill="%23889ba8" opacity="0.25"/%3E%3Cellipse cx="120" cy="555" rx="28" ry="48" fill="%23889ba8" opacity="0.28"/%3E%3Cellipse cx="280" cy="560" rx="42" ry="62" fill="%23889ba8" opacity="0.22"/%3E%3Cellipse cx="340" cy="555" rx="38" ry="58" fill="%23889ba8" opacity="0.26"/%3E%3Cellipse cx="520" cy="558" rx="40" ry="60" fill="%23889ba8" opacity="0.24"/%3E%3Cellipse cx="580" cy="562" rx="35" ry="52" fill="%23889ba8" opacity="0.27"/%3E%3C!-- Lake Water --%3E%3Crect y="650" width="1400" height="250" fill="url(%23lake)"/%3E%3C!-- Water Reflections --%3E%3Cellipse cx="1000" cy="720" rx="120" ry="25" fill="%23988ca8" opacity="0.12"/%3E%3Cellipse cx="850" cy="760" rx="100" ry="20" fill="%23a8a0b8" opacity="0.1"/%3E%3C!-- Water Ripples --%3E%3Cellipse cx="250" cy="700" rx="140" ry="18" fill="%23c5d7e5" opacity="0.15"/%3E%3Cellipse cx="700" cy="750" rx="180" ry="22" fill="%23c5d7e5" opacity="0.12"/%3E%3Cellipse cx="1150" cy="720" rx="160" ry="20" fill="%23a8c5d5" opacity="0.18"/%3E%3C!-- Birds --%3E%3Cpath d="M200,250 Q205,245 210,250" stroke="%23889ba8" stroke-width="1.5" fill="none" opacity="0.3"/%3E%3Cpath d="M220,255 Q225,250 230,255" stroke="%23889ba8" stroke-width="1.5" fill="none" opacity="0.3"/%3E%3Cpath d="M350,280 Q355,275 360,280" stroke="%23889ba8" stroke-width="1.5" fill="none" opacity="0.25"/%3E%3Cpath d="M370,285 Q375,280 380,285" stroke="%23889ba8" stroke-width="1.5" fill="none" opacity="0.25"/%3E%3Cpath d="M390,290 Q395,285 400,290" stroke="%23889ba8" stroke-width="1.5" fill="none" opacity="0.25"/%3E%3C/svg%3E');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(122, 156, 176, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168, 160, 184, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-greeting {
          display: inline-block;
          font-size: 1rem;
          color: var(--color-text-secondary);
          font-weight: 500;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(138, 168, 189, 0.12);
          border-radius: 50px;
          border: 1px solid rgba(138, 168, 189, 0.25);
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : 20}px);
          transition: all 0.8s ease 0.2s;
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 400;
          line-height: 1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 50%, var(--color-pink) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : 40}px);
          transition: all 0.8s ease 0.3s;
        }

        .hero-description {
          max-width: 700px;
          font-size: 1.125rem;
          line-height: 1.9;
          color: var(--color-text-secondary);
          margin-bottom: 3rem;
          font-weight: 300;
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : 20}px);
          transition: all 0.8s ease 0.4s;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : 20}px);
          transition: all 0.8s ease 0.6s;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 0.9375rem;
          font-weight: 500;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(122, 156, 176, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(122, 156, 176, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          color: var(--color-lake);
          border: 2px solid var(--color-lake);
        }

        .btn-secondary:hover {
          background: var(--color-lake);
          color: white;
        }

        /* Section Styles */
        .section {
          padding: 6rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-compact {
          padding: 4rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header-compact {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 400;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title-compact {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 400;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.0625rem;
          color: var(--color-text-secondary);
          font-weight: 300;
        }


        /* Experience Section - Blue Lake Theme */
        #experience {
          background-image: 
            linear-gradient(rgba(248, 249, 251, 0.9), rgba(248, 249, 251, 0.9)),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Ccircle cx="100" cy="100" r="80" fill="%238fa8bd" opacity="0.1"/%3E%3Ccircle cx="1000" cy="150" r="100" fill="%23a8c5d5" opacity="0.08"/%3E%3Cpath d="M0,300 Q400,220 800,300 T1200,300 L1200,600 L0,600 Z" fill="%238fa8bd" opacity="0.06"/%3E%3C/svg%3E');
          background-size: cover;
          border-radius: 40px;
          margin: 2rem 0;
        }

        .experience-card {
          background: linear-gradient(135deg, rgba(143, 168, 189, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 4px 24px rgba(143, 168, 189, 0.12);
          transition: all 0.4s ease;
          border: 2px solid rgba(143, 168, 189, 0.15);
          cursor: pointer;
          margin-bottom: 2rem;
        }

        .experience-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 40px rgba(143, 168, 189, 0.25);
          border-color: var(--color-lake);
        }

        .experience-company {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text);
          letter-spacing: -0.01em;
        }

        .experience-role {
          color: var(--color-lake);
          font-size: 1.0625rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .experience-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .experience-summary {
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .tag {
          padding: 0.5rem 1rem;
          background: rgba(143, 168, 189, 0.12);
          color: var(--color-lake);
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 500;
          border: 1px solid rgba(143, 168, 189, 0.2);
        }

        .experience-expand-btn {
          color: var(--color-lake);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem 0.5rem 0;
        }

        .experience-expand-btn:hover {
          color: var(--color-mountain);
          gap: 0.75rem;
        }

        .experience-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(143, 168, 189, 0.2);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .experience-section {
          margin-bottom: 1.5rem;
        }

        .experience-section-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-lake);
          margin-bottom: 0.75rem;
        }

        .experience-list {
          list-style: none;
        }

        .experience-list li {
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          position: relative;
          line-height: 1.7;
          color: var(--color-text-secondary);
        }

        .experience-list li::before {
          content: '·';
          position: absolute;
          left: 0;
          color: var(--color-lake);
          font-weight: bold;
          font-size: 1.5rem;
        }

        /* Projects Section - Purple Mountain Theme */
        #projects {
          background-image: 
            linear-gradient(rgba(248, 249, 251, 0.9), rgba(248, 249, 251, 0.9)),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Ccircle cx="200" cy="400" r="120" fill="%23b8a8c8" opacity="0.1"/%3E%3Ccircle cx="900" cy="100" r="140" fill="%23c8b8d4" opacity="0.08"/%3E%3Cpath d="M0,400 Q300,320 600,400 T1200,400 L1200,600 L0,600 Z" fill="%23b8a8c8" opacity="0.06"/%3E%3C/svg%3E');
          background-size: cover;
          border-radius: 40px;
          margin: 2rem 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(184, 168, 200, 0.12);
          transition: all 0.4s ease;
          border: 2px solid rgba(184, 168, 200, 0.15);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 40px rgba(184, 168, 200, 0.25);
          border-color: var(--color-mountain);
        }

        .project-header {
          background: linear-gradient(135deg, var(--color-mountain) 0%, var(--color-lavender) 100%);
          padding: 2.5rem;
          color: white;
        }

        .project-name {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }

        .project-subtitle {
          font-size: 1.0625rem;
          opacity: 0.9;
          font-weight: 300;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          font-size: 0.875rem;
          opacity: 0.85;
        }

        .project-body {
          padding: 2.5rem;
        }

        .project-summary {
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-details {
          margin-top: 1.5rem;
          animation: slideDown 0.3s ease-out;
        }

        .project-section {
          margin-bottom: 1.5rem;
        }

        .project-section-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-mountain);
          margin-bottom: 0.75rem;
        }

        /* Portfolio Section - Pink Theme */
        #portfolio {
          background-image: 
            linear-gradient(rgba(248, 249, 251, 0.9), rgba(248, 249, 251, 0.9)),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Ccircle cx="300" cy="150" r="100" fill="%23d4a6b8" opacity="0.1"/%3E%3Ccircle cx="1000" cy="400" r="120" fill="%23f0d8e0" opacity="0.08"/%3E%3Cpath d="M0,350 Q400,270 800,350 T1200,350 L1200,600 L0,600 Z" fill="%23d4a6b8" opacity="0.06"/%3E%3C/svg%3E');
          background-size: cover;
          border-radius: 40px;
          margin: 2rem 0;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .portfolio-card {
          background: linear-gradient(135deg, rgba(212, 166, 184, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 4px 24px rgba(212, 166, 184, 0.12);
          transition: all 0.4s ease;
          border: 2px solid rgba(212, 166, 184, 0.15);
          cursor: pointer;
        }

        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 40px rgba(212, 166, 184, 0.25);
          border-color: var(--color-pink);
        }

        .portfolio-type {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, var(--color-pink) 0%, var(--color-pink-light) 100%);
          color: white;
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .portfolio-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.75rem;
        }

        .portfolio-description {
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .portfolio-date {
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        /* Skills Section - Mint Green Theme - COMPRESSED */
        #skills {
          background-image: 
            linear-gradient(rgba(248, 249, 251, 0.9), rgba(248, 249, 251, 0.9)),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Ccircle cx="150" cy="200" r="110" fill="%23a8c5b0" opacity="0.1"/%3E%3Ccircle cx="950" cy="300" r="130" fill="%23b4d4c8" opacity="0.08"/%3E%3Cpath d="M0,380 Q350,300 700,380 T1200,380 L1200,600 L0,600 Z" fill="%23a8c5b0" opacity="0.06"/%3E%3C/svg%3E');
          background-size: cover;
          border-radius: 40px;
          margin: 2rem 0;
          padding: 3rem 3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(168, 197, 176, 0.12);
          transition: all 0.4s ease;
          border: 2px solid rgba(168, 197, 176, 0.15);
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(168, 197, 176, 0.25);
          border-color: var(--color-mint);
        }

        .skill-card:nth-child(1) {
          background: linear-gradient(135deg, rgba(143, 168, 189, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          border-color: rgba(143, 168, 189, 0.15);
        }

        .skill-card:nth-child(2) {
          background: linear-gradient(135deg, rgba(212, 166, 184, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          border-color: rgba(212, 166, 184, 0.15);
        }

        .skill-card:nth-child(3) {
          background: linear-gradient(135deg, rgba(184, 168, 200, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          border-color: rgba(184, 168, 200, 0.15);
        }

        .skill-card:nth-child(4) {
          background: linear-gradient(135deg, rgba(168, 197, 176, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%);
          border-color: rgba(168, 197, 176, 0.15);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          font-size: 1.5rem;
        }

        .skill-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          padding: 0.375rem 0.75rem;
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-text);
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid rgba(168, 197, 176, 0.25);
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, var(--color-mint) 0%, var(--color-blue) 100%);
          color: white;
          transform: scale(1.05);
          border-color: transparent;
        }

        /* Honors Section - Lavender Theme */
        #honors {
          background-image: 
            linear-gradient(rgba(248, 249, 251, 0.9), rgba(248, 249, 251, 0.9)),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Ccircle cx="200" cy="120" r="100" fill="%23c8b8d4" opacity="0.12"/%3E%3Ccircle cx="950" cy="250" r="120" fill="%23d4c4e0" opacity="0.1"/%3E%3Cpath d="M0,320 Q350,260 700,320 T1200,320 L1200,600 L0,600 Z" fill="%23c8b8d4" opacity="0.08"/%3E%3C/svg%3E');
          background-size: cover;
          border-radius: 40px;
          margin: 2rem 0;
          padding: 4rem 3rem;
        }

        .honors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .honor-card {
          background: linear-gradient(135deg, rgba(200, 184, 212, 0.08) 0%, rgba(255, 255, 255, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 1.75rem;
          box-shadow: 0 4px 20px rgba(200, 184, 212, 0.15);
          transition: all 0.4s ease;
          border: 2px solid rgba(200, 184, 212, 0.2);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .honor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(200, 184, 212, 0.25);
          border-color: var(--color-lavender);
        }

        .honor-icon {
          font-size: 2rem;
          filter: grayscale(0.1);
        }

        .honor-text {
          flex: 1;
          color: var(--color-text);
          font-size: 0.9375rem;
          line-height: 1.5;
          font-weight: 500;
        }

        /* Contact Section - COMPRESSED */
        .contact-section {
          background: linear-gradient(135deg, rgba(168, 197, 176, 0.1) 0%, rgba(143, 168, 189, 0.08) 100%);
          border-radius: 28px;
          padding: 2.5rem 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
          border: 2px solid rgba(168, 197, 176, 0.2);
        }

        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 300;
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
        }

        .contact-subtitle {
          font-size: 0.9375rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 1.75rem;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: var(--color-text);
          border: 2px solid rgba(168, 197, 176, 0.25);
          min-width: 280px;
          justify-content: center;
          font-size: 0.9rem;
        }

        .contact-item:hover {
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mint) 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(168, 197, 176, 0.3);
          transform: translateY(-2px);
          border-color: transparent;
        }

        .contact-item:hover .contact-icon {
          color: white;
        }

        .contact-icon {
          color: var(--color-lake);
          transition: color 0.3s ease;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          background: linear-gradient(135deg, var(--color-lake) 0%, var(--color-mountain) 50%, var(--color-pink) 100%);
          color: white;
          padding: 2rem;
          border-radius: 24px 24px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 300;
        }

        .modal-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 2rem;
        }

        .resume-section {
          margin-bottom: 3rem;
        }

        .resume-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-lake);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .resume-item {
          background: rgba(143, 168, 189, 0.06);
          padding: 1.5rem;
          border-radius: 16px;
          margin-bottom: 1rem;
          border-left: 3px solid var(--color-lake);
        }

        .resume-item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .resume-item-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .resume-item-period {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .resume-item-subtitle {
          color: var(--color-lake);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .resume-list {
          list-style: none;
          margin-top: 1rem;
        }

        .resume-list li {
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          position: relative;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }

        .resume-list li::before {
          content: '·';
          position: absolute;
          left: 0;
          color: var(--color-lake);
          font-weight: bold;
          font-size: 1.5rem;
        }

        /* Footer */
        .footer {
          padding: 2.5rem 3rem;
          text-align: center;
        }

        .footer-text {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .lang-toggle {
            bottom: 1rem;
            left: 1rem;
          }

          .nav {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            gap: 1.25rem;
            font-size: 0.8125rem;
          }

          .hero {
            padding: 6rem 1.5rem 3rem;
          }

          .section {
            padding: 3rem 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .contact-item {
            min-width: auto;
            width: 100%;
          }
        }
      `}</style>

      <div className={language === 'en' ? 'en' : ''}>
        {/* Language Toggle */}
        <div className="lang-toggle">
          <button
            className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
            onClick={() => setLanguage('zh')}
          >
            中文
          </button>
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-logo" onClick={() => scrollToSection('home')}>
              {language === 'zh' ? '陈琳' : 'Lynn'}
            </div>
            <ul className="nav-links">
              {Object.entries(t.nav).map(([key, label]) => (
                <li
                  key={key}
                  className={`nav-link ${activeSection === key ? 'active' : ''}`}
                  onClick={() => scrollToSection(key)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-greeting">{t.hero.greeting}</div>
            <h1 className="hero-name">{t.hero.name}</h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => setShowResume(true)}>
                <FileText size={18} />
                {t.hero.cta}
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                {t.hero.contact}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>


        {/* Resume Modal */}
        {showResume && (
          <div className="modal-overlay" onClick={() => setShowResume(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">{t.resume.title}</h2>
                <button className="modal-close" onClick={() => setShowResume(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                {/* Education Background */}
                {t.resume.education.items.map((item, index) => (
                  <div key={index} className="resume-section">
                    <div className="resume-item">
                      <div className="resume-item-header">
                        <div className="resume-item-title">{item.school}</div>
                        <div className="resume-item-period">{item.period}</div>
                      </div>
                      <div className="resume-item-subtitle">{item.degree}</div>
                      {item.gpa && <div style={{ color: 'var(--color-lake)', marginBottom: '0.5rem', fontWeight: '500' }}>{item.gpa}</div>}
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
                        <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                          {language === 'zh' ? '主修课程：' : 'Courses: '}
                        </span>
                        {item.courses}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2 className="section-title">{t.experience.title}</h2>
          </div>
          <div>
            {t.experience.jobs.map((job, index) => (
              <div 
                key={index} 
                className={`experience-card ${expandedExperience === index ? 'expanded' : ''}`}
              >
                <h3 className="experience-company">{job.company}</h3>
                <div className="experience-role">{job.role}</div>
                <div className="experience-meta">
                  <span><Calendar size={14} /> {job.period}</span>
                  <span><MapPin size={14} /> {job.location}</span>
                </div>
                <p className="experience-summary">{job.summary}</p>
                <div className="tag-list">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="experience-expand-btn"
                  onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                >
                  {expandedExperience === index ? t.experience.viewLess : t.experience.viewMore}
                  <ChevronDown size={16} style={{ 
                    transform: expandedExperience === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} />
                </button>
                {expandedExperience === index && (
                  <div className="experience-details">
                    <div className="experience-section">
                      <h4 className="experience-section-title">
                        {language === 'zh' ? '工作内容' : 'Responsibilities'}
                      </h4>
                      <ul className="experience-list">
                        {job.duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="experience-section">
                      <h4 className="experience-section-title">
                        {language === 'zh' ? '工作成果' : 'Achievements'}
                      </h4>
                      <ul className="experience-list">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <div className="projects-grid">
            {t.projects.list.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
              >
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-meta">
                    <span>{project.role}</span>
                    <span>{project.period}</span>
                  </div>
                </div>
                <div className="project-body">
                  <p className="project-summary">{project.summary}</p>
                  <div className="tag-list">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button 
                    className="experience-expand-btn"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  >
                    {expandedProject === index ? t.projects.viewLess : t.projects.viewMore}
                    <ChevronDown size={16} style={{ 
                      transform: expandedProject === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </button>
                  {expandedProject === index && (
                    <div className="project-details">
                      <div className="project-section">
                        <h4 className="project-section-title">
                          {language === 'zh' ? '项目简介' : 'Overview'}
                        </h4>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                          {project.description}
                        </p>
                      </div>
                      <div className="project-section">
                        <h4 className="project-section-title">
                          {language === 'zh' ? '工作流程' : 'Process'}
                        </h4>
                        <ul className="experience-list">
                          {project.process.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-section">
                        <h4 className="project-section-title">
                          {language === 'zh' ? '成果亮点' : 'Highlights'}
                        </h4>
                        <ul className="experience-list">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-section">
                        <h4 className="project-section-title">
                          {language === 'zh' ? '数据指标' : 'Metrics'}
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                          {Object.entries(project.metrics).map(([key, value], i) => {
                            const metricLabels = {
                              zh: { users: '用户规模', satisfaction: '满意度', efficiency: '效率提升', modules: '模块数', prd: '文档' },
                              en: { users: 'Users', satisfaction: 'Satisfaction', efficiency: 'Efficiency', modules: 'Modules', prd: 'PRD' }
                            };
                            return (
                              <div key={i} style={{ 
                                background: 'rgba(184, 168, 200, 0.1)', 
                                padding: '1.25rem', 
                                borderRadius: '16px',
                                flex: '1',
                                minWidth: '150px',
                                border: '1px solid rgba(184, 168, 200, 0.2)'
                              }}>
                                <div style={{ color: 'var(--color-mountain)', fontWeight: '600', fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
                                  {metricLabels[language][key] || key}
                                </div>
                                <div style={{ color: 'var(--color-text)', fontWeight: '700', fontSize: '1.125rem' }}>
                                  {value}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}

        {/* Honors Section */}
        <section id="honors" className="section-compact">
          <div className="section-header-compact">
            <h2 className="section-title-compact">{t.resume.honors.title}</h2>
          </div>
          <div className="honors-grid">
            {t.resume.honors.items.map((item, index) => (
              <div key={index} className="honor-card">
                <span className="honor-icon">🏆</span>
                <div className="honor-text">{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-compact">
          <div className="section-header-compact">
            <h2 className="section-title-compact">{t.skills.title}</h2>
          </div>
          <div className="skills-grid">
            {t.skills.categories.map((category, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3 className="skill-name">{category.name}</h3>
                </div>
                <div className="skill-items">
                  {category.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <div className="section-header">
            <h2 className="section-title">{t.portfolio.title}</h2>
            <p className="section-subtitle">{t.portfolio.subtitle}</p>
          </div>
          <div className="portfolio-grid">
            {t.portfolio.items.map((item, index) => (
              <div 
                key={index} 
                className="portfolio-card"
                onClick={() => setSelectedPortfolio(selectedPortfolio === index ? null : index)}
              >
                <span className="portfolio-type">{item.type}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <div className="portfolio-date">{item.date}</div>
                <div className="tag-list">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                {selectedPortfolio === index && (
                  <div style={{ 
                    marginTop: '1.25rem', 
                    padding: '1.25rem', 
                    background: 'rgba(212, 166, 184, 0.08)', 
                    borderRadius: '16px',
                    borderLeft: '3px solid var(--color-pink)'
                  }}>
                    <div style={{ 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.7,
                      fontSize: '0.9rem',
                      marginBottom: '1rem'
                    }}>
                      {item.preview}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.link, '_blank');
                      }}
                      style={{
                      padding: '0.625rem 1.25rem',
                      background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-lavender) 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}>
                      {language === 'zh' ? '查看完整文档' : 'View Full Document'} <ExternalLink size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-compact">
          <div className="contact-section">
            <div className="contact-content">
              <h2 className="contact-title">{t.contact.title}</h2>
              <p className="contact-subtitle">{t.contact.subtitle}</p>
              <div className="contact-info">
                {t.contact.info.map((item, index) => (
                  item.link ? (
                    <a key={index} href={item.link} className="contact-item" target={item.icon === 'xiaohongshu' ? '_blank' : undefined} rel={item.icon === 'xiaohongshu' ? 'noopener noreferrer' : undefined}>
                      {item.icon === 'mail' && <Mail className="contact-icon" size={20} />}
                      {item.icon === 'phone' && <Phone className="contact-icon" size={20} />}
                      {item.icon === 'xiaohongshu' && <Sparkles className="contact-icon" size={20} />}
                      <span>{item.value}</span>
                    </a>
                  ) : (
                    <div key={index} className="contact-item">
                      <MapPin className="contact-icon" size={20} />
                      <span>{item.value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">{t.footer.copyright}</p>
        </footer>
      </div>
    </div>
  );
}
