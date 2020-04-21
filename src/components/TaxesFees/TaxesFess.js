import React from 'react'
import styled from 'styled-components'

const Row = styled.div `
display: flex;
justify-content: space-between;
padding-bottom: 1.5em;
`

const Col = styled.div `

`

class TaxesFees extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>Est. taxes & fees<br /> (Based on 94085)</Col>
        <Col>{`$${this.props.taxes}`}</Col>
                </Row>
            </div>
        )
    }
}

export default TaxesFees