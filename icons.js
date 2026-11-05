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
  'megaphone': `<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>`,
  'mail': `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>`,
  'smartphone': `<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>`,
  'image': `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>`,
  'star': `<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/>`,
  'palette': `<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-1-.7-1.500-.7-2.500 0-1 .8-2 2-2H18a4 4 0 0 0 4-4c0-5-4.500-9.500-10-9.500z"/>`,
  'calendar': `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`,
  'accessibility': `<circle cx="12" cy="4" r="2"/><path d="M5 8h14M12 8v6M9 21l3-7 3 7"/>`,
  'check': `<path d="m5 12 5 5L20 7"/>`,
  'copy': `<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>`,
  'message-square': `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  'rotate-ccw': `<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>`,
  'pencil': `<path d="M17 3a2.800 2.800 0 0 1 4 4L7.500 20.500 2 22l1.500-5.500z"/>`,
  'layout': `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`,
  'sparkles': `<path d="m12 3 1.900 5.100L19 10l-5.100 1.900L12 17l-1.900-5.100L5 10l5.100-1.900z"/><path d="M19 15v4M17 17h4"/>`,
  'phone': `<path d="M13.8 19.7a2 2 0 0 1-2.2.4 16.9 16.9 0 0 1-6-4.6 16.5 16.5 0 0 1-4.6-6 2 2 0 0 1 .4-2.2l2-2a2 2 0 0 1 2.9.1l1.6 2.1a2 2 0 0 1-.1 2.6L6.6 11.3a12.4 12.4 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.6-.1l2.1 1.6a2 2 0 0 1 .1 2.9z"/>`,
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
