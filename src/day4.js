import {useState} from 'react';

function Day4() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleOnChange(e) {
    setMessage(e.target.value);
  }

  // function checkResultWithinOther([firstItemLow, firstItemHigh], [secondItemLow, secondItemHigh]) { // does a contain b?
  //   return firstItemLow <= secondItemLow && secondItemHigh <= firstItemHigh;
  // }

  function checkResultWithinOtherPart2([firstItemLow, firstItemHigh], [secondItemLow, secondItemHigh]) { // does a contain b?
    return firstItemLow <= secondItemHigh && firstItemHigh >= secondItemLow;
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const elfAnswer = message.trimEnd().split('\n')
        .map(item => item.split(',').map(x => x.split("-").map(Number)))
        .filter(([a, b]) => {
          return checkResultWithinOtherPart2(a, b) || checkResultWithinOtherPart2(b, a);
        });;

    console.log('steve', elfAnswer.length);
    setAnswer(elfAnswer.length);
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

export default Day4;
