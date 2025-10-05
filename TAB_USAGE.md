# Tab Usage Guide

This guide explains how to create tabbed content in the Plugin-Wiki.

## Basic Tab Syntax

To create tabs in your markdown files, use the following HTML structure:

```html
<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button">Tab 1</button>
    <button class="tab-button">Tab 2</button>
    <button class="tab-button">Tab 3</button>
  </div>
  <div class="tab-content">
    <h3>Tab 1 Content</h3>
    <p>Your content for tab 1 goes here.</p>
  </div>
  <div class="tab-content">
    <h3>Tab 2 Content</h3>
    <p>Your content for tab 2 goes here.</p>
  </div>
  <div class="tab-content">
    <h3>Tab 3 Content</h3>
    <p>Your content for tab 3 goes here.</p>
  </div>
</div>
```

## Example: Maven vs Gradle

```html
<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button">Maven</button>
    <button class="tab-button">Gradle</button>
  </div>
  <div class="tab-content">
    <h4>Maven Configuration</h4>
    <pre><code class="language-xml">&lt;dependency&gt;
  &lt;groupId&gt;com.example&lt;/groupId&gt;
  &lt;artifactId&gt;plugin&lt;/artifactId&gt;
  &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
  </div>
  <div class="tab-content">
    <h4>Gradle Configuration</h4>
    <pre><code class="language-gradle">dependencies {
  implementation 'com.example:plugin:1.0.0'
}</code></pre>
  </div>
</div>
```

## Tips

- The first tab is automatically selected when the page loads
- You can include any markdown or HTML content inside tab content divs
- Make sure the number of tab buttons matches the number of tab content divs
- Tab content can include code blocks, images, links, and other markdown elements

## Tables

Tables use standard GitHub Flavored Markdown syntax:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |
```

Tables are automatically styled with the cyberpunk theme.
