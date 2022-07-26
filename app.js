const app = Vue.createApp({
  data() {
    return {
      addGoalValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.addGoalValue.value);
    },
  },
});

app.mount('#user-goals');
