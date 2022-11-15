<template>
    <div>
      <form @submit.prevent="userLogin">
        <div>
          <label>Emailo</label>
          <input type="text" v-model="login.email" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="login.password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
    await this.$axios.post('/api/auth/register', {
   email: this.email,
   password: this.password
 });

let user =  await this.$auth.loginWith('local', {
   data: {
     email: this.email,
     password: this.password
   },
 });
}
</script>

<style>

</style>