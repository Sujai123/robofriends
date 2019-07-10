import React,{Component} from 'react'

class Scroll extends Component{
    render(){
        return(
            <div style={{height:'35rem',border:'1px solid #f6fffe',overflow:'scroll',margin:'5px'}}>
            {this.props.children}
            </div>
        )
    }
}

export default Scroll