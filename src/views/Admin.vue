<template>
  <p>Please use this panel to register hr staff</p>
  <create-hr-staff></create-hr-staff>
</template>

<script>
import CreateHrStaff from '../components/CreateHrStaff.vue'

export default {
  name: 'Admin',
  components: {
    CreateHrStaff,
  },
}
</script>
