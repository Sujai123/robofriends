import React,{Component} from 'react';
import robots from '../robots';
import Card from './Card';

class CardList extends Component{
    
    render(){
        let cardcomp=this.props.robots.map((user,i)=>{
            return <Card key={i} id={this.props.robots[i].id} name={this.props.robots[i].name} email={this.props.robots[i].email}/>
        })    
        return(
        <div className="card">
           {cardcomp}
        </div>
        )
    }
}

export default CardList;
