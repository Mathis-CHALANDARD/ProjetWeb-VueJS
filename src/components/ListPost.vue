<script>
import { usePiniaStore } from '../postsStore'

import PostItem from './PostItem.vue';
export default{
    props: ['msg'],
    components: {
        PostItem,
    },

    data(){
        return{
            posts: [],
        };
    } 
}   
</script>