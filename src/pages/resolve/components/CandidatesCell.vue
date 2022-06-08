<template>
  <q-td key="candidates" :props="props">
    {{ candidatesSyntax }}
  </q-td>
</template>

<script>
export default {
  props: ['props'],
  mounted: function () {
  },
  computed: {
    candidatesSyntax () {
      const candidateNames = this.props.row.candidates.map(item => item.name)
      const candidateSyntax = candidateNames.join(', ')
      return candidateSyntax
    }
  }
}
</script>
