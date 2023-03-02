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
                console.log(os_data);
                console.log(connections_data);

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
        wait(fun) {
            setTimeout(fun, 3000)
        }
    },
    mounted() {
        store.getData()
        this.wait(this.newLineChart)
        this.wait(this.newDoughnutChart)
    }
}
</script>

<template>
    <div class="container mb-3 d-flex justify-content-center">
        <canvas id="myChart" style="width:100%;max-width:800px;"></canvas>
    </div>
    <div class="container mb-3 d-flex justify-content-center">
        <canvas id="doughChart" style="width:100%;max-width:800px;"></canvas>
    </div>
</template>

<style lang="scss" scoped></style>