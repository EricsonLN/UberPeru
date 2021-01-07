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


$('#modeloCambiar img').hide();
$('#modeloCambiar img:first').show();
$("select[name=style]").change(function(){
  estilo = $(this).val();
  $('.dNone').removeAttr('selected'); 
  $('.dNone').hide();
  $('.'+estilo).show();
  $('.'+estilo+':first').attr('selected','selected');
  estilo = $('.'+estilo+':first').val();
  $('#modeloCambiar img').hide();
  $('.'+estilo).fadeToggle(1200);
  
});

$("select[name=model]").change(function(){
  estilo = $(this).val();
  $('#modeloCambiar img').hide();
  $('.'+estilo).fadeToggle(1200);
});

$("#modelo option").css("display","none");
$('#vehiculo').on('change', function() {
  $("#modelo option").css("display","none");
  $("."+this.value+"").css("display", "block");
  $("#modelo").prop('selectedIndex', 0);
});


var btn = $(".btn-habilitar");
btn.attr('disabled', 'disabled');
btn.css('background', 'rgb(34 34 34 / 0.3)');
$('#txtterminos1').on('click', function() {
  if ($(this).is(':checked')) {
    btn.removeAttr('disabled');
    btn.css('background', '#4184d2');
  } else {
    btn.attr('disabled', 'disabled');
    btn.css('background', 'rgb(34 34 34 / 0.3)');
  }
});