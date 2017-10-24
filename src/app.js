import React,  { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                Hello welcome to electron-react app
                <button>Hello</button>
            </div>
        );
    }
}

const appDom = document.getElementById("app")
ReactDOM.render(
    <App />,
    appDom
)
