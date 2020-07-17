<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
        <h2>Welcome</h2>
        <slot>
        </slot>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'modal',
  data () {
    return {
    }
  },

  methods: {
    // close () {
    //   this.$emit('close')
    // }
  }
}
</script>

<style lang="sass" scoped>
.modal-backdrop
    position: fixed
    top: 0
    bottom: 0
    opacity: 1
    background-color: rgba(0,0,0,0.7)
    left: 0
    right: 0
    display: flex
    justify-content: center
    align-items: center

.modal
    border-radius: 5px
    padding: 45px
    max-width: 450px
    min-width: 300px
    position: absolute
    left: 50%
    top: 50%
    height: auto
    background-color: #ced6d6
    transform: translate(-50%, -50%)
    box-shadow: 2px 2px 20px 1px rgba(18, 57, 57, 0.5)
    color: black
    overflow-x: auto
    display: flex
    flex-direction: column
    align-items: center

</style>
