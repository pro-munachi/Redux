import React from 'react'
import styled from 'styled-components'

const Collapse = styled.div `
height: 100%;
width: 100%;
position: relative;
overflow-x: hidden;

`
const Well = styled.div`

`
const Media = styled.div `
display: flex;
justify-content: space-between;
margin-top: 10px;
border-style: ridge;
background: ivory ;
color: gray;
` 
const Images = styled.img `
margin-top: 3px;
margin-left: 4px;
color: gray;

`

const Medialeft = styled.div `

`
const MediaBody = styled.div `
margin: 1em 1em 1em 1em;
`
const Stroong = styled.strong `
text-decoration-line: line-through;
color: gray;
`
const Row = styled.div `
display: flex;
justify-content: space-evenly
`
const Col = styled.div `

`

class ItemDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
              <button 
              onClick={() => this.setState({open: !this.state.open})}
              >
              {this.state.open === false ? `See`: `Hide`} item details
              {this.state.open === false ? `+`: `-`}
              </button>
             <div>
              {this.state.open && <Collapse>
              <Well>
                  <Media>
                      <Medialeft>
                    <Images  src='/Asset/Img/imagess.jpeg' 
                    alt='thumbnail' 
                    width={100} 
                    height={100}/>
                     </Medialeft>
                     <MediaBody>
                         <em>Apple Macbook Pro</em>
                         <Row>
                             <Col>
              <strong>{`$${this.props.price}`}</strong><br />
              <Stroong>{`$${this.props.price}`}</Stroong>
                             </Col>
                             <Col>Qty: 1</Col>
                         </Row>
                     </MediaBody>
                 </Media>
              </Well>  
                 </Collapse>}
             </div>
            </div>
        )
    }
}

export default ItemDetails