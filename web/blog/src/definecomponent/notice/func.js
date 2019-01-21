import notice from './notice';
export default {
  extends :notice,
  computed: {
    style () {
      return {
        position: 'fixed',
        top: '20px',
        right: `${this.verticalOffset}px`
      }
    }
  },
  data () {
    return {
      verticalOffset: 0,
      // autoClose: 3000,
      // visible: false
    }
  },





}
