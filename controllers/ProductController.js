const { Product } = require("../models");

class ProductController {
  static async getAll(req, res, next) {
    try {
      const product = await Product.findAll();
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    const { name, category_id, img_path } = req.body;
    try {
      const data = await Product.create({
        name,
        category_id,
        img_path,
      });
      const response = {
        id: data.id,
        name: data.name,
        category_id: data.category_id,
        img_path: data.img_path,
      };
      return res.status(201).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = { ProductController };
