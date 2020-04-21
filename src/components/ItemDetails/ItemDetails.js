import React from 'react'
import styled from 'styled-components'

const Collapse = styled.div `
height: 100%;
width: 0;
position: fixed;
overflow-x: hidden;

`
const Well = styled.div`

`
const Media = styled.div `

`
const Medialeft = styled.div `

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
              <Collapse>
                <Well>
                    <Media>
                        <Medialeft>
                           
                        </Medialeft>
                    </Media>
                </Well>
              </Collapse>
            </div>
        )
    }
}

export default ItemDetails