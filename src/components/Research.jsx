import Icon from './Icon'
import ResearchContent from './ResearchContent'
import SectionHeading from './SectionHeading'

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Research"
          title="MOOTECH: intelligent dairy cow management."
          description="A closer look at the final-year IoT research project — its goals, approach, and system design."
        />

        <ResearchContent />

        <div className="research__more reveal">
          <p>Want the full, focused view?</p>
          <a className="btn btn--primary" href="./research.html">
            Open Research Page <Icon name="ArrowUpRight" size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
