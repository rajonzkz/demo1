import React from 'react';


class Input extends React.Component {
    addComment(){
        let myvalue =this.refs.myinput.value
        this.props.onMyUpdata(myvalue);
    }

    render() {
        return (
                <div>
                    <h2>这是输入框：<input type="text" ref="myinput"/><button onClick={this.addComment.bind(this)}>提交</button></h2>
                </div>

        );
    }
}

export default Input;
