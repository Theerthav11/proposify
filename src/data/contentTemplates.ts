export interface ContentTemplate {
  [sectionName: string]: {
    [subsectionName: string]: string[];
  };
}

export const contentTemplates: ContentTemplate = {
  "Executive Summary": {
    "System Architecture": [
      `Our proposed system utilizes a modern, scalable cloud-native architecture designed for enterprise-grade performance and reliability.

Key Components:
• Microservices-based backend architecture
• React-based responsive frontend
• PostgreSQL database with Redis caching
• AWS cloud infrastructure with auto-scaling
• Docker containerization for deployment
• RESTful APIs with GraphQL integration

This architecture ensures high availability, scalability, and maintainability while providing excellent user experience across all devices.`,
      
      `The technical foundation leverages cutting-edge technologies to deliver a robust, future-proof solution.

Architecture Highlights:
• Cloud-first design with multi-region deployment
• Event-driven microservices architecture
• Advanced caching and performance optimization
• Comprehensive security and compliance measures
• Real-time data processing capabilities
• Automated CI/CD pipeline integration

Our approach guarantees seamless scalability and exceptional performance under varying load conditions.`,
    ],

    "Business Overview": [
      `This proposal presents a comprehensive solution designed to address your specific business requirements and drive measurable results.`,
      `We understand your business challenges and have crafted a tailored approach to deliver maximum value and impact.`,
    ],

    "Key Benefits": [
      `Our solution delivers tangible benefits that directly impact your bottom line and operational efficiency.`,
      `The proposed system offers significant advantages over existing solutions and manual processes.`,
    ],
  },

  "Technical Overview": {
    Architecture: [
      `The technical architecture follows industry best practices and modern design patterns.`,
      `Our architecture emphasizes modularity, security, and performance.`,
    ],

    "Technology Stack": [
      `We recommend a proven technology stack that balances innovation with stability.`,
      `Our technology selection prioritizes performance, security, and maintainability.`,
    ],

    Integration: [
      `System integration will be handled through well-defined APIs and established protocols.`,
      `We employ modern integration patterns to connect your new system with existing infrastructure.`,
    ],
  },

  "Features & Benefits": {
    "Core Features": [
      `The system includes comprehensive features designed to address your specific requirements.`,
      `Our feature set combines essential functionality with advanced capabilities.`,
    ],

    "User Experience": [
      `User experience is at the center of our design philosophy.`,
      `We prioritize user-centered design to create an engaging experience.`,
    ],
  },

  "Pricing & Terms": {
    "Cost Breakdown": [
      `The total project investment is structured to provide maximum value.`,
      `Our pricing model is designed to be transparent and provide excellent ROI.`,
    ],

    "Payment Schedule": [
      `Payment terms are structured to align with project milestones.`,
      `Our flexible payment structure accommodates your budget requirements.`,
    ],
  },
};