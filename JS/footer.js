const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = '
     <footer>
    <div class="footer-content">
        <div class="logo">Collection</div>
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casual</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casual</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About Company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim ex consequuntur cupiditate numquam soluta laboriosam, pariatur dicta error modi quisquam rem sit, deleniti molestias quo! Dolores cupiditate at nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim ex consequuntur cupiditate numquam soluta laboriosam, pariatur dicta error modi quisquam rem sit, deleniti molestias quo! Dolores cupiditate at nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim ex consequuntur cupiditate numquam soluta laboriosam, pariatur dicta error modi quisquam rem sit, deleniti molestias quo! Dolores cupiditate at nostrum.</p>
    <p class="info">Support emails - ghaziabbas6100@gmail.com</p>
     <p class="info">telephone - +923417086100</p>
     <div class="footer-social-container">
       <div>
        <a href="#" class="social-link">Terms & services</a>
        <a href="#" class="social-link">Privacy Policy</a>
       </div>
       <div>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Linkedin</a>
       </div>
     </div>
     <p class="footer-credit">Clothing, Best apparels, Online Store</p>
</footer>
    ';
}

createFooter();