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
        isValidTimeZone(timezoneStr) {
            return this.timezones.map(x => x[0]).indexOf(timezoneStr) != -1;
        },
        convertTime() {
            if (this.useingLocalTime == true) {
                if (this.isValidTimeZone(this.rightSideChosen.split(" | ")[0])) {
                    console.log("Convert Local Time");
                    let hrs = -(new Date().getTimezoneOffset() / 60);
                    let rightTimeDiff = this.dealWithTimeZoneOffsetString(this.timezones.filter(x => x[0] + " | " + x[1] == this.rightSideChosen)[0][3]);
                    console.log(hrs, rightTimeDiff, rightTimeDiff.substring(5), hrs - rightTimeDiff.substring(5));
                    let h = rightTimeDiff.substring(5) - hrs;
                    console.log(new Date(new Date(this.localTime).getTime() + h * 60 * 60 * 1000));
                    this.rightSideTime = new Date(new Date(this.localTime).getTime() + h * 60 * 60 * 1000);
                }
            }
        },
        dealWithTimeZoneOffsetString(timeZoneOffsetStr) {
            return timeZoneOffsetStr;
        }
    }
});
app.mount('#app');