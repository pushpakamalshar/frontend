const goals = async (prompt, retryCount = 0) => {
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
            text: `You are a health and wellness assistant providing expert recommendations. Based on this goals, generate a structured response in the following format (only provide points in this format):

🍎 Recommended Plan
Provide a tailored approach, including diet, exercise, lifestyle changes, and key habits to follow.

💊 Suggested Supplements
List 2-5 evidence-based supplements that support this goals.
Briefly explain their benefits and how they help achieve the goals.

⚠️ Important Notes
Mention any precautions, dosage considerations, or warnings related to the supplements.
Always advise the user to consult a healthcare professional before making changes.
Ensure the response is clear, practical, and medically responsible, using bullet points for readability.`,
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

    if (retryCount < 8) {
      console.log(`No message returned. Attempt: ${retryCount + 1}`);
      return goals(prompt, retryCount + 1);
    }

    throw new Error("No message returned after 8 retries");
  } catch (error) {
    if (retryCount < 8) {
      console.error(`Attempt ${retryCount + 1} failed:`, error.message);
      return goals(prompt, retryCount + 1);
    }
    throw new Error(`Failed to fetch data after 8 retries: ${error.message}`);
  }
};

export default goals;
