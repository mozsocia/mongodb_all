const express = require('express');
const app = express();


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


/*
*
* main code start
*/

app.get('/', (req, res) => {
  // Product.find({}).populate({ path: 'category', select: 'name' })
  // .exec(function (error, docs) {
  //   if (error) {
  //     console.log(error)
  //   }
  //   if (!error) {
  //     res.json(docs)
  //   }

  // })


  Category.find({})
  .populate({
      path: 'parent',
      populate: {
          path: 'parent'
      }
  })
  .exec((error, categories) => {
    if (error) {
      console.log(error);
    } else {
      res.json(categories);
    }
  });


});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
