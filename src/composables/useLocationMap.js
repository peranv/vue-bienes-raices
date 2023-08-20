import { ref } from 'vue';

export default function useLocationMap() {

    const zoom = ref(15)
    const center = ref([24.160017, -110.318606])

    return{
      zoom,
      center
    }
}