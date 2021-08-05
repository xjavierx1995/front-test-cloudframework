import { reactive, toRefs } from '@vue/composition-api'

export default function () {
    const data = reactive({
        user: {}
    })


    const getUser = () => {
        window.axios.get('users?id=1').then(response => {
            data.user = response.data.data
        })
    }

    return { ...toRefs(data), getUser}
}