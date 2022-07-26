const app = Vue.createApp({
  data() {
    return {
      addGoalValue: '',
      goals: [],
      btn1Visible: true,
      btn2Visible: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.addGoalValue.value);
    },
    switchState() {
      this.btn1Visible = !this.btn1Visible;
      this.btn2Visible = !this.btn2Visible;
    },
    btn1Toggle() {
      this.btn1Visible = !this.btn1Visible;
    },
    btn2Toggle() {
      this.btn2Visible = !this.btn2Visible;
    },
  },
});

app.mount('#user-goals');
