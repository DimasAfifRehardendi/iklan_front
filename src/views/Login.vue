<template>
    <div class="container-fluid page-body-wrapper full-page-wrapper" style="background-color:rgb(92, 3, 3);">
      <div class="main-panel" style="background-color:rgb(92, 3, 3);">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="navbar-brand brand-logo">
                  <!-- <img src="assets/img/icon.png" style="margin-left: 178px;"> -->
                </div>
                <h4 style="text-align: center;">Selamat datang!</h4>
                <h6 class="font-bold-light" style="text-align: center;">Silahkan Login Untuk Melihat Iklan.</h6>
                <form class="pt-3" method="post" action="#">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control form-control-lg border-left-0" id="email" name="email" placeholder="E-Mail" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control form-control-lg border-left-0" name="password" id="password" placeholder="Kata Sandi" required>                        
                  </div>
                </div>
                <div class="my-3">
                  <input type="submit" name="submit" class="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn" value="LOG IN">
                </div>
                <button class="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                    <a class="nav-link" href="/register">
                    <!-- <i class="mdi mdi-flash menu-icon"></i> -->
                    <span class="menu-title">REGISTRASI</span>
                    </a>
                  </button>
                  <button class="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                    <a class="nav-link" href="/">
                    <!-- <i class="mdi mdi-flash menu-icon"></i> -->
                    <span class="menu-title">BACK</span>
                  </a>
                  </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
</template>
<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        Login: function(){
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>
