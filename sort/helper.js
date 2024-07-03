fetch('/sort/4.quick.js')
  .then((res) => res.text())
  .then((data) => {
    let el = document.createElement('pre');
    let code = document.createElement('code');
    el.appendChild(code);
    code.textContent = data;
    document.body.appendChild(el);

    let styleEl = document.createElement('link');
    styleEl.rel = 'stylesheet';
    styleEl.href = '../libs/highlight/github.min.css';
    document.head.appendChild(styleEl);

    hljs.highlightAll();
  });
