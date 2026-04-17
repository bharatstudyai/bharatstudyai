export default async function handler(req, res) {

const q = req.query.q?.toLowerCase() || "";

// BODMAS custom knowledge
if(q.includes("bodmas")){

return res.status(200).json({
answer: `
BODMAS Rule:

B → Brackets
O → Orders (powers, roots)
D → Division
M → Multiplication
A → Addition
S → Subtraction

Example 1:
2 + 3 × 4
= 2 + 12
= 14

Example 2:
(2 + 3) × 4
= 5 × 4
= 20

Example 3:
10 - 6 ÷ 2
= 10 - 3
= 7
`
});

}

try {

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
method: "POST",
headers: {
"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
model: "mistralai/mistral-7b-instruct",
messages: [
{ role: "user", content: q }
]
})
});

const data = await response.json();

res.status(200).json({
answer: data.choices?.[0]?.message?.content || "No response"
});

} catch (e) {
res.status(200).json({ answer: "AI error" });
}

}
