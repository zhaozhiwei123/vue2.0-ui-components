import MyButton from './Button/index.vue'
const components = {
    MyButton
}
let install = function (Vue) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component);
    })
}
export default {
    install
}