<template>
  <div>
    <Header />
    <main>
      <section>
        <h1>Produtos</h1>
        <div class="principal_Cadastro">
          <h1 style="margin-left: 30px;">CADASTRO</h1>
          <form id="form_cad" @submit.prevent="cadprod">
            <div style="margin-bottom: 5px;">
              <input
                type="text"
                name="codigo"
                v-model="produto.codigo"
                placeholder="Código"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                v-model="produto.name"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="number"
                name="Quantidade"
                v-model="produto.qtde"
                placeholder="Quantidade"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="number"
                name="indice"
                v-model="produto.indice"
                placeholder="Indice"
                required
              />
            </div>

            <div>
              <input
                style="margin-left: 50px;margin-top: 10px;"
                type="submit"
                value="Adicionar"
              />
            </div>
          </form>
        </div>
        <ul id="v-for-object" class="demo">
          <li v-for="prod in produtos" v-bind:key="prod.id">
            {{ prod.name }}
          </li>
        </ul>

        <table style="width:100%">
          <tr v-for="prod in produtos" v-bind:key="prod.id">
            <th>{{ prod.name }}</th>
          </tr>
          <tr>
            <th>oi</th>
          </tr>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      produto: {
        codigo: "",
        name: "",
        qtde: 0,
        indice: 0,
        valor_total: 0,
      },
      produtos: []
    };
  },
  created() {
    axios.get("/prods/find").then((response) => {
      console.log("response", response);
      this.produtos = response.data;
    });
  },
  methods: {
    async cadprod() {
      const produto = this.produto;
      try {
        await this.$store.dispatch("createProd", produto);
        this.$router.push("/produto");
      } catch (e) {
        console.log("Não foi possivel realizar o cadastro!", e);
        alert("Não foi possivel realizar o cadastro!");
      }
    },
  },
};
</script>
