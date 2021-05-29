import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [data, setData] = useState();
  const url = 'https://api.sampleapis.com/coffee/hot';

  useEffect(() => {
    // this is where we fetch the data from the server and add it to state.
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <header className='App-header'>
        <p>Hello</p>
      </header>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  border: 1px solid black;
`;
