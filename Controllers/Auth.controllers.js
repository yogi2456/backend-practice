import UserModal from "../Modals/User.modal.js";
import bcrypt from 'bcrypt';

export const Login = async (req, res) => {
    try{
        const { email, password} = req.body;
        if(!email || !password) return res.status(401).json({ success : false, message : "all fields are mandatory.."})

        const user = await UserModal.findone({ email : email });
        //console.log(user, "user")

        if(!user) return res.status(401).json({ success : false, message : "email is wrong"});

        const isPasscorrect = await bcrypt.compare(password, user.password);
        console.log(isPasscorrect, "check here")

        res.send(true)
        // if(!isPasscorrect) {
        //     return res.status(401).json({ success: false, message: "password is wrong"})
        // }

        // return res.status(200).json({ success: true, message: "login sucess"})

    }catch(error){
        return res.status(500).json({ success : false, message : error})
    }
}
export const Register = async (req, res) => {
    try {

        const {name, email, password, number} = req.body;

        if(!name || !email || !password || !number) return res.stats(401).json({ success: false, message: "All fields are mandatory"})
        
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword, "hashedpassword")
        const user = new UserModal(
            {
                name: name,
                email,
                password : hashedPassword ,
                number
            })

            await user.save();

        return res.status(200).json({ success: true, message: "Registration successful"})
    } catch(error) {
        return res.stats(500).json({ success: false, message: error})
    }
}