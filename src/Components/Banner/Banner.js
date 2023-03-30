import './Banner.css'

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div class="carousel-cell">
                <img src='./banner1.png'></img>
            </div>
        </div>
    )
}
export default Banner