<template>

  <div id="app">
    <v-form action="#" @submit.prevent="createContact()">
      <br/>&nbsp;
      <div class="form-group">
        <label>Name</label>
        <v-text-field v-model="contact.name" type="text" name="name" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Email</label>
        <v-text-field v-model="contact.email" type="text" name="email" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Phone</label>
        <v-text-field v-model="contact.phone" type="text" name="phone" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Message</label>
        <v-text-field v-model="contact.phone" type="text" name="phone" class="form-control"/>
      </div>
      <div class="form-group">
        <v-btn v-show="!edit" type="submit" class="btn btn-primary">New Contact</v-btn>
        <v-btn v-show="edit" type="submit" class="btn btn-primary">Update Contact</v-btn>
      </div>
    </v-form>
    <br/>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        edit:false,
        list:[],
        contact:{
          id:'',
          name:'',
          email:'',
          phone:''

        }
      }
    },
    mounted: function(){
      console.log('Contacts Component Loaded...');
    },
    methods: {

      createContact: function(){
        console.log('Creating contact...');
        //let self = this;
        //let params =Object.assign({}, self.contact);
        alert("Data inserted")


      }
      }
      }
</script>