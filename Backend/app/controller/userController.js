export const testRequest = (req, res) => {
    const { name, email, messageInput } = req.body;
    const data = {
        name,
        email,
        message: messageInput,
    };
    // Logic to create a user
    console.log("Receive in TestRequest!", data);
    res.status(200).json({ messsage: " TestRequest Working", data: data });
};
