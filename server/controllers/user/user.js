import User from "../../models/User.js";

const apiV1Login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await User.findOne({
            userName: userName,
            password: password,
        });
        console.log(user);



        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        if (user.password !== password) {
            console.log('password');
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Login Successful",
            data: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

export { apiV1Login };