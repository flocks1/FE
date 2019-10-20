import React, { Component } from 'react';
import styled, { css } from 'styled-components';


import PropTypes from 'prop-types';
// ${media.desktop`background:green;`}

export const StyledNavigation = (props) =>{
    {console.log(props)}
    return(
        <div className='outer-most-global-container'>
            
                   
            <div className='relative-pos-barrier'>
                <StyledNav>
                    <div className='global-nav-and-dash'>
                        <div className='logo-top-left'>
                            <div className='tri-container'>
                                <div id="triangle-logo"></div>
                                <h1>f</h1>
                            </div>

                            
                        </div>
                        <div className='skinny-nav'>
                            {props.toggleStatus ? <i class="fas fa-angle-double-left" onClick={()=>props.toggleExpand()}></i>:<i class="fas fa-angle-double-right" onClick={()=>props.toggleExpand()}></i>}
                            <i class="fas fa-search"></i>
                            <i className="fas fa-user-alt"></i>
                            <i class="fas fa-bolt"></i>
                            
                    
                        </div>
                    </div>
                    
                
                    

                </StyledNav>
            </div>
            
                
            
        </div>



    )
}

StyledNavigation.propTypes = {
    toggleStatus: PropTypes.bool,
    toggleExpand:PropTypes.func
}

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


const StyledNav = styled.div`

    
    height:100%;
    width:60px;
    display:flex;
    flex-direction:column;
    
    z-index:50;
    padding:10px;
    font-family: 'Ubuntu', sans-serif;
    background: rgb(15, 15, 20);
    color:white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
   
    

    .global-nav-and-dash{
        
        

        display:flex;
        flex-direction:column;
        
        .skinny-nav{
            margin-top:20px;
            display:flex;
            flex-direction:column;
            color:white;
            font-size:18px;
            box-sizing: border-box;
            .fas,.fab{
                width:auto;
                margin:10px;
                text-align:center;
                padding-bottom:20px;
                

                &:hover{
                    cursor:pointer;
                    color:#00b6cc;
                    border-radius:50%;
                    
                }
            }


        }

        .logo-top-left{
        
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: 'Ubuntu', sans-serif;
            text-align: center;
            font-size: 15px;
            color:white;
            // letter-spacing: 1px;
            h1{padding: 10px;
                position: absolute;
                top: 50%;
                color: black;
                z-index: 1;
                color: black;
                position: absolute;
                top: -69%;;
             
            color: black;}
            .tri-container{
                width: 30px;
                height: 38px;;
                background: #00b6cc;
                overflow: hidden;
                position: relative;
            }
                
                
            }
            #triangle-logo{
                height: 34px;
                width: 30px;
                background: #00e4ff;
                transform: skewY(18deg);
                transform-origin: right;
            }
        }
        }

        .feature-categories{
            display:flex;
            color:white;
            
            align-items: center;
            flex-direction:column;
    
            
            
        }

        
        
    }
    

    .right-item-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:20px;
        padding:10px;
    }


`