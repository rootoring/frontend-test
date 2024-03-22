<template>
  <div class="form-builder">
    <!-- Должно собираться автоматически, а не руками как сейчас, согласно конфигу   -->
    <form @submit.prevent="onSubmit">
      <div v-for="form of formData">
        {{ form.name }}
        <div v-for="item of form.items">
          <form-input :label="item.label"  v-if="item.type == 'input'"/>
          <form-select :label="item.label" :options="item.additional.options" v-if="item.type == 'select'"/>
          <form-radio :label="item.label" :options="item.additional.options" v-if="item.type == 'radio'" />
          <form-password :label="item.label" v-if="item.type == 'password'"/>
        </div>
      </div>
      <button type="submit">Отправить</button>
      <button type="reset">Стереть</button>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/form-items/FormInput.vue";
import FormSelect from "@/components/form-items/FormSelect.vue";
import FormRadio from "@/components/form-items/FormRadio.vue";
import FormPassword from "@/components/form-items/FormPassword.vue";

export default {
  name: "FormBuilder",
  data(){
    return{
      formData:[]
    }
  },
  methods: {
    onSubmit() {
      alert('Submit')
    }
  },
  components: {FormPassword, FormRadio, FormSelect, FormInput},
 async mounted(){
   let data = await fetch('../../form-config.json')
  
   this.formData = await data.json()
  }
}
</script>

<style scoped>

</style>
