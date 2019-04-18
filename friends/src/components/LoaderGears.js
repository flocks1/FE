import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const LoaderGearCont = styled.div`
    margin:auto;

    
    .flock-output-ani{
        position:relative;
        display:flex;
        justify-content:center;
        height:100px;
        width:200px;
        
        .login-icon{
            width:80px;
            height:80px;
        }
        

        h2{
            height: 60px;
            
            width: 60px;
            z-index:1;
        }

        .output-items{
            height:100px;
            width:200px;
        
            
            
            position:absolute;
            
            

            .output{
                height:20px;
                width:20px
                animation:infinite-spinning 3s linear infinite,move-out 4s linear infinite;
                position:absolute;
                top:50%;
                left:50%;

                &.two{
                    animation:up-spinning 4s linear infinite,move-out 4s linear infinite;
                }

                &.three{
                    opacity:.5;
                    top:80%;
                    left:20%;
                    animation:forwardup-spinning 3.5s linear infinite,move-out 4s linear infinite;
                }

                &.four{
                    opacity:.5;
                    top:0%;
                    left:10%;
                    animation:forward-spinning 4s linear infinite,move-out 4s linear infinite;
                }

                &.five{
                    opacity:.5;
                    top:0%;
                    left:10%;
                    top:20%;
                    animation:forward-spinning 3s linear infinite,move-out 4s linear infinite;
                }
                
                @keyframes infinite-spinning {
                    from {
                    transform: rotate(0deg);
                    opacity:1;
                    }
                    to {
                    transform: translate(350%, 50%) rotate(300deg) ;
                    opacity:0;
                    }
                }

                @keyframes forward-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(5deg) ;
                    
                    }
                    to {
                        opacity:1;
                        transform: translate(400%, 200%) rotate(180deg)
                        
                    }
                }

                @keyframes forwardup-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(20deg) ;
                    
                    }
                    to {
                        opacity:1;
                        transform: translate(300%, -100%)
                        
                    }
                }

                @keyframes forwardhash-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(20deg) ;
                    
                    }
                    to {
                        opacity:1;
                        transform: translate(300%, 100%)
                        
                    }
                }

                @keyframes up-spinning {
                    from {
                    transform: rotate(0deg);
                    opacity:1;
                    }
                    to {
                    transform: translate(350%, -100%) rotate(-300deg) ;
                    opacity:0;
                    }
                }

                // @keyframes move-out {
                //     from {
                //       transform: rotate(0deg);
                    
                //     }
                //     to {
                //       transform: translateX(100px) translateY(50px);
                //       opacity:0;
                //     }
                // }
                
            }
        }

    }


`



export const LoaderGears = () => {
    return (
        <LoaderGearCont>
            <div className='flock-output-ani'>
                <div className='output-items'>

                    <div className='output one'><i className="fas fa-chart-line"></i></div>
                    <div className='output two'><i className="far fa-paper-plane"></i></div>
                    <div className='output three'><i className="far fa-grin"></i></div>
                    <div className='output four'><i className="fab fa-twitter"></i></div>
                    <div className='output five'><i className="fas fa-hashtag"></i></div>
                </div>
                <h2>

                    <svg className="login-icon">
                        <circle fill="#0f0f14" cx="33" cy="33" r="33"></circle>
                        <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#00b6cc" transform="rotate(143.20083851999883 40 25)">
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="360 40 25"
                                to="0 40 25"
                                dur="10s"
                                repeatCount="indefinite" /></path>
                        <circle fill="#0f0f14" cx="40" cy="25" r="2"></circle>
                        <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#00e4ff" >
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0 28 37"
                                to="360 28 37"
                                dur="10s"
                                repeatCount="indefinite" /></path>
                        <circle fill="#0f0f14" cx="28" cy="37" r="3"></circle>
                    </svg>
                </h2>
            </div>
        </LoaderGearCont>

    )
}
