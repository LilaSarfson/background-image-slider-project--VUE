

const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

Vue.createApp({
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    prevImage() {
      if (this.index == 0) {
        this.index = 5;
      }
      this.index = this.index - 1;
      console.log(this.index);
      // TODO: Decrementar el index
      // TODO-2: Mirar si hemos llegado a 0 y entonces...
    },

    nextImage() {
      if (this.index == 4) {
        this.index = 0;
      }
      this.index = this.index + 1;
      console.log(this.index);
      // TODO: Incrementar el index
      // TODO-2: Mirar si hemos llegado al número máximo de elementos del array y entonces...
    }
  },
  computed: {
    getUrl() {
      // url("../img/contBcg-0.jpeg")

      return `url('../img/${pictures[this.index]}.jpeg')`
      // tenemos que devolver un string a la ruta de la foto actual. Por ejemplo, la ruta de la primera foto es '../img/pictures[0]'
    }
  }

}).mount('#app')
