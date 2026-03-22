import React from 'react'

const certs = [
  {
    icon: '☁️',
    iconClass: 'cert-icon-aws',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description:
      'Global certification validating knowledge of AWS cloud concepts, EC2, S3, IAM, VPC, Load Balancer, security, and cloud architecture fundamentals.',
    badge: '✓ Verified',
  },

  {
    icon: '🖥️',
    iconClass: 'cert-icon-aws',
    title: 'AWS Cloud Internship',
    issuer: 'SmartBridge',
    description:
      'Completed AWS internship training covering EC2, S3, IAM, VPC, Load Balancer, Lambda, SNS, DynamoDB, and CloudWatch with hands-on deployment tasks.',
    badge: '✓ Verified',
  },

  {
    icon: '☕',
    iconClass: 'cert-icon-nptel',
    title: 'NPTEL – Programming in Java',
    issuer: 'NPTEL / IIT',
    description:
      'Completed NPTEL certification in Java programming covering OOP, exception handling, multithreading, and core Java concepts.',
    badge: '✓ Verified',
  },

  {
    icon: '🤖',
    iconClass: 'cert-icon-nptel',
    title: 'NPTEL – Machine Learning',
    issuer: 'NPTEL / IIT',
    description:
      'Completed NPTEL certification in Machine Learning covering supervised learning, regression, classification, and model evaluation techniques.',
    badge: '✓ Verified',
  },

  {
    icon: '🐍',
    iconClass: 'cert-icon-cloud',
    title: 'Django Application Development with SQL and Databases',
    issuer: 'IBM (edX)',
    description:
      'Learned Django web development, SQL databases, backend integration, and full-stack application development.',
    badge: '✓ Verified',
  },

  {
    icon: '📊',
    iconClass: 'cert-icon-cloud',
    title: 'Productivity Enhancement Tools',
    issuer: 'APSSDC',
    description:
      'Training on productivity tools, MS Office, documentation, and professional software usage.',
    badge: '✓ Verified',
  },
]

export default function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">My <span>Certifications</span></h2>
          <div className="section-divider" />
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className={`cert-icon-wrapper ${cert.iconClass}`}>
                {cert.icon}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">🏛 {cert.issuer}</div>
              <p className="cert-description">{cert.description}</p>
              <span className="cert-badge">{cert.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
