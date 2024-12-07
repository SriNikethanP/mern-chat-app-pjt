import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  res.cookie("jwt", token, {
    
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookie;
