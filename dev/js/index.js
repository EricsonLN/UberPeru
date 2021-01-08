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
        
    } )
}
const mainInfoCovid= document.getElementById('mainInfoCovid');
const closeInfoCovid= document.getElementById('closeInfoCovid');
if(closeInfoCovid){
    closeInfoCovid.addEventListener('click',(e)=>{

        mainInfoCovid.classList.toggle('close-info__covid')
        
        
    } )
}

// evento on click
const obtenRecompensa = document.getElementById('obtenRecompensa');
const viaje = document.getElementById('viaje');
const pideComida = document.getElementById('pideComida');
const transporta = document.getElementById('transporta');
const empresas = document.getElementById('empresas');
const transit = document.getElementById('transit');
const Bicicletas = document.getElementById('Bicicletas');
const uberElevate = document.getElementById('uberElevate');
// function
const obtenRecompensaInfo = document.getElementById('obtenRecompensaInfo');
const obtenViajeInfo = document.getElementById('obtenViajeInfo');
const obtenComidaInfo = document.getElementById('obtenComidaInfo');
const obtenTransporteInfo = document.getElementById('obtenTransporteInfo');
const obtenEmpresaInfo = document.getElementById('obtenEmpresaInfo');
const obtenTransitInfo = document.getElementById('obtenTransitInfo');
const obtenBicicletasInfo = document.getElementById('obtenBicicletasInfo');
const obtenVueloInfo = document.getElementById('obtenVueloInfo');
// funciones de img
const imgObtenRecompensaInfo = document.getElementById('imgObtenRecompensaInfo');
const imgObtenViajeInfo = document.getElementById('imgObtenViajeInfo');
const imgObtenComidaInfo = document.getElementById('imgObtenComidaInfo');
const imgObtenTransporteInfo = document.getElementById('imgObtenTransporteInfo');
const imgObtenEmpresaInfo = document.getElementById('imgObtenEmpresaInfo');
const imgObtenTransitInfo = document.getElementById('imgObtenTransitInfo');
const imgObtenBicicletasInfo = document.getElementById('imgObtenBicicletasInfo');
const imgObtenVueloInfo = document.getElementById('imgObtenVueloInfo');

if(obtenRecompensa){
  obtenRecompensa.addEventListener('click',(e)=>{
    // obtenRecompensaInfo.classList.add('hidden');
    obtenViajeInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');
    
    imgObtenViajeInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenViajeInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenTransporteInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenViajeInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenTransporteInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenRecompensaInfo.classList.add('visibility');
    imgObtenRecompensaInfo.classList.add('visibilityimg');
  })
}
if(viaje){
  viaje.addEventListener('click',(e)=>{
    obtenRecompensaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenTransporteInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenTransporteInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');
    
    obtenViajeInfo.classList.add('visibility');
    imgObtenViajeInfo.classList.add('visibilityimg');
  })
}
if(pideComida){
  pideComida.addEventListener('click',(e)=>{
    obtenRecompensaInfo.classList.add('hidden');
    obtenViajeInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenTransporteInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenTransporteInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenComidaInfo.classList.add('visibility');
    imgObtenComidaInfo.classList.add('visibilityimg');
  })
}
if(transporta){
  transporta.addEventListener('click',(e)=>{
    obtenRecompensaInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenTransporteInfo.classList.add('visibility');
    imgobtenTransporteInfo.classList.add('visibilityimg');
  })
}
if(empresas){
  empresas.addEventListener('click',(e)=>{

    obtenRecompensaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenEmpresaInfo.classList.add('visibility');
    imgObtenEmpresaInfo.classList.add('visibilityimg');
  })
}
if(transit){
  transit.addEventListener('click',(e)=>{

    obtenRecompensaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenTransitInfo.classList.add('visibility');
    imgObtenTransitInfo.classList.add('visibilityimg');
  })
}
if(Bicicletas){
  Bicicletas.addEventListener('click',(e)=>{

    obtenRecompensaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenVueloInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenVueloInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenVueloInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenVueloInfo.classList.remove('visibilityimg');


    obtenBicicletasInfo.classList.add('visibility');
    imgObtenBicicletasInfo.classList.add('visibilityimg');
  })
}
if(uberElevate){
  uberElevate.addEventListener('click',(e)=>{

    obtenRecompensaInfo.classList.add('hidden');
    obtenTransporteInfo.classList.add('hidden');
    obtenComidaInfo.classList.add('hidden');
    obtenEmpresaInfo.classList.add('hidden');
    obtenTransitInfo.classList.add('hidden');
    obtenBicicletasInfo.classList.add('hidden');

    imgObtenRecompensaInfo.classList.add('hiddenimg');
    imgObtenTransporteInfo.classList.add('hiddenimg');
    imgObtenComidaInfo.classList.add('hiddenimg');
    imgObtenEmpresaInfo.classList.add('hiddenimg');
    imgObtenTransitInfo.classList.add('hiddenimg');
    imgObtenBicicletasInfo.classList.add('hiddenimg');

    obtenRecompensaInfo.classList.remove('visibility');
    obtenComidaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenEmpresaInfo.classList.remove('visibility');
    obtenTransitInfo.classList.remove('visibility');
    obtenBicicletasInfo.classList.remove('visibility');

    imgObtenRecompensaInfo.classList.remove('visibilityimg');
    imgObtenComidaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenEmpresaInfo.classList.remove('visibilityimg');
    imgObtenTransitInfo.classList.remove('visibilityimg');
    imgObtenBicicletasInfo.classList.remove('visibilityimg');


    obtenVueloInfo.classList.add('visibility');
    imgObtenVueloInfo.classList.add('visibilityimg');
  })
}




