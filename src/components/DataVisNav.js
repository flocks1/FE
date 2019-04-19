import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const StyledDataVisNav = styled.div`
    background:rgb(15,15,20);
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    height: 52px;
    width:100%;
    position:fixed;
    z-index:1;

    .styling-div{
        background:#0f8da8;
        width:100%
        height:5px;

    }

    .branding{
        font-size:25px;
        color:white;
        font-family: 'Ubuntu', sans-serif; 
        text-align:center;
        padding:10px;
    }
`


export const DataVisNav = () =>{
    return(
        <StyledDataVisNav>
            <div className='branding'>flocks</div>
            <div className='styling-div'></div>

        </StyledDataVisNav>

    )
}