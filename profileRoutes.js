// // Backend route to get user profile
// app.get("/api/profile/:email", async (req, res) => {
//     const { email } = req.params;
  
//     try {
//       const user = await User.findOne({ email });
  
//       if (!user) {
//         return res.status(404).json({ error: "User not found" });
//       }
  
//       // Return only the necessary profile information
//       const userProfile = {
//         name: user.name,
//         number: user.number,
//         email: user.email,
//       };
  
//       res.status(200).json(userProfile);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
  