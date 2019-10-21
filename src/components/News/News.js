import React, { Component } from 'react';
import NewsItem from './NewsItem';



class News extends Component {
    state = {
        posts:
            <React.Fragment>
                <div className="news-card">
            <div className="thumbnail"><img src="https://i.kinja-img.com/gawker-media/image/upload/s--X1PNBRXV--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/pw5dos9s8u58qtpvkg8z.png" alt="img" /></div>
            <div className="title"><p>Powers of X Just Galaxy Brained This Shit</p></div>
        </div>


            <div className="news-card">
                <div className="thumbnail"><img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/spiderman-farfromhome-charity.jpg" alt="img" /></div>
                <div className="title"><p>Spider-Man Will Stay in the Marvel Cinematic Universe As Disney and Sony Announce New Deal</p></div>
            </div>


            <div className="news-card" >
                <div className="thumbnail"><img src="https://nerdist.com/wp-content/uploads/2019/09/HOUSE_POWER_OF_X_HC.jpg" alt="img" /></div>
                <div className="title"><p>Which 7 X-Men Characters are the Mystery Mutants of POWERS OF X?</p></div>
            </div>
            </React.Fragment>,
        error: false

    }


    componentDidMount() {
      
        const newsKey = '0f5aaaf46c6943a196e19b750f199b32';
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        console.log(year, month, day)
        var url = 'https://newsapi.org/v2/everything?' +
            'q=+Marvel+Comics&' +
            'language=en&' +
            `from=${year}-${month}-${day}&` +
            'sortBy=relevance&' +
            `apiKey=${newsKey}`;




        fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    const posts = data.articles.slice(0, 6);
                    const updatedPosts = posts.map(post => {
                        return <NewsItem
                            title={post.title}
                            image={post.urlToImage}
                            key={post.id}
                        />;
                    });
                    console.log(updatedPosts)
                    this.setState({ posts: updatedPosts });
                })
                  
            .catch(
                error => {
                    this.setState({ error: true })
                });


    }

    render() {
     

        return (


            <section className="news-section">
                <div className="container">
                    <h1>The News</h1>
                    <div className="news">
                        {this.state.posts}
                      

                    </div>
                </div>
            </section>



        );


    }

}

export default News;





