import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { sentimentSend } from '../actions';
import { connect } from 'react-redux';
import {OutputTweet} from './OutputTweet';

var TwitterWidgetsLoader = require('twitter-widgets');

const StyledSearch = styled.div`
    

    

    
    .demo-btn{
        padding:20px 80px;
        background:#cbcb5c;
        font-weight:700;
        margin:0px auto;
        display:flex;
        align-items:center;
        border: none;
        text-align:center;
        font-size:12px;
       
        // &:hover{
        //     cursor:pointer;
        //     background:#ffff84;
        // }//these selectors are in ItemList
       
        
        
    }

    #tweet{
        width:275px;
        border-top:8px solid black;
        height:500px;
        overflow:scroll;
        border-top: 4px solid #00b6cc;

        .EmbeddedTweet{
            background:rgb(15,15,20)
        }
    }

    .walk-through-content{
        height:300px;
        overflow:scroll;
        
    }
   
   

`

export class CustomSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: true,
            input: '#Custom Search',
            searchToggle: true,


        }


    }

    toggleSearch = () => {
        this.setState({ searchToggle: !this.state.searchToggle })
    }
    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };

    //oncsubmit function will need to encode the URI sent to DS api. 

    render() {
        return (
            <div className='tweet-factory-column' id='query'>
                <div className='search-bar-container' id={this.state.searchToggle ? '':'hidden'}>
                    <div className='search-bar-hidden-drop'>
                        <input className='sentiment-input-search-term'
                            placeholder='Enter Search' 
                            onChange={this.handleChanges}></input>

                        <button className='demo-btn'>
                            <span>Submit Search</span><i class="fas fa-arrow-circle-right"></i>

                        </button>

                    </div>
                </div>
                <div className='column-title sample'>
                    <span className='trend-icon'><i class="fas fa-satellite-dish"></i></span><h3 className='tab-title'>Query Sentiment</h3><i onClick={this.toggleSearch} class="fas fa-search"></i>
                </div>
                <div className='tweet-factory-content demo'>
                    <div className='walk-through-content' id='analyzed-tweets'>
                        <h3>Enhance your experience with #sentiment search</h3>
                        <StyledSearch>

                                
                                
                            <OutputTweet/>  

                            <div id='tweet'></div>
                        </StyledSearch>




                    </div>

                </div>


            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log('mapping state to props')
    return {
        fetchingSentiment: state.fetchingSentiment,
        sentimentData: state.sentimentData,
        error: state.error
    }

}


//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(mapStateToProps, { sentimentSend })(CustomSearch);