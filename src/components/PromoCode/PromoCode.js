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
              <form>
                  <label>
                      <h1>Promo Code</h1>
                      <input 
                      type='text'
                      placeholder='Enter Promo Code'
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                      />
                  </label><br />
                  <button
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                  >Apply</button>
              </form>
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