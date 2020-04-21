import React from 'react';
import styled from 'styled-components'

import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSaving';
import TaxesFees from './components/TaxesFees/TaxesFess';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';

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
  constructor(props) {
    super(props)
    this.state = {
    total: 100,
    pickupSavings: -3.3,
    taxes: 0,
    EstimatedTotal: 0,
    }
  }

  render() {
  return (
    <Wrapper>
      <Grid>
        <Subtotal price={this.state.total.toFixed(2)}/>
        <PickupSavings price={this.state.pickupSavings.toFixed(2)}/>
        <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
        <hr />
        <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)}/>
        <ItemDetails price={this.state.EstimatedTotal.toFixed(2)}/>
        <hr />
      </Grid>

    </Wrapper>
  );
  }
}

export default App;
