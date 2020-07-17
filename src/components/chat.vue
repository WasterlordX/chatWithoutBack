<template>
  <b-row>
    <b-col md="4">
      <div class="users_in_chat">
        <div @click="showedChat = userX.name" v-if="userX.name" :class="{active : showedChat == userX.name }" class="users_in_chat_user">
          <img v-if="avatar" :src="get_image(avatar)" alt="ss" style="width: 20px"><span>{{userX.name}}</span> 
        </div>
        <div @click="showedChat = user.name" :class="{active : showedChat == user.name }" class="users_in_chat_user" v-for="(user,key) in userX.contacts" :key="key">
          <img v-if="user.avatar" :src="get_image(user.avatar)" alt="avatar" style="width: 20px">{{user.name}} 
        </div>
      </div>
    </b-col>
    <b-col md="8">
        <div class="messages_in_chat">
          <div class="messages_place">
            <div v-show="showedChat == userX.name" v-for="message in myChat" :key="message.name">
              <div class="mine">
                <span>{{message}}</span>
              </div>
            </div>
            <div v-show="showedChat == item.name" v-for="item in userX.contacts" :key="item.name">
              <div  v-for="message in messagesStore" :key="message.id">
                <div v-if="message.author == userX.name" class="mine">
                  <span>{{message.text}}</span> <img v-if="avatar" :src="get_image(avatar)" alt="ss" style="width: 20px; border-radius: 50%">
                </div>
                <div v-else class="other">
                  <span>{{message.text}}</span> 
                </div>
                
              </div>
            </div>
          </div>
            <textarea v-model="textareaText" name="chat" id="" cols="30" rows="10"></textarea>
          <button class="submit_button" @click="addMessage(textareaText, userX.name, showedChat)">Send message</button>
        </div>
        
    </b-col>
  </b-row>
</template>

<script>
export default {
  components: {
  },
  props: {
    userX: Object,
    avatar: null,
  },
  data () {
    return {
      showedChat: '',


      showModal: true,
      textareaText: '',
      error: '',
      myChat: [],
    }
    
  },

  methods: {
    addMessage: function(text, author, to) {
      if (text.length != 0){
        if(author == this.showedChat) this.myChat.push(text)
        else this.$store.commit("ADD_MESSEGE", {text: text, author: author, to: to})
        this.textareaText = ''
      }
    },
    get_image(avatar) {
      if(avatar) return avatar;
    }
  },
  computed: {
    messagesStore: function(){
      return this.$store.getters.GETMESSAGES
    }
  },
  mounted () {
    this.showedChat = this.userX.name
  },
}
</script>

<style lang="sass" scoped>
h1, h2, h3, h4, h5, p
  margin: 0
  padding-bottom: 0
.name_input
  width: 100%
  input
    width: 100%
.submit_button
    position: relative
    margin-top: 20px
    border: none
    padding: 6px 15px
    border-radius: 5px
    background-color: rgba(0, 200, 0, 0.6)
    font-size: 16px
    outline: none
    &:hover
      box-shadow: 2px 2px 10px 1px rgba(18, 57, 57, 0.5)
      transition: all 0.3s


.messages_in_chat
  border: 1px solid rgba(0,0,0, 0.4)
  padding: 10px
  border-radius: 5px
  background-color: rgba(0,0,0, 0.05)
  .messages_place
    width: 100%
    min-height: 500px
    border: 1px solid rgba(0,0,0, 0.4)
    padding: 10px
    border-radius: 5px
    color: white
    .mine
      text-align: right
      span
        border-radius: 6px
        padding: 3px 8px
        background-color: rgba(0, 150, 0 , 0.8)
    .other
      text-align: left
      span
        border-radius: 6px
        padding: 3px 8px
        background-color: grey
      
  textarea
    margin-top: 10px
    border-radius: 5px
    width: 100%
    height: 100px



.users_in_chat 
  padding: 10px
  &_user
    border: 1px solid rgba(0,0,0, 0.4)
    border-radius: 5px
    display: flex
    justify-content: flex-start
    margin-bottom: 5px
    padding-left: 5px
    font-weight: 600
    font-size: 16px
    img
      margin-right: 5px
  .active
    background-color: rgba(0, 150, 0 , 0.5)

.submit_button
    position: relative
    margin-top: 20px
    border: none
    padding: 6px 15px
    border-radius: 5px
    background-color: rgba(0, 200, 0, 0.6)
    font-size: 16px
    outline: none
    &:hover
      box-shadow: 2px 2px 10px 1px rgba(18, 57, 57, 0.5)
      transition: all 0.3s

</style>
