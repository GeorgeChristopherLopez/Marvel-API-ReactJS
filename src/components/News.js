import React, { Component } from 'react';



class News extends Component {


    render() {
        const Marvelkey = '099657800af174d95a17e1f2b89db4fa';
        const newsKey = '0f5aaaf46c6943a196e19b750f199b32';
        var url = 'https://newsapi.org/v2/everything?' +
            'q=Marvel_Comics&' +

            'apiKey=0f5aaaf46c6943a196e19b750f199b32';

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                console.log(response.json());
            })

        return (


            <section >
                <div className="container">
                    <div className="news">

                    <div className="news-card">
                            <div className="thumbnail"><img src="https://amp.businessinsider.com/images/5d8bbacc2e22af4171056976-1136-568.jpg" alt="img" /></div>
                            <div className="title"><p>We compared the top movie franchises at 6 major Hollywood studios, from Disney to Paramount</p></div>
                        </div>


                        <div className="news-card">
                            <div className="thumbnail"><img src="https://gamespot1.cbsistatic.com/uploads/screen_kubrick/43/434805/3584634-rise-of-skywalker-poster-tall.jpg" alt="img" /></div>
                            <div className="title"><p>Marvel's Kevin Feige is working on a new Star Wars movie</p></div>
                        </div>


                        <div className="news-card">
                            <div className="thumbnail"><img src="https://gamespot1.cbsistatic.com/uploads/screen_kubrick/43/434805/3584634-rise-of-skywalker-poster-tall.jpg" alt="img" /></div>
                            <div className="title"><p>Marvel's Kevin Feige is working on a new Star Wars movie</p></div>
                        </div>

                    </div>
                </div>
            </section>



        );


    }

}

export default News;