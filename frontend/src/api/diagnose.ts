const diagnose = async (prompt, retryCount = 0) => {
  const headers = {
    Authorization:
      "Bearer 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",
    "Content-Type": "application/json",
  };

  const body = {
    model: "meta-llama/llama-3.3-70b-instruct:free",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: `You are a medical assistant providing general health guidance. Format your response in a clear, friendly, and structured way using bullet points.
            Break line after Possible Diagnosis, What can you do and when to seek medical help

            🩺 Based on your symptoms, here's what we found: 
            👉 Possible Diagnosis:
            List the top 3 most probable diagnoses.  
            
            💊 What You Can Do: 
            Provide 3-5 actionable, practical home remedies or treatments, including common medications, lifestyle changes, or self-care tips.  
            
            ⚠️ When to Seek Medical Help:
            List warning signs that indicate a serious condition requiring professional medical attention. Encourage consulting a doctor if symptoms persist or worsen.  
            
            End with a friendly and reassuring closing statement like:  
            Take care! 😊 If your symptoms persist, please consult a doctor.  
            
            Ensure the response remains concise, medically responsible, and easy to understand while always advising users to seek professional medical attention when needed. Only answer in this format.`,
          },
        ],
      },
      {
        role: "user",
        content: [{ type: "text", text: prompt }],
      },
    ],
  };

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.choices?.[0]?.message?.content) {
      return data.choices[0].message.content;
    }

    if (retryCount < 5) {
      console.log(`No message returned. Attempt: ${retryCount + 1}`);
      return diagnose(prompt, retryCount + 1);
    }

    throw new Error("No message returned after 5 retries");
  } catch (error) {
    if (retryCount < 5) {
      console.error(`Attempt ${retryCount + 1} failed:`, error.message);
      return diagnose(prompt, retryCount + 1);
    }
    throw new Error(`Failed to fetch data after 5 retries: ${error.message}`);
  }
};

export default diagnose;
