const Product = require("../model/product");


//fetch data
const product_all = async(req,res )=>
{
    try{
        const products = await Product.find ();
        if(products.length == 0)
        {
            return res.json({message: "There are no producst left"})
        }
        res.json(products);

    }   
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
};


//add new product
const product_create = async(req,res )=> {
 const {title, price, image , details} = req.body;

 if( !title || !price || !image || !details )
 {
    return res.status(200).json({ message: "All fields are mandatory"});

 }

 //saving query in DB
 const product = new Product ({
    title,
    price,
    image,
    details,
 });

 try{
    const savedProducts = await product.save();
    res.status(201).send(savedProducts);
 }
 catch(error)
 {
    res.status(400).send(error);
 }
};


//update product
const product_update = async(req,res) =>
{
    try{
        //params fetch unique Id
        const productId = req. params.productId;
        const updateProduct = await Product.findByIdAndUpdate(
            productId,
            req.body,
            { new:true}
        );

        if(!updateProduct)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.json({ message: "Product updated successfully"});
    }
    catch(error)
    {
        res.status(500).json({mesage: error.message});
    }
};


const product_delete = async(req,res)=>{
    try{
        const productId = req. params.productId;
        const deleteProduct = await Product.findByIdAndDelete(
            productId,
            req.body,
         
        );
        if(!deleteProduct)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.json({ message: "Product deleted successfully"});
    }
    catch(error)
    {
        res.status(500).json({mesage: error.message});

    }
}

const product_single = async(req,res )=>
{
    try{
        const productId = req. params.productId;
        const singleProduct = await Product.findById (
            productId,
            req.body,
        );
        if(!singleProduct)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.json(singleProduct);
    }
    catch(error)
    {
        res.status(500).json({mesage: error.message});

    }
};


module.exports = {product_create, product_all, product_update, product_delete, product_single };