const mainNav = document.querySelector('.nav-root')
mainNav.innerHTML = `
<nav class="navbar navbar-expand-lg" id="nav-bar">
  <div class="container-fluid">
  <div>
  <input type="text" id="kid-name" placeholder="שם השחקן">
  <button class="btn" id="send-btn">הכנס</button>
  <span id="warning" style="color:red;"></span>
  </div>      
  <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 120px;">
        <li class="nav-item">
        <button class="btn btn-outline-light ms-2 mb-1" style="width:130px;"  id="shulfe">ערבב <img src="./svg/shuffle.svg" class="me-2"> </button>
        </li>      
        <li class="nav-item">
        <button class="btn btn-outline-light" id="remove-btn">רשימה חדשה<img src="./svg/bootstrap-reboot.svg" class="me-2"></button>
        </li>
        </ul>

  
    </div>
  </div>
</nav>

`

