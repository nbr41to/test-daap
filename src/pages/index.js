import { useState } from 'react';
import { useGreet } from '../hooks/useGreet';

export default function Home() {
  const [formValue, setFormValue] = useState('');
  const { greet, setGreeting } = useGreet();

  return (
    <>
      <header>
        <h1>Greet DAO</h1>
      </header>
      <div>
        <h3>{greet}</h3>
        <input
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          value={formValue}
        ></input>
        <button onClick={() => setGreeting(formValue)}>update</button>
      </div>
    </>
  );
}
