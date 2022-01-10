<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="form.password"
          class="form-control"
          type="password"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Access</label>
        <select v-model="form.access">
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
    <!-- <p v-for="user in users" v-bind:key="user">{{ user }}</p> -->
  </div>
</template>

<script>
import { createHr } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ password: '', email: '', access: 'senior' })

    const onSubmit = async () => {
      await createHr({ ...form })
      form.password = ''
      form.email = ''
    }

    const onReset = () => {
      form.password = ''
      form.email = ''
      form.access = 'senior'
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
