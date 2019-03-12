import React from 'react';


class Complete extends React.Component {
    render() {
        console.log("渲染了完成")
        // let newcomment1 = this.props.myvalue1.map((item) => {
        //     return (
        //         <p key={item.id}><input type="checkbox" ref="mycheck"/>{item.myvalue}
        //             <button className="btn">删除</button>
        //         </p>
        //     )
        // })
        return (
            <div>
                <h1>已完成：</h1>
                {/*{newcomment1}*/}
            </div>
        )
    }
}

export default Complete;
