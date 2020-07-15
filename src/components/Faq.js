import React, {useState}  from 'react'

function Faq ({faq, index}) {

  const toggle = () => setOpen(!open);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        tabIndex={0}
        className="faq"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}>
        <h2 className="faq-question">{faq.question}</h2>
      </div>
      {open && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default Faq
