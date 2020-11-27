const { Produtos } = require("../models");
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
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
  
  async filter(req, res) {
    var nameFilter = req.params.name
    var nameFilter = ('%'+nameFilter+'%')
    try {
      const produtos = await Produtos.findAll({ where: { name: {[Op.like]: nameFilter }} });
      return res.send(produtos);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
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
  async delete(req, res) {
    const id = req.params.id 
    try {
      if (id==""){
        const produtos= await Produtos.findAll();
        return res.send(produtos);
      }else{
        await Produtos.destroy({
          where: {
            codigo: id
          }
        });
      }
     
      return res.send({
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  }
}