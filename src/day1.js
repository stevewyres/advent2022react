import {useState} from 'react';

function Day1() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleOnChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('steve', message);

    const elfAnswer = message.trimEnd().split('\n\n')
        .map(item => item.split('\n').reduce((sum, x) => sum + Number(x), 0))
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((sum, x) => sum + x, 0);
    setAnswer(elfAnswer);
    return;
  }
  return (
  <div>
    <textarea id="day1Input" onChange={handleOnChange}/>
    <button type="button" onClick={handleSubmit}>Submit</button>
    <p>Answer = {answer}</p> 
  </div>
  )
}

export default Day1;
