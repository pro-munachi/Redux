import React, {useRef, useState, useEffect } from 'react'
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
const Des = styled.p `
font-style: italic;
color: red;
`

function useHover() {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)
    return () => {
        ref.current.removeEventListener('mouseenter', enter)
        ref.current.removeEventListener('mouseenter', enter)
    }
    },
    [ref]
    )

    return [ref, hovered]
}

function PickupSavings(props) {
     
        const [ref, hovered] = useHover()
        return (
        <div ref={ref}>
            <Row>
              <Col md={6}>Pickup Savings </Col>
       <Col1 md={6}>{`$${props.price}`} </Col1>
            </Row>
            {hovered && <Des>Picking up your orders in the store helps cut costs, we pass the savings unto you.</Des>}
        </div>
        )
    
}

export default PickupSavings