const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

// Database connection with mondodb
mongoose.connect("mongodb+srv://ecommerce:user1234@cluster0.34qevlv.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");

// Api creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
// creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }, 
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})

// Creating api for add product

app.post('/addproduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id +1;
    }else{
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating api for remove product
app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating api for getAll product
app.get('/allproducts', async(req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Schema user model
const User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    }, 
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

// //Creating endpoin for registering the user
// app.post('/signup', async(req, res) => {
//     let check = await User.findOne({email: req.body.email});
//     if(check){
//         return res.status(400).json({success: false, errors: "Existing user found with same email address"});
//     }
//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//         cart[i] = 0;   
//     }
//     const user = new User({
//         name: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         cartData: cart,
//     })
//     await user.save();

//     const data = {
//         user: {
//             id: user.id
//         }
//     }
//     const token = jwt.sign(data, 'secret_ecom');
//     res.json({success: true, token})
// })

// Creating endpoint for registering the user
app.post('/signup', async (req, res) => {
    try {
        // Validate request data
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, errors: "Please provide all required fields: username, email, and password" });
        }

        // Check if the user already exists
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with the same email address" });
        }

        // Initialize cart
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create new user
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });
        await user.save();

        // Create JWT token
        const data = {
            user: {
                id: user.id,
            },
        };
        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error during user signup:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});


//Creating endpoin for user login
app.post('/login', async(req, res) => {
    let user = await User.findOne({email: req.body.email});
    if(user){
        const passMatch = req.body.password === user.password;
        if(passMatch){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token})
        }else{
            res.json({success: false, errors: "Wrong Password"})
        }
    }else{
        res.json({success: false, errors: "Wrong Email"}) 
    }
})

//creating end point for latest products
app.get('/newcollections', async(req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New collection fetched")
    res.send(newcollection);
})

//creating end point for popular products
app.get('/popularproducts', async(req, res) => {
    let products = await Product.find({category: "men"});
    let popularproducts = products.slice(0, 4);
    console.log("Popular products fetched")
    res.send(popularproducts);
})

//creating middlewear to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors: "Plese authenticate using valid login"})
    }else{
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors: "Plese authenticate using a valid token"})
        }
    }
}

//creating end point for adding products in cart data
// app.post('/addtocart', fetchUser, async (req, res) => {
//     console.log("Added", req.body.itemId)
//     let userData = await User.findOne({_id: req.user.id})
//     userData.cartData[req.body.itemId] += 1;
//     await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
//     res.send("Added");
// })

// creating endpoint for adding products in cart data
app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);
    
    try {
        let userData = await User.findOne({_id: req.user.id});
        
        // Ensure cartData is initialized
        if (!userData.cartData) {
            userData.cartData = {};
        }

        // Check if the itemId exists in cartData, if not initialize it
        if (!userData.cartData[req.body.itemId]) {
            userData.cartData[req.body.itemId] = 0;
        }

        // Increment the cartData count for the itemId
        userData.cartData[req.body.itemId] += 1;

        // Update the user document
        await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
        
        res.send("Added");
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).send("Internal Server Error");
    }
});


//creating end point for removing cart data
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId)
    let userData = await User.findOne({_id: req.user.id})
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    res.send("Removed");
})

//creating end point for get cart data
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Get cart")
    let userData = await User.findOne({_id: req.user.id})
    res.json(userData.cartData)
})

app.listen(port, (error) => {
    if(!error){
        console.log("Server is running on port " + port);
    }else{
        console.log("Error: " + error);
    }
})