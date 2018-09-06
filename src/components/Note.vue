<template>
  <div>
    <h2>{{note.title}}</h2>
    <p>{{note.text}}</p>
    <button @click="deleteNote(note.id)">Removesss</button>
  </div>
</template>

<script>
export default {
  name: 'note',
  props: ['note', 'deleteNote']
}
</script>