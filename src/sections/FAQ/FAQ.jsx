import AccordionAQ from "../../components/ui/Accordion/Accordion.jsx";
import './FAQ.scss'

const FAQ = () => {
  return (
    <section className="faq container">
      <div>
        <h2 className="faq__title">
          Frequently Asked <br/>
          <span style={{color: "#c5c5c5"}}>
            Questions
          </span>
        </h2>
      </div>
      <AccordionAQ />
    </section>
  )
}

export default FAQ