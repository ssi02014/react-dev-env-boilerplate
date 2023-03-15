import React, { useEffect, useState } from 'react';

interface List {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const Test = () => {
  const [list, setList] = useState<List[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <h3>API Fetch Test</h3>
      <ul>
        {list.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
