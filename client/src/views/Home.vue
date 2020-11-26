<template>
  <div>
  <Header />
    <main>
      <section>
        <h1>HOME</h1>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
    components: {
      Header
    },
    data() {
      return {
        users: []
      };
    },
    async created() {
      await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
        .then((response) => {
          response.json().then(users => {
            this.users = users;
          });
        });
    }
  }
</script>
