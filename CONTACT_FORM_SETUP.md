# Contact Form Setup Guide

## ✅ Form is Ready - Just Add Your Access Key!

Your contact form is now configured to send emails directly to your inbox using Web3Forms (100% free!).

## 🚀 Quick Setup (2 minutes):

### Step 1: Get Your Free Access Key

1. Go to: **https://web3forms.com/**
2. Enter your email address where you want to receive form submissions
3. Click **"Create Access Key"**
4. Check your email inbox and copy the access key they send you (looks like: `abc123-def456-ghi789`)

### Step 2: Add Your Access Key

1. Open the file: `src/components/ContactPage.tsx`
2. Find line 21 that says:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = "abc123-def456-ghi789";
   ```
4. Save the file

### Step 3: Test It!

1. Go to **http://localhost:3000/#contact**
2. Fill out the form
3. Click "Send Message"
4. Check your email - you should receive the form submission!

## ✨ What You Get

When someone submits the form, you'll receive an email with:
- **Full Name**
- **Business Name**
- **Email Address**
- **Website URL** (if provided)
- **Message**

## 🎨 Features

- ✅ **Loading State**: Button shows "Sending..." while submitting
- ✅ **Success Message**: Green confirmation when sent
- ✅ **Error Handling**: Red error message if something goes wrong
- ✅ **Form Reset**: Fields clear automatically after successful submission
- ✅ **Validation**: Required fields must be filled
- ✅ **Email Validation**: Ensures valid email format

## 🔧 Customization

### Change the Subject Line

In `ContactPage.tsx`, find this line (around line 45):
```typescript
subject: `New Contact Form Submission from ${formData.fullName}`,
```

Change it to whatever you want:
```typescript
subject: `Summit Designs - New Inquiry from ${formData.fullName}`,
```

### Add More Fields

To add new fields (like phone number):

1. Add to state (line 9-15):
   ```typescript
   const [formData, setFormData] = useState({
     // ... existing fields
     phoneNumber: ""
   });
   ```

2. Add to form submission (line 35):
   ```typescript
   body: JSON.stringify({
     // ... existing fields
     phone_number: formData.phoneNumber,
   }),
   ```

3. Add the input field in the form HTML

## 💡 Alternative: Use Your Own Email Service

If you prefer to use your own email service, popular options include:
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **SendGrid**: Requires backend setup
- **Your own backend**: Create an API endpoint

But Web3Forms is the simplest and completely free!

## 🆘 Troubleshooting

### "Something went wrong" message?
- Check that you've added your access key correctly
- Verify your internet connection
- Check the browser console for errors (F12)

### Not receiving emails?
- Check your spam/junk folder
- Verify the email you used when creating the access key
- Try submitting the form again

### Form not submitting?
- Make sure all required fields are filled
- Check that the dev server is running
- Look for any console errors in the browser

---

**That's it!** Super simple and no backend coding required. Just get your access key and paste it in! 🎉

