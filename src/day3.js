import {useState} from 'react';

function GetTotal(duplicateLetters) {
  console.log(duplicateLetters);

    // eslint-disable-next-line no-array-constructor
    var priorityList = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    let total = 0;

    for(let i=0; i<duplicateLetters.length; i++) {
      console.log(priorityList.indexOf(duplicateLetters[i]) + 1);
      total += priorityList.indexOf(duplicateLetters[i]) + 1;
    }
    return total;
}

function Day3() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleOnChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmitPart1(e) {
    e.preventDefault();

    const input = message.trimEnd().split('\n');

    // eslint-disable-next-line no-array-constructor
    let duplicateLetters = new Array();

    input.forEach(x => {
      let part1 = x.slice(0, x.length/2);
      let part2 = x.slice(x.length/2, x.length);
      for(let i=0; i<part2.length; i++) {
        if (part1.includes(part2[i])) {
          duplicateLetters.push(part2[i]);
          break; // only one per line
        };
      }
    });

    setAnswer(GetTotal(duplicateLetters));
    return;
  }

  function handleSubmitPart2(e) {
    e.preventDefault();

    const input = message.trimEnd().split('\n');

    // eslint-disable-next-line no-array-constructor
    let duplicateLetters = new Array();

    let count = 0;
    for(let i=0; i < input.length/3; i++) {
      const line1 = input[count];
      count++;
      const line2  = input[count];
      count++;
      const line3 = input[count];
      count++;
    
      for(let i=0; i < line2.length; i++) {
          if(line1.includes(line2[i]) && line3.includes(line2[i])) {
            duplicateLetters.push(line2[i]);
            break;
          }
      }
    }

    setAnswer(GetTotal(duplicateLetters));
    return;
  }


  return (
  <div>
    <textarea id="day3Input" onChange={handleOnChange}/>
    <button type="button" onClick={handleSubmitPart1}>Submit Part 1</button>
    <button type="button" onClick={handleSubmitPart2}>Submit Part 2</button>
    <p>Answer = {answer}</p> 
  </div>
  )
}

export default Day3;
