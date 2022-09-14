<template>
  <div class="container">
    <div class="q-pa-md stepper-wrap">
      <q-stepper
        v-model="electionStatus"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="3"
          title="Setup &amp; Nominee Registration"
          icon="settings"
        >
          Admin is able to set the configuration parameters for the smart contract,
          including election duration, arbitration term length, and number of
          arbitration seats to be filled.
        </q-step>

        <q-step
          :name="1"
          title="Election Preparation"
          icon="assignment"
        >
          Nominees are able to add and remove themselves as an official candidate to the upcoming election.
        </q-step>

        <q-step
          :name="'voting'"
          title="Voting"
          icon="add_comment"
        >
          Users are able to vote for the candidate(s) of choice.

        </q-step>
        <q-step
          :name="'election-finalization'"
          title="Election Finalization"
          icon="add_comment"
        >
          Voting has completed and admin needs to execute <strong>endelection</strong>
          action to process the vote results and begin the arbitration term
          for the winning candidates. Users will also be able to start
          nominating themselves for the next election, whenever that may happen to be.
        </q-step>
      </q-stepper>
    </div>
    <div class="other">

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    electionStatus () {
      const resolve = this.$store.state.resolve
      if (resolve && resolve.config && resolve.elections) {
        const { current_election_id } = resolve
        const currentElection = resolve.elections.find(e => e.id === current_election_id)
        if (!currentElection) return null
        const { status, end_voting_ts } = currentElection
        if (status === 2) { // see if voting period has ended
          const endVotingUnixTimestamp = new Date(`${end_voting_ts}Z`).getTime()
          const rightNow = new Date().getTime()
          if (endVotingUnixTimestamp > rightNow) {
            return 'voting'
          } else {
            return 'election-finalization'
          }
        }
        return status
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  .stepper-wrap {
    flex: 1;
  }
  .other {
    flex: 1;
  }
}
</style>
