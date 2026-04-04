// Breakpoints.
if (typeof breakpoints === 'function') {
    breakpoints({
        xlarge:  [ '1281px',  '1680px' ],
        large:   [ '981px',   '1280px' ],
        medium:  [ '737px',   '980px'  ],
        small:   [ '481px',   '736px'  ],
        xsmall:  [ null,      '480px'  ]
    });
}

// Browser.
if (typeof browser !== 'undefined') {
    if (browser.name == 'ie')
        document.body.classList.add('ie');

    if (browser.mobile)
        document.body.classList.add('touch');
}

// Scroll back to top.
window.scrollTo(0, 0);

// Thumbs image to background.
document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('#main > .thumb');
    thumbs.forEach(thumb => {
        const image = thumb.querySelector('.image');
        const img = image.querySelector('img');
        if (image && img) {
            image.style.backgroundImage = `url(${img.src})`;
            const pos = img.getAttribute('data-position');
            if (pos) {
                image.style.backgroundPosition = pos;
            }
            img.style.display = 'none';
        }
    });
});

// Footer copyright move.
document.addEventListener('DOMContentLoaded', () => {
    const copyright = document.querySelector('#footer .copyright');
    if (copyright && typeof breakpoints !== 'undefined') {
        const parent = copyright.parentElement;
        const footerInner = parent.parentElement;
        const lastParent = footerInner.lastElementChild;

        breakpoints.on('<=medium', () => {
            lastParent.appendChild(copyright);
        });

        breakpoints.on('>medium', () => {
            parent.appendChild(copyright);
        });
    }
});

// Header links.
document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('#header a');
    headerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = href;
        });
        link.removeAttribute('href');
        link.style.cursor = 'pointer';
    });
});
