<template>
    <div class="influence">
        <div class="container is-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title title is-4 is-centered">
                        Influence Detail
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Lifetime:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.lifetimeInfluence }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Total:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.totalInfluence }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Tributes for this Week left:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.tributes }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Max Tributes to hold:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ 1.5*corporateer.rank.tributesPerWeek }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container is-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title is-centered title is-4">
                        All Influence by Division
                    </p>
                </header>
                <div class="card-content">
                    <b-table
                            :data="currentInfluences"
                            :striped="true"
                            :hoverable="true"
                            :bordered="true">

                        <template slot-scope="props">
                            <b-table-column field="department" label="Department">
                                <div v-if="props.row.department !=='none'">{{ props.row.department }}</div>
                                <div v-else>General</div>
                            </b-table-column>

                            <b-table-column field="division" label="Division">
                                <div v-if="props.row.division !=='none'">{{ props.row.division }}</div>
                                <div v-else>General</div>
                            </b-table-column>

                            <b-table-column field="amount" label="Amount">
                                {{ props.row.amount }}
                            </b-table-column>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Influence",
        data() {
            return {
            }
        },
      computed: {
          corporateer() {
            return this.$store.state.currentCorporateer;
          },
        currentInfluences() {
            const influences = [];
            const allInfluences = [...this.$store.state.currentInfluences];
            console.log(allInfluences)
          for (let i = 0; i < allInfluences.length; i++) {
            if (allInfluences[i].amount !== 0) {
              influences.push(allInfluences[i]);
            }
          }
          return influences
        },
      },
    }
</script>

<style scoped>

</style>
