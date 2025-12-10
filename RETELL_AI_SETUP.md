# Retell AI Voice Demo Setup Guide

## ✅ Voice Demo Integration Ready!

The "Talk to the voice agent" demo card is now set up to use Retell AI for realistic voice conversations.

## 🔧 Quick Setup

### Step 1: Get Your Retell Call ID

1. Sign in to your Retell AI dashboard at [app.retellai.com](https://app.retellai.com/)
2. Create a new call or use an existing one
3. Get the Call ID from the URL or dashboard

### Step 2: Add Your Call ID

1. Open `src/components/DemoCard1.tsx`
2. Find line 5 that says:
   ```typescript
   const RETELL_CALL_ID = "YOUR_RETELL_CALL_ID";
   ```
3. Replace with your actual Retell Call ID:
   ```typescript
   const RETELL_CALL_ID = "abc123def456";
   ```

### Step 3: Test It!

1. Go to **http://localhost:3000**
2. Scroll to the "Test It Out" section
3. Click "Start voice demo" button
4. Allow microphone access when prompted
5. Start talking with the AI voice agent!

## 🎯 How It Works

The integration uses Retell's embed feature, which:

1. Opens a modal dialog when the button is clicked
2. Loads your Retell call in an iframe
3. Creates a unique session ID for each conversation
4. Handles all the voice processing through Retell's platform

## 🔍 Troubleshooting

### Microphone Access Issues
- Make sure your browser has permission to access your microphone
- Check that you're using HTTPS (required for microphone access)
- Try a different browser if issues persist

### Call Not Starting
- Verify your Retell Call ID is correct
- Check that your Retell account is active
- Make sure the call is published and available

### Audio Quality Issues
- Use headphones to prevent echo
- Speak clearly and at a normal volume
- Ensure you're in a quiet environment

## 🎛️ Customization Options

### Change Modal Size
Adjust the size in `RetellEmbed` component:
```jsx
<div className="bg-white rounded-[15px] w-full max-w-[500px] h-[600px] relative">
```

### Customize Button Style
Modify the `VoiceButton` component styling to match your brand.

### Add Pre-call Instructions
Add instructions or a welcome screen before initiating the call.

## 📱 Mobile Support

The Retell embed works on mobile devices too! Just make sure to:
- Request microphone permissions
- Keep the device awake during the call
- Use headphones for best experience

## 🔄 Advanced: Custom Voice Agent

If you want to create a custom voice agent in Retell:

1. Go to [app.retellai.com](https://app.retellai.com/)
2. Create a new agent with your specific:
   - Voice selection
   - Conversation flow
   - Persona details
   - Knowledge base
3. Get the new Call ID and update it in the code

## 🔐 Security Considerations

- Each session gets a unique ID for privacy
- User audio is processed securely through Retell
- No audio is stored on your website

---

**That's it!** Once you add your Retell Call ID, the voice demo will be fully functional! 🎉
