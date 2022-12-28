import {useState} from 'react';

function Day2() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleOnChange(e) {
    setMessage(e.target.value);
  }

  function getResult(line) {

    const mappings = {
      'A' : {
        type:'rock',
        drawscore:1,
        winscore:2,
        losescore:3
      },
      'B' : {
        type:'paper',
        drawscore:2,
        winscore:3,
        losescore:1
      },
      'C' : {
        type:'scissors',
        drawscore:3,
        winscore:1,
        losescore:2
      }
    };

   const mappings2 = {
      'X' : {
        type:'lose'
      },
      'Y' : {
        type:'draw'
      },
      'Z' : {
        type:'win'
      }
    };

    let total = 0;
    const DRAW = 3;
    const WIN = 6;

    const player1Result = mappings[line[0]];
    const player2Result = mappings2[line[1]];

    if (player2Result.type === 'draw') {
      total += DRAW;
      total += player1Result.drawscore;
    }

    if (player2Result.type === 'lose') {
      total += player1Result.losescore;
    }

    if (player2Result.type === 'win') {
      total += WIN;
      total += player1Result.winscore;
    }

    return total;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let total = 0;
    const elfAnswer = message
        .trimEnd()
        .split('\n')
        .map(item => item.split(' '));

    elfAnswer.forEach(x => {
      total += getResult(x);
    });
        
    setAnswer(total);

    console.log('steve', total);
    return;
  }
  return (
  <div>
    <textarea id="day2Input" onChange={handleOnChange}/>
    <button type="button" onClick={handleSubmit}>Submit</button>
    <p>Answer = {answer}</p> 
  </div>
  )
}

export default Day2;
