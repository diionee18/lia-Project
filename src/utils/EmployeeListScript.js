import Pagination from 'vue-pagination-2'

export default {
    components: {
        Pagination
    },
    props: {
        intialPage: {
            type: Number,
            default: 1,
        }
    }
}