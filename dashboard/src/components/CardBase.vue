<template>
  <q-card class="fit" :style="{backgroundImage: bgColor}" width="100%" >
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CardBase',
  props: {
    bgColor: {
      // default: '#FFF'
      default: 'linear-gradient( 135deg, #343E59 10%, #2B2D3E 40%)'
    }
  }
}
</script>
