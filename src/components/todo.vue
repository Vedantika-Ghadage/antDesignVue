<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="file-text" />To review </a-menu-item>
      <a-menu-item key="app"> <a-icon type="file-done" />Reviewed</a-menu-item>
      <!--<a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>-->
    </a-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: ['mail']
    }
  }
}
</script>
