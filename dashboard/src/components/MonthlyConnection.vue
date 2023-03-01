<script>
import Chart from 'chart.js/auto';
import { store } from '../store.js';


export default {
    name: "MonthlyConnection",
    data() {
        return {
            store,
            xValues: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            yValues: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
        }
    },
    methods: {
        newLineChart() {
            let myChart = new Chart("myChart", {
                type: "line",
                data: {
                    labels: this.xValues,
                    datasets: [{
                        backgroundColor: "rgba(0,0,0,1.0)",
                        borderColor: "rgba(0,0,0,0.1)",
                        data: this.yValues
                    }]
                },
                options: {}
            })

        }
    },
    mounted() {
        store.getData()
    }
}
</script>

<template>
    <div class="container mb-3 d-flex justify-content-center">
        <canvas id="myChart" style="width:100%;max-width:800px"></canvas>
    </div>
</template>

<style lang="scss" scoped></style>