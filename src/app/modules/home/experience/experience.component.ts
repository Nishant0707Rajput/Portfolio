import { Component } from '@angular/core';

export interface CareerMilestone {
  period: string;
  company: string;
  role: string;
  location?: string;
  badge: string;
  highlights: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: CareerMilestone[] = [
    {
      period: 'Feb 2025 – Present',
      company: 'Unstop.com',
      role: 'Software Development Engineer - 2 (SDE-2)',
      badge: 'Current Role',
      highlights: [
        'Architected AI Interview Platform with Node.js microservices, LiveKit Python real-time voice, and dynamic multi-agent LLM evaluation grounded in RAG.',
        'Engineered Model Context Protocol (MCP) server + client architecture standardizing AI tool and database interoperability across LangChain, OpenAI, and Gemini.',
        'Designed high-throughput notification delivery engine delivering 10M+ emails/day peak with Netcore→SES fallback, SQS fan-out, AWS S3/Firehose event streams, and KEDA autoscaling on EKS.'
      ],
      tech: ['Node.js', 'Express.js', 'AWS (EKS, SQS, SES, S3)', 'MCP', 'LangGraph', 'RAG', 'Python', 'LiveKit', 'PostgreSQL', 'Redis', 'Kubernetes (KEDA)', 'GitLab CI/CD']
    },
    {
      period: 'Jul 2022 – Feb 2025',
      company: 'Appventurez',
      role: 'Software Developer',
      badge: '2.5+ Years',
      highlights: [
        'Built and scaled production backend APIs and payment systems across e-commerce, micro-lending, and public-sector educational platforms.',
        'Integrated Stripe Payment Gateway with webhooks, card tokenization, and real-time transaction event tracking for Hong Kong platform (ROKSAAN).',
        'Optimized media workflows using AWS S3 pre-signed URLs, significantly cutting server memory utilization and upload latency.'
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Stripe', 'JWT', 'Angular.js', 'AWS (S3, EC2, SQS)']
    }
  ];

  education = {
    institution: 'Institute of Engineering & Technology (IET), Lucknow',
    degree: 'B.Tech in Electrical Engineering',
    period: '2018 – 2022',
    notes: 'Graduated with strong foundation in computing, mathematics, and systems engineering.'
  };

  achievements = [
    {
      title: '500+ LeetCode DSA Problems Solved',
      desc: 'Extensive problem solving in Java focusing on algorithms, dynamic programming, graphs, and tree structures.',
      icon: 'code'
    },
    {
      title: 'GeeksforGeeks Published Technical Author',
      desc: 'Authored and published technical article: "Deploying Smart Contracts using Ethers.js and Node.js".',
      icon: 'article'
    },
    {
      title: 'High-Throughput Distributed Architecture',
      desc: 'Proven production track record running 500K–2M emails/hour pipelines and sub-300ms real-time voice agents.',
      icon: 'speed'
    }
  ];
}
