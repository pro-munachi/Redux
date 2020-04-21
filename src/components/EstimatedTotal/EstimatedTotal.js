import React from 'react'
import styled from 'styled-components'

const Row = styled.div `
display: flex;
justify-content: space-between;
padding-bottom: 1.5em;
`
const Col = styled.div `

`

class EstimatedTotal extends React.Component {
    render() {
        return(
            <Row>
                <Col><h2>Est. Total</h2></Col>
        <Col><h2>{`$${this.props.price}`}</h2></Col>
            </Row>
        )
    }
}

export default EstimatedTotal