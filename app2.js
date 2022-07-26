const app = Vue.createApp({
  data() {
    return {
      goalToAdd: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalToAdd.value);
    },
  },
});

app.mount('#user-goals');
