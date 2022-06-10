<template>
  <q-td key="candidates" :props="props">
    <ul>
      <li v-for="candidate of props.row.candidates" v-bind:key="candidate.name">
        <profile-avatar v-bind:account_name="candidate.name" class="avatar-wrap" size="24px"></profile-avatar>
        {{candidate.name}}
        ({{ candidate.votes }})
      </li>
    </ul>
  </q-td>
</template>

<script>
import ProfileAvatar from '../../../components/common/ProfileAvatar.vue'

export default {
  props: ['props'],
  components: {
    ProfileAvatar
  },
  mounted: function () {
  }
}
</script>

<style scoped>
li {
  list-style: none;
  margin-bottom: 6px;
}

.avatar-wrap {
  display: inline;
}
</style>
