import React, {Component} from 'react';
import Pbox from './HW2/Pbox';
import img1 from "./HW2/images/1.png"
import img2 from "./HW2/images/2.png"
import './App.css';


class App extends Component {
    render() {
        return (
            <div >
                <Pbox
                  imgsrc={img1}
                  title="1"
                  content="1"
                  href="是奥术大师111"
                  effect="1"
                />
                <Pbox
                    imgsrc={img2}
                    title="2"
                    content="2"
                    href="是奥术大师222"
                    effect="2"
                />
            </div>
        );
    }
}

export default App;
