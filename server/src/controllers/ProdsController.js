const { Produtos } = require("../models");
module.exports = {

  /**
   * @param {*} req 
   * @param {*} res 
   */

  async createProd(req, res) {
    const produto = req.body;
    try {
      let createdProd = await Produtos.create(produto);
      createdProd = createdProd.get({ plain: true });

      return res.send({
        produto: createdProd
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send('Não foi possível criar o usuário');
    }
  },
  async find(req, res) {
    try {
      const produtos= await Produtos.findAll();
      return res.send(produtos);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
}