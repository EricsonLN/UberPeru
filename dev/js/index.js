// normal
const menuItem = document.getElementById('menuItem')
// icono para q aparesca la x
const showFlechaUp=document.getElementById('show-flecha-up')
const showFlechaSown=document.getElementById('show-flecha-sown')

// aparesca el submenu
const subMenu=document.getElementById('submenu')

if(menuItem){
    const visibleProductos = document.getElementById('visibleProductos');
    const visibleLenguage = document.getElementById('visibleLenguage');
    menuItem.addEventListener('click',(e)=>{

        subMenu.classList.toggle('show-submenu')
        showFlechaUp.classList.toggle('main-flecha-up')
        showFlechaSown.classList.toggle('fa-flecha-down')
        visibleProductos.classList.toggle('topredirctbootoon')
        visibleLenguage.classList.toggle('topredirctbootoon')
        
        
    } )
}
const menubar = document.getElementById('menubar');
const menuResponsiveShow = document.getElementById('menuResponsiveShow');
const visibleProductos = document.getElementById('visibleProductos');
const visibleLenguage = document.getElementById('visibleLenguage');
const menuBurger = document.getElementById('menuBurger');
const menuCerrar = document.getElementById('menuCerrar');
// const menuCerrar = document.getElementById('menuCerrar');

if(menubar){
    menubar.addEventListener('click',(e)=>{

        menuResponsiveShow.classList.toggle('main-nav__show')
        visibleProductos.classList.toggle('productos_shows')
        visibleLenguage.classList.toggle('productos_shows')
        menuBurger.classList.toggle('menuBurger')
        menuCerrar.classList.toggle('menucerrarshow')
        // menuCerrar.classList.toggle('menuCerrar')
        
        
        
    } )
}
