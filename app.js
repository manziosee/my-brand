const sign_in_btn = document.querySelector( "#sign-in-btn" );
const sign_up_btn = document.querySelector( "#sign-up-btn" );
const container = document.querySelector( ".container" );

if ( sign_in_btn && sign_up_btn && container ) {
  sign_up_btn.addEventListener( "click", () => {
    container.classList.add( "sign-up-mode" );
  } );

  sign_in_btn.addEventListener( "click", () => {
    container.classList.remove( "sign-up-mode" );
  } );
}

const navSlide = () => {
  const burger = document.querySelector( '.burger' );
  const nav = document.querySelector( '.nav-links' );
  const navLinks = document.querySelectorAll( '.nav-links li' );

  if ( burger && nav && navLinks ) {
    burger.addEventListener( 'click', () => {
      nav.classList.toggle( 'nav-active' );

      navLinks.forEach( ( link, index ) => {
        if ( link.style.animation ) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 }s`;
        }
      } );
      burger.classList.toggle( 'toggle' );
    } );
  }
};

navSlide();
