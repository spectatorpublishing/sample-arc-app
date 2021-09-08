import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import InputForm from './InputForm';
import Source from './Source';
import GlobalAuthorData from '../GlobalData/GlobalAuthorData'
import { authorFilter } from '../../../content/sources/author-service'
import SourcesList from "./SourcesList"


const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

const AuthorsWithData = GlobalAuthorData({
    source: "author-service",
    query: {},
    filter: authorFilter
  })(SourcesList);
  
const Home = () => {
    return (
        <Wrapper>
          <Navbar />
          <main>
            <InputForm />
            <AuthorsWithData/>
          </main>
        </Wrapper>
      );
};

export default Home;