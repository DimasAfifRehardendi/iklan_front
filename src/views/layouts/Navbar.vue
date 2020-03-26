<template><div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href=""><img src="assets/img/icon.png"></a>
              <a class="navbar-brand brand-logo-mini" href=""><img src="assets/img/icon.png"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a href="#" data-toggle="dropdown" id="profileDropdown">
                    <b-nav-item v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
                  </a>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
              <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                <span class="menu-title">Beranda</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/motor">
                <i class="mdi mdi-bike menu-icon"></i>
                <span class="menu-title">Motor</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/mobil">
                <i class="mdi mdi-car menu-icon"></i>
                <span class="menu-title">Mobil</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/elektronik">
                <i class="mdi mdi-flash menu-icon"></i>
                <span class="menu-title">Elektronik</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/fashion">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                <span class="menu-title">Fashion</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/login" class="nav-link">
                <i class="mdi mdi-image-filter menu-icon"></i>
                <span class="menu-title">Login/Register</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>