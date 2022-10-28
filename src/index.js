new Vue({
  el: "#app",
  data() {
   return {
    message:"Try Preview!",
    url:""
  }
  },
       methods:{
       uploadFile(){
       const file = this.$refs.preview.files[0];
       this.url = URL.createObjectURL(file)
   }
  },
})