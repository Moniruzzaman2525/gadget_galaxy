import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  feather: {
    type: String,
    required: [true, "feather id required!"],
  },
  name: {
    type: String,
    required: [true, "name id required!"],
  },
  dis: {
    type: String,
    required: [true, "dis id required!"],
  },
  image: {
    type: String,
    required: [true, "product Picture id required!"],
  },
  price: {
    type: String,
    required: [true, "price id required!"],
  },
  regPrice: {
    type: String,
    required: [true, "regPrice id required!"],
  },
  productCode: {
    type: String,
    required: [true, "productCode id required!"],
  },
  brand: {
    type: String,
    required: [true, "brand id required!"],
  },
  status: {
    type: String,
    required: [true, "status id required!"],
  },
  keyFeatures: {
    type: Array,
    required: true,
  },
});

const ProductsModel = mongoose.model("product", productsSchema);

export default ProductsModel;
