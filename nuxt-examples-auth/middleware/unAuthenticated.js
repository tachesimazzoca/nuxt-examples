export default function ({ store, redirect }) {
  if (store.state.authenticated) {
    redirect('/dashboard')
  }
}