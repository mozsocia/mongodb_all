const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://vscode_play_user:W4xvOHbdpOHETgcQ@cluster0.5j3hsbw.mongodb.net/mongodbVSCodePlaygroundDB?retryWrites=true&w=majority', { useNewUrlParser: true });



const categorySchema = new Schema({
  _id: { type: String },
  name: { type: String },
  parent: { type: String, ref: 'Category' },
});
const Category = mongoose.model('Category', categorySchema);

const productSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  category: { type: String, ref: 'Category' },
});
const Product = mongoose.model('Product', productSchema);



// Categories collection
const categories = [
  { _id: "5f2d3g4h5j6k7l", name: "Electronics" },
  { _id: "8m9n0o1p2q3r4s", name: "Fashion", parent: "5f2d3g4h5j6k7l" },
  { _id: "t5u6v7w8x9y0z", name: "Home & Kitchen", parent: "5f2d3g4h5j6k7l" },
  { _id: "a1b2c3d4e5f6g", name: "Books" },
  { _id: "h7i8j9k0l1m2n", name: "Music" }
];

const categories2 = [
  { _id: "5f2d3g4h5j6k7l", name: "Electronics",parent: "t5u6v7w8x9y0z"  },
  { _id: "8m9n0o1p2q3r4s", name: "Fashion", parent: "5f2d3g4h5j6k7l" },
  { _id: "t5u6v7w8x9y0z", name: "Home & Kitchen", parent: "5f2d3g4h5j6k7l" },
  { _id: "a1b2c3d4e5f6g", name: "Books" },
  { _id: "h7i8j9k0l1m2n", name: "Music" }
];

// Products collection
const products = [
  { _id: "q3r4s5t6u7v8w", name: "iPhone 11", category: "5f2d3g4h5j6k7l" },
  { _id: "x9y0z1a2b3c4d", name: "Airpods Pro", category: "5f2d3g4h5j6k7l" },
  { _id: "e5f6g7h8i9j0k", name: "iPad Pro", category: "5f2d3g4h5j6k7l" },
  { _id: "l1m2n3o4p5q6r", name: "T-Shirt", category: "8m9n0o1p2q3r4s" },
  { _id: "s7t8u9v0w1x2y", name: "Jeans", category: "8m9n0o1p2q3r4s" },
  { _id: "z3a4b5c6d7e8f", name: "Blender", category: "t5u6v7w8x9y0z" },
  { _id: "g9h0i1j2k3l4m", name: "Toaster", category: "t5u6v7w8x9y0z" },
  { _id: "n5o6p7q8r9s0t", name: "The Lord of the Rings", category: "a1b2c3d4e5f6g" },
  { _id: "u1v2w3x4y5z6a", name: "Harry Potter", category: "a1b2c3d4e5f6g" },
  { _id: "b7c8d9e0f1g2h", name: "Thriller", category: "h7i8j9k0l1m2n" },
  { _id: "j3k4l5m6n7o8p", name: "Bad", category: "h7i8j9k0l1m2n" },
];

Category.insertMany(categories2,function(error, docs) {
  if(error){
    console.log(error)
  }
  if(!error){
    console.log(docs)
  }
})

// Product.insertMany(products,function(error, docs) {
//   if(error){
//     console.log(error)
//   }
//   if(!error){
//     console.log(docs)
//   }
//   process.exit(0);
// })

// mongoose.connection.close()


// Product.find().populate('category')
//   .exec(function (error, docs) {
//     if (error) {
//       console.log(error)
//     }
//     if (!error) {
//       console.log(docs)
//     }
//     process.exit(0);
//   })

