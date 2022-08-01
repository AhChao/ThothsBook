const app = Vue.createApp({
    created() { },
    data() {
        return {
            useingLocalTime: true,
            localTime: "",
            inputTime: "",
            timezones: [],//['Abbreviation','Time zone name','Location','Offset']
            leftSideChosen: "",
            rightSideChosen: "",
            rightSideTime: "",
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        leftSideFilteredTimezones() {
            return this.timezones.filter(x => x[0].toLowerCase().indexOf(this.leftSideChosen.toLowerCase()) != -1 || this.leftSideChosen == "").map(x => x[0] + " | " + x[1]);
        },
        rightSideFilteredTimezones() {
            return this.timezones.filter(x => x[0].toLowerCase().indexOf(this.rightSideChosen.toLowerCase()) != -1 || this.rightSideChosen == "").map(x => x[0] + " | " + x[1]);
        }
    },
    methods: {
        init() {
            this.localTime = new Date();
            this.inputTime = new Date();
            fetch("../data/timezone.json").then(response => response.json()).then(json => { this.timezones = json; });
        },
        selectTimeZone(timezoneStr, dir) {
            if (dir == "left") {
                this.leftSideChosen = timezoneStr;
            }
            else {
                this.rightSideChosen = timezoneStr;
            }
        },
    }
});
app.mount('#app');