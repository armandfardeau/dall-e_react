const arrayItems = [
    {
        name: 'Sentiment analysis',
        id: 'sentiment',
        description: "This option will analyze the sentiment of your text.",
        icon: "https://img.icons8.com/ultraviolet/512/aed.svg",
        options: {
            model: "text-davinci-003",
            prompt: "Classify the sentiment in these sentence\n",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Grammar correction',
        id: 'correction',
        description: "Corrects grammar mistakes",
        icon: "https://img.icons8.com/ultraviolet/512/test-passed.svg",
        options: {
            prompt: "Correct the following \n",
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Movies to Emoji',
        id: 'emoji',
        description: "Converts movie titles to emojis",
        icon: "https://img.icons8.com/ultraviolet/512/crazy.svg",
        options: {
            model: "text-davinci-003",
            prompt: "Convert movie titles into emoji \n",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
]

export default arrayItems