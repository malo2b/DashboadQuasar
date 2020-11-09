<template>
  <card-base>
    <apexchart ref="realtimeChart" type="line" height="400" width="100%" :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
import { date } from 'quasar'
export default {
  name: 'ApexLine',
  components: {
    CardBase
  },
  data () {
    return {
      series: [{
        data: []
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
          text: 'Evolution Temperatures Maximales',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: '#FFF'
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
  },
  methods: {
    async getApi () {
      const listeProchainsJour = []
      let donnees = {}
      const temperaturesMax = []
      const temperaturesMin = []
      await this.$axios.get('https://api.meteo-concept.com/api/forecast/daily?token=012cfc177aa6e22d596c5c48c75dbbbe05a19711b8187e4f4e9c70d29e3d2d44&insee=2B033')
        .then((response) => {
          donnees = response.data.forecast
          for (let i = 0; i < 14; i++) {
            temperaturesMax.push(donnees[i].tmax)
            temperaturesMin.push(donnees[i].tmin)
            listeProchainsJour.push(date.formatDate(donnees[i].datetime, 'DD-MM'))
          }
          // Update des series de données //
          this.$refs.realtimeChart.updateSeries([
            {
              name: 'Temperatures Maximales',
              data: temperaturesMax
            },
            {
              name: 'Temperatures Minimales',
              data: temperaturesMin
            }
          ])
          // Update des données axe des x //
          this.$refs.realtimeChart.updateOptions({
            xaxis: {
              categories: listeProchainsJour
            }
          })
        })
    }
  },
  mounted () {
    this.getApi()
  }
}
</script>
