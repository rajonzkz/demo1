import React from 'react';
import './Comming.css';
import Storage from './Storage';

class Comming extends React.Component {
    delet(key) {
        console.log(key)
        let list = this.props.myvalue
        list.splice(key - 1, 1)
        this.setState({
            list: list
        })
    }

    receiveComment(obj) {
        console.log("Comming")
        console.log(obj)

    }

    checkboxOnclick(key) {
        let mycheck = this.refs.mycheck
        let newmyvalue = this.props.myvalue
        let myvalue1 = this.props.myvalue1
        myvalue1=[]
        if (mycheck.checked  == true) {
            myvalue1.push(newmyvalue[key-1])
            console.log("complete",myvalue1)
            this.props.myvalue1.push(myvalue1)
            console.log(this.props.myvalue1)
            // this.props.onMyUpdata(complete);
            // this.setState({
            //     complete: complete
            // })
            // let myvalue1 =this.refs.myinput.value
            // this.props.onMyUpdata(myvalue);
        } else {
            console.log(25555)
        }
    }


    render() {
        console.log("渲染了")
        let newcomment = this.props.myvalue.map((item) => {
            return (
                <p key={item.id}><input type="checkbox" ref="mycheck" />{item.myvalue}
                    <button className="btn" onClick={this.delet.bind(this, item.id)}>删除</button>
                </p>
            )
        })
        return (
            <div>
                <h1>正在进行中：</h1>
                {newcomment}
            </div>
        )
    }
}

export default Comming;
