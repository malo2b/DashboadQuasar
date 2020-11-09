<template>
  <q-page class="container">
    <div class="column" style="height: 150px">
      <div class=".col-auto .col-md-6"><ApexRadialBarPourcentConfinment></ApexRadialBarPourcentConfinment></div>
      <div class=".col-auto .col-md-6"><ApexColumnCovidStat></ApexColumnCovidStat></div>
      <div class=".col-auto .col-md-6"><ApexLineTemperatureEvolution></ApexLineTemperatureEvolution></div>
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
.column > div {
  padding: 15px 15px;
  flex-wrap: wrap;
  width: 33%;
  justify-content: start;
}

</style>
