<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-header text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="src/dashboard.png"> -->
          </q-avatar>
          Dashboard
        </q-toolbar-title>
        <q-space ></q-space>
        <q-btn
        color="purple"
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        :label="$q.fullscreen.isActive ? 'FullScreen ' : 'FullScreen'"
        ></q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Accueil" />
        <q-route-tab to="/dashboard" label="Dashboard" />
        <q-route-tab to="/config" label="Config" />
      </q-tabs>
    </q-header>

    <q-page-container class="bg-brand">
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  .bg-header {
    background: #1a1a2e;
  }
  .bg-brand {
    background: #16213e;
  }
</style>
