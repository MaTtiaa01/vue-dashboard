import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    devices: null,
    monthlyConnections: null,
    userAgeRange: null,
    solar_power: null,
    data_api_url: 'https://aff904b2-0df3-444b-91c7-76d17288c169.mock.pstmn.io/data',
    solar_api_url: 'https://04a0a445-cba2-4d9b-a96c-a86aa6db1e8b.mock.pstmn.io/solar',
    getData() {
        axios
            .get(this.data_api_url)
            .then((response) => {
                //console.log(response.data)
                this.devices = response.data.Devices
                this.monthlyConnections = response.data.MonthlyConnections
                this.userAgeRange = response.data.UsersAgeRange
                //console.log(this.userAgeRange);
            })
            .catch((error) => {
                console.log(error.message)
                this.error = error.message
                this.loading = false
            })
    },
    getSolarPower() {
        axios
            .get(this.solar_api_url)
            .then((response) => {
                //console.log(response.data)
                this.solar_power = response.data
            })
            .catch((error) => {
                console.log(error.message)
                this.error = error.message
                this.loading = false
            })
    }
})