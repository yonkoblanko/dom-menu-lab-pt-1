var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main')

const topMenuEl = document.querySelector('#top-menu')
console.log(topMenuEl)

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.className = 'flex-ctr';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.style.height = "100%";

topMenuEl.className = 'flex-around';

for ( const link of menuLinks) {
    const a = document.createElement('a') 
    a.href = link.href; 
    a.innerHTML = link.text;
    topMenuEl.append (a)
}

