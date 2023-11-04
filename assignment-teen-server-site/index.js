const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173","https://assignment-ten-1cb40.web.app"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
const logger = (req, res, next) => {
  //  console.log('log: info', req.method, req.url,);
   next();
};
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "One unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "Tow unauthorized access" });
    }
    console.log("Value In The Token", decoded);
    req.user = decoded;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.efkktro.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const brandCollection = client.db("brandDB").collection("brand");
    const memberCollection = client.db("memberDB").collection("member");
    const clientCollection = client.db("clientDB").collection("client");
    const productCollection = client.db("productDB").collection("product");
    const cartCollection = client.db("cartDB").collection("cart");
    const carCarouselCollection = client.db("Car_Carousel").collection("car_carousel");

    // AUTH RELATED APIS
    // post auth
    app.post("/jwt", logger, async (req, res) => {
      const user = req.body;
      // console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });


    // clear cookies after logOut user
    app.post("/logOut", async (req, res) => {
      const user = req.body;
      console.log('logOut user', user);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    // add brands
    // add brand post
    app.post("/addBrands", async (req, res) => {
      const newBrand = req.body;
      const result = await brandCollection.insertOne(newBrand);
      res.send(result);
    });
    // add brand get all
    app.get("/addBrands", async (req, res) => {
      const result = await brandCollection.find().toArray();
      res.send(result);
    });
    // add brand get specific id
    app.get("/addBrands/:id", async (req, res) => {
      const id = req.params.id;
      const result = await brandCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // AddManagement
    // add management post
    app.post("/addManagements", async (req, res) => {
      const newMembers = req.body;
      const result = await memberCollection.insertOne(newMembers);
      res.send(result);
    });
    // add management get
    app.get("/addManagements", async (req, res) => {
      const result = await memberCollection.find().toArray();
      res.send(result);
    });

    // addClients
    // addClients post
    app.post("/addClients", async (req, res) => {
      const newClients = req.body;
      const result = await clientCollection.insertOne(newClients);
      res.send(result);
    });
    // addClients get
    app.get("/addClients", async (req, res) => {
      const result = await clientCollection.find().toArray();
      res.send(result);
    });

    // CAR CAROUSEL
    // car carousel get
    app.get("/carCarousel", async (req, res) => {
      const result = await carCarouselCollection.find().toArray();
      res.send(result);
    });

    // fourProducts
    // forProducts post
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });
    // fourProducts get
    app.get("/products", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      console.log('pagination query', page, size);
      const result = await productCollection.find()
      .skip(page * size)
      .limit(size)
      .toArray()
      res.send(result);
    });
    // specific product id
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // update product
    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatesProduct = req.body;
      const product = {
        $set: {
          name: updatesProduct.name,
          brandName: updatesProduct.brandName,
          Product_type: updatesProduct.Product_type,
          price: updatesProduct.price,
          rating: updatesProduct.rating,
          details: updatesProduct.details,
          photoURL: updatesProduct.photoURL,
        },
      };
      const result = await productCollection.updateOne(
        filter,
        product,
        options
      );
      res.send(result);
    });
    // get product count
    app.get('/productsCount', async (req, res) => {
      const count = await productCollection.estimatedDocumentCount();
      res.send({ count });
    })

    // MY CART
    // cart post operation
    app.post("/cart", async (req, res) => {
      const newCart = req.body;
      console.log(newCart);
      const result = await cartCollection.insertOne(newCart);
      res.send(result);
    });
    // cart get
    app.get("/cart", logger, verifyToken, async (req, res) => {
      // console.log("user in the valid token", req.user);
      console.log(req.query.email, req.user.email);
      if (req.query.email !== req.user.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      let query = {};
      console.log(query);
      if (req.query?.email) {
        query = { userEmail: req.query.email };
      }
      console.log(query);
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    // cart get specific one
    app.get("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const result = await cartCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // Deleting cart data
    app.delete("/cart/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
