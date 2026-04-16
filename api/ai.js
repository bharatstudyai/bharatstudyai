export default async function handler(req, res) {
try {

const q = req.query.q;

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
method: "POST",
headers: {
"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://bharatstudyai.vercel.app",
"X-Title": "BharatStudyAI"
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

if(!data.choices){
return res.status(200).json({
answer: JSON.stringify(data)
});
}

res.status(200).json({
answer: data.choices[0].message.content
});

} catch (e) {
res.status(200).json({
answer: "Server error"
});
}
}
