export const portfolioData = {
  personal: {
    name: 'Shubham Rajiwade',
    title: 'Data Analyst & Salesforce Professional',
    tagline: 'Turning raw data into decisions. Bridging Salesforce ecosystems with analytical depth.',
    location: 'Boston, MA',
    email: 'rajiwade.s@northeastern.edu',
    github: 'https://github.com/shubhamrajiwade29',
    linkedin: 'https://www.linkedin.com/in/shubhamrajiwade',
    education: 'MSEM @ Northeastern University (Dec 2026)',
    currentRole: 'Data Analyst Co-op @ Home Base · MGB',
  },

  about: `I'm a data professional with a Salesforce backbone, 4 years at Deloitte and TCS delivering enterprise CRM solutions, now going deeper into analytics while pursuing my MSEM at Northeastern and doing Healthcare analytics for a veteran support program at Mass General Brigham.

  I hold 5 Salesforce certifications and a toolkit spanning SQL, Python, Tableau, dbt, and cloud platforms. Hospital readmission models, enterprise CRMs, product roadmaps - whatever the problem, I care about one thing: making data actually drive decisions.`,

  skills: {
    data: ['SQL', 'Python', 'Tableau', 'Power BI', 'dbt', 'Pandas', 'Matplotlib'],
    cloud: ['AWS', 'Azure (ADF + Databricks)', 'GitHub Actions', 'Snowflake'],
    salesforce: ['Sales Cloud', 'Service Cloud', 'Experience Cloud', 'Flow Builder', 'Apex (basics)', 'SOQL'],
    tools: ['React', 'Vite', 'FastAPI', 'MySQL', 'Jira', 'Figma', 'MS Project'],
  },

  certifications: [
    { name: 'Salesforce Administrator', credential: 'Salesforce Certified Administrator', year: '2021', badge: 'ADM' },
    { name: 'Platform Developer I', credential: 'Salesforce Certified Platform Developer I', year: '2021', badge: 'PD1' },
    { name: 'Platform App Builder', credential: 'Salesforce Certified Platform App Builder', year: '2022', badge: 'PAB' },
    { name: 'Sales Cloud Consultant', credential: 'Salesforce Certified Sales Cloud Consultant', year: '2022', badge: 'SCC' },
    { name: 'JavaScript Developer I', credential: 'Salesforce Certified JavaScript Developer I', year: '2023', badge: 'JD1' },
  ],

  experience: [
    {
      company: 'Mass General Brigham',
      role: 'Data Analyst Co-op',
      period: 'Jan 2026 – Present',
      location: 'Boston, MA · Hybrid',
      type: 'current',
      highlights: [
        'Analyzed large-scale clinical and operational healthcare datasets using SQL and Python, delivering actionable insights to stakeholders across a veteran support program',
        'Designed and deployed interactive Tableau dashboards to track key clinical KPIs, reducing manual reporting effort and enabling faster data-driven decisions',
        'Built and improved ETL pipeline development and data infrastructure alongside core analytics work',
        'Independently designed and shipped a full-stack AI-powered internal tool for the clinical team, delivering a production-ready solution beyond core DA scope',
      ],
    },
    {
      company: 'Deloitte',
      role: 'Analyst',
      period: 'Oct 2021 – Aug 2024',
      location: 'Mumbai, India · Hybrid',
      type: 'past',
      highlights: [
        'Led end-to-end Salesforce CRM implementations for enterprise clients in financial services and healthcare across 5+ client engagements',
        'Built Tableau dashboards and automated reporting workflows, reducing manual reporting time by 35% and giving leadership real-time visibility into key metrics',
        'Designed cross-system integrations connecting Salesforce with ERP and third-party APIs, reducing manual data workload by 30% across client operations',
        'Collaborated with cross-functional Agile teams of 15+ members, achieving 99% on-time delivery across all engagements',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Assistant Systems Engineer',
      period: 'Aug 2020 – Sep 2021',
      location: 'Mumbai, India · Hybrid',
      type: 'past',
      highlights: [
        'Maintained CRM data integrity across enterprise workflows via data imports, cleansing, and validation for business-critical operations',
        'Built Salesforce reports and dashboards to surface key business metrics, enabling faster data-driven decisions for stakeholders',
        'Configured workflows, objects, and automation rules to streamline business processes and reduce manual effort across teams',
        'Delivered 20+ system improvements across data migration and platform enhancement initiatives aligned with business and data quality objectives',
      ],
    },
  ],

  dataProjects: [
    {
      title: 'Hospital Readmission Risk Analysis',
      description: 'End-to-end ML pipeline predicting 30-day hospital readmissions using MIMIC-IV clinical data. Combined SQL data extraction, Python feature engineering, and Tableau visualization.',
      tags: ['MySQL', 'Python', 'Tableau', 'MIMIC-IV', 'Scikit-learn'],
      type: 'Data Science',
      github: 'https://github.com/shubhamrajiwade29',
      live: null,
    },
    {
      title: 'Patient Healthcare Dashboard',
      description: 'Suite of 3 interactive Tableau dashboards for clinical outcomes monitoring — tracking PCL, PHQ scores and program-level KPIs for behavioral health teams at MGB.',
      tags: ['Tableau Public', 'Clinical Data', 'Dashboard'],
      type: 'Analytics',
      github: null,
      live: 'https://public.tableau.com',
    },
    {
      title: 'Ecommerce Azure Analytics',
      description: 'Cloud-native analytics pipeline on Azure — ingested raw ecommerce data via ADF, transformed with Databricks (PySpark), and visualized in Power BI.',
      tags: ['Azure ADF', 'Databricks', 'PySpark', 'Power BI'],
      type: 'Data Engineering',
      github: 'https://github.com/shubhamrajiwade29',
      live: null,
    },
    {
      title: 'Suffolk County ZIP Code Analysis',
      description: 'Geospatial analysis of demographic and economic trends across Suffolk County ZIP codes, published as an interactive Tableau Public dashboard.',
      tags: ['Tableau Public', 'Geospatial', 'Census Data'],
      type: 'Analytics',
      github: null,
      live: 'https://public.tableau.com',
    },
  ],

  productProjects: [
    {
      title: 'MoneySmart — Financial Literacy Platform',
      subtitle: 'Project Manager · EMGT 5220 Engineering Project Management',
      description: 'Led a 5-member Agile team to design and deliver a mobile financial literacy platform for Northeastern students — integrating smart budgeting, gamified learning, and expense tracking to drive measurable behavior change.',
      problem: 'NEU students lacked simple, engaging financial tools. Existing apps were too complex or not student-specific, leading to poor budgeting habits, financial stress, and low engagement.',
      role: 'Project Manager',
      rolePoints: [
        'Scoped requirements and aligned stakeholders across departments',
        'Owned 150-day timeline, milestones, and sprint planning',
        'Managed $632K phased budget with burn-down tracking',
        'Drove risk management, compliance reviews, and executive reporting',
        'Built WBS, RACI matrix, and risk register from scratch',
      ],
      metrics: [
        { value: '~30%', label: 'Projected adoption increase' },
        { value: '$632K', label: 'Budget managed' },
        { value: '150', label: 'Day implementation plan' },
        { value: '5', label: 'Member Agile team' },
      ],
      tags: ['Agile/Scrum', 'Project Management', 'WBS', 'Risk Management', 'Budgeting', 'Stakeholder Mgmt'],
      type: 'Project Management',
    },
    {
      title: 'OptiMail — AI-Powered Email Directory',
      subtitle: 'Product Manager · EMGT 6700 Digital Product Design & Management',
      description: 'Led product requirements and roadmap for OptiMail — a smart real-time AI email directory that solves communication breakdowns at Northeastern University using NLP-powered search.',
      problem: '85% of 20+ surveyed students struggled to find correct emails. Outdated PDFs, static directories, and manual searches averaged 2-3 minutes per query and caused widespread misdirected communication.',
      role: 'Product Manager',
      rolePoints: [
        'Conducted user research with 20+ students and 5+ staff to identify pain points',
        'Defined MVP feature prioritization (P0/P1/P2) and long-term product vision',
        'Developed 4-quarter roadmap with measurable goals and effort estimates',
        'Established 10 key success metrics and tracking methodology',
        'Created comprehensive PRD with use cases, features, and technical specifications',
      ],
      metrics: [
        { value: '90-95%', label: 'Search accuracy target' },
        { value: '<15s', label: 'Search time (vs 2-3 min)' },
        { value: '85%', label: 'Users had email pain' },
        { value: '1000+', label: 'Hours saved/month by Q4' },
      ],
      tags: ['Product Roadmap', 'PRD', 'User Research', 'NLP/AI', 'MVP Prioritization', 'Metrics & KPIs'],
      type: 'Product Management',
    },
  ],
}