const mainNav = document.querySelector('.nav-root')
mainNav.innerHTML = `
<nav class="navbar navbar-expand-lg bg-primary fixed-top">
  <div class="container-fluid">
  <label for="kid-name">שם השחקן</label>
  <input type="text" id="kid-name">
  <button class="btn btn-success" id="send-btn">הכנס</button>
        <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
        <button class="btn btn-outline-light" id="old-btn">הצג רשימה</button>
        </li>
        <li class="nav-item">
        <button class="btn btn-outline-light" id="shulfe">ערבב</button>
        </li>      
        <li class="nav-item">
        <button class="btn btn-outline-light" id="remove-btn">רשימה חדשה</button>
        </li>
        </ul>

  
    </div>
  </div>
</nav>

`