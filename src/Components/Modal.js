import React from 'react';
import styled from 'styled-components';

const Modal = ({ selectedResource, setSelectedResource }) => {
  const formatArrayContentToString = (array) => {
    const formatted = array.map((item, index) => {
      if (index === array.length - 1) {
        return item;
      } else {
        return `${item}, `;
      }
    });
    return formatted;
  };

  return (
    <Wrapper>
      <Button onClick={() => setSelectedResource()}>X</Button>
      <Content>
        <Title>{selectedResource.description}</Title>
        <Info>URL: {selectedResource.url}</Info>
        <Info>
          Resource type: {formatArrayContentToString(selectedResource.types)}
        </Info>
        <Info>
          Topics: {formatArrayContentToString(selectedResource.topics)}
        </Info>
        <Info>
          Levels: {formatArrayContentToString(selectedResource.levels)}
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  border: 20px solid #1d45cc;
  background: #17161c;
  max-width: 100vw;
  min-width: 70vw;
  margin-top: 40px;
  position: fixed;
  z-index: 5;
`;

const Button = styled.button`
  margin: 10px;
  border: none;
  font-family: sans-serif;
  &:hover {
    color: #ffd558;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  padding: 10px;
  margin: 10px;
  border-bottom: 1px solid white;
`;

const Info = styled.div`
  padding: 20px;
  line-height: 1.5;
`;
