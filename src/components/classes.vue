<template>
  <div>
    <a-row>
      <a-col :span="12">
          <a-result
    status=""
    title="Access the world of online classroom"
    sub-title="Login using your Gmail ID"
  >
    <template #extra>
      <a-button key="console" type="primary">
        Login with google
      </a-button>
    </template>
  </a-result>
      </a-col>
      <a-col :span="12">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPxwVFmGijLtOV_Fdt0JrH_eKfwfEGntlkmkNrShtrQeROHVcq&usqp=CAU">
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
    <a-result
    title="Live Classroom With Recording Facitility"
    sub-title="Not only students can access their live classes, but can also access their classroom recordings."
  >
      <template #icon>
      <a-icon type="play-circle" theme="twoTone" />
    </template>
  </a-result>
      </a-col>
      <a-col :span="8">
        <a-result
    status="success"
    title="Student Progress Report System"
    sub-title="Assignments and MCQs based tests, allowing to KT2 standards of education to track the progress of students."
  >
        <template #icon>
      <a-icon type="database" theme="twoTone" />
    </template>
    <template #extra>
    </template>
  </a-result>
      </a-col>
      <a-col :span="8">
        <a-result
    status="success"
    title="Parent/Guardian Access For Progress Report"
    sub-title="Describe a key benifit that your product provides for your customers, and explain the impact it can have."
  >
        <template #icon>
      <a-icon type="check-circle" theme="twoTone" />
    </template>
  </a-result>
      </a-col>
    </a-row>
  </div>
</template>
