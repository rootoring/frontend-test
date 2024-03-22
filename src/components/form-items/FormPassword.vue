<template>
  <FormInput :label="label" type="password" />
</template>

<script>
import FormInput from "@/components/form-items/FormInput.vue";

export default {
  name: "FormPassword",
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  components: {
    FormInput
  }
}
</script>

<style lang="scss" scoped>

</style>
