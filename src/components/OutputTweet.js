import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled, { css } from 'styled-components';


var TwitterWidgetsLoader = require('twitter-widgets');

const StyledOutputTweet = styled.div`

    .ds-sugar{
        font-size:15px;
    }






`

export class OutputTweet extends Component {
    constructor() {
        super();
        this.state = {
            isSearching: true,
            input: '#Custom Search',
            searchToggle: true,
            fakeReduxDataTweets:['22','34','67','89','1113457538534477825']

        }
    }

        loadWidgets = (tweetid) => {

            TwitterWidgetsLoader.load(function (err, twttr) {
                if (err) {
                    //do some graceful degradation / fallback
                    return;
                }
                
                twttr.widgets.createTweet(tweetid, { theme: 'dark' }, document.getElementById('tweet'));
                
            })

        } 

        componentDidMount(){
            this.state.fakeReduxDataTweets.forEach(element=>{console.log(element);this.loadWidgets(element)})
        }

        render(){
            console.log('outputtweet rendering!')
            return(
                <StyledOutputTweet>
                    
                    
                    
                </StyledOutputTweet>
            )
        }


    
}

const mapStateToProps = state => {
    console.log('mapping state to props')
   return{
       fetchingSentiment:state.fetchingSentiment,
       sentimentData:state.sentimentData,
        error:state.error
     }

}


//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(mapStateToProps,{})(DataView);