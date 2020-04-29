<template>
  <div class="container p-3">
    <p class="alert alert-dark text-monospace">
      <small>
        You got this page in {{ mode }} mode.
      </small>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: process.server ? 'server' : 'client'
    }
  }
}
</script>
