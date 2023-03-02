import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    devices: null,
    monthlyConnections: null,
    userAgeRange: null,
    api_url: 'https://aff904b2-0df3-444b-91c7-76d17288c169.mock.pstmn.io/data',
    getData() {
        axios
            .get(this.api_url)
            .then((response) => {
                //console.log(response.data)
                this.devices = response.data.Devices
                this.monthlyConnections = response.data.MonthlyConnections
                this.userAgeRange = response.data.UserAgeRange
                console.log(this.monthlyConnections);
            })
            .catch((error) => {
                console.log(error.message)
                this.error = error.message
                this.loading = false
            })
    }
})