<template>
  <div id="app">
    <modal
        v-show="showModal"
        >
        <div class="name_input">
          <input v-model="mainUser.name" type="text" placeholder="Your name">
        </div>
          <b-form-file
              class="inputFile"
              id="inputFile"
              accept="image/jpeg, image/png"
              v-model="forAvatar"
              placeholder="No file"
              drop-placeholder="Drop image here."
              v-on:change="update_image"
              hidden
          ></b-form-file>
          <label for="inputFile">Choose avatar</label>
        <p style="color: rgba(255, 0, 0, 0.5)" v-if="error">{{error}}</p>
        <button @click="hideModal" class="submit_button">Submit</button>
    </modal>
    <b-container fluid>
      <b-row>
          <b-col md='6' xs='12'>
            <chat :userX="mainUser" :avatar="someAvatar" />
          </b-col>
        <b-col md='6' xs='12'>
            <chat :userX="user2" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import chat from './components/chat.vue'
import modal from './components/modal.vue'
export default {
  name: 'App',
  components: {
    chat,
    modal
  },
  data(){
    return {
      showModal: true,
      error: '',
      wtf: './assets/logo.png',
      someAvatar: null,
      forAvatar: null,

      mainUser: {
        name: '',
        avatar: null,
        contacts: [
          {
            name: 'Ivan Ivanov',
          }
        ]
      },
      user2: {
        name: 'Ivan Ivanov',
        avatar: null,
        contacts: [
        ]
      }
    }
  },
  methods: {
    hideModal: function () {
      if (!this.mainUser.name) {
        this.error = 'Name too short'
      } else if (!this.someAvatar) this.error = 'Please choose avatar'
      else {
        this.error = 'no errors here'
          this.user2.contacts.push({
            name: this.mainUser.name,
            avatar: this.someAvatar
            })
          this.showModal = false
      }
    },
    update_image: function(e){
      if (e.target.files[0]){
          this.someAvatar = URL.createObjectURL(e.target.files[0]);  
          }
      else
          this.someAvatar = null;
    }

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  box-sizing: border-box;
}
.submit_button {
    position: relative;
    margin-top: 20px;
    border: none;
    padding: 6px 15px;
    border-radius: 5px;
    background-color: rgba(0, 200, 0, 0.6);
    font-size: 16px;
    outline: none;
}
.submit_button:hover {
      box-shadow: 2px 2px 10px 1px rgba(18, 57, 57, 0.5);
      transition: all 0.3s;
}
.custom-file {
  display: none !important
}
label,input {
  background-color: #fff;
  margin-top: 5px;
  width: 200px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none
}

</style>
