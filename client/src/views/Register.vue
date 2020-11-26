<template>
  <div>
    <main class="cadastro no-padding">
      <section >
        <div class="principal_Cadastro" >
        <h1 style="margin-left: 30px;">CADASTRO</h1>
          <form  id="form_cad"  @submit.prevent="register">
            <div style="margin-bottom: 5px;">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                v-model="credentials.name"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="text"
                name="email"
                v-model="credentials.email"
                placeholder="Email"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="text"
                name="username"
                v-model="credentials.username"
                placeholder="Login"
                required
              />
            </div>
            <div style="margin-bottom: 5px;">
              <input
                type="password"
                name="password"
                v-model="credentials.password"
                placeholder="Password"
                required
              />
            </div>
            <div >
              <input style="margin-left: 50px;margin-top: 10px;" type="submit" value="Cadastrar" />
            </div>
          </form>
        </div>

      </section>
      </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {
  },
  data() {
    return {
      credentials: {
        name: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      const credentials = this.credentials;
      try {
        await this.$store.dispatch("createAuth", credentials);
        this.$router.push("/login");
      } catch (e) {
        console.log("Não foi possivel realizar o cadastro!", e);
        alert('Não foi possivel realizar o cadastro!');
      }
    }
  },
};
</script>

<style>
  .principal_Cadastro{
  position: center;
  align-items: center;
  margin-left: 800px;
  margin-right: 800px;
  border: green;
  border-style: dotted;
  margin-top: 300px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
}

#form_cad{
  position: center;
  align-items: center;
}

.no-padding {
  padding: 0;
}

.cadastro{
  width: 100%;
  align-items: center;
  display:flex;
  justify-items: center;
}
</style>
