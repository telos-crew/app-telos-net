<template>
  <q-td key="candidates" :props="props">
    <p class="header">Candidates</p>
    <div v-for="candidate of props.row.candidates" v-bind:key="candidate.name">
      <div class="candidate-item">
        <div class="data">
          <profile-avatar v-bind:account_name="candidate.name" class="avatar-wrap" size="24px"></profile-avatar>
          <div class="info">
            <div class="text">{{candidate.name}} ({{ candidate.votes }})</div>
          </div>
        </div>
        <div class="bar-wrap">
          {{totalVotes}}
          {{getPercentage(candidate.name)}}
          <q-linear-progress :value="100" class="q-mt-md" />
        </div>
      </div>
    </div>
  </q-td>
</template>

<script>
import ProfileAvatar from '../../../components/common/ProfileAvatar.vue'
import { getSymbolInfo } from '../util'

export default {
  props: ['props', 'totalVotes'],
  components: {
    ProfileAvatar
  },
  methods: {
    getPercentage (searchName) {
      if (!this.totalVotes) return 0
      const candidateData = this.electionData.candidates.find(({ name }) => name === searchName)
      if (!candidateData) return 0
      const { votes } = candidateData
      const { whole } = getSymbolInfo(votes)
      return whole / this.totalVotes
    }
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
  flex: 1;

  .data {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 230px;
    margin-right: 24px;

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

  .bar-wrap {
    flex: 1;
    height: 24px;
  }
}
</style>
