<script>
import Chart from 'chart.js/auto';
import { store } from '../store.js';


export default {
    name: "MonthlyConnection",
    data() {
        return {
            store,
        }
    },
    methods: {
        newLineChart() {
            const data = []
            for (let index = 0; index < this.store.monthlyConnections.length; index++) {
                const element = this.store.monthlyConnections[index];
                //console.log(element)
                data.push({ x: element.month, y: element.connections })
                //console.log(data);
            }

            new Chart(document.getElementById("myChart"), {
                type: "line",
                data: {
                    datasets: [{
                        label: 'Monthly Connections',
                        data: data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }
            })

        },
        newDoughnutChart() {
            const os_data = []
            const connections_data = []
            for (let index = 0; index < this.store.devices.length; index++) {
                const element = this.store.devices[index];
                //console.log(element)
                os_data.push(element.os)
                connections_data.push(element.connections)
                //console.log(os_data);
                //console.log(connections_data);

            }

            new Chart(document.getElementById("doughChart"), {
                type: "doughnut",
                data: {
                    datasets: [{
                        data: connections_data

                    }],
                    labels: os_data
                }
            })
        },
        newBarChart() {
            const range_data = []
            const connections_data = []
            for (let index = 0; index < this.store.userAgeRange.length; index++) {
                const element = this.store.userAgeRange[index];
                //console.log(element)
                range_data.push(element.range)
                connections_data.push(element.connections)
                //console.log(range_data);
                //console.log(connections_data);
            }

            new Chart(document.getElementById("barChart"), {
                type: "bar",
                data: {
                    datasets: [{
                        label: 'User Range Connections',
                        data: connections_data

                    }],
                    labels: range_data
                }
            })
        },
        wait(fun) {
            setTimeout(fun, 3000)
        }
    },
    mounted() {
        store.getData()
        this.wait(this.newLineChart)
        this.wait(this.newDoughnutChart)
        this.wait(this.newBarChart)
    }
}
</script>

<template>
    <div class="container px-2 mb-5 d-flex justify-content-center">
        <canvas id="myChart"></canvas>
    </div>
    <div class="container px-2 mb-5 d-flex justify-content-center">
        <canvas id="doughChart"></canvas>
    </div>
    <div class="container px-2 mb-5 d-flex justify-content-center">
        <canvas id="barChart"></canvas>
    </div>
</template>

<style lang="scss" scoped></style>