import axios from 'axios';

const state = {
};

const getters = {
};

const actions = {
 
  createProd: async ({ commit }, produto) => {
    try {
      const response = await axios.post('/prods/createProd', produto);
      return response;
    } catch (e) {
      // Commit na mensagem de erro
      commit('Erro ao cadastrar');
      throw e;
    }
  }
};

const mutations = {
};


export default {
  state,
  getters,
  actions,
  mutations
};