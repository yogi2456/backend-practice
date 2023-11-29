import ProductModal from "../Modals/Product.modal.js"

export const getAllProducts = async (req, res) => {
    try {
         const products = await ProductModal.find({})

         if(products.length) {
            return res.status(200).json({success: true, message: "products found", products: products})
         }
         return res.status(404).json({success: false, message: "products not found"})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}
export const getSingleProduct = async (req, res) => {
    try {
        const { id: productId } = req.query;
        if(!productId) return res.status(404).json({success: false, message: " Product Id is required"})

        const product = await ProductModal.findById(productId).select("-createdAt -updatedAt -_v")
        if (product) {
            return res.status(200).json({ success: true, message: "product found", product: product})
        }
        return res.status(404).json({success: false, message: "product not found"})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
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

//filter
//sorting asc des
// pagination
export const filterProducts = async (req, res) => {
    try {
         const { query } = req.body;
         if(!query) return res.status(401).json({success: false, message: "query is required"})

         const upadatedQuery = {}
         upadatedQuery.category = query;

         const products = await ProductModal.find(upadatedQuery)

         return res.status(200).json({success: true, message: "products found", products })
        
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}


export const sortingProducts = async (req, res) => {
    try {
        const {sorting} = req.body;
        if(!sorting) return res.status(401).json({success: false, message: "sorting is required"})

        // const upadatedQuery = { category: query }

        const name = sorting.replace(/^-/, "");

        const order = sorting[0] == "-" ? "-" : "";

        const updatedSorting = { [name]: `${order}1`}
        //console.log(updatedSorting)

        const products = await ProductModal.find({}).sort(updatedSorting)

        return res.status(200).json({ success: true, message: "products found", products})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}


export const paginationProducts = async (req, res) => {
    try {
        const {page} = req.body;
        if(!page) return res.status(401).json({success: false, message: "page is required"})

        // const upadatedQuery = { category: query};

        const products = await ProductModal.find({}).skip(2).limit(page)
        if(!products) return res.status(401).json({success: false, message: "products not found"})

        return res.status(200).json({ success: true, message: "products found", products})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}


export const yourProducts = async (req, res) => {
    try {
        const {id} = req.body;
        if(!id) return res.status(401).json({success: false, message: "Id not found"})

        const allProducts = await ProductModal.find({userId: id})
        return res.status(200).json({success: true, products: allProducts})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, price, image, category, _id} = req.body.productData;
        if(!name || !price || !image || !category || !_id) return res.status(404).json({success: false, message: "All fields are required."})

        const response = await ProductModal.findByIdAndUpdate(_id, {name, price, image, category})

        return res.status(200).json({success: true, message: "Product updated successfully"})

    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        console.log(req.params, "req.body")
        const {id} = req.query;
        if(!id) return res.status(404).json({success: false, message: "Id not found"})

        const response = await ProductModal.findByIdAndRemove(id)

        return res.status(200).json({success: true, message: "Product deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: error})
    }
}

export const getCartProduct = async (req, res) => {
    try {
        const {productId} = req.query;
        console.log(id, "id")
        if(!productId) return res.status(404).json({success: false, message: "productId not found"})

        const cartProducts = await ProductModal.findById({productId})
        return res.status(200).json({success: true, products: cartProducts})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}