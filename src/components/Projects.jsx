import React from 'react'

const projects = [
  {
  icon: '🌾',
  title: 'Quantum Rice Disease Classification',
  description:
    'Developed rice disease classification using three different hybrid approaches: (1) MobileNetV2 + PCA + Quantum SVM, (2) EfficientNetB0 + Autoencoder + Quantum SVM, and (3) classical feature-based model. Implemented quantum kernel methods using Qiskit to improve classification performance.',
  tags: [
    'Python',
    'Qiskit',
    'MobileNetV2',
    'EfficientNetB0',
    'Autoencoder',
    'PCA',
    'QSVM',
    'Machine Learning',
    'Quantum ML'
  ],
  },

  {
  icon: '⚛️',
  title: 'Quantum Portfolio Optimization using QAOA',
  description:
    'Developed a quantum optimization model to maximize portfolio returns while minimizing risk using QAOA. Designed multi-objective QUBO formulation for Sharpe ratio optimization with diversification constraints and implemented hybrid classical–quantum pipeline with CMA-ES optimizer and error mitigation techniques.',
  tags: [
    'Quantum Computing',
    'QAOA',
    'Qiskit',
    'Optimization',
    'QUBO',
    'CMA-ES',
    'Python',
    'Quantum ML'
  ],
},

  {
    icon: '🏥',
    title: 'MedTrack – Cloud Based Healthcare Management System',
    description:
      'Developed a cloud-based healthcare application where patients can book appointments and manage medication records. Implemented AWS EC2 for deployment, SNS for notifications, and DynamoDB for storage.',
    tags: ['Flask', 'AWS EC2', 'SNS', 'DynamoDB', 'Python', 'Cloud'],
  },

  {
    icon: '☁️',
    title: 'Static Website Deployment on AWS EC2',
    description:
      'Deployed a static portfolio website on AWS EC2 by configuring Apache Tomcat server, VPC, security groups, and IAM roles. Successfully hosted web pages on cloud infrastructure.',
    tags: ['AWS', 'EC2', 'Tomcat', 'HTML', 'CSS', 'VPC'],
  },

  {
    icon: '🌐',
    title: 'ICAIS Web Platform',
    description:
      'Developed a responsive website for managing conference content and paper submissions with structured navigation and dynamic UI using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web', 'Responsive Design'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-number">#{String(i + 1).padStart(2, '0')}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, ti) => (
                  <span className="project-tag" key={ti}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
