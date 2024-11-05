# GTCS Online Registration System

This project is a Google Apps Script solution for automating the registration process at **Gateway The Complete School (GTCS)**. It generates a personalized PDF document based on form submissions, emails it to the registrant, and logs the document URL in a Google Sheet.

## Features

- **PDF Generation**: Creates a personalized PDF based on user information collected from a Google Form.
- **Email Notification**: Sends a confirmation email with the generated PDF as an attachment to the registrant.
- **Google Sheet Logging**: Logs the PDF URL and filename in a Google Sheet for easy tracking and reference.

## How It Works

1. **Form Submission**: When a user submits their information via Google Forms, the \`afterFormSubmit\` function is triggered.
2. **PDF Creation**: The \`createPDF\` function takes form data, populates a PDF template with user details, and saves it in a specific Google Drive folder.
3. **Email Notification**: The \`sendEmail\` function emails the PDF to the user, providing confirmation of their registration.
4. **Logging**: The script logs the generated PDF's URL and name in a designated Google Sheet for administrative purposes.

## Prerequisites

Before running this script, ensure you have:

- **Google Drive Folder IDs**: 
  - Folder for saving generated PDFs
  - Temporary folder for PDF processing
- **Google Doc Template ID**: A Google Docs file that serves as the template for generating PDFs.
- **Google Sheet**: A Google Sheet with specific columns for logging the PDF URL and filename.

## Script Functions

### 1. \`afterFormSubmit(e)\`
   - Triggered on form submission.
   - Retrieves form data, generates a PDF, logs it, and sends a confirmation email.

### 2. \`createPDF(info)\`
   - Populates a PDF template with user data.
   - Replaces placeholders in the Google Doc template with actual data from the form response.
   - Saves the final PDF in Google Drive and returns the file for further use.

### 3. \`sendEmail(email, pdfFile, firstname, middlename, lastname)\`
   - Sends a confirmation email to the registrant.
   - Includes a personalized message and attaches the generated PDF.

## Usage

1. **Set up Google Forms** with the required fields as per the placeholders in \`createPDF\` function.
2. **Configure Google Sheet** to log PDF URLs (columns 112 and 113 are expected to be used for URL and filename).
3. **Deploy as an Apps Script**:
   - Paste this script into Google Apps Script attached to your Google Form or Google Sheet.
   - Set \`afterFormSubmit\` to trigger upon form submission.

## Contact

For any issues or additional information, contact the **Admin Office** at Gateway The Complete School or reach out to Mr. Manikandan P for technical support.
`;
