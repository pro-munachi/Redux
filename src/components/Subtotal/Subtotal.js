import React from 'react'
import styled from 'styled-components'

const Row = styled.div `
display: flex;
justify-content: space-between;
`
const Col = styled.div `

`

class Subtotal extends React.Component {
    render() {
        return (
            <div>
              <Row>
                  <Col md={6}>Subtotal</Col>
                  <Col md={6}> {`$${this.props.price}`} </Col>
              </Row>
            </div>
        )
    }
}

export default Subtotal

