import React from 'react';
import styled from 'styled-components'

import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSaving';
import TaxesFees from './components/TaxesFees/TaxesFess';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import {connect} from 'react-redux'
import { handleChange } from './actions/promoCodeActions'

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
    total: 1000,
    pickupSavings: -3.3,
    taxes: 0,
    EstimatedTotal: 0,
    disablePromoButton: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    },
   function() {
     this.setState({
       EstimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
     })
   }
    )
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        EstimatedTotal: this.state.EstimatedTotal * 0.9
      },
      function() {
        this.setState({
          disablePromoButton: true
        })
      }
      )
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
        <PromoCode 
        giveDiscount={ () => this.giveDiscountHandler()}
        isDisabled={this.state.disablePromoButton}
        />
      </Grid>

    </Wrapper>
  );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);
