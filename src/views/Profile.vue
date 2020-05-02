<template>
    <div class="profile">
        <div class="container is-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title title is-4 is-centered">
                        {{ corporateer.name }}
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Rank:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.rank.name }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Tributes gained per week:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.rank.tributesPerWeek }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Main Division:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.mainDivision.name }}</p>
                                </div>
                            </div>
                            <div class="columns is-mobile is-vcentered">
                                <div class="column">
                                    <p class="bd-notification is-info">Main Department:</p>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-info">{{ corporateer.mainDivision.department.name
                                        }}</p>
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
                        All Division memberships
                    </p>
                </header>
                <div class="card-content">
                    <template>
                        <b-table :data="corporateer.memberOfDivisions" :columns="columns"></b-table>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Profile',
        data() {
            return {
                corporateer: this.$store.state.currentCorporateer,
                columns: [
                    {
                        field: 'name',
                        label: 'Division',
                    },
                    {
                        field: 'department.name',
                        label: 'Department',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>