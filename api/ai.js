export default async function handler(req, res) {

const API_KEY = "PASTE_YOUR_API_KEY";

const { q } = req.query;

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method:"POST",
headers:{
"Authorization":"Bearer " + API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"mistralai/mistral-7b-instruct",
messages:[
{
role:"user",
content:"Explain simply for class 1-5 student and generate quiz: " + q
}
]
})
}
);

const data = await response.json();

res.status(200).json({
answer: data.choices[0].message.content
});
}
