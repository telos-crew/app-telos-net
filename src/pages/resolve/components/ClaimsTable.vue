<template>
	<div>
		hello
	</div>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'
export default {
  props: ['caseId'],
  data () {
    return {
      claims: []
    }
  },
  methods: {
    async fetchClaims () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: this.caseId,
          table: 'claims',
          reverse: true
        })
        this.claims = rows
      } catch (err) {
        console.log('fetchClaims error:', err)
      }
    }
  },
  mounted: function () {
    this.fetchClaims()
  }
}
</script>

<style scoped>

</style>
