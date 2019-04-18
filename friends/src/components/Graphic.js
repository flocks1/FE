import styled, { css } from 'styled-components';
import React, { Component } from 'react';

const StyledGraphic = styled.div`

    width:500px;
    min-height:500px;
    display:grid;
    grid-template-rows:repeat(7,auto);
    grid-template-columns:repeat(7,auto);

    .circle{
        border-radius:50%
    }

    .one{
        background:brown;
        width:50px;
        height:50px;

    }
    .two{
        background:blue;
        width:200px;
        height:200px;

    }

    .three{
        background-color:red;
        width:100px;
        height:100px;
    }

    .four{
        background-color:green;
        width:100px;
        height:100px;
    }
    .square{
        width:10px;
        height:10px;
    }

`

export const Graphic = ()=>{
    return(
        <StyledGraphic>
            {/* <div className='circle one'></div>
            <div className='circle two'></div>
            <div className='circle three'></div>
            <div className='circle four'></div> */}
            
            <div className='square two'><i class="fab fa-twitter"></i></div>
            <div className='square three'><i class="fab fa-twitter"></i></div>
            <div className='square four'><i class="fab fa-twitter"></i></div>
           
       
            <div className='square five'><i class="fab fa-twitter"></i></div>
            <div className='square six'><i class="fab fa-twitter"></i></div>
            <div className='square seven'><i class="fab fa-twitter"></i></div>
           



        </StyledGraphic>


    )
}