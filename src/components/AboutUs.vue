<template>
  <div>
    <h1>About Us:</h1>
    <img src="../assets/aboutus.gif" alt="DBZ" />

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          <v-card class="pa-2" outlined tile> Elisa </v-card>
        </v-col>
        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          <v-card class="pa-2" outlined tile> Anton </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          <v-card class="pa-2" outlined tile> Christopher </v-card>
        </v-col>
        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          <v-card class="pa-2" outlined tile> Dani </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          <v-card class="pa-2" outlined tile> Dario </v-card>
        </v-col>
      </v-row>
    </v-container>

    <h2>Contact Us</h2>

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="100">
            <v-text-field
              v-model="lastname"
              :counter="500"
              label="Message"
              required
            ></v-text-field>
          </v-col>

          <v-btn color="light" @click="showAlert('Your message has been sent successfully, thank you')">Submit</v-btn>
          <v-alert v-if="message">
            {{ message }}
          </v-alert>
        </v-row>
      </v-container>
    </v-form>
    <br />
  </div>
</template>

<script>
  export default {
    name: "AboutUs",
    data() {
      return{
        msg: '',
        type: '',
        firstname: '',
        lastname: '',
        email: '',
        valid: false,
        message: ''
      }
    },
  

   methods: {
    showAlert (msg) {
      this.message = msg;
      console.log("Your message has been sent successfully, thank you")
      
    }
  }
}


  
</script>