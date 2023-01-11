const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: { type: String },
    name: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: 'Category' },
});
const Category = mongoose.model('Category', categorySchema);

const productSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
});
const Product = mongoose.model('Product', productSchema);
