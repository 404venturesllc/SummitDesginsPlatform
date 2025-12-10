# Creating a Public Retell Demo Link

## ✅ We Need a Public Demo Link

I've updated the code to use a public demo link instead of the dashboard URL. This way, users won't need to log in to Retell to try the voice demo.

## 🚀 How to Create a Public Demo Link in Retell

1. **Log in to your Retell dashboard**
   - Go to [dashboard.retellai.com](https://dashboard.retellai.com)

2. **Navigate to your Summit Agent**
   - Find the agent in your list of agents

3. **Look for Share or Publish options**
   - There should be a "Share" or "Publish" button
   - Click on it to see sharing options

4. **Create a public link**
   - Look for an option like "Create public link" or "Get shareable URL"
   - This creates a URL that doesn't require login
   - The URL might look like: `https://demo.retellai.com/your-agent-name`

5. **Copy the public link**
   - Copy the generated URL

6. **Update the code**
   - Open `src/components/DemoCard1.tsx`
   - Replace the demo URL in the `getRetellUrl()` function:
   ```javascript
   return "https://demo.retellai.com/summit-designs"; // Replace with your actual public demo link
   ```

## 🔍 If You Can't Find the Public Link Option

If you can't find a way to create a public link in Retell:

1. **Contact Retell Support**
   - Ask them how to create a public demo link for your agent
   - They might need to enable this feature for your account

2. **Alternative: Use an Embed Code**
   - Some Retell plans offer an embed code option
   - This HTML/JavaScript code can be added directly to your website
   - Look for "Embed" or "Widget" options in your dashboard

3. **Check Documentation**
   - Visit [docs.retellai.com](https://docs.retellai.com) for information on sharing options

## 🎯 What to Look For in Retell Dashboard

Look for options like:
- "Share Agent"
- "Publish"
- "Create Public Link"
- "Get Shareable URL"
- "Embed Widget"
- "Create Demo Link"

## 📱 Testing After Update

Once you have the public link and update the code:

1. Go to **http://localhost:3000**
2. Scroll to the "Test It Out" section
3. Click "Start voice demo" button
4. It should open your Retell agent directly without requiring login

---

**Important:** The current placeholder URL `https://demo.retellai.com/summit-designs` is just an example. You need to replace it with your actual public demo link from Retell.
