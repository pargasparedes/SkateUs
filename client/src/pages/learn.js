import React, { useState } from 'react';
var learnPages = require('../utils/arraySteps');

function Learn(props) {
    const [mainPage, setmainPage] = useState(0)

    const displayVideo = learnPages[mainPage].videoUrl

    return (
        <div className='py-[80px]'>
                <h1>{learnPages[mainPage].step}</h1>
                <h2>{learnPages[mainPage].mainText}</h2>
                <h3>{learnPages[mainPage].pasos}</h3>
            {/* <iframe class="w-1/2 aspect-video" src={videoLinks[mainPage]}></iframe> */}
            <button onClick={() => setmainPage((mainPage === (learnPages.length) - 1) ? 0 : mainPage + 1)}>Next Step</button>
        </div>
    )
}

export default Learn