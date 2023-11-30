import ProductModal from "../Modals/Product.modal.js";
import UserModal from "../Modals/User.modal.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId} = req.body;
        if(!productId || !userId) return res.status(404).json({success: false, message: "User and Product are mandatory.."})

        await UserModal.findByIdAndUpdate(userId, { cart: productId})

        return res.status(200).json({success: true, message: "Product added to cart successfully"})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}

export const getCartProduct = async (req, res) => {
    try {
        const {userId} = req.body;
        console.log(id, "id")
        if(!userId) return res.status(404).json({success: false, message: "userId not found"})

        await UserModal.findById({userId})

        const cartProducts = await ProductModal.findById({userId})


        return res.status(200).json({success: true, products: cartProducts})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}