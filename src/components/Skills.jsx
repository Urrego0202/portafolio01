import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <h2>Lenguajes o Stack Técnico</h2>
        </div>
        <div className="stack-groups">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="stack-group-label">{group.label}</div>
              <div className="chips">
                {group.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
