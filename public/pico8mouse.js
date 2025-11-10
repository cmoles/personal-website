// ====== [CONFIGURATION]

// Window focus requirement - load from localStorage or use gamepad setting
var requireWindowFocus = (function() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('pico8_require_focus')) {
    return localStorage.getItem('pico8_require_focus') === 'true';
  }
  return false;
})();

// ====== [IMPLEMENTATION]

// Make sure pico8_mouse exists globally (react-pico-8 should create it, but just in case)
if (typeof window.pico8_mouse === 'undefined') {
  window.pico8_mouse = [0, 0, 0];
}

// Track if mouse is over canvas
var mouseOverCanvas = false;

// Setup mouse event listeners when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMouseHandlers);
} else {
  setupMouseHandlers();
}

function setupMouseHandlers() {
  // Find the canvas - try multiple selectors and keep retrying
  var checkInterval = setInterval(function() {
    // Try both ID selector and class selector
    var canvas = document.getElementById('canvas') || document.querySelector('canvas.emscripten');
    if (canvas) {
      clearInterval(checkInterval);
      attachMouseHandlers(canvas);
      console.log('[pico8mouse] Attached mouse handlers to canvas', canvas);
    }
  }, 100);

  // Stop checking after 10 seconds
  setTimeout(function() {
    clearInterval(checkInterval);
    console.log('[pico8mouse] Timed out looking for canvas');
  }, 10000);
}

function attachMouseHandlers(canvas) {
  // Mouse move handler
  canvas.addEventListener('mousemove', function(e) {
    // If focus is required and window is not focused, skip processing
    if (requireWindowFocus && !document.hasFocus()) {
      return;
    }

    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // Convert to PICO-8 coordinates (0-127)
    window.pico8_mouse[0] = Math.floor(x * 128 / rect.width);
    window.pico8_mouse[1] = Math.floor(y * 128 / rect.height);

    // Clamp to valid range
    window.pico8_mouse[0] = Math.max(0, Math.min(127, window.pico8_mouse[0]));
    window.pico8_mouse[1] = Math.max(0, Math.min(127, window.pico8_mouse[1]));
  });

  // Mouse down handler
  canvas.addEventListener('mousedown', function(e) {
    // If focus is required and window is not focused, skip processing
    if (requireWindowFocus && !document.hasFocus()) {
      return;
    }

    e.preventDefault();

    // Set button bit: 0x1 for left, 0x2 for right, 0x4 for middle
    if (e.button === 0) window.pico8_mouse[2] |= 0x1; // left
    if (e.button === 1) window.pico8_mouse[2] |= 0x4; // middle
    if (e.button === 2) window.pico8_mouse[2] |= 0x2; // right
  });

  // Mouse up handler
  canvas.addEventListener('mouseup', function(e) {
    e.preventDefault();

    // Clear button bit
    if (e.button === 0) window.pico8_mouse[2] &= ~0x1; // left
    if (e.button === 1) window.pico8_mouse[2] &= ~0x4; // middle
    if (e.button === 2) window.pico8_mouse[2] &= ~0x2; // right
  });

  // Mouse enter/leave handlers
  canvas.addEventListener('mouseenter', function() {
    mouseOverCanvas = true;
  });

  canvas.addEventListener('mouseleave', function() {
    mouseOverCanvas = false;
    // Release all mouse buttons when leaving canvas
    window.pico8_mouse[2] = 0;
  });

  // Prevent context menu on right click
  canvas.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  console.log('[pico8mouse] Mouse support initialized successfully');
  console.log('[pico8mouse] window.pico8_mouse =', window.pico8_mouse);
}

// Also update focus requirement when it changes (if the toggle function is called)
if (typeof window !== 'undefined') {
  var originalToggle = window.toggleRequireWindowFocus;
  if (originalToggle) {
    window.toggleRequireWindowFocus = function() {
      var result = originalToggle();
      requireWindowFocus = result;
      return result;
    };
  }
}
