import React, { Component } from 'react'

export class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }}
  
        changes(){
            setInterval(() => {
                this.setState({count:"jawacore"})
            }, 3000);
        }
        render() {
            this.changes()
    return (
      <div>ClassComp {this.state.count}</div>
    )
  }
}


export default ClassComp 