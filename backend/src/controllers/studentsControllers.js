
// import db from "../config/db";

// export const addStudent = (req, res) => {
//   const { name, age, email } = req.body;

//   const query = "INSERT INTO students (name, age, email) VALUES (?, ?, ?)";
//   db.query(query, [name, age, email], (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err });
//     }
//     res.status(201).json({ message: "Student added successfully", id: result.insertId });
//   });
// };
