async function query1(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-large",
        {
            headers: {
                Authorization: "Bearer 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",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}


async function getResponse() {
    const prompt = document.getElementById("prompt").value;
    try {
        query1({ inputs: prompt }).then((response1) => {
            document.getElementById("model1-response").innerText =
                response1[0].generated_text;
            console.log(JSON.stringify(response1));
        });

        query({ inputs: prompt }).then((response2) => {
            document.getElementById("model2-response").innerText =
                response2[0].generated_text;
            console.log(JSON.stringify(response2));
        });
    } catch (error) {
        console.error("Error:", error);
    }
}