export default function({ store, redirect, route }) {
  const loginPage = '/login'
  if (!store.getters['user/logged']) {
    console.log('middleware autenticado, logged=false')
    store.commit('user/setAfterLogin', route.path)
    redirect(loginPage)
  } else {
    console.log('middleware autenticado, logged=true')
  }
}
