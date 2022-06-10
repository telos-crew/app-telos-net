<template>
  <div v-if="avatar" :class="childClass">
    <q-avatar v-bind:size="size">
      <img v-bind:src="avatar" />
    </q-avatar>
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from '../../pages/resolve/util/fetch'
export default {
  props: ['account_name', 'size', 'childClass'],
  data () {
    return {
      avatar: ''
    }
  },
  async beforeMount () {
    try {
      const { rows } = await GET_TABLE_ROWS({
        code: 'profiles',
        scope: 'profiles',
        table: 'profiles',
        json: true,
        limit: 1,
        lower_bound: this.account_name,
        upper_bound: this.account_name
      })
      const [ profile ] = rows
      if (profile) {
        const { avatar } = profile
        if (avatar) {
          this.avatar = avatar
        }
      }
    } catch (err) {
      console.log('err: ', err)
    }
  }
}
</script>

<style scoped>
.profile-avatar {
  display: inline;
}
</style>
