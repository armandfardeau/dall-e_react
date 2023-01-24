import React from "react";

function Translation({generate_translation, setInput, result}) {
    return (<>
        <textarea className="text-area" cols={30} rows={10} onChange={(e) => {
            setInput(e.target.value)
        }}></textarea>
        <button className="action-btn" onClick={generate_translation}>Generate</button>

        {result.length > 0 ? <p className="result-text">{result}</p> : <></>}
    </>);
}

export default Translation