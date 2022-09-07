<template>
  <q-td key="candidates" :props="props">
    <p class="header">Candidates</p>
    <div v-for="candidate of props.row.candidates" v-bind:key="candidate.name">
      <div class="candidate-item">
        <profile-avatar v-bind:account_name="candidate.name" class="avatar-wrap" size="24px"></profile-avatar>
        <div class="info">
          <div class="text">{{candidate.name}} ({{ candidate.votes }})</div>
        </div>
      </div>
    </div>
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

<style scoped lang="scss">
.header {
  font-family: Roboto;
}

td.text-left {
  text-align: left;
}

.candidate-item {
  padding: 4px;
  display: flex;

  .avatar-wrap {
    margin-right: 8px;
  }

  .info {
    height: 24px;

    .text {
      line-height: 24px;
    }
  }
}
</style>
