const app = Vue.createApp({
    created() { },
    data() {
        return {
            useingLocalTime: true,
            localTime: "",
            inputTime: "",
        };
    },
    mounted() {
        this.init();
    },
    computed: {
    },
    methods: {
        init() {
            this.localTime = new Date();
            this.inputTime = new Date();
        },
    }
});
app.mount('#app');