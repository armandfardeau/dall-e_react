import {useState} from 'react'
import './Image.css'
import {Configuration, OpenAIApi} from "openai"

function Image() {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [clicked, setClicked] = useState(false)
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);
    const generate_image = async () => {
        setClicked(true)
        const response = await openai.createImage({
            prompt: prompt, n: 1, size: "1024x1024"
        });

        setClicked(false)
        setResult(response.data.data[0])
    }
    const hasResult = result.url?.length > 0

    return (<div className="app-main">
        {hasResult ? <h1>Result for '{prompt}'</h1> : <h1>Generate an image using OpenAI API</h1>}
        {hasResult ? <img src={result.url} alt="Generated image" className="app-image"/> : <></>}
        {!hasResult && clicked ? <h2>Generating image...</h2> : <></>}
        {!hasResult && clicked ? <div className="app-loader"></div> : <></>}
        <input
            type="text"
            className="app-input"
            disabled={!hasResult && clicked }
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type something to generate your image..."
        />
        <div className="app-actions">
            <button disabled={!hasResult && clicked } onClick={generate_image}>Generate Image</button>
            {hasResult ? <button onClick={() => {
                setResult('');
                setPrompt('')
                setClicked(false)
            }}>Clear</button> : <></>}
        </div>
    </div>)
}

export default Image
