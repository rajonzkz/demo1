import React from 'react';
import "./css/component.css"
import "./css/default.css"




class Pbox extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <ul className={"grid cs-style-"+this.props.effect}>
                    <li>
                        <figure>
                            <img src={this.props.imgsrc}  />
                                <figcaption>
                                    <h3>{this.props.title}</h3>
                                    <span>{this.props.content}</span>
                                    <a>{this.props.href}</a>
                                </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pbox;
