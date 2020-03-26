<template>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper" style="background-color:rgb(92, 3, 3);">
      <div class="main-panel" style="background-color:rgb(92, 3, 3);">  
        <div class="content-wrapper d-flex align-items-center auth" >
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5" >
                <!-- <div class="navbar-brand brand-logo">
                  <img src="assets/img/icon.png" style="margin-left: 180px;">
                </div> -->
                <h4 style="text-align: center;">Pasang Iklan Anda</h4>
                <!-- <h6 class="font-bold-light">Silahkan Login Untuk Melihat Iklan.</h6> -->
                <form class="pt-3" method="post" action="#">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <!-- <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span> -->
                    </div>
                    <input type="text" class="form-control form-control-lg border-left-0" name="merek" id="merek" placeholder="Nama Barang" required>
                  </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <!-- <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span> -->
                      </div>
                      <input type="text" class="form-control form-control-lg border-left-0" name="des" id="des" placeholder="Deskripsi Barang" required>
                    </div>
                  </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <!-- <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span> -->
                    </div>
                    <input type="text" class="form-control form-control-lg border-left-0" name="kategori" id="kategori" placeholder="Kategori" required>                     
                  </div>
                </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <!-- <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span> -->
                      </div>
                      <input type="text" class="form-control form-control-lg border-left-0" name="up" id="up" placeholder="Upload Foto Barang" required>
                    </div>
                  </div>
                <div class="my-3">
                  <input type="submit" name="submit" class="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn" value="MASUK">
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
module.exports = {
  data : function(){
    return {
      search: "",
      nama_barang: "",
      deskripsi: "",
      kategori: "",
      gambar: "",
      action: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
      siswa: [],
      fields: ["nama_barang", "deskripsi", "kategori","gambar", "Aksi"],
    }
  },

  methods: {
    getData : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      let offset = (this.currentPage - 1) * this.perPage;
      this.$bvToast.show("loadingToast");
      this.axios.get("/iklan/" + this.perPage + "/" + offset, conf)
      .then(response => {
        if(response.data.status == 1){
          this.$bvToast.hide("loadingToast");
          this.siswa = response.data.siswa;
          this.rows = response.data.count;
        } else {
          this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data siswa."
          this.$bvToast.show("message");
          this.$router.push({name: "login"})
        }
        
      })
      .catch(error => {
        console.log(error);
      });
    },

    pagination : function(){
      if(this.search == ""){
        this.getData();
      } else {
        this.searching();
      }
    },

    Add : function(){
      this.action = "insert";
      this.nama_barang = "";
      this.deskripsi = "";
      this.kategori = ""; 
      this.gambar = ""; 
    },

    Edit : function(item){
      this.action = "update";
      this.id = item.id;
      this.nama_barang = item.nama_barang;
      this.deskripsi = item.deskripsi;
    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");
      if(this.action === "insert"){
        let form = new FormData();
        form.append("id", this.id);
        form.append("nama_barang", this.nama_barang);
        form.append("deskripsi", this.deskripsi);
        form.append("kategori", this.kategori);
        form.append("gambar", this.gambar);

        this.axios.post("/iklan", form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        let form = {
          nis: this.nis,
          nama_siswa: this.nama_siswa,
          kelas: this.kelas,
        }
        this.axios.put("/iklan/" + this.id, form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },

    Drop : function(id){
      let conf = { headers: { "Authorization" : "Bearer " + this.key} };
      if(confirm('Apakah anda yakin ingin menghapus data ini?')){
        this.$bvToast.show("loadingToast");
        this.axios.delete("/iklan/" + id, conf)
        .then(response => {
            this.getData();
            this.$bvToast.hide("loadingToast");
            this.message = response.data.message;
            this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
  },
  mounted(){
    this.key = localStorage.getItem("Authorization");
    this.getData();
  }
}
</script>