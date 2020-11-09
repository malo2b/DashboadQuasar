<template>
  <card-base>
    <apexchart ref="realtimeChart" type="line" height="400" width="500" :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexLine',
  components: {
    CardBase
  },
  data () {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 30]
      }],
      chartOptions: {
        colors: ['#FF00FF', '#17ead9', '#f02fc2'],
        chart: {
          height: 350,
          type: 'line'
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Line',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          categories: ['9h', '10h', '11h', '12h', '14h', '15h', '16h', '17h', '18h', '19h'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  }
}
</script>
