import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormBuilder from '../FormBuilder.vue'

describe('FormBuilder', () => {
  it('render test', () => {
    const wrapper = mount(FormBuilder)
    expect(wrapper.isVisible()).toBe(true);
  })
})
