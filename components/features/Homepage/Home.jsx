import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import InputForm from './InputForm';
import Source from './Source';

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

const Home = () => {
    return (
        <Wrapper>
          <Navbar />
          <main>
            <InputForm />
            <Source
              number={1}
              name="Presbo"
              email= "presbo@columbia.edu"
            />
            <Source
              number={2}
              name="John Jay Mouse"
              email= "mouse@columbia.edu"
            />
            <Source
              number={3}
              name="Water bottle man"
              email= "bottleflipper@columbia.edu"
            />
          </main>
        </Wrapper>
      );
};

export default Home;