# Google Sheets Integration Setup

Follow these steps to connect your Landmark Aristo landing page to a Google Sheet.

## 1. Create the Google Sheet
1. Go to [Google Sheets](https://sheets.new).
2. Name your sheet: `Landmark Aristo Leads`.
3. Set up the following headers in the first row (A1 to E1):
   `Timestamp` | `Name` | `Email` | `Phone` | `Message`

## 2. Open Script Editor
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any existing code and paste the code provided below.

## 3. The Apps Script Code
```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append the lead to the sheet
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || "N/A",
      data.email || "N/A",
      data.phone || "N/A",
      data.message || "N/A"
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Global variable for CORS
function doGet(e) {
  return ContentService.createTextOutput("Google Script is live!");
}
```

## 4. Deploy as Web App
1. Click **Deploy** > **New Deployment**.
2. Select **Type**: `Web App`.
3. **Description**: `Landmark Aristo Lead Integration`.
4. **Execute as**: `Me`.
5. **Who has access**: `Anyone`.
6. Click **Deploy**.
7. Copy the **Web App URL** (it should look like `https://script.google.com/macros/s/.../exec`).

## 5. Add to Your Project
1. Create a `.env.local` file in your project root.
2. Add the following line:
   ```env
   GOOGLE_SCRIPT_URL=YOUR_COPIED_URL_HERE
   ```
3. Restart your development server.

---
**Note:** For production, push the `.env.local` variable to Vercel's Environment Variables settings.
