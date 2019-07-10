import React,{Component} from "react";
// import "./style.css";

class Card extends Component{
    render(){
        return(
            <div className="bg-washed-blue dib ma2 pa3 grow ba b--purple br3" >
                <img src={`https://robohash.org/${this.props.name}`} alt="robo" />
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>

            </div>
        )
    }
}

export default Card;

