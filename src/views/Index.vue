<template>
  <ul v-if="notes">
    <li v-for="note in notes">
      {{note.stockName}} - {{note.remark}}
    </li>
  </ul>
</template>
<script>
function getNotes (store) {
  return store.dispatch('FETCH_NOTES')
}
export default {
  computed: {
    notes () {
      return this.$store.state.notes
    }
  },
  preFetch: getNotes,
  beforeMount () {
    getNotes(this.$store)
  }
}
</script>
