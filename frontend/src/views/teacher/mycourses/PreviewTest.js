import React from 'react';
import './PreviewTest.css'
// import data from '../../teacher/Data Json/reacord.json'
// import {test} from "@craco/craco/dist/lib/cra";
function PreviewTest() {
    return (
        <div className="PreviewTest-container">
            <div className="Preview-inside">
                <div className="Preview-title">
                    <h1>Preview test</h1>
                </div>
            </div>

            <div className="Preview-inside-in">
                {/*{data.test.map(item => (*/}
                {/*    <div key={item.id}>*/}
                {/*        <h2>{item.type}</h2>*/}
                {/*        <p>{item.text}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>

        </div>
    );
}

export default PreviewTest;