import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
width: 350px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 1em;
`

const Wrapper = styled.div `
margin-top: 10px;
display: flex;
justify-content: center;
`

class App extends React.Component {
  render() {
  return (
    <Wrapper>
      <Grid>
        <h2>hello world</h2>
      </Grid>

    </Wrapper>
  );
  }
}

export default App;
