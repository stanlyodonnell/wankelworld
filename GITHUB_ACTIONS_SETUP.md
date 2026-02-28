# GitHub Actions Auto-Deploy Setup

## What This Does

Every time you push changes to the `main` branch, GitHub Actions automatically deploys your site to **GitHub Pages** — free hosting included!

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repo: https://github.com/stanlyodonnell/wankelworld
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Source", select **GitHub Actions**
5. Save (if there's a save button)

### Step 2: Push This Code

Upload all files to your GitHub repo (including the `.github/workflows/deploy.yml` file).

### Step 3: Watch It Deploy

1. Go to the **Actions** tab in your repo
2. You'll see the workflow running
3. Once it completes (green checkmark), your site is live!

### Step 4: Your Site URL

Your site will be at:
```
https://stanlyodonnell.github.io/wankelworld
```

## How to Update Your Site

### Option A: Edit Directly on GitHub

1. Go to your repo on GitHub
2. Find the file you want to edit (in the `public/` folder)
3. Click the pencil icon to edit
4. Make your changes
5. Click "Commit changes"
6. The site automatically redeploys in ~1 minute!

### Option B: Edit Locally, Push to GitHub

```bash
# Make changes to files in wankelworld/public/
# Then:
cd wankelworld
git add .
git commit -m "Your update message"
git push origin main
# Site auto-deploys!
```

## Custom Domain (Optional)

To use **wankelworld.com** instead of the GitHub URL:

1. Create a file `public/CNAME` with content:
   ```
   wankelworld.com
   ```

2. In your repo Settings → Pages → Custom domain, enter:
   ```
   wankelworld.com
   ```

3. With your domain registrar, add DNS records:
   - Type: A, Name: @, Value: `185.199.108.153`
   - Type: A, Name: @, Value: `185.199.109.153`
   - Type: A, Name: @, Value: `185.199.110.153`
   - Type: A, Name: @, Value: `185.199.111.153`

4. Wait for DNS to propagate (up to 24 hours)
5. GitHub will automatically generate an SSL certificate (HTTPS)

## Troubleshooting

**Site not updating?**
- Check the Actions tab for errors
- Make sure you're editing files in the `public/` folder

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+R)
- Check the Actions tab for the latest deployment status

**Want to see what's happening?**
- Every push triggers a new workflow run
- Check the Actions tab to see live logs

## That's It!

Once set up, maintaining the site is as simple as:
1. Edit files (locally or on GitHub)
2. Commit/push changes
3. Site auto-deploys!

No manual deployment needed ever again.
