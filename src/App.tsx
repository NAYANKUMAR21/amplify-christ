import { ChangeEvent, FormEvent, useState } from 'react';

export default function App() {
  const [data, setData] = useState<string[]>([]);

  console.log('here');
  const [text, setText] = useState<string>('');
  return (
    <div>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setData([...data, text]);
        }}
      >
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button type="submit">Add</button>
      </form>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
