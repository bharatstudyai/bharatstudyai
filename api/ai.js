export default async function handler(req, res) {
  const q = req.query.q;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: q
          }
        ]
      })
    });

    const data = await response.json();

    res.status(200).json({
      answer: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (err) {
    res.status(500).json({
      answer: "Error connecting to AI"
    });
  }
}
