import React, { Component } from 'react';

class NewsItem extends Component {
    render() {

        return <div className="news-card">
            <div className="thumbnail"><img src={this.props.image} alt="img" />
            </div>
            <div className="title">
                <p>{this.props.title}</p>
            </div>
        </div>
    }
}

export default NewsItem;




            
            
            

    