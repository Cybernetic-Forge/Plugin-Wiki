---
layout: default
title: NetSearch Installation
description: How to install and setup NetSearch
---

# NetSearch Installation Guide

This guide will walk you through the installation process for the NetSearch plugin.

## Prerequisites

Before installing NetSearch, ensure you have:

- Server version 1.0.0 or higher
- Administrative access to your server
- At least 2GB of available RAM
- 500MB of free disk space for indexes

## Installation Steps

### 1. Download the Plugin

```bash
# Download will be available soon
wget https://github.com/Cybernetic-Forge/NetSearch/releases/latest/netsearch.jar
```

### 2. Install Dependencies

NetSearch requires the following dependencies:

- Java 17 or higher
- Database driver (MySQL/PostgreSQL)

### 3. Configure Server

Place the plugin in your server's plugin directory:

```bash
cp netsearch.jar /path/to/server/plugins/
```

### 4. Initial Setup

Start your server to generate the default configuration files:

```bash
# The plugin will create:
# - config.yml (main configuration)
# - indexes/ (search index directory)
# - cache/ (temporary cache storage)
```

### 5. Verify Installation

Check that NetSearch is loaded:

```bash
# Run in server console
plugins

# You should see NetSearch in the list
```

## Post-Installation

After installation, proceed to the [Configuration Guide](../configuration/) to customize NetSearch for your needs.

## Troubleshooting

### Plugin Not Loading

- Verify Java version is 17 or higher
- Check server logs for error messages
- Ensure all dependencies are installed

### Performance Issues

- Allocate more RAM if needed
- Adjust index settings in configuration
- Consider disabling unnecessary features

## Next Steps

- [Configure NetSearch](../configuration/)
- Return to [NetSearch Overview](../)
