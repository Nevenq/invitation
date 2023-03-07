import React from 'react';
import './App.css';

function App() {
    const ref = React.useRef(null)
    return (
        <div >
            <div className={"block"}>
                <div className={"greetings"}>
                    <div className={"smallLine"}/>
                    <div className={"bigLine"}/>
                    <div className={"smallLine right"}/>
                    <div className={"bigLine right"}/>
                    <div className={'text'}>
                        <div className={"name"}>Маша и Кирилл</div>
                        <div className={"caption"}>Мы рады пригласить вас на празднование<br/> долгожданного и
                            радостного
                            события – <br/>
                            дня нашей свадьбы
                        </div>
                        <div className={"caption2"}>И будем счастливы разделить с вами, самыми<br/> близкими для нас
                            людьми, этот светлый и<br/>
                            замечательный день
                        </div>
                        <div className={"signature"}>С любовью, Паша и Кристина</div>
                    </div>
                </div>
                <div className={"question"}>Вы готовы погрузиться в наш мир?</div>
                <div className={"arrow"}>
                    <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_31_2)">
                            <path
                                d="M37.2148 7H34.2014C33.9965 7 33.8036 7.10045 33.6831 7.26518L22.2684 22.9991L10.8536 7.26518C10.7331 7.10045 10.5402 7 10.3353 7H7.32194C7.06078 7 6.9081 7.29732 7.06078 7.51027L21.2277 27.0411C21.742 27.7482 22.7947 27.7482 23.305 27.0411L37.4719 7.51027C37.6286 7.29732 37.476 7 37.2148 7Z"
                                fill="#563C77"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_31_2" x="0" y="0" width="44.5352" height="34.5714"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_2"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_2" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className={"block second"}>2</div>
        </div>
    );
}

export default App;
