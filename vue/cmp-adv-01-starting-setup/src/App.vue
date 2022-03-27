<template>
  <div>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal>
      <template v-slot:default="item">
        <h2>{{ item.goal }}</h2>
        <p>{{ item.anotherProp }}</p>
        <h4>{{ item }}</h4>
      </template>
    </course-goal> -->
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goal')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goal')">Manage Goals</button>
    <!-- <active-goal v-if="selectedComponent === 'active-goal'"></active-goal>
    <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";
export default {
  components: {
    TheHeader,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
