import {useState} from 'react'
import './Text.css'
import {Configuration, OpenAIApi} from "openai"
import OptionSelection from "./OptionSelection.jsx"
import arrayItems from "./AIOptions/index.jsx"
import Translation from "./Translation.jsx"

function Text() {
    const [option, setOption] = useState({})
    const [input, setInput] = useState({})
    const [result, setResult] = useState("")
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const selectOption = (option) => {
        setOption(option)
    }

    const generate_translation = async () => {
        let object = {...option, prompt: option.prompt + input}

        const response = await openai.createCompletion(object)
        console.log(response.data)
        setResult(response.data.choices[0].text)
    };

    return (<div className="app-main">
        <h1>Generate text based on different configuration</h1>
        {Object.values(option).length === 0 ? <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/> :
            <Translation generate_translation={generate_translation} setInput={setInput} result={result}/>}
    </div>)
}

export default Text
