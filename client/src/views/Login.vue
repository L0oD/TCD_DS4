<template>
  <div>
    <main class="login no-padding">
      <section>
        <div class="principal_login">
          <h1 style="margin-left: 110px;">LOGIN</h1>
          <form @submit.prevent="register" id="form_login">
            <div>
              <input style="margin-left: 50px;" type="text" name="username" placeholder="login" v-model="credentials.username" required />
            </div>
            <div style="margin-top: 10px;">
              <input style="margin-left: 50px;" type="password" name="senha" v-model="credentials.password" placeholder="Password" required />
            </div>
            <div style="margin-left: 110px;margin-top: 10px;margin-bottom: 10px;">
              <input type="submit" value="Login" />
            </div>
            <a style="margin-left: 100px; margin-top: 10px;margin-bottom: 10px;" href="/register">Cadastrar-se</a>
          </form>
        </div>
      </section>
    </main>
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

<style>
.principal_login{
  position: center;
  align-items: center;
  margin-left: 800px;
  margin-right: 800px;
  border: green;
  border-style: dotted;
  margin-top: 300px;
  padding-bottom: 10px;
}

#form_login{
  position: center;
  align-items: center;
}

.no-padding {
  padding: 0;
}

.login {
  width: 100%;
  align-items: center;
}
</style>