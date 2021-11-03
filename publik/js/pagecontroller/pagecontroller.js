loadMenu()

const getPage = page => {
    window.scrollTo(0, 0);
    const wrapp = document.getElementById('content');
    const loading = document.getElementById('loading')
    
    loading.classList.remove('hide');
    wrapp.innerHTML = "";
    const request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === 4) {
        
        if(request.status === 200) { 
            wrapp.innerHTML = request.responseText;
            loading.classList.add('hide');
            loadSlider()
        } else {
            //bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        } 
        }
    }
    page == "" ? page = 'main' : page = page 
    request.open('Get', `/pages/${page}.php`);
    request.send();
}
if(window.location.hash)
    getPage(window.location.hash.slice(1))
else
    getPage('main')


const myHashchangeHandler = function(){ 
    getPage(window.location.hash.slice(1))
    
} 

if("addEventListener" in window) { 
    window.addEventListener("hashchange", myHashchangeHandler, false); 
} else if ("attachEvent" in window) { 
    window.attachEvent( "onhashchange", myHashchangeHandler); 
} 