import userModel from "../models/user.js"
class userController {
    static getAllUsers = async (req, res) => {
        try {
            const allUser = await userModel.find({})
            if (allUser) {
                return res.status(200).json(allUser)
            }
        } catch (error) {
            return res.json(error).status(400)

        }
    }
    static singleUser = async (req, res) => {
        const { id } = req.params
        try {
            let user = await userModel.findById(id)
            if (user) {
                return res.status(200).json(user)
            }
        } catch (error) {
            return res.json(error).status(400)

        }
    }
    static createUser = async (req, res) => {
        const { name, age, email } = req.body
        try {
            if (name && age && email) {
                const newUser = userModel({
                    name,
                    email,
                    age
                })
                let save = await newUser.save()
                if (save) {
                    res.json({ "msg": "User Saved" }).status(201).json(userModel)
                } else {
                    res.json({ "msg": "User Not Found" }).status(404)
                }
            } else {
                return res.json({ "msg": "All Feilds Required" }).status(404)
            }
        } catch (error) {
            return res.json(error).status(400)

        }
    }
    static updateUser = async (req, res) => {
        const { id } = req.params
        try {
            if (id) {
                const updated = await userModel.findByIdAndUpdate(id, req.body)
                let done=await updated.save()
                if(done){
                    return res.json(updated).status(201)
                }
            } else {
                res.json({ "msg": "Id not Found" }).status(400)
            }
        }
        catch (error) {
            return res.json(error).status(400)
        }
    }
    static deleteUser = async (req, res) => {
        const { id } = req.params
        try {
            if (id) {
                let res = await userModel.findByIdAndDelete(id)
                if(res){
                    return res.json({ "msg": "Deleted" }).status(200).json({res})

                }else{
                    return res.json({ "msg": "Not Found" }).status(404)
                }

            } else {
                return res.json({ "msg": "All Feilds Required" }).status(404)
            }
        } catch (error) {
            return res.json(error).status(400)

        }
    }
}
export default userController
