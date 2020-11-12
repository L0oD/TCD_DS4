<template>
  <div>
    <main class="login">
      
      <section >
      <h1>LOGIN</h1>
        <div >
          <form  @submit.prevent="register">
            <div >
              <input
                type="text"
                name="username"
                placeholder="Username"
                v-model="credentials.username"
                required
              />
            </div>
            <div >
              <input
                type="password"
                name="password"
                v-model="credentials.password"
                placeholder="Password"
                required
              />
            </div>
            <div >
              <input type="submit" value="Log in" />
            </div>
            <a href="/register" >Cadastrar-se</a>
          </form>
        </div>

      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const credentials = this.credentials;
      try {
        await this.$store.dispatch("authenticate", credentials);
        this.$router.push("/home");
      } catch (e) {
        console.log("Login Error on Login Page", e);
        alert('Não foi possível realizar o login');
      }
    },
    async register() {
      const credentials = this.credentials;
      try {
        await this.$store.dispatch("createAuth", credentials);
        this.$router.push("/home");
      } catch (e) {
        console.log("Login Error on Login Page", e);
        alert('Não foi possível realizar o login');
      }
    }
  },
};
</script>
