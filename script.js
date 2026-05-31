const translations = {
    pt: {
    'nav.skills': 'Skills',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'hero.tag': 'Disponível para novos projetos',
    'hero.sub': 'Desenvolvedor Full Stack com mais de 5 anos de experiência em sistemas web, mobile e integrações complexas — conectando plataformas financeiras, ERPs e gateways de pagamento com código limpo e foco em impacto real.',
    'hero.stat1': 'Anos de exp.',
    'hero.cta': 'Entrar em contato →',
    'skills.label': '// Stack Técnico',
    'skills.title': 'Tecnologias &<br>Ferramentas',
    'skills.multiplatform': 'Multiplataforma',
    'skills.db': 'Banco de Dados',
    'skills.modeling': 'Modelagem',
    'skills.optim': 'Otimização',
    'skills.integrations': 'Integrações',
    'exp.label': '// Trajetória',
    'exp.title': 'Experiência<br>Profissional',
    'exp.role': 'Desenvolvedor Full Stack',
    'exp.aia.period': 'Fev 2025 — Presente',
    'exp.aia.desc': 'Desenvolvimento e arquitetura de sistemas web e mobile para múltiplos clientes, com foco em automação financeira e escalabilidade.',
    'exp.aia.b1': 'Integração SAP ERP via API REST/Service Layer — emissão de NF, conciliação contábil e controle financeiro automatizados',
    'exp.aia.b2': 'Automação de cobranças recorrentes com Asaas, IUGU e Sicoob em PHP/Laravel, com tratamento de webhooks e inadimplência',
    'exp.aia.b3': 'Interfaces SPA em Vue.js e React.js; apps mobile multiplataforma em Flutter',
    'exp.aia.b4': 'Infra em Docker e Laravel Forge em servidores Linux; code review e Gitflow em times ágeis',
    'exp.anadem.period': 'Mai 2023 — Fev 2025',
    'exp.anadem.desc': 'Responsável pelos sistemas principais da instituição: portal Anadem Online, app mobile e sistema financeiro SisAnadem.',
    'exp.anadem.b1': 'Construção do ecossistema de APIs RESTful em PHP/Laravel com foco em segurança e performance',
    'exp.anadem.b2': 'App mobile (Android/iOS) em Flutter e plataforma web em Vue.js',
    'exp.anadem.b3': 'Modelagem e otimização de queries para relatórios financeiros em MySQL',
    'exp.anadem.b4': 'Levantamento de requisitos com stakeholders internos, traduzindo demandas em soluções técnicas',
    'exp.zehta.period': 'Mai 2022 — Mai 2023',
    'exp.zehta.desc': 'Desenvolvimento de sistemas web e mobile sob demanda para clientes de diferentes segmentos.',
    'exp.zehta.b1': 'App para corretores com propostas digitais e assinatura eletrônica integrada — eliminou contratos físicos e reduziu tempo de fechamento',
    'exp.zehta.b2': 'Back-end em PHP/Laravel, interfaces em Vue.js e apps em Flutter',
    'exp.zehta.b3': 'Integração com APIs de autenticação e geolocalização',
    'exp.synapse.period': 'Jan 2021 — Jun 2022',
    'exp.synapse.desc': 'Atuação em múltiplos projetos em software house, com stacks e contextos variados.',
    'exp.synapse.b1': 'Back-end em PHP (Laravel/Lumen) e Node.js com AdonisJS',
    'exp.synapse.b2': 'Front-end em Vue.js, React.js e Angular; mobile em Flutter',
    'exp.synapse.b3': 'Experiência em diferentes arquiteturas e metodologias ágeis em projetos simultâneos',
    'contact.label': '// Vamos conversar',
    'contact.title': 'Entre em<br>Contato',
    'contact.text': 'Aberto a oportunidades de trabalho. Se você tem um problema interessante para resolver, me chama. ',
    'contact.linkedin': 'LinkedIn →',
    'contact.email': 'E-mail',
    },
    en: {
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.tag': 'Available for new projects',
    'hero.sub': 'Full Stack Developer with 5+ years of experience in web systems, mobile apps, and complex integrations — connecting financial platforms, ERPs, and payment gateways with clean code and a focus on real business impact.',
    'hero.stat1': 'Years of exp.',
    'hero.cta': 'Get in touch →',
    'skills.label': '// Tech Stack',
    'skills.title': 'Technologies &<br>Tools',
    'skills.multiplatform': 'Cross-platform',
    'skills.db': 'Database',
    'skills.modeling': 'Modeling',
    'skills.optim': 'Optimization',
    'skills.integrations': 'Integrations',
    'exp.label': '// Career',
    'exp.title': 'Work<br>Experience',
    'exp.role': 'Full Stack Developer',
    'exp.aia.period': 'Feb 2025 — Present',
    'exp.aia.desc': 'Development and architecture of web and mobile systems for multiple clients, focused on financial automation and scalability.',
    'exp.aia.b1': 'SAP ERP integration via REST API/Service Layer — automated invoice issuance, accounting reconciliation, and financial control',
    'exp.aia.b2': 'Recurring billing automation with Asaas, IUGU and Sicoob in PHP/Laravel, with webhook handling and delinquency rules',
    'exp.aia.b3': 'SPA interfaces in Vue.js and React.js; cross-platform mobile apps in Flutter',
    'exp.aia.b4': 'Infrastructure with Docker and Laravel Forge on Linux servers; code review and Gitflow in agile teams',
    'exp.anadem.period': 'May 2023 — Feb 2025',
    'exp.anadem.desc': 'Responsible for the main systems of the institution: Anadem Online portal, mobile app, and SisAnadem financial system.',
    'exp.anadem.b1': 'Built RESTful API ecosystem in PHP/Laravel focused on security, performance, and data integrity',
    'exp.anadem.b2': 'Mobile app (Android/iOS) in Flutter and web platform in Vue.js',
    'exp.anadem.b3': 'Schema design and query optimization for financial reports in MySQL',
    'exp.anadem.b4': 'Requirements gathering and alignment with internal stakeholders, translating operational needs into technical solutions',
    'exp.zehta.period': 'May 2022 — May 2023',
    'exp.zehta.desc': 'On-demand web and mobile system development for clients across different industries.',
    'exp.zehta.b1': 'App for insurance brokers with digital proposals and integrated e-signature — eliminated paper contracts and reduced closing time',
    'exp.zehta.b2': 'Back-end in PHP/Laravel, interfaces in Vue.js and apps in Flutter',
    'exp.zehta.b3': 'Integration with third-party authentication and geolocation APIs',
    'exp.synapse.period': 'Jan 2021 — Jun 2022',
    'exp.synapse.desc': 'Worked across multiple projects in a software house, with varied stacks and contexts.',
    'exp.synapse.b1': 'Back-end in PHP (Laravel/Lumen) and Node.js with AdonisJS',
    'exp.synapse.b2': 'Front-end in Vue.js, React.js and Angular; mobile in Flutter',
    'exp.synapse.b3': 'Experience with different architectures and agile methodologies across simultaneous projects',
    'contact.label': "// Let's talk",
    'contact.title': 'Get in<br>Touch',
    'contact.text': "Open to work opportunities. If you have an interesting problem to solve, let's talk.",
    'contact.linkedin': 'LinkedIn →',
    'contact.email': 'Email',
    },
    es: {
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.tag': 'Disponible para nuevos proyectos',
    'hero.sub': 'Desarrollador Full Stack con más de 5 años de experiencia en sistemas web, aplicaciones móviles e integraciones complejas — conectando plataformas financieras, ERPs y pasarelas de pago con código limpio y enfoque en el impacto real del negocio.',
    'hero.stat1': 'Años de exp.',
    'hero.cta': 'Ponerse en contacto →',
    'skills.label': '// Stack Técnico',
    'skills.title': 'Tecnologías &<br>Herramientas',
    'skills.multiplatform': 'Multiplataforma',
    'skills.db': 'Base de Datos',
    'skills.modeling': 'Modelado',
    'skills.optim': 'Optimización',
    'skills.integrations': 'Integraciones',
    'exp.label': '// Trayectoria',
    'exp.title': 'Experiencia<br>Profesional',
    'exp.role': 'Desarrollador Full Stack',
    'exp.aia.period': 'Feb 2025 — Presente',
    'exp.aia.desc': 'Desarrollo y arquitectura de sistemas web y móviles para múltiples clientes, con enfoque en automatización financiera y escalabilidad.',
    'exp.aia.b1': 'Integración de SAP ERP a través de API REST/Service Layer — emisión de facturas, conciliación contable y control financiero automatizados',
    'exp.aia.b2': 'Automatización de facturación recurrente con Asaas, IUGU y Sicoob en PHP/Laravel, con manejo de webhooks y reglas de morosidad',
    'exp.aia.b3': 'Interfaces SPA en Vue.js y React.js; aplicaciones móviles multiplataforma en Flutter',
    'exp.aia.b4': 'Infraestructura con Docker y Laravel Forge en servidores Linux; code review y Gitflow en equipos ágiles',
    'exp.anadem.period': 'May 2023 — Feb 2025',
    'exp.anadem.desc': 'Responsable de los sistemas principales de la institución: portal Anadem Online, aplicación móvil y sistema financiero SisAnadem.',
    'exp.anadem.b1': 'Construcción de un ecosistema de APIs RESTful en PHP/Laravel con enfoque en seguridad, rendimiento e integridad de datos',
    'exp.anadem.b2': 'Aplicación móvil (Android/iOS) en Flutter y plataforma web en Vue.js',
    'exp.anadem.b3': 'Diseño de esquemas y optimización de consultas para informes financieros en MySQL',
    'exp.anadem.b4': 'Levantamiento de requerimientos y alineación con stakeholders internos, traduciendo necesidades operativas en soluciones técnicas',
    'exp.zehta.period': 'May 2022 — May 2023',
    'exp.zehta.desc': 'Desarrollo de sistemas web y móviles bajo demanda para clientes de diferentes industrias.',
    'exp.zehta.b1': 'Aplicación para corredores de seguros con propuestas digitales y firma electrónica integrada — eliminó contratos físicos y redujo el tiempo de cierre',
    'exp.zehta.b2': 'Back-end en PHP/Laravel, interfaces en Vue.js y aplicaciones en Flutter',
    'exp.zehta.b3': 'Integración con APIs de autenticación de terceros y geolocalización',
    'exp.synapse.period': 'Ene 2021 — Jun 2022',
    'exp.synapse.desc': 'Desempeño en múltiples proyectos dentro de una software house, con tecnologías y contextos variados.',
    'exp.synapse.b1': 'Back-end en PHP (Laravel/Lumen) y Node.js con AdonisJS',
    'exp.synapse.b2': 'Front-end en Vue.js, React.js y Angular; móvil en Flutter',
    'exp.synapse.b3': 'Experiencia en diferentes arquitecturas y metodologías ágiles en proyectos simultáneos',
    'contact.label': '// Hablemos',
    'contact.title': 'Ponte en<br>Contacto',
    'contact.text': 'Abierto a oportunidades de trabajo. Si tienes un problema interesante que resolver, contáctame.',
    'contact.linkedin': 'LinkedIn →',
    'contact.email': 'Correo electrónico',
    },
    cn: {
    'nav.skills': '技术栈',
    'nav.experience': '项目经验',
    'nav.contact': '联系我',
    'hero.tag': '可承接新项目',
    'hero.sub': '全栈开发人员，拥有超过 5 年的 Web 和移动系统以及复杂集成经验——通过简洁的代码和对实际影响的关注，连接金融平台、ERP 和支付网关。',
    'hero.stat1': '从业年限',
    'hero.cta': '立即联系 →',
    'skills.label': '// 技术栈',
    'skills.title': '技术 &<br>工具',
    'skills.multiplatform': '跨平台开发',
    'skills.db': '数据库',
    'skills.modeling': '数据建模',
    'skills.optim': '性能优化',
    'skills.integrations': '第三方集成',
    'exp.label': '// 职业历程',
    'exp.title': '工作<br>经历',
    'exp.role': 'Full Stack 全栈开发工程师',
    'exp.aia.period': '2025年2月 — 至今',
    'exp.aia.desc': '负责多个客户的 Web 及移动端系统的架构与开发，主攻金融自动化与高扩展性系统。',
    'exp.aia.b1': '基于 REST API/Service Layer 实现 SAP ERP 系统集成 —— 实现自动化开票、财务对账与财务控制',
    'exp.aia.b2': '基于 PHP/Laravel 开发 Asaas、IUGU 和 Sicoob 的周期性自动扣款系统，完美处理 Webhooks 及逾期催收逻辑',
    'exp.aia.b3': '使用 Vue.js 和 React.js 构建 SPA 单页应用前端；使用 Flutter 开发跨平台移动端 App',
    'exp.aia.b4': '基于 Linux 服务器部署 Docker 及 Laravel Forge 基础设施；在敏捷团队中主导 Code Review 与 Gitflow 流程',
    'exp.anadem.period': '2023年5月 — 2025年2月',
    'exp.anadem.desc': '核心系统负责人，全面负责 Anadem Online 门户网站、移动端 App 及 SisAnadem 财务系统的核心开发。',
    'exp.anadem.b1': '基于 PHP/Laravel 构建 RESTful API 生态系统，专注于保障系统安全性、高性能与数据完整性',
    'exp.anadem.b2': '使用 Flutter 开发移动端（Android/iOS）应用，并使用 Vue.js 构建 Web 平台',
    'exp.anadem.b3': '针对 MySQL 数据库进行架构设计与 SQL 查询优化，用于高效产出财务报表',
    'exp.anadem.b4': '与内部利益相关者进行需求调研与对齐，将复杂的业务运营需求转化为成熟的技术解决方案',
    'exp.zehta.period': '2022年5月 — 2023年5月',
    'exp.zehta.desc': '根据定制化需求，为不同行业的客户开发 Web 及移动端系统。',
    'exp.zehta.b1': '为保险经纪人开发包含电子提案与集成电子签名的 App —— 完全省去纸质合同，大幅缩减签约周期',
    'exp.zehta.b2': '负责 PHP/Laravel 后端开发、Vue.js 前端界面构建以及 Flutter 移动端 App 开发',
    'exp.zehta.b3': '集成第三方鉴权服务与地理位置定位（Geolocation）API',
    'exp.synapse.period': '2021年1月 — 2022年6月',
    'exp.synapse.desc': '在软件开发服务商（Software House）任职，参与多个不同技术栈和业务背景的项目。',
    'exp.synapse.b1': '使用 PHP (Laravel/Lumen) 和基于 Node.js 的 AdonisJS 进行后端开发',
    'exp.synapse.b2': '使用 Vue.js、React.js 和 Angular 进行前端构建；使用 Flutter 开发移动端',
    'exp.synapse.b3': '在多项目并发环境中，具备丰富的差异化架构设计与敏捷开发流程实践经验',
    'contact.label': '// 聊聊合作',
    'contact.title': '取得<br>联系',
    'contact.text': '积极寻找工作机会。如果您有亟待解决的有趣技术难题，欢迎联系我。',
    'contact.linkedin': 'LinkedIn 领英 →',
    'contact.email': '电子邮箱',
    }
};

let currentLang = 'pt';

function setLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;

    // change active button state
    ['pt', 'en', 'cn', 'es'].forEach(l => {
    document.getElementById(`btn-${l}`).classList.toggle('active', lang === l);
    });

    // update lang attribute for accessibility and SEO
    switch (lang) {
    case 'pt': document.documentElement.lang = 'pt-BR'; break;
    case 'en': document.documentElement.lang = 'en'; break;
    case 'cn': document.documentElement.lang = 'zh-CN'; break;
    case 'es': document.documentElement.lang = 'es-ES'; break;
    default: document.documentElement.lang = 'pt-BR';
    }

    // fade out animation
    const els = document.querySelectorAll('[data-i18n]');
    els.forEach(el => el.classList.add('lang-fade'));

    setTimeout(() => {
    els.forEach(el => {
        const key = el.getAttribute('data-i18n');

        const text = translations[lang][key]; 
        
        if (text !== undefined) {
        el.innerHTML = text;
        }
    });

    // Remove animation class after update
    els.forEach(el => el.classList.remove('lang-fade'));
    }, 200);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));