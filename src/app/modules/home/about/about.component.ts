import { Component } from '@angular/core';

export interface CompetencyPillar {
  domain: string;
  icon: string;
  tagline: string;
  skills: { name: string; tag: string }[];
  summary: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  competencyPillars: CompetencyPillar[] = [
    {
      domain: 'Distributed Systems & Backend',
      icon: 'dns',
      tagline: 'High-throughput Node.js microservices & event-driven workers',
      summary: 'Architecting scalable microservices, low-latency API contracts, and SQS/EKS fan-out pipelines handling millions of real-time payloads.',
      skills: [
        { name: 'Node.js', tag: 'Core Backend' },
        { name: 'TypeScript / JS', tag: 'Languages' },
        { name: 'Express.js', tag: 'Framework' },
        { name: 'REST APIs & HLD', tag: 'System Design' },
        { name: 'LiveKit (Python)', tag: 'Voice RTC' },
        { name: 'Microservices', tag: 'Architecture' }
      ]
    },
    {
      domain: 'AI & LLM Orchestration',
      icon: 'psychology',
      tagline: 'LangGraph State Machines, LangChain & OpenSearch Vector RAG',
      summary: 'Engineering LangGraph stateful agent workflows (turns, state schemas, conditional branches, tool nodes, memory persistence), MCP interop, and OpenSearch k-NN semantic search.',
      skills: [
        { name: 'LangGraph (States & Tools)', tag: 'Agent Graphs' },
        { name: 'LangChain & Agent Loops', tag: 'Orchestration' },
        { name: 'Model Context Protocol (MCP)', tag: 'Tool Standardization' },
        { name: 'OpenSearch Vector Search', tag: 'k-NN Vector DB' },
        { name: 'Enterprise RAG Grounding', tag: 'Knowledge Retrieval' },
        { name: 'SSE Token Streaming', tag: 'Real-Time Interface' }
      ]
    },
    {
      domain: 'Cloud Architecture & AWS Infrastructure',
      icon: 'cloud',
      tagline: 'Production AWS infrastructure, Kubernetes (EKS), & KEDA autoscaling',
      summary: 'Deep architectural experience across AWS services (EKS, SQS, SNS, SES, S3, Firehose, IAM/IRSA, VPC, CloudWatch) engineering resilient, event-driven backbones.',
      skills: [
        { name: 'Kubernetes (AWS EKS)', tag: 'Container Orch' },
        { name: 'AWS SQS & SNS', tag: 'Event Messaging' },
        { name: 'AWS SES & Firehose', tag: 'Delivery & Streams' },
        { name: 'AWS S3 & EC2', tag: 'Storage & Compute' },
        { name: 'KEDA Autoscaling', tag: 'Queue-Driven HPA' },
        { name: 'IAM & IRSA Auth', tag: 'Zero-Secret Security' }
      ]
    },
    {
      domain: 'Databases & Distributed Caching',
      icon: 'storage',
      tagline: 'Relational schemas, vector retrieval & low-latency caches',
      summary: 'Designing deduplicated Redis caching, PostgreSQL schema architectures, and OpenSearch k-NN vector indexing for high-scale audience segmentation and sub-millisecond lookups.',
      skills: [
        { name: 'PostgreSQL', tag: 'Relational DB' },
        { name: 'OpenSearch (Vector k-NN)', tag: 'Vector Search' },
        { name: 'Redis (Idempotency)', tag: 'Cache & Dedup' },
        { name: 'MongoDB', tag: 'Document Store' },
        { name: 'MySQL', tag: 'Relational' },
        { name: 'Elasticache', tag: 'Managed Redis' }
      ]
    }
  ];

  coreCompetencies = [
    { title: 'High-Level & Low-Level Architecture (HLD/LLD)', desc: 'Designing resilient distributed architectures, event-driven worker pools, circuit breakers, and fault-tolerant failover chains.' },
    { title: 'AWS Cloud Systems Engineering', desc: 'End-to-end cloud infrastructure on AWS (EKS, SQS, SES, S3, IRSA) built for high availability, zero downtime, and elasticity.' },
    { title: 'Data Structures & Algorithms', desc: '500+ problems solved on LeetCode (Java), with deep focus on graphs, DP, trees, heaps, and optimal system time complexity.' },
    { title: 'Full Lifecycle System Ownership', desc: 'From architectural RFCs and database schema modeling to Kubernetes production deployments, monitoring & scaling.' }
  ];
}
