<template>
  <div>

<form>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
    </div>

    <div class="form-group">
        <button class="btn btn-primary" @click="register">Signup</button>
    </div>
</form>


  
  </div>
</template>

<script>
// import firebase from '../firebase';

  import {db} from '../firebase'


export default {
name: "Login",
data(){
  return{
    email:null,
    password:null
  }

  
},
  methods:{
    register(){
          db.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      // console.log(error);
    });

    }
  }

}

</script>

<style scoped>

</style>
