export const testRequest = (req, res) => {
    // Logic to create a user
    console.log("Receive in TestRequest!");
    res.status(200).json({ messsage: " TestRequest Working" });
};
