<template>
  <card-base>
    <apexchart ref="chart" type="bar" height="400px" width="100%" :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexColumn',
  components: {
    CardBase
  },
  data () {
    return {
      series: [],
      chartOptions: {
        colors: ['#FF00FF', '#17ead9', '#f02fc2'],
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: 'Column',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: [
            'Déces',
            'Hospitalisés',
            'Réanimation',
            'Nouvelles Hospitalisations',
            'Nouvelles Reanimations'
          ],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Personnes',
            style: {
              color: '#FFF'
            }
          },
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
      let donnees = null
      let series = {}
      await this.$axios.get('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
        .then((response) => {
          donnees = response.data.FranceGlobalLiveData[1]
          series = [{
            name: 'Données covid',
            data: [
              donnees.deces,
              donnees.hospitalises,
              donnees.reanimation,
              donnees.nouvellesHospitalisations,
              donnees.nouvellesReanimations
            ]
          }]
          this.$refs.chart.updateSeries(series)
          this.showNotif()
        })
    },
    showNotif () {
      this.$q.notify({
        message: 'Données chargées',
        color: 'purple'
      })
    }
  },
  created () {
    this.getApi()
  }
}
</script>
