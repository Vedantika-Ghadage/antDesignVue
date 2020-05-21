<!--<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/demo">Demo</router-link> |
    <router-view/>
  </div>
</template>-->
<template>
  <a-layout id="components-layout-demo-custom-trigger" :style="{height:'100%'}">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible class="sider">
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span><router-link to="/" class="text">Classes</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          <span><router-link to="/calendar" class="text">Calendar</router-link></span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="schedule" />
          <span><router-link to="/todo" class="text">To-do</router-link></span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="setting" />
          <span><router-link to="/setting" class="text">Setting</router-link></span>
        </a-menu-item>
      </a-menu>

    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '5px 5px', padding: '5px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .text:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .text{
  color:#2c3e50;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#components-layout-demo-custom-trigger .sider {
  height: 100%;
  background: white;
}
</style>
