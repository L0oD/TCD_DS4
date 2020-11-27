import axios from 'axios';
const LOCALSTORAGE_KEY = 'instavue-token';
const state = {
  token: localStorage.getItem(LOCALSTORAGE_KEY) || '',
  user: {},
  status: '',
};

const getters = {
  isAuthenticated: (state) => {
    if(state.token && state.token.length) {
      return true;
    } else {
      return false;
    }
  },
  authStatus: (state) => state.status,
  sessionUser: (state) => state.user
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
  },
  deleteProd: async ({ commit }, produtoid) => {
      try {
        const response = await axios.delete('/prods/delete/'+ produtoid);
        return response;
      } catch (e) {
        // Commit na mensagem de erro
        console.log(e);
        commit('Erro ao Deletar');
        throw e;
      }
    }
  }


const mutations = {
  TOKEN: (state, token) => {
    state.token = token;
    localStorage.setItem(LOCALSTORAGE_KEY, token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  AUTH_SUCCESS: (state) => {
    state.status = 'success';
  },
  AUTH_ERROR: (state) => {
    state.status = 'error';
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};