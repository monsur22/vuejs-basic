<template>
  <div id="app">
<section id="topbar" class="d-none d-lg-block">
    <div class="container clearfix">
      <div class="contact-info float-left">
        <i class="fa fa-envelope-o"></i> <a href="mailto:contact@example.com">contact@example.com</a>
        <i class="fa fa-phone"></i> +1 5589 55488 55
      </div>
      <div class="social-links float-right">
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
        <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
      </div>
    </div>
  </section>
    <header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <h1><a href="#body" class="scrollto">Reve<span>al</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>-->
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><router-link to="/">Home</router-link></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
    
          <li><a href="#contact">Contact</a></li>
          <li>
            <router-link to="/Login">Login</router-link>
            
          </li>
             

        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header>
<router-view></router-view>
<Footer></Footer>
<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>
<script src="assets/dist/lib/jquery/jquery.min.js"></script>
  <script src="assets/dist/lib/jquery/jquery-migrate.min.js"></script>
  <script src="assets/dist/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/dist/lib/easing/easing.min.js"></script>
  <script src="assets/dist/lib/superfish/hoverIntent.js"></script>
  <script src="assets/dist/lib/superfish/superfish.min.js"></script>
  <script src="assets/dist/lib/wow/wow.min.js"></script>
  <script src="assets/dist/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="assets/dist/lib/magnific-popup/magnific-popup.min.js"></script>
  <script src="assets/dist/lib/sticky/sticky.js"></script>
  

  <!-- Contact Form JavaScript File -->
  <script src="assets/dist/contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="assets/js/main.js"></script>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
Footer
    // Home
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  @import 'assets/dist/lib/bootstrap/css/bootstrap.min.css';


  @import 'assets/dist/lib/font-awesome/css/font-awesome.min.css';
  @import 'assets/dist/lib/animate/animate.min.css';
  @import 'assets/dist/lib/ionicons/css/ionicons.min.css';
  @import 'assets/dist/lib/owlcarousel/assets/owl.carousel.min.css';
  @import 'assets/dist/lib/magnific-popup/magnific-popup.css';
  @import 'assets/dist/lib/ionicons/css/ionicons.min.css';


   @import 'assets/dist/css/style.css';
   @import 'assets/dist/css/style.css';
</style>
