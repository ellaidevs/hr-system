<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Access</label>
        <select v-model="form.selectedAccess">
          <option v-for="access in accessList" v-bind:key="access">
            {{ access }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-success mt-3">Create User</button>
      <button type="button" @click="onReset" class="btn btn-success mt-3">
        Reset
      </button>
    </form>
  </div>
</template>

<script>
import { createHr } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ name: '', email: '', selectedAccess: 'senior' })

    const onSubmit = async () => {
      await createHr({ ...form })
      form.name = ''
      form.email = ''
    }

    const onReset = () => {
      form.name = ''
      form.email = ''
      form.selectedAccess = 'senior'
    }
    return { form, onSubmit, onReset }
  },
  data() {
    return {
      accessList: ['senior', 'junior'],
    }
  },
}
</script>
