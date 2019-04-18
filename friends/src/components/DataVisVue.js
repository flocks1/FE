import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {DataVisNav} from './DataVisNav';
import {LoaderGears} from './LoaderGears';
import { connect } from 'react-redux';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { AggTable } from '../AggTable';

const StyledDataVisVue = styled.div`

    display:flex;
    flex-direction:column;
    background:#fff;
    align-items:center;
    overflow: scroll;

    height:100%;
   
    .static-state-icon{
        margin:auto;
        font-size:60px;
    }
    
    .expanded{
        width:100%;
    }

    .charts-container{
        padding: 1%;
        width: 100%;
        height: 500px;
        max-width: 800px;
        margin-top:12%;
        display: flex;
        
        flex-direction: column;

        align-items: center;
    }
    
    .recharts-responsive-container{
        font-weight:800;
        color:black;    
    }
    //use for changing background after successful api
    #load-success{
        background:#c8c8c8;
    }

`

export class DataVisVue extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:[],
            test:true   
        }
    }
    render(){
        return(
            <div className={`data-vis-vue-container${!this.props.toggleStatus ? ' expand':''}`}>
                <StyledDataVisVue>
                    
                    <DataVisNav/>
                        <div className="charts-container">
                        
                            {/* <i className="fas fa-poll"></i> */}
                            {!this.state.test ? (<LoaderGears/>):<LineChart/>}
                            
                        </div>
                        <AggTable/>
                        
                </StyledDataVisVue>
                <BarChart/>
            </div>
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
export default connect(mapStateToProps,{})(DataVisVue);