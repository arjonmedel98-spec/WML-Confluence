const ICONS = {
  'home': `<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>`,
  'bell': `<path d="M8 17a4 4 0 0 0 8 0"/><path d="M18 8a6 6 0 1 0-12 0c0 4-1.5 5.5-1.5 5.5h15S18 12 18 8Z"/>`,
  'file-text': `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6M9 9h1"/>`,
  'shield-check': `<path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>`,
  'link': `<path d="M9 15 15 9"/><path d="M11 6.5 12.5 5A4 4 0 1 1 18 10.5L16.5 12"/><path d="M13 17.5 11.5 19A4 4 0 1 1 6 13.5L7.5 12"/>`,
  'external-link': `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>`,
  'search': `<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>`,
  'chevron-left': `<path d="m15 18-6-6 6-6"/>`,
  'chevron-right': `<path d="m9 18 6-6-6-6"/>`,
  'chevron-down': `<path d="m6 9 6 6 6-6"/>`,
  'compass': `<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>`,
  'clipboard-list': `<path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6M9 8h2"/>`,
  'folder-open': `<path d="M4 20a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v2"/><path d="m4 10 1.5 9.4a1 1 0 0 0 1 .6h11l2.4-8a1 1 0 0 0-1-1.3H5.5"/>`,
  'wrench': `<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19v3h3l7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z"/>`,
  'triangle-alert': `<path d="M10.3 3.9 1.8 18a1 1 0 0 0 .9 1.5h18.6a1 1 0 0 0 .9-1.5L13.7 3.9a1 1 0 0 0-1.7 0Z"/><path d="M12 9v4M12 17h.01"/>`,
  'clipboard-check': `<path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-4"/>`,
  'phone': `<path d="M13.8 19.7a2 2 0 0 1-2.2.4 16.9 16.9 0 0 1-6-4.6 16.5 16.5 0 0 1-4.6-6 2 2 0 0 1 .4-2.2l2-2a2 2 0 0 1 2.9.1l1.6 2.1a2 2 0 0 1-.1 2.6L6.6 11.3a12.4 12.4 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.6-.1l2.1 1.6a2 2 0 0 1 .1 2.9z"/>`,
  'arrow-right': `<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>`,
  'megaphone': `<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8 12 21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-.9L7.5 17"/>`,
  'star': `<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1L12 2Z"/>`,
};

function icon(name, extraClass){
  return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '" viewBox="0 0 24 24">' + (ICONS[name] || '') + '</svg>';
}

function applyIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    el.innerHTML = icon(name);
  });
}

document.addEventListener('DOMContentLoaded', applyIcons);
