<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <nuxt-link class="navbar-brand" to="/">
        Nuxt.js Examples | Auth
      </nuxt-link>
    </nav>
    <nuxt />
    <Debug />
  </div>
</template>

<script>
import Debug from '@/components/Debug'

export default {
  components: {
    Debug
  }
}
</script>
