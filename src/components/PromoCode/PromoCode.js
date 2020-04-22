import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {handleChange} from '../../actions/promoCodeActions'

const Collapse = styled.div `

`
const Row = styled.div `

`
const Col = styled.div `

`
const Forminput = styled.input `
border: 5px solid white;
box-shadow: 0 0 8px rgba(0,0,0,0.1), 0 0 16px rgba(0, 0, 0, 0.1);
padding: 15px;
background: rgba(255, 255,255,0.5);
margin: 0 0 10px 0;
width: 88.5%;
text-align: center;
background-color: #d1d1d1;
`
const Button1 = styled.button `
background-color: #4CAF50;
color: white;
border: none;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
width: 100%;
`
const Forms = styled.form `

`

class PromoCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleChange = e => {
        this.props.handleChange(e);
    };
    render() {
        return (
            <div>
          <button onClick={() => this.setState({open: !this.state.open})}>
          {this.state.open === false ? 'Apply' : 'Hide'} promo code {this.state.open === false ? '+' : '-'}
          </button>
          {this.state.open && <Collapse>
          <Row>
              <Col>
              <Forms>
                  
                      <h1>Promo Code</h1>
                      <Forminput 
                      type='text'
                      placeholder='Enter Promo Code'
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                      />
                  <br />
                  <Button1
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                  >Apply</Button1>
              </Forms>
              </Col>
          </Row>
          </Collapse>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode)