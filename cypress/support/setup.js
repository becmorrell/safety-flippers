// import 'tailwindcss/dist/tailwind.min.css'
import '../../public/assets/feather-white-icon.png'
import '@/styles/globals.css'

export const createStore = () => {
    return /* store */
  }
  
  export const createRouter = () => {
    return /* router */
  }

export const createApp = () => {
    return <App router={createRouter()} store={createStore()}></App>
  }