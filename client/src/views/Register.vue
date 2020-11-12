<template>
  <div>
    <main >
      
      <section >
      <h1>CADASTRO</h1>
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
              <input type="submit" value="Cadastrar" />
            </div>
          </form>
        </div>

      </section>

      <div class="card"><!----><div class="card-header text-left"><h5 class="title">Edit Profile</h5></div><div class="card-body"><div class="row"><div class="col-md-5 pr-md-1 text-left"><div class="form-group"><label class="control-label">
        Company (disabled)
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="Company" disabled="disabled" class="form-control"><!----></div></div><div class="col-md-3 px-md-1 text-left"><div class="form-group"><label class="control-label">
        Username
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="Username" class="form-control"><!----></div></div><div class="col-md-4 pl-md-1 text-left"><div class="form-group"><label class="control-label">
        Email address
      </label><!----><input aria-describedby="addon-right addon-left" type="email" placeholder="mike@email.com" class="form-control"><!----></div></div></div><div class="row"><div class="col-md-6 pr-md-1 text-left"><div class="form-group"><label class="control-label">
        First Name
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="First Name" class="form-control"><!----></div></div><div class="col-md-6 pl-md-1 text-left"><div class="form-group"><label class="control-label">
        Last Name
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="Last Name" class="form-control"><!----></div></div></div><div class="row"><div class="col-md-12 text-left"><div class="form-group"><label class="control-label">
        Address
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="Home Address" class="form-control"><!----></div></div></div><div class="row"><div class="col-md-4 pr-md-1 text-left"><div class="form-group"><label class="control-label">
        City
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="City" class="form-control"><!----></div></div><div class="col-md-4 px-md-1 text-left"><div class="form-group"><label class="control-label">
        Country
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="Country" class="form-control"><!----></div></div><div class="col-md-4 pl-md-1 text-left"><div class="form-group"><label class="control-label">
        Postal Code
      </label><!----><input aria-describedby="addon-right addon-left" placeholder="ZIP Code" class="form-control"><!----></div></div></div><div class="row"><div class="col-md-8 text-left"><div class="form-group"><!----><!----><label>About Me</label><textarea rows="4" cols="80" placeholder="Here can be your description" class="form-control"></textarea><!----></div></div></div></div><!----><div class="card-footer text-left"><button type="button" class="btn btn-success" fill=""><!---->Save</button></div></div>
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
        console.log("Login Error on Login Page", e);
        alert('Não foi possível realizar o login');
      }
    }
  },
};
</script>
