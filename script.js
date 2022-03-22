const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = '
         <div class="nav">
            <div class="brand-logo">Abbas Collection</div>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, products">
                    <button class="search-btn">search</button>
                    <!-- icons on navbaar -->
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-shopping-cart"></a>
                        <a href="#" class="fas fa-user"></a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a>></li>
            <li class="link-item"><a href="#" class="link">women</a>></li>
            <li class="link-item"><a href="#" class="link">men</a>></li>
            <li class="link-item"><a href="#" class="link">kids</a>></li>
            <li class="link-item"><a href="#" class="link">accessories</a>></li>
        </ul>
    ';
}

createNav();