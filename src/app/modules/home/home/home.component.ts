import { Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

interface TelemetryMetric {
  label: string;
  value: string;
  sub: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef<HTMLDivElement>;

  metrics: TelemetryMetric[] = [
    { value: '10M+', label: 'Daily Events Delivered', sub: 'Peak SQS/SES Pipeline' },
    { value: '4+ Yrs', label: 'Production Engineering', sub: 'Unstop SDE-2 & Appventurez' },
    { value: '500K–2M', label: 'Emails / Hour Throughput', sub: 'Netcore → SES Resilient Fallback' },
    { value: '500+', label: 'LeetCode DSA Solved', sub: 'Java Algorithms & Structures' },
  ];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animFrameId!: number;
  private nodeGroup!: THREE.Group;
  private particlesMesh!: THREE.Points;
  private linesMesh!: THREE.LineSegments;
  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  activeNodeName: string = 'MCP AI Gateway';
  private nodesList = [
    'MCP AI Gateway',
    'LangGraph Agent State Engine',
    'LiveKit Real-Time Voice',
    'SQS Fan-Out Workers',
    'AWS Cloud Architecture',
    'OpenSearch Vector Search',
    'KEDA Autoscaling Engine',
    'EKS Pod Mesh'
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initThree();
  }

  ngOnDestroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (!this.canvasContainer || !this.renderer || !this.camera) return;
    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = (event.clientX - this.windowHalfX) * 0.0008;
    this.mouseY = (event.clientY - this.windowHalfY) * 0.0008;
  }

  private initThree(): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 24;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.nodeGroup = new THREE.Group();
    this.scene.add(this.nodeGroup);

    // 1. Central Core System (Wireframe Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(3.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.nodeGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.nodeGroup.add(innerMesh);

    // 2. Distributed Satellite Nodes & Dynamic Arc Connections
    const nodeCount = 14;
    const nodeCoords: THREE.Vector3[] = [];
    const linePositions: number[] = [];

    const sphereGeo = new THREE.SphereGeometry(0.35, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const accentNodeMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 6.8 + (i % 3) * 1.5;

      const pos = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      nodeCoords.push(pos);

      const isAccent = i % 3 === 0;
      const mesh = new THREE.Mesh(sphereGeo, isAccent ? accentNodeMat : nodeMat);
      mesh.position.copy(pos);
      this.nodeGroup.add(mesh);

      // Connect to center core
      linePositions.push(0, 0, 0, pos.x, pos.y, pos.z);

      // Connect to neighbor
      if (i > 0) {
        const prev = nodeCoords[i - 1];
        linePositions.push(prev.x, prev.y, prev.z, pos.x, pos.y, pos.z);
      }
    }

    // Connect last to first
    if (nodeCoords.length > 1) {
      const first = nodeCoords[0];
      const last = nodeCoords[nodeCoords.length - 1];
      linePositions.push(first.x, first.y, first.z, last.x, last.y, last.z);
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.22
    });
    this.linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    this.nodeGroup.add(this.linesMesh);

    // 3. Floating Ambient Particles (Data packets)
    const particleCount = 75;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 26;
      particlePositions[i + 1] = (Math.random() - 0.5) * 26;
      particlePositions[i + 2] = (Math.random() - 0.5) * 26;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.18,
      transparent: true,
      opacity: 0.6
    });
    this.particlesMesh = new THREE.Points(particleGeo, particleMat);
    this.nodeGroup.add(this.particlesMesh);

    // Cycle active telemetry node indicator
    setInterval(() => {
      const nextIdx = (this.nodesList.indexOf(this.activeNodeName) + 1) % this.nodesList.length;
      this.activeNodeName = this.nodesList[nextIdx];
    }, 2800);

    // Run animation outside Angular zone for high performance
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  private animate(): void {
    this.animFrameId = requestAnimationFrame(() => this.animate());

    // Inertial camera/group tilt
    this.targetX += (this.mouseX - this.targetX) * 0.05;
    this.targetY += (this.mouseY - this.targetY) * 0.05;

    if (this.nodeGroup) {
      this.nodeGroup.rotation.y += 0.0035;
      this.nodeGroup.rotation.x += 0.0018;
      this.nodeGroup.rotation.y += this.targetX * 0.4;
      this.nodeGroup.rotation.x += this.targetY * 0.4;
    }

    if (this.particlesMesh) {
      this.particlesMesh.rotation.y -= 0.001;
    }

    this.renderer.render(this.scene, this.camera);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
