<template>
  <div>
    {{loggedIn}}
    <button v-on:click="logout">Log out</button>
    <div v-if="notes.length">
      <Note v-for="note in notes" 
        :key="note.id"
        :note="note"
        :deleteNote="deleteNote">
      </Note>
    </div>
    <div v-else>
      You don't have any notes.
    </div>
    <form class="form" v-on:submit.prevent="addNote">
      <input v-model="titleInput"/>
      <textarea v-model="textInput" rows="4" cols="30" placeholder="Add new note"></textarea>
      <button type="submit" >Submit</button>
    </form>
  </div>
</template>

<script>
import Note from "../components/Note.vue";

export default {
  name: "dashboard",
  components: {
    Note
  },
  data: function() {
    return {
      titleInput: '',
      textInput: '',
      notes: [
        {
          id: 1,
          title: 'Testey Title',
          text: 'This is the test content bruh'
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
    addNote() {
      let id;
      this.notes.length ? id = this.notes[this.notes.length - 1].id + 1 : id = 1;
      let newNote = {id, titleInput: this.titleInput, text: this.textInput}
      this.notes.push(newNote)
      this.titleInput = ''
      this.textInput = ''
    },
    deleteNote(id) {
      let newNotes = this.notes.filter(note => note.id !== id);
      this.notes = newNotes
    }
  },
  computed: {
    loggedIn() {
      if (!this.$store.state.loggedIn) {
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}
</style>