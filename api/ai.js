export default async function handler(req, res) {

const q = req.query.q?.toLowerCase() || "";

if(
q.includes("bodmas") ||
q.includes("bodmass") ||
q.includes("bodmas rule")
){
return res.status(200).json({
answer: `

BODMAS Rule

B - Brackets  
O - Orders  
D - Division  
M - Multiplication  
A - Addition  
S - Subtraction  

Example 1  
2 + 3 × 4  
= 2 + 12  
= 14  

Example 2  
(2 + 3) × 4  
= 5 × 4  
= 20  

Example 3  
10 - 6 ÷ 2  
= 10 - 3  
= 7  

`
});
}

res.status(200).json({
answer:"Ask me about BODMAS"
});

}
