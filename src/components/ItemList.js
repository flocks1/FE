import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {getData} from '../actions/index';
import { connect } from 'react-redux';
import {StyledNavigation} from './Nav';
import {CustomSearch} from './CustomSearch';
import {sentimentSend} from '../actions';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}

const media = Object.keys(sizes).reduce((acc,label) => {
    acc[label] = (...args) => 
    css`@media (max-width:${sizes[label]}px){
        ${css(...args)}

    }`

    return acc

    
},{})

const StyledDataView = styled.div`


    display:flex;
    height:100%;
    justify-content: flex-end;
    min-width: 604px;
    overflow: scroll;
    max-width: 604px;
    
   
    
    

    .tweet-container-banner{
        width:50px;
        length:100%
        background:
        background:rgb(38, 38, 38);
    }
    .column-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        z-index:3;
        border-left: 6px solid #272727;
        background: rgb(30, 30, 30);
        color: white;
        max-width:608px;
        overflow:hidden;
        justify-content: space-around;
        -webkit-transition: width 2s; /* Safari */
        transition: width 2s;

        
        ${media.desktop`flex-direction:row;`}

        .tweet-factory-column{
            border-right: 6px solid #272727;
            height:100%
            overflow:scroll;
            width: 300px;
            margin:1px;

            
            .column-title{
                position:fixed;
                z-index:3;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                // box-shadow: 0 4px 2px -2px black;
                width: 291px;
                height: 50px;
                background: #2c2a2a;
                
                
                &.sample{
                    color: #cbcbcb;
                    
                    
                    h3{
                        color:#cbcbcb;
                        margin-right: 80px;
                    }

                    .fas.fa-search{
                        padding: 10px;
                        z-index:5;
                        background: rgb(15,15,20);

                        border-radius: 50%;

                        &:hover{
                            cursor:pointer;
                            color:#00e4ff
                        }
                    }
                }
            }
            .trend-icon{
               
                margin-left: 20px;

            }
            .tweet-factory-content{
                display:flex;
                flex-direction:column;
                align-items:center;
                
            }
            .tweet-factory-content.demo{
                
                .walk-through-content{
                    
                    display:flex;
                    flex-direction:column;
                    text-align:center;
                    justify-content:center;
                    margin-top:50%;
                    align-items:center;

                    .tri-container{
                        width: 200px;
                        height: 63px;
                        background: #959c21;
                        overflow: hidden;
                        position: relative;

                        h4{
                            position: absolute;
                            top: 0;
                            color: black;
                            width: 100%;


                        }
                        
                    }
                        
                        
                    }
                    #triangle-logo{
                        height: 60px;

                        width: 200px;

                        background: #fffc00;

                        -webkit-transform: skewY(18deg);

                        -ms-transform: skewY(18deg);

                        -webkit-transform: skewY(10deg);

                        -ms-transform: skewY(10deg);

                        transform: skewY(9deg);

                        -webkit-transform-origin: right;
                    }

                }

                h3{
                    color:#d3d3d369;
                }

                .tab-title{
                    color:#cbcbcb;
                    margin-left:5px;
                }
            }

            
        }

    }
   
    .global-item-container{
        // border:1px solid lightgray;
        

        margin-top: 50px;
        width:100%;
        
        
        

        .item-container{
            border:1px solid light-gray;
            padding:10px;
            display: flex;
            overflow:hidden;

            justify-content: space-between;
            background: rgb(15,15,20);

            margin: 1px 0px;
            h3{
                color:#cbcbcb;
            }

            &:hover{
                background:#ffff84;
                color:black;
                cursor:pointer;
                h3,.tweet-volume{
                    color:black;
                }
                
            }
            
        }

        .tweet-volume{
            display:flex;
            align-items:center;
            color:#cbcbcb;
            .fa-users{
                padding-right:2px;

            }
        }
    }

    .loader-icon{
        margin-top:200px;
        margin:200px auto
    }

    .fa-crow{
        font-size:100px;
        color:black;
        opacity:.1;
        animation:loadcrow  ease  2s infinite;
    }

    .search-bar-container{
        position:relative;
        height:auto;

        .search-bar-hidden-drop{
            position: absolute;
            background: rgb(15,15,20);
            height: 90px;
            width: 100%;
            height: 200px;
            display:flex;
            flex-direction:column;
            justify-content: flex-end;
            
        }

        .sentiment-input-search-term{
           
            background:rgb(15,15,20);
            padding:10px;
            border:none;
            border-bottom: 2px solid #93934d
            height:100%;
            height:50px;
            width:100%;
            color:#ffffffa6;
            
            font-size:20px;
            margin-bottom: 5px;
            
            //button is in CustomSearch

            
        }
        .demo-btn{
            display:flex;
            justify-content:space-between;
            width:100%;
            height:40px;
            
            
            background:#cbcb5c;
            font-weight:700;
            margin:0px auto;
            display:flex;
            align-items:center;
            border: none;
            text-align:center;
            font-size:12px;
            &:hover{
                cursor:pointer;
                background:#ffff84;
            }
            
            
        }
    }
    
    #query{
        overflow:initial;
    }

    @keyframes loadcrow {
        from {
          
          color:black;
            opacity:.1;
        }
        to {
            color:#cbcbcb;
          opacity:.5;
          
        }
    }
    
   

`

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTrend:'',
            trendSelected:false,
            data:[]
        
        }
    }


    setInputWithTrend = (value) =>{
        this.trendSelected && this.setState({selectedTrend:value});
    }
    componentDidMount(){
        this.props.getData()
        console.log('Item List Mount')
        this.setState({data:this.props.responseItems})
    }

    

    render(){
        return( 
                <StyledDataView id={!this.props.toggleStatus ? 'hidden':''}>
                    
                    
                    
                    <div className='column-container'>
                         
                        
                        
                        <div className='tweet-factory-column trending'>
                        <div className='column-title'>
                                <span className='trend-icon'><i class="fas fa-bolt"></i></span><h3 className='tab-title'>Trending</h3>
                            </div>
                            <div className='tweet-factory-content'>
                        {this.props.fetchingData && (<div className='loader-icon'><i class="fas fa-crow"></i></div>)}
                            {!this.props.fetchingData && this.props.responseItems.length > 0 && (
                                <div className='global-item-container'>
                                    
                                    {this.props.responseItems.map(item => {
                                        return(
                                            <div className='item-container'>
                                                <h3>{item.name}</h3>
                                                <span className='tweet-volume'>
                                                    <i class="fas fa-users"></i><h4>{item.tweet_volume}</h4>
                                                </span>
                                                
                                                
                                            </div>
                                        )
                                    })}
                            
                            
                                </div>)}
                            </div>
                        
                        
                        </div>
                        <CustomSearch sentimentSend={this.props.sentimentSend} selectedTrend={this.state.selectedTrend} trendSelected={this.state.trendSelected}/>
                    </div>
                    
                </StyledDataView>



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.getData.itemData,
    fetchingData:state.getData.fetchingData
});

export default connect(mapStateToProps,{getData,sentimentSend})(ItemList);