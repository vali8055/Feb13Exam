import React,{Component} from "react";

class Image extends Component{
    constructor(){
        super()
        this.state={
            imgsrc:"https://mymodernmet.com/wp/wp-content/uploads/2019/02/pablo-picasso-facts.jpg",
            year:"Pablo Picasso(1881-1973)"
        }
    }

    render(){
        return(
            <div className="img">
            <img src={this.state.imgsrc} id="imgid" />
            <h1 align="center">{this.state.year}</h1>
            </div>
        )
    }
}
export default Image