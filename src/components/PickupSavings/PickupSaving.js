import React from 'react'
import styled from 'styled-components'

const Row = styled.div `
display: flex;
justify-content: space-between;
`

const Col = styled.div `

`
const Col1 = styled.div `
color: red;
font-weight: 800;
`

class PickupSavings extends React.Component {
    render() {
        return (
        <div>
            <Row>
              <Col md={6}>Pickup Savings </Col>
       <Col1 md={6}>{`$${this.props.price}`} </Col1>
            </Row>
        </div>
        )
    }
}

export default PickupSavings