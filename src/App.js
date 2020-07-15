import React from 'react';
import './index.css';
import Header from './components/Header';
import Faq from './components/Faq';

function App () {

  const faqs = [
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issues.',
      open: true
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false
    }
  ];


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
