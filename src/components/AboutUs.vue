<template>
  <div>
    <h1>About Us: Elisa, Anton, Chris, Daniel, Dario</h1>
    <img src="../assets/aboutus.gif" alt="DBZ">

    <h2>Contact Us</h2>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
      
    


  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    msg: String,
  },
};


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
