export interface ContentGenerationConfig {
  projectTypes: {
    keywords: string;
    label: string;
  }[];
  
  commonTerms: string[];
  
  sectionTemplates: {
    [sectionName: string]: {
      template: string;
      requirementMappings?: {
        keyword: string;
        bullet: string;
      }[];
      featureMappings?: {
        keyword: string;
        bullet: string;
      }[];
      conditionalAdditions?: {
        keyword: string;
        content: string;
      }[];
    };
  };
  
  fallbackContent: {
    template: string;
    bulletPoints: string[];
  };

  //Content customization rules
  contentCustomizations: {
    keyword: string;
    replacements?: {
      find: string;
      replace: string;
    }[];
    additions?: string;
  }[];

  //Section suggestion rules
  sectionSuggestions: {
    sectionName: string;
    keywords: string[];
    defaultSubsection: {
      name: string;
      id: number;
    };
  }[];
}

export const contentGenerationConfig: ContentGenerationConfig = {
  projectTypes: [
    { keywords: "smart building", label: "Smart Building Management System" },
    { keywords: "e-commerce", label: "E-commerce Platform" },
    { keywords: "mobile app", label: "Mobile Application" },
    { keywords: "website", label: "Website" },
    { keywords: "dashboard", label: "Dashboard System" },
    { keywords: "api", label: "API Solution" }
  ],
  
  commonTerms: [
    "smart building",
    "management system",
    "architecture",
    "features",
    "timeline",
    "cost",
    "budget",
    "integration",
    "security",
    "performance",
    "scalability",
    "user experience",
    "mobile",
    "cloud",
    "database",
    "api",
    "dashboard",
    "reporting",
    "analytics",
    "automation",
  ],
  
  sectionTemplates: {
    "Executive Summary": {
      template: "This proposal outlines our comprehensive approach to developing your {projectType}.\n\nBased on your requirements, we understand you need:\n{requirements}\n\nOur solution will deliver:\n• A robust and scalable {projectTypeLower}\n• Modern technology stack ensuring future-proof architecture\n• User-centric design focused on excellent user experience\n• Comprehensive testing and quality assurance\n• Full documentation and training support\n\nWe are confident this solution will meet your objectives and provide significant value to your organization.",
      requirementMappings: [
        { keyword: "architecture", bullet: "• Detailed system architecture and technical specifications" },
        { keyword: "features", bullet: "• Comprehensive feature set and functionality overview" },
        { keyword: "timeline", bullet: "• Clear project timeline and delivery schedule" },
        { keyword: "cost", bullet: "• Transparent cost breakdown and investment details" },
        { keyword: "budget", bullet: "• Transparent cost breakdown and investment details" },
        { keyword: "team", bullet: "• Information about project team and resources" },
        { keyword: "security", bullet: "• Security measures and compliance considerations" }
      ]
    },
    
    "Technical Architecture": {
      template: "The {projectType} will be built using modern, industry-standard technologies and architectural patterns.\n\nProposed Architecture:\n• Frontend: React-based responsive web application\n• Backend: Node.js with Express framework\n• Database: PostgreSQL with Redis caching layer\n• Cloud Infrastructure: AWS with auto-scaling capabilities\n• Security: JWT authentication with role-based access control\n• Integration: RESTful APIs with comprehensive documentation\n{conditionalContent}\n\nThis architecture ensures scalability, maintainability, and optimal performance.",
      conditionalAdditions: [
        { keyword: "mobile", content: "• Mobile: React Native for cross-platform mobile apps" },
        { keyword: "real-time", content: "• Real-time: WebSocket integration for live updates" },
        { keyword: "analytics", content: "• Analytics: Advanced reporting and dashboard capabilities" }
      ]
    },
    
    "Features & Functionality": {
      template: "The {projectType} will include comprehensive features designed to address your specific requirements.\n\nCore Features:\n{features}\n\nAdditional Capabilities:\n• Intuitive user interface with modern design\n• Advanced search and filtering options\n• Comprehensive reporting and analytics\n• Role-based permissions and access control\n• Data export and import functionality\n• Mobile-responsive design for all devices\n\nAll features will be thoroughly tested and optimized for performance and usability.",
      featureMappings: [
        { keyword: "dashboard", bullet: "• Interactive dashboard with real-time data visualization" },
        { keyword: "user management", bullet: "• Comprehensive user management and role-based access" },
        { keyword: "reporting", bullet: "• Advanced reporting and analytics capabilities" },
        { keyword: "mobile", bullet: "• Mobile-responsive design and native app support" },
        { keyword: "integration", bullet: "• Third-party system integration capabilities" },
        { keyword: "notification", bullet: "• Real-time notifications and alert system" },
        { keyword: "search", bullet: "• Advanced search and filtering functionality" }
      ]
    },
    
    "Project Timeline": {
      template: "We propose a structured timeline to deliver your {projectType} efficiently and on schedule.\n\nProposed Timeline:\n• Week 1-2: Requirements analysis and system design\n• Week 3-6: Core development and feature implementation\n• Week 7-8: Integration and testing phase\n• Week 9-10: User acceptance testing and refinements\n• Week 11-12: Deployment and go-live support\n\n{urgencyNote}\n\nMilestones and deliverables will be clearly defined for each phase.",
      conditionalAdditions: [
        { 
          keyword: "urgent", 
          content: "Given the urgency mentioned, we can accelerate the timeline with additional resources." 
        },
        { 
          keyword: "asap", 
          content: "Given the urgency mentioned, we can accelerate the timeline with additional resources." 
        }
      ]
    },
    
    "Cost & Investment": {
      template: "Investment breakdown for your {projectType} development project.\n\nDevelopment Costs:\n• Planning & Design: $15,000 - $25,000\n• Core Development: $45,000 - $75,000\n• Testing & QA: $10,000 - $15,000\n• Deployment & Training: $8,000 - $12,000\n\nTotal Investment: $78,000 - $127,000\n\n{budgetNote}\n{phasesNote}\n\nThis investment includes:\n• Complete source code and documentation\n• 6 months of warranty and bug fixes\n• User training and support materials\n• Deployment assistance and go-live support",
      conditionalAdditions: [
        { keyword: "budget", content: "We understand budget considerations and can work within your specified range." },
        { keyword: "phases", content: "Payment can be structured in phases aligned with project milestones." }
      ]
    }
  },
  
  fallbackContent: {
    template: "This {subsectionName} section addresses the key aspects of {termsList} as outlined in your requirements.\n\nKey Considerations:\n{bulletPoints}\n\nOur approach ensures that all {sectionNameLower} requirements are met while providing a foundation for future growth and enhancement.\n\nThe proposed solution incorporates modern technologies and methodologies to deliver exceptional results that align with your business objectives and technical requirements.",
    bulletPoints: [
      "• Comprehensive analysis of project requirements",
      "• Industry best practices and standards compliance",
      "• Scalable solution architecture and design",
      "• Performance optimization and security measures",
      "• User experience and interface design principles",
      "• Integration capabilities with existing systems"
    ]
  },

  //Content customization rules
  contentCustomizations: [
    {
      keyword: "smart building",
      replacements: [
        { find: "system", replace: "smart building management system" }
      ]
    },
    {
      keyword: "mobile",
      additions: "\n\nMobile Optimization:\n• Native mobile app development\n• Responsive web design\n• Offline capability support"
    },
    {
      keyword: "security",
      additions: "\n\nSecurity Features:\n• End-to-end encryption\n• Multi-factor authentication\n• Regular security audits and updates"
    }
  ],

  //Section suggestion rules
  sectionSuggestions: [
    {
      sectionName: "Executive Summary",
      keywords: [], // Always include
      defaultSubsection: {
        name: "Project Overview",
        id: 11
      }
    },
    {
      sectionName: "Technical Architecture",
      keywords: ["architecture", "system", "technical"],
      defaultSubsection: {
        name: "System Design",
        id: 21
      }
    },
    {
      sectionName: "Features & Functionality",
      keywords: ["features", "functionality", "capabilities"],
      defaultSubsection: {
        name: "Core Features",
        id: 31
      }
    },
    {
      sectionName: "Project Timeline",
      keywords: ["timeline", "schedule", "delivery"],
      defaultSubsection: {
        name: "Implementation Schedule",
        id: 41
      }
    },
    {
      sectionName: "Cost & Investment",
      keywords: ["cost", "budget", "price", "investment"],
      defaultSubsection: {
        name: "Budget Breakdown",
        id: 51
      }
    }
  ]
};