import { ref } from 'vue';

export default function useLocationMap() {

    const zoom = ref(15)
    const center = ref([24.160017, -110.318606])

    function pin(e){
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]
        console.log(center.value)
    }

    return{
      zoom,
      center,
      pin
    }
}