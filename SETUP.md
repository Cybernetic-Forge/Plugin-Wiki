# GitHub Pages Setup Instructions

This document provides step-by-step instructions for enabling GitHub Pages for this repository.

## Prerequisites

- Repository administrator access
- This branch needs to be merged to `main` (or the workflow needs to be updated to work from another branch)

## Steps to Enable GitHub Pages

1. **Navigate to Repository Settings**
   - Go to your repository on GitHub
   - Click on **Settings** tab

2. **Access Pages Settings**
   - In the left sidebar, click on **Pages** (under "Code and automation")

3. **Configure Build and Deployment**
   - Under "Build and deployment" section:
     - **Source**: Select **GitHub Actions** from the dropdown
     - This will use the workflow in `.github/workflows/pages.yml`

4. **Save and Deploy**
   - The configuration will be automatically saved
   - Once you push changes to the `main` branch, the workflow will automatically build and deploy the site
   - You can also manually trigger the workflow from the Actions tab

5. **Access Your Site**
   - After the first successful deployment, your site will be available at:
     - `https://cybernetic-forge.github.io/Plugin-Wiki/`
   - The URL will be shown in the Pages settings

## Verifying Deployment

1. Go to the **Actions** tab in your repository
2. Look for the "Deploy to GitHub Pages" workflow
3. Check that the workflow runs successfully
4. Once complete, visit the URL provided in the deployment

## Updating Content

To update the wiki content:

1. Edit the markdown files in the repository
2. Commit and push to the `main` branch
3. The GitHub Actions workflow will automatically rebuild and deploy the site
4. Changes should appear within a few minutes

## Troubleshooting

### Workflow Not Running
- Ensure the workflow file is in `.github/workflows/pages.yml`
- Check that you've selected "GitHub Actions" as the source in Pages settings
- Verify the workflow is configured to run on pushes to `main` branch

### 404 Error
- Wait a few minutes after the first deployment
- Check that the deployment completed successfully in the Actions tab
- Verify the correct URL is being used

### Build Failures
- Check the Actions tab for error messages
- Ensure all markdown files have proper front matter
- Verify the `_config.yml` file is valid YAML

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
