export default async function handler(req, res) {
  const q = req.query.q;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer sk-or-PASTE-YOUR-KEY-HERE",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [{ role: "user", content: q }]
      })
    });

    const data = await response.json();

    res.status(200).json({
      answer: data.choices?.[0]?.message?.content || JSON.stringify(data)
    });

  } catch (e) {
    res.status(500).json({ answer: "error" });
  }
}
