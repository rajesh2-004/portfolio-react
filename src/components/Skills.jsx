import React from 'react'

const categories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'C++', icon: '💻' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'HTML', icon: '🧱' },
      { name: 'CSS', icon: '🎨' },
      { name: 'React', icon: '⚛️' },
      { name: 'Flask', icon: '🌶️' },
    ],
  },

  {
    title: 'Cloud & AWS',
    skills: [
      { name: 'AWS EC2', icon: '🖥️' },
      { name: 'AWS S3', icon: '🪣' },
      { name: 'IAM', icon: '🔐' },
      { name: 'VPC', icon: '🌐' },
      { name: 'Load Balancer', icon: '⚖️' },
      { name: 'SNS', icon: '📣' },
      { name: 'DynamoDB', icon: '🗄️' },
    ],
  },

  {
    title: 'Database & Concepts',
    skills: [
      { name: 'MySQL', icon: '🛢️' },
      { name: 'DBMS', icon: '📂' },
      { name: 'OOP', icon: '🧩' },
      { name: 'SDLC', icon: '🔄' },
    ],
  },

  {
    title: 'AI / ML & Quantum',
    skills: [
      { name: 'Machine Learning', icon: '🤖' },
      { name: 'Quantum Machine Learning', icon: '⚛️' },
      { name: 'Qiskit', icon: '🔬' },
      { name: 'PCA', icon: '📐' },
      { name: 'MobileNetV2', icon: '📱' },
      { name: 'EfficientNet', icon: '🧠' },
      { name: 'Autoencoder', icon: '🔁' },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'MS Office', icon: '📄' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My <span>Toolkit</span></h2>
          <div className="section-divider" />
        </div>

        {categories.map((cat, ci) => (
          <div className="skills-category" key={ci}>
            <div className="category-title">{cat.title}</div>
            <div className="skills-grid">
              {cat.skills.map((skill, si) => (
                <div
                  className="skill-card"
                  key={si}
                  style={{ animationDelay: `${si * 0.05}s` }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
