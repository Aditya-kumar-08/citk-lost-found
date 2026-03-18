// ============================================
// CITK LOST & FOUND — SHARED APP LOGIC
// ============================================

/**
 * Show an alert and auto-hide after 4 seconds
 */
function showAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (!alert) return;
  alert.style.display = 'block';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 4000);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Compress and convert an image file to base64 data URL
 * Max dimensions: 400x400px, quality: 0.7
 */
function compressAndConvertImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 400;
        let width = img.width;
        let height = img.height;

        // Scale down
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

console.log('✅ App.js loaded successfully');