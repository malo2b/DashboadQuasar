<template>
  <q-page class="container">
    <div class="row">
      <div class="charts"><ApexRadialBarPourcentConfinment></ApexRadialBarPourcentConfinment></div>
      <div class="charts"><ApexColumnCovidStat></ApexColumnCovidStat></div>
      <div class="charts"><ApexLineTemperatureEvolution></ApexLineTemperatureEvolution></div>
    </div>
  </q-page>
</template>

<script>
import ApexRadialBarPourcentConfinment from 'components/ApexRadialBarPourcentConfinment'
import ApexColumnCovidStat from 'components/ApexColumnCovidStat'
import ApexLineTemperatureEvolution from 'components/ApexLineTemperatureEvolution'

export default {
  name: 'Dashboard',
  components: {
    ApexColumnCovidStat,
    ApexRadialBarPourcentConfinment,
    ApexLineTemperatureEvolution
  }
}
</script>

<style>
.charts {
  padding: 15px 7.5px;
  width: 33%;
  height: 500px;
  min-width: 420px;
  max-width: 100%;
  flex-wrap: wrap;
  flex-grow: 3;
}

</style>
