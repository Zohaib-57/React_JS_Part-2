import { useState } from 'react';
import { sculptureList } from './data';

 function Sculpture() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}> Next </button>
      <h2><i>{sculpture.name} </i>by {sculpture.artist}</h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      {console.log(index + 1 ,sculptureList.length)}
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
export default Sculpture;