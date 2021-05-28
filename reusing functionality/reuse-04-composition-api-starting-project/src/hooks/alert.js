import {ref} from 'vue';

export default function useAlert(startingVisiblity = false) {
    const alertIsVisible = ref(startingVisiblity);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
    
    return [
      alertIsVisible,
      showAlert,
      hideAlert
    ];
}