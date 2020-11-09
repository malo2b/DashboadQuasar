<template>
  <card-base>
    <apexchart ref="chart" type=radialBar height=383 width="100%" :options="chartOptions" :series="series" />
    <div class="text-brand text-h5">
      Temps restant : {{timeLeft}}
    </div>
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
import { date } from 'quasar'
export default {
  name: 'ApexMultipleRadialBars',
  components: {
    CardBase
  },
  data () {
    return {
      timeLeft: '',
      series: [],
      chartOptions: {
        chart: {
          toolbar: {
            show: true
          }
        },
        title: {
          text: 'Pourcentage de confinement',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#424242',
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#424242',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                formatter: function (val) {
                  return val + '%'
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
                offsetY: 13
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#FF00FF', '#FCCF31'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        }
      }
    }
  },
  methods: {
    calculerPourcentageConfinement () {
      const timeStamp = Date.now()
      const dateFinConfinement = date.buildDate({ year: 2020, month: 12, date: 1, hours: 0, minutes: 0, seconds: 0 })
      const dateDebutConfinement = date.buildDate({ year: 2020, month: 10, date: 30, hours: 0, minutes: 0, seconds: 0 })
      const dureeConfinement = date.getDateDiff(dateFinConfinement, dateDebutConfinement, 'seconds') // Durée du confinement en secondes
      const tempsConfinementRestant = date.getDateDiff(dateFinConfinement, timeStamp, 'seconds') // Durée en s restante du confinement
      const pourcentageConfinementEffectué = (100 - (tempsConfinementRestant * 100 / dureeConfinement)).toFixed(2)
      this.series = [pourcentageConfinementEffectué]
    },
    convertirS (seconds) {
      let day = null, hour, minute
      minute = Math.floor(seconds / 60)
      seconds = seconds % 60
      hour = Math.floor(minute / 60)
      minute = minute % 60
      day = Math.floor(hour / 24)
      hour = hour % 24
      return {
        day: day,
        hour: hour,
        min: minute,
        sec: seconds
      }
    },
    calculerTempsRestantConfinement () {
      const timeStamp = Date.now()
      const dateFinConfinement = date.buildDate({ year: 2020, month: 12, date: 1, hours: 0, minutes: 0, seconds: 0 })
      const tempsRestantConfinement = date.getDateDiff(dateFinConfinement, timeStamp, 'seconds')
      const t = this.convertirS(tempsRestantConfinement)
      this.timeLeft = t.day + ' jours ' + t.hour + ' heures ' + t.min + ' min ' + t.sec + ' sec '
    }
  },
  mounted () {
    this.calculerTempsRestantConfinement()
    this.calculerPourcentageConfinement()
  },
  created () {
    setInterval(this.calculerTempsRestantConfinement, 1000)
    setInterval(this.calculerPourcentageConfinement, 10000)
  }
}
</script>
<style>
.text-brand {
  color: #FF00FF;
}
</style>
