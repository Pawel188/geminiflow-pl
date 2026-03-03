// Popup script
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on a Gemini tab
  checkGeminiTab();

  // Open Gemini button
  document.getElementById('open-gemini').addEventListener('click', () => {
    browser.tabs.create({
      url: 'https://gemini.google.com/'
    });
  });

  // View prompts button
  document.getElementById('view-prompts').addEventListener('click', async () => {
    const result = await browser.storage.local.get('prompts');
    const prompts = result.prompts || [];

    if (prompts.length === 0) {
      alert('Nie masz jeszcze zapisanych promptów. Przejdź do Gemini i otwórz narzędzia, aby je dodać.');
    } else {
      alert(`Masz ${prompts.length} zapisany(ch) prompt(ów). Otwórz narzędzia w Gemini, aby nimi zarządzać.`);
    }
  });
});

// Check if current tab is Gemini
async function checkGeminiTab() {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const currentTab = tabs[0];

    const statusDiv = document.getElementById('status');

    if (currentTab.url && currentTab.url.includes('gemini.google.com')) {
      statusDiv.className = 'status';
      statusDiv.textContent = '✓ Toolbox activo en esta pestaña';
    } else {
      statusDiv.className = 'status inactive';
      statusDiv.textContent = 'Navega a gemini.google.com para usar el toolbox';
    }
  } catch (error) {
    console.error('Error checking tab:', error);
  }
}
