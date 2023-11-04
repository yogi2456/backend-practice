import ProductModal from "../Modals/Product.modal.js"

export const getAllProducts = (req, res) => {
    res.send("All products....")
}
export const getSingleProduct = (req, res) => {
    res.send("Single product....")
}

export const addProduct = async (req, res) => {
    try{
        const {name, price, category, image, id} = req.body;
        if (!name || !price || !category || !image || !id) return res.status(401).json({success: false, message: "All fields are mandatory"})
        const product = new ProductModal({
            name, price, category, image: image, userId: id
        })
          //console.log(product, "- product here")
        const ress = await product.save();
          //console.log(ress, "response from mongodb")
        return res.status(200).json({success: true, message: "Product added successfully"})

    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}