import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Modal from './Modal';

const iconWidth = 250;
const iconLeft = (window.innerWidth - iconWidth) / 2;

const App = () => {
  const [codingResources, setCodingResources] = useState();
  const [selectedResource, setSelectedResource] = useState();

  const url = 'https://api.sampleapis.com/codingresources/codingResources';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCodingResources(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Wrapper>
      {selectedResource && (
        <Modal
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource}
        />
      )}
      <Content opacity={selectedResource ? '20%' : '100%'}>
        <GlobalStyles />
        <Header>
          <Img src='../.././logo.png' alt='logo' />
        </Header>
        <Section>
          <Img2 src='../.././computer.png' alt='coffee machine' />
          {codingResources &&
            codingResources.map((resource) => (
              <Item
                key={resource.id}
                onClick={() => setSelectedResource(resource)}
              >
                {resource.description}
              </Item>
            ))}
        </Section>
      </Content>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ opacity }) => opacity};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 50%;
  border-bottom: 2px solid white;
`;

const Img = styled.img`
  width: 200px;
  margin: 30px;
`;

const Section = styled.section`
  padding: 10px;
  padding-top: 270px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

const Img2 = styled.img`
  width: ${iconWidth}px;
  position: absolute;
  top: 25px;
  left: ${iconLeft}px;
`;

const Item = styled.button`
  margin: 20px;
  border: none;
  width: 300px;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  &:hover {
    color: #ffd558;
  }
`;
