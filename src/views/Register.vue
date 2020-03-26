<template>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper" style="background-color:rg b(92, 3, 3);">
      <div class="main-panel" style="background-color:rgb(92, 3, 3);">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="navbar-brand brand-logo">
                  <img src="assets/img/icon.png" style="margin-left: 175px;">
                </div>
                <h4 style="text-align: center;">Register!</h4>
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
                <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input type="password" class="form-control form-control-lg border-left-0" name="repeatpassword" id="repeatpassword" placeholder="Ulang Kata Sandi" required>                        
                    </div>
                  </div>
                <div class="my-3">
                  <input type="submit" name="submit" class="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn" value="MASUK">
                </div>
                <button class="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                    <a class="nav-link" href="/login">
                    <span class="menu-title">LOG IN</span>
                    </a>
                  </button>
                  <button class="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                    <a class="nav-link" href="/">
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
    <!-- page-body-wrapper ends -->
  </div>
</template>