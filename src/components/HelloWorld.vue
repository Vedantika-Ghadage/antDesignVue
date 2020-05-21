<template>
<div>
    <div>
  <div>
    <a-row>
      <a-col justify="end" col-2 :offset="22">
        <a-row justify="end ">
        <a-popover placement="bottom">
        <template slot="content">
          <p>Create Class</p>
        </template>
        <!-- <template slot="title">
          <span>Title</span>
        </template> -->
         <a-button type="primary" @click="showDrawer" shape="circle"> <a-icon type="plus" /></a-button>
      </a-popover>
        </a-row>
      </a-col>
  </a-row>
    <a-drawer
      title="Create a new course"
      :width="300"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <!-- <a-col :span="12"></a-col> -->
          <a-col>
            <a-form-item label="Class Name">
              <a-input
                v-model="className"
                placeholder="Enter class name"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col>
            <a-form-item label="Section">
              <a-input
                v-model="section"
                placeholder="section"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-form-item label="Subject">
              <a-input
                v-model="subject"
                placeholder="Enter subject"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Description">
              <a-textarea
                v-model="description"
                placeholder="please enter course description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="show">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
    </div>
    <a-row>
      <a-col :span="8" v-for="cls in classes" :key="cls.Subject">
          <a-card hoverable style="width: 300px">
            <img
              slot="cover"
              alt="example"
              src="https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2019/04/1_-mL-Y_OA9L_GvrKpKxrvpA.png?fit=1600%2C1066&ssl=1"
              />
            <h1 class="hone"><strong>Class Name : {{cls.className}}</strong></h1>
            <h1>Section : {{cls.Section}}</h1>
            <h1>Subject : {{cls.Subject}}</h1>
            <h1>Description : {{cls.Description}}</h1>
    <template slot="actions" class="ant-card-actions">
      <a-icon key="rise" type="rise" />
      <a-icon key="edit" type="edit" />
      <a-icon key="folder" type="folder" />
      <router-link to="/classes"><a-icon type="right-square" /></router-link>
    </template>
  </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      classes: []
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    show () {
      this.classes.push({
        className: this.className,
        Section: this.section,
        Subject: this.subject,
        Description: this.description
      })
      this.className = ''
      this.section = ''
      this.subject = ''
      this.description = ''
      console.log(this.classes)
    }
  }
}
</script>
<style>
.hone{
  font-size: 20px;
}
</style>
