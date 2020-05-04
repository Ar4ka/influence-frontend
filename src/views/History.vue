<template>
    <div class="history">
        <div class="container is-widescreen">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title title is-4 is-centered">
                        Influence History
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-desktop">
                        <div class="column">
                            <h1 class="title is-4">Received</h1>
                            <b-table
                                    :data="receiver"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPageReceiver"
                                    :pagination-simple="isPaginationSimple"
                                    :pagination-position="paginationPosition"
                                    :default-sort-direction="defaultSortDirection"
                                    :sort-icon="sortIcon"
                                    :sort-icon-size="sortIconSize"
                                    default-sort="timestamp"
                                    aria-next-label="Next page"
                                    aria-previous-label="Previous page"
                                    aria-page-label="Page"
                                    aria-current-label="Current page"
                                    :hoverable="true"
                                    :narrowed="true">

                                <template slot-scope="props">
                                    <b-table-column field="sender" label="Sender" sortable>
                                        {{ props.row.sender }}
                                    </b-table-column>

                                    <b-table-column field="timestamp" label="Date" sortable centered>
                                       <span class="tag is-success">
                                          {{ new Date(props.row.timestamp).toLocaleDateString() }}
                                         </span>
                                    </b-table-column>
                                    <b-table-column field="message" label="Message">
                                        {{ props.row.message }}
                                    </b-table-column>
                                    <b-table-column field="amount" label="Amount" sortable>
                                        {{ props.row.amount }}
                                    </b-table-column>
                                    <b-table-column field="division" label="Type">
                                        <div v-if="props.row.division !== 'none'">{{ props.row.division }}</div>
                                        <div v-else-if="props.row.department !== 'none'">{{ props.row.department }}
                                        </div>
                                        <div v-else>General</div>
                                    </b-table-column>
                                </template>
                            </b-table>
                        </div>
                        <div class="column">
                            <h1 class="title is-4">Send</h1>
                            <b-table
                                    :data="sender"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPageSender"
                                    :pagination-simple="isPaginationSimple"
                                    :pagination-position="paginationPosition"
                                    :default-sort-direction="defaultSortDirection"
                                    :sort-icon="sortIcon"
                                    :sort-icon-size="sortIconSize"
                                    default-sort="timestamp"
                                    aria-next-label="Next page"
                                    aria-previous-label="Previous page"
                                    aria-page-label="Page"
                                    aria-current-label="Current page"
                                    :hoverable="true"
                                    :narrowed="true">

                                <template slot-scope="props">

                                    <b-table-column field="receiver" label="Receiver" sortable>
                                        {{ props.row.receiver }}
                                    </b-table-column>
                                    <b-table-column field="timestamp" label="Date" sortable centered>
                                       <span class="tag is-success">
                                          {{ new Date(props.row.timestamp).toLocaleDateString() }}
                                         </span>
                                    </b-table-column>
                                    <b-table-column field="message" label="Message">
                                        {{ props.row.message }}
                                    </b-table-column>
                                    <b-table-column field="amount" label="Amount" sortable>
                                        {{ props.row.amount }}
                                    </b-table-column>
                                    <b-table-column field="division" label="Type">
                                        <div v-if="props.row.division !== 'none'">{{ props.row.division }}</div>
                                        <div v-else-if="props.row.department !== 'none'">{{ props.row.department }}
                                        </div>
                                        <div v-else>General</div>
                                    </b-table-column>
                                </template>
                            </b-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import receiver from "../../testdata/receiver";
    import sender from "../../testdata/sender";

    export default {
        name: "History",
        data() {
            return {
                receiver,
                sender,
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'top',
                defaultSortDirection: 'desc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPageReceiver: 1,
                currentPageSender: 1,
                perPage: 15
            }
        }
    }
</script>

<style scoped>

</style>
