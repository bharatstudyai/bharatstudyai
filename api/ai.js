export default function handler(req, res) {
  res.status(200).json({
    answer: "BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction"
  });
}
