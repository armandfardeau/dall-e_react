import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Configuration, OpenAIApi} from "openai"

function App() {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);
    const generate_image = async () => {
        const response = await openai.createImage({
            prompt: prompt, n: 1, size: "1024x1024"
        });

        setResult(response.data.data[0].url)
    }
    const hasResult = result.length > 0
    const hasPrompt = prompt.length > 0

    return (<div className="app-main">
        {hasResult ? <h1>Result for '{prompt}'</h1>: <h1>Generate an image using OpenAI API</h1>}
        {hasResult ? <img src={result} alt="Generated image" className="app-image"/> : <></>}
        {!hasResult && hasPrompt ? <h2>Generating image...</h2> : <></>}
        {!hasResult && hasPrompt ? <div className="app-loader"></div> : <></>}
        <input
            type="text"
            className="app-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type something to generate your image..."
        />
        <div className="app-actions">
            <button onClick={generate_image}>Generate Image</button>
            {hasResult ? <button onClick={() => {
                setResult('');
                setPrompt('')
            }}>Clear</button> : <></>}
        </div>
    </div>)
}

export default App
