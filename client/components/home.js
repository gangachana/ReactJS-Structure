import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
var image = require('../images/shape.png')
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          MyHtmlContent: '<div> <h2>Welcome to Clevu React !</h2></div>'
        }
      }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.MyHtmlContent }}/>
            </div>
        )
    }
}

export default Home;