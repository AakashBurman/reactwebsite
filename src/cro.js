import "./crousel.css";

const Card = () => {
    return ( 
        <div className="main">
        
<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
         
         <div class="carousel__snapper">
          <img src="https://bit.ly/3zH1i8S" className="image"></img>
      <a href="#carousel__slide4"
           class="carousel__prev"></a>
        <a href="#carousel__slide2"
           class="carousel__next"></a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
        
      <div class="carousel__snapper">
      <img src=" https://bit.ly/3tbLpEI" className="image"></img>
      <a href="#carousel__slide1"
         class="carousel__prev"></a>
      <a href="#carousel__slide3"
         class="carousel__next"></a></div>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
          
      <div class="carousel__snapper">
      <img src="https://bit.ly/3DI868n" className="image"></img>
      <a href="#carousel__slide2"
         class="carousel__prev"></a>
      <a href="#carousel__slide4"
         class="carousel__next"></a></div>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
         
      <div class="carousel__snapper">
      <img src="https://bit.ly/3BQ7trZ" className="image"></img>
      <a href="#carousel__slide3"
         class="carousel__prev"></a>
      <a href="#carousel__slide1"
         class="carousel__next"></a></div>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button"></a>
      </li>
    </ol>
  </aside>
</section>


        </div>
     );
}
 
export default Card;
