# GeminiFlow - Browser Extension (Polish Version)

**Note:** This repository is a fork containing the **Polish language translation** of the original GeminiFlow extension. All UI elements, dialogs, and features have been localized to Polish.

An extension that adds advanced productivity features to Google Gemini.

## 🌟 v2.0 Features

### 📁 Advanced Chat Management
- **🔍 Real-time Search**: Filter chats by keyword
- **📥 Export Conversations**: Copy or download the full content of your chats
- **✏️ Bulk Rename**: Add prefixes, suffixes, or replace text across multiple chats
- **🗑️ Bulk Delete**: Select and delete multiple conversations at once

### ✨ Advanced Prompts
- **📂 Custom Categories**: Organize your prompts by topic
- **🔍 Smart Filtering**: Search by category, name, or content
- **✏️ Full Editing**: Modify the name, text, and category of existing prompts
- **💾 Quick Save**: Save and organize your most used prompts
- **📋 Copy/Insert**: Use your prompts with a single click

### 🎨 Integrated UI
- **Floating Button**: Quick access from any Gemini page
- **Organized Panel**: Tabs for chats and prompts
- **Clean Design**: Integrates seamlessly with the Gemini interface
- **Advanced Actions**: Dropdown menu for extra features

## Installation

### Loading Unpacked (Chrome/Edge/Brave)
1. Open your browser and navigate to the extensions page (e.g., `chrome://extensions/`)
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `GeminiFlow` folder
4. Or, simply use the provided `geminiflow-v2.1.0-pl.zip` file.

### Firefox (Temporary)
1. Open Firefox and navigate to `about:debugging`
2. Click on "This Firefox"
3. Click on "Load Temporary Add-on"
4. Select the `manifest.json` file from this folder

## Usage

1. Navigate to [Google Gemini](https://gemini.google.com)
2. You will see a new "GeminiFlow" floating button in the interface
3. Click it to access the available tools

## Development

Project structure:
```
├── manifest.json          # Extension configuration
├── content/
│   ├── content.js         # Script injected into Gemini
│   └── styles.css         # Styles for the toolbox
├── popup/
│   ├── popup.html         # Extension popup
│   ├── popup.js           # Popup logic
│   ├── toolbox.html       # Toolbox panel html
│   ├── toolbox.js         # Toolbox logic
│   └── toolbox.css        # Toolbox styles
└── icons/
    ├── icon-48.png        # 48x48 Icon
    └── icon-96.png        # 96x96 Icon
```

## License

MIT
