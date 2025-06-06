const Product = require("../models/product.model");
const productSchema = require("../validator/product.validator");

class ProductController {
  static async newProduct(req, res) {
    const { error } = productSchema.validate(req.body);

    if (error) {
      res.status(422).json({ message: error.details[0].message });
      return;
    }

    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json({
        message: `O produto "${newProduct.name}" foi cadastrado com sucesso!.`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro ao registrar o produto, tente novamente mais tarde.",
      });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({ raw: true });
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro ao consultar o sistema, tente novamente mais tarde.",
      });
    }
  }

  static async getProductById(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findOne({
        raw: true,
        where: {
          id: id,
        },
      });

      if (!product) {
        res.status(404).json({ message: "Produto não encontrado!" });
        return;
      }

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro ao consultar o sistema, tente novamente mais tarde.",
      });
    }
  }

  static async editProduct(req, res) {
    const { error } = productSchema.validate(req.body);

    if (error) {
      res.status(422).json({ message: error.details[0].message });
      return;
    }

    const id = req.params.id;

    const productExists = await Product.findOne({
      raw: true,
      where: {
        id: id,
      },
    });

    if (!productExists) {
      return res.status(404).json({ message: "Produto não existe." });
    }

    const { name, description, price } = req.body;

    try {
      await Product.update(
        { name: name, description: description, price: price },
        {
          where: {
            id: id,
          },
        }
      );
      res
        .status(201)
        .json({ message: "Os dados do produto foram atualizados." });
    } catch (error) {
      console.error(error);
      res.status(500).message({
        message:
          "Erro ao atualizar os dados do produto. Por favor, tente novamente mais tarde",
      });
    }
  }

  static async deleteProductById(req, res) {
    const id = req.params.id;

    try {
      const product = await Product.findOne({
        raw: true,
        where: {
          id: id,
        },
      });

      if (!product) {
        res.status(404).json({ message: "Produto não encontrado!" });
        return;
      }

      await Product.destroy({
        where: {
          id: product.id,
        },
      });

      res.status(200).json({
        message: `O produto "${product.name}" foi excluído.`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro ao consultar o sistema, tente novamente mais tarde.",
      });
    }
  }
}

module.exports = ProductController;
