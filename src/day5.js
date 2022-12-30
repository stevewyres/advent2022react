import {useState} from 'react';

function Day5() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleOnChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // split the input into two arrays.  There is a double return after the crate information.
    const [inputCrates, inputInstructions] = message.trimEnd().split('\n\n');

    // split into an array, reverse the order and remove the first line.
    let cratesReversed = inputCrates.split('\n').reverse();

    const stackCrates = [];
    let firstItem = true;
    cratesReversed.forEach(line => {
      console.log(line);
      if (firstItem) {
        firstItem = false; // ignore the first line.
      } else {
        let crateStackIndex = 0;
        for(let i = 0; i < line.length; i+=4) {
          let character = line[i+1];

          // if there is a a character in the column, then push into the stack.
          if (character.trim()) {
            console.log(character, i+1);
            // init stack if not created  
            if (!stackCrates[crateStackIndex]) {
              stackCrates[crateStackIndex] = [];
            }
            stackCrates[crateStackIndex].push(character);
          }
          crateStackIndex++;
        }
      };
      console.log('end of line');
    });
    console.log('steve', stackCrates);
    // loop through the instructions and place the items into an array so easier to deal with
    let instructionList = inputInstructions.split("\n").map(line => {
      let lineArray = line.split(" ");
      let moveAmount = Number(lineArray[1]);
      let moveFrom = Number(lineArray[3]) -1;
      let moveTo = Number(lineArray[5]) -1;
      return { moveAmount, moveFrom, moveTo }
    });

    // // part 1
    // for(let {moveAmount, moveFrom, moveTo} of instructionList) {
    //   for (let i = 0; i < moveAmount; i++) {
    //       // part 1 - one at a time.
    //       let crateToMovePartOne = stackCrates[moveFrom].pop();
    //       stackCrates[moveTo].push(crateToMovePartOne);
    //   }
    // }

    // part 2
    for(let {moveAmount, moveFrom, moveTo} of instructionList) {
        // part 2 - many at a time
        let crateToMovePartTwo = stackCrates[moveFrom].splice(-1 * moveAmount, moveAmount);
        stackCrates[moveTo].push(...crateToMovePartTwo);
      };

    console.log('steve', stackCrates);

    // let answer = "";
    // for (let i = 0; i < stackCrates.length; i++) {
    //   let s = stackCrates[i];
    //   let last = s[s.length -1];
    //   answer += last;
    // }
      
    setAnswer(stackCrates.map(s => s[s.length-1]).join(''));
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

export default Day5;
