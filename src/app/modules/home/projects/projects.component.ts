import { Component } from '@angular/core';

export interface FlagshipSystem {
  id: string;
  badge: string;
  company: string;
  period: string;
  title: string;
  tagline: string;
  description: string;
  impactMetrics: { value: string; label: string }[];
  bulletPoints: string[];
  techStack: string[];
  architectureSteps: { step: string; node: string; desc: string }[];
  previewLink?: string;
  gitLink?: string;
}

export interface ArchivedProject {
  title: string;
  role: string;
  desc: string;
  stacks: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  showArchive = false;
  activeInspectorId = 'ai-interview';

  flagshipSystems: FlagshipSystem[] = [
    {
      id: 'ai-interview',
      badge: 'LiveKit Voice · LangGraph Agents · EKS',
      company: 'Unstop.com',
      period: 'Feb 2025 – Present',
      title: 'AI Interview Platform',
      tagline: 'Real-time candidate shortlisting & dynamic mock interview engine with sub-300ms voice interactions',
      description: 'Owned the high-level backend architecture for real-time interview execution, multi-agent response evaluation with LangGraph, and automated report generation.',
      impactMetrics: [
        { value: '<300ms', label: 'Real-Time Voice Latency' },
        { value: 'LangGraph', label: 'Agent State & Memory Graphs' },
        { value: 'Auto-Scaled', label: 'EKS HPA & Ingress Routing' },
      ],
      bulletPoints: [
        'Designed Node.js microservices to manage scalable AI interview workflows tailored to dynamic job roles; owned backend HLD for real-time interview execution and scoring.',
        'Integrated LiveKit (Python) for real-time bidirectional voice interactions, powering conversations with multiple AI agents conditioned on candidate profiles.',
        'Engineered dynamic agent evaluation graph using LangGraph (managing interview states, turns, and evaluation rubrics) and OpenSearch RAG grounding on candidate resumes.',
        'Engineered clean data contracts for React frontend integration and managed Kubernetes deployments, HPA, and Ingress traffic routing.'
      ],
      techStack: ['Node.js', 'React.js', 'Python', 'LiveKit', 'LangGraph', 'LangChain', 'OpenSearch', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Kubernetes', 'CI/CD'],
      architectureSteps: [
        { step: '01', node: 'Candidate Audio Input', desc: 'Browser WebRTC stream connected to LiveKit Python audio server' },
        { step: '02', node: 'OpenSearch RAG Injector', desc: 'Injects role criteria, rubrics, and resume vectorized chunks' },
        { step: '03', node: 'LangGraph Multi-Agent', desc: 'Manages conversational turns, tools, and real-time candidate evaluation' },
        { step: '04', node: 'Report Engine', desc: 'Generates structured candidate scorecards and telemetry dashboards' }
      ]
    },
    {
      id: 'job-orchestrator',
      badge: 'Model Context Protocol · LangGraph · OpenSearch',
      company: 'Unstop.com',
      period: 'Feb 2025 – Present',
      title: 'AI-Driven Job Posting Orchestrator',
      tagline: 'MCP server + client architecture & LangGraph state machine cutting job turnaround from ~2 days to ~30 minutes',
      description: 'Standardized enterprise AI access to business data across LangGraph, LangChain, OpenAI, and Gemini while grounding LLMs in OpenSearch k-NN semantic search to eliminate hallucinations.',
      impactMetrics: [
        { value: '~30 Mins', label: 'Turnaround (from 2 days)' },
        { value: '0-Hallucination', label: 'OpenSearch Vector Grounding' },
        { value: 'Token-Level', label: 'SSE Real-time Streaming' },
      ],
      bulletPoints: [
        'Engineered an MCP server + client architecture (Node/Express/TypeScript) with connection pooling and layered tool design standardizing AI access to business data across LangChain and LangGraph.',
        'Architected LangGraph agent state machines with conditional edges, structured tool nodes, and state memory persistence for multi-step generation workflows.',
        'Built an enterprise RAG pipeline grounding generation in vectorized historical job data and compensation benchmarks using OpenSearch k-NN vector search.',
        'Orchestrated distributed multi-step LLM tool flows, streaming token-level responses over Server-Sent Events (SSE) during 30–60s workflows; containerized on Kubernetes for horizontal scaling.'
      ],
      techStack: ['Node.js', 'Express.js', 'LangGraph (States & Tools)', 'LangChain', 'Model Context Protocol (MCP)', 'OpenSearch Vector Search', 'RAG', 'TypeScript', 'Redis', 'Kubernetes', 'Docker'],
      architectureSteps: [
        { step: '01', node: 'Frontend Client / SSE', desc: 'SSE stream connection established for 30-60s multi-step job generation' },
        { step: '02', node: 'MCP Server Gateway', desc: 'Connection-pooled layer standardizing tool access across LangGraph & LLMs' },
        { step: '03', node: 'OpenSearch Vector Search', desc: 'Retrieves top-k relevant benchmark context via k-NN semantic search' },
        { step: '04', node: 'LangGraph State Engine', desc: 'Executes agent tool loops with memory and streams tokens in real time' }
      ]
    },
    {
      id: 'notification-platform',
      badge: '10M+ Emails/Day · AWS EKS & SQS · KEDA',
      company: 'Unstop.com',
      period: 'Feb 2025 – Present',
      title: 'High-Scale Notification Delivery Platform',
      tagline: 'Resilient multi-channel delivery engine operating at 500K–2M emails/hour with Netcore→SES fallback',
      description: 'Architected an event-driven delivery pipeline on SQS-driven Node.js workers on AWS EKS with resilient event streaming, S3 archival, and KEDA autoscaling.',
      impactMetrics: [
        { value: '10M+', label: 'Emails / Day (Peak)' },
        { value: '500K–2M', label: 'Throughput / Hour' },
        { value: '100%', label: 'Redis Idempotency Dedup' },
      ],
      bulletPoints: [
        'Designed an event-driven delivery pipeline with fan-out workers and a Netcore→SES fallback chain for channel resilience at 500K–2M emails/hour on SQS + EKS.',
        'Architected campaign segmentation in OpenSearch, chunked prep jobs, personalized payload building, Redis dedup, and S3 gzip archival.',
        'Engineered SES/Netcore event streaming (Firehose→S3→SQS) with real-time delivery telemetry, metrics aggregation, and campaign-completion detection.',
        'Implemented multi-tenant auth, HMAC-signed webhook callbacks with exponential backoff, and GitLab CI/CD with KEDA queue-depth autoscaling on AWS EKS.'
      ],
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'OpenSearch', 'AWS (EKS, SQS, SES, S3, Firehose)', 'Docker', 'Kubernetes (KEDA)', 'GitLab CI/CD'],
      architectureSteps: [
        { step: '01', node: 'OpenSearch Segmenter', desc: 'Segments target audiences and chunks campaign payloads into SQS queues' },
        { step: '02', node: 'KEDA Worker Pool', desc: 'Node.js fan-out workers dynamically scale up based on SQS queue depth' },
        { step: '03', node: 'Netcore → SES Fallback', desc: 'Resilient dual-provider dispatch chain ensuring zero delivery drops' },
        { step: '04', node: 'AWS Event Streaming', desc: 'Firehose → S3 → SQS telemetry stream with real-time delivery tracking & archival' }
      ]
    },
    {
      id: 'roksaan-platform',
      badge: 'E-Commerce · Stripe · Pre-Signed S3',
      company: 'Appventurez',
      period: 'Jul 2022 – Feb 2025',
      title: 'ROKSAAN E-Commerce Platform',
      tagline: 'High-performance gift card & bespoke greetings platform serving Hong Kong with Stripe payment integration',
      description: 'Integrated Stripe payment gateways with webhook tracking, dynamic admin font management, and AWS S3 pre-signed upload optimization.',
      impactMetrics: [
        { value: 'Zero-Lag', label: 'Direct S3 Pre-Signed Uploads' },
        { value: 'Stripe Webhooks', label: 'Real-time Event Tracking' },
        { value: 'Production', label: 'Active Hong Kong Platform' },
      ],
      bulletPoints: [
        'Integrated Stripe Payment Gateway with webhook support to handle card saving, transactions, and real-time event tracking.',
        'Designed and implemented RESTful APIs with dynamic font management from the admin panel, reflected seamlessly on the user panel.',
        'Optimized the file upload process using AWS S3 pre-signed URLs, significantly improving upload throughput and reducing server CPU load.'
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Angular.js', 'AWS (S3, EC2, SQS)'],
      architectureSteps: [
        { step: '01', node: 'Admin Configurator', desc: 'Customizable greeting cards with dynamic typography rendered on canvas' },
        { step: '02', node: 'S3 Pre-Signed Uplink', desc: 'Direct-to-bucket asset upload bypassing server compute for maximum speed' },
        { step: '03', node: 'Stripe Payment Gateway', desc: 'Webhook-driven checkout lifecycle with automated fulfillment triggers' }
      ],
      previewLink: 'https://www.roksaan.com/'
    }
  ];

  archivedProjects: ArchivedProject[] = [
    {
      title: 'E-Sankalp Retail',
      role: 'Agri-Tech E-Commerce Platform',
      desc: 'Multi-brand digital agricultural marketplace delivering farm supplies, advisory services, and bulk equipment procurement to farmers.',
      stacks: ['Node.js', 'Express.js', 'MongoDB', 'Angular', 'TypeScript'],
      link: 'https://play.google.com/store/apps/details?id=com.esankalp'
    },
    {
      title: 'Tinypay',
      role: 'Micro-Lending Platform',
      desc: 'Transparent digital loan platform engineered for micro-borrowers, featuring transparent repayment schedules and fast credit evaluation.',
      stacks: ['Angular', 'Node.js', 'MySQL', 'Sass', 'Bootstrap']
    },
    {
      title: 'Dakshkisan',
      role: 'Government LMS Portal',
      desc: 'Comprehensive LMS for Jammu & Kashmir Government empowering agri-preneurs with 121+ bilingual certificate courses and video streaming.',
      stacks: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://dakshkisan.jk.gov.in/'
    },
    {
      title: 'Keypitkleen',
      role: 'Domestic Services On-Demand',
      desc: 'On-demand home cleaning services booking platform connecting verified professionals with homeowners via automated dispatch.',
      stacks: ['Angular', 'HTML5', 'Sass', 'Material UI', 'Bootstrap']
    },
    {
      title: 'AMM Arbitrage Engine',
      role: 'Smart Contract & Flashloans',
      desc: 'Autonomous arbitrage smart contracts executing atomic cross-DEX swaps on Ethereum with Aave flashloans to capture price discrepancies.',
      stacks: ['Solidity', 'Ethereum', 'Ethers.js', 'Node.js']
    }
  ];

  get currentInspectorSystem(): FlagshipSystem {
    return this.flagshipSystems.find(s => s.id === this.activeInspectorId) || this.flagshipSystems[0];
  }

  setInspectorSystem(id: string): void {
    this.activeInspectorId = id;
  }

  toggleArchive(): void {
    this.showArchive = !this.showArchive;
  }
}
