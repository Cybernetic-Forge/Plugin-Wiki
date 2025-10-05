# QuickStocks-Wiki

This repository contains the documentation and wiki for the QuickStocks plugin, hosted on GitHub Pages.

## 🌐 Live Documentation

The wiki is automatically deployed to GitHub Pages. Visit the live site at:
`https://cybernetic-forge.github.io/Plugin-Wiki/`

## 📚 About

This wiki provides comprehensive documentation for the QuickStocks plugin including:
- Getting Started guides
- Configuration instructions
- Feature documentation
- API reference
- Troubleshooting tips

## 🛠️ Local Development

To run this wiki locally:

1. Install Ruby and Bundler
2. Create a `Gemfile` with Jekyll dependencies (optional)
3. Run `bundle install` (if using Gemfile)
4. Run `bundle exec jekyll serve` or `jekyll serve`
5. Open `http://localhost:4000` in your browser

## 📝 Contributing

To contribute to the documentation:

1. Fork this repository
2. Create a new branch for your changes
3. Make your edits to the markdown files
4. Test your changes locally
5. Submit a pull request

## 🚀 Deployment

This wiki is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

The deployment workflow:
- Builds the Jekyll site
- Deploys to GitHub Pages
- Makes the wiki available at the GitHub Pages URL

## 📂 Structure

- `index.md` - Homepage of the wiki
- `_config.yml` - Jekyll configuration
- `.github/workflows/pages.yml` - GitHub Actions workflow for deployment
- `_docs/` - Documentation pages (to be added)

## ⚙️ GitHub Pages Setup

This repository is configured to use GitHub Pages with:
- **Source**: GitHub Actions
- **Theme**: jekyll-theme-cayman
- **Build**: Automated via GitHub Actions workflow

To enable GitHub Pages for this repository:
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The site will be deployed automatically on the next push to `main`

## 📄 License

Documentation is provided as-is for the QuickStocks plugin.
