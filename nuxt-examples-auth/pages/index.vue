<template>
  <div class="container p-3">
    <div class="row">
      <p v-if="$store.state.authenticated">
        You're a authenticated user.
      </p>
      <p v-else>
        You're not logged in.
      </p>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              Nuxt Link
            </h3>
            <p class="ard-text">
              If you access pages via nuxt-link,
              your browser will load the linked page content without HTTP requests.
              The value <code>process.client</code> must be <code>true</code>.
            </p>
            <ul>
              <li>
                <nuxt-link to="/login">
                  nuxt-link: Login
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/dashboard">
                  nuxt-link: Dashboard
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              Anchor Tag
            </h3>
            <p class="card-text">
              If you access pages via a@href, your browser will send the HTTP GET request.
              The value <code>process.server</code> must be <code>true</code>
              only when the first HTTP request occured.
            </p>
            <ul>
              <li>
                <a href="login">
                  a: Login
                </a>
              </li>
              <li>
                <a href="dashboard">
                  a: Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>
