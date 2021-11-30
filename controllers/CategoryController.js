const { Category } = require("../models");

class CategoryController {
  static async getAll(req, res) {
    try {
      const category = await Category.findAll();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    const {
      category,
      img_path,
    } = req.body;
    try {
      const data = await Category.create({
        category,
        img_path,
      });
      const response = {
        id: data.id,
        category: data.category,
        img_path: data.img_path
      };
      return res.status(201).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = { CategoryController };
