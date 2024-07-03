document.getElementById('chatButton').addEventListener('click', function() {
    document.getElementById('chatSelector').style.display = 'block';
});

function startChat() {
    const selectedProgram = document.querySelector('input[name="program"]:checked').value;
    loadOlarkInstance(selectedProgram);
}

function loadOlarkInstance(program) {
    const olarkCode = {
        '9levers': '2733f1b4f9b63faad8dc40e96698e7c7',
        'viralpages': '8a6a0ee5b49d35669bd89bb42e62df2f',
        'mastermind': 'c5e72d5632d57af246b5b80c7bf3f554',
        'other': 'bc72a0eb3298e127c97b711d12dad696'
    };

    const groupCode = olarkCode[program];

    (function(o,l,a,r,k,y){if(o.olark)return;r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
    y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
    y.extend=function(i,j){y("extend",i,j)};y.identify=function(i){y("identify",k.i=i)};y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
    k=y._={s:[],t:[+new Date],c:{},l:a};})(window,document,"static.olark.com/jsclient/loader.js");

    olark.identify('3192-298-10-9167'); // Your Olark Site ID
    olark.configure('system.group', groupCode);

    console.log(`Loaded Olark group: ${groupCode}`);
}
