---
layout: default
title: QuickStocks Setup
description: Setup and configure QuickStocks
---

# QuickStocks Setup Guide

This guide will help you set up QuickStocks on your server and configure it for your specific needs.

## Prerequisites

Before setting up QuickStocks, ensure you have:

- Server version 1.0.0 or higher
- MySQL 8.0+ or PostgreSQL 12+
- At least 1GB of available RAM
- Administrative access to your server

## Installation

### Step 1: Download QuickStocks

Download the latest version of QuickStocks from our releases page:

```bash
wget https://github.com/Cybernetic-Forge/QuickStocks/releases/latest/quickstocks.jar
```

### Step 2: Install Plugin

Place the plugin file in your server's plugins directory:

```bash
mv quickstocks.jar /path/to/server/plugins/
```

### Step 3: Configure Database

Create a database for QuickStocks:

```sql
CREATE DATABASE quickstocks;
CREATE USER 'quickstocks'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON quickstocks.* TO 'quickstocks'@'localhost';
FLUSH PRIVILEGES;
```

### Step 4: Initial Configuration

Start your server to generate configuration files. Then edit `plugins/QuickStocks/config.yml`:

```yaml
database:
  type: mysql
  host: localhost
  port: 3306
  name: quickstocks
  username: quickstocks
  password: your_password

settings:
  # Enable automatic inventory scanning
  auto_scan: true
  
  # Scan interval in seconds
  scan_interval: 300
  
  # Enable low stock alerts
  alerts_enabled: true
```

## Initial Setup

### Create Your First Location

```bash
# In server console or chat
/qs location create "Main Warehouse" -x 100 -y 64 -z 200
```

### Add Items to Track

```bash
# Add an item to inventory
/qs item add diamond 64 "Main Warehouse"

# Set low stock threshold
/qs threshold set diamond 10
```

### Configure Alerts

```yaml
alerts:
  # Low stock threshold percentage
  low_stock_percent: 20
  
  # Alert methods
  methods:
    - console
    - webhook
    - email
  
  # Webhook URL for notifications
  webhook_url: "https://your-webhook-url.com"
```

## Verification

After setup, verify that QuickStocks is working correctly:

```bash
# Check plugin status
/qs status

# List all tracked items
/qs list

# View location information
/qs location info "Main Warehouse"
```

## Common Setup Issues

### Database Connection Failed

- Verify database credentials in config.yml
- Ensure database server is running
- Check firewall rules allow database connections

### Permission Errors

- Verify user has necessary permissions
- Check file permissions on plugin directory

### Performance Issues

- Increase allocated RAM if needed
- Adjust scan interval to reduce load
- Consider disabling auto-scan for large inventories

## Next Steps

- Learn how to use QuickStocks in the [Usage Guide](../usage/)
- Return to [QuickStocks Overview](../)

## Advanced Setup

### Multiple Locations

Configure multiple warehouse locations:

```yaml
locations:
  - name: "Main Warehouse"
    coordinates: [100, 64, 200]
    capacity: 10000
    
  - name: "Storage Room A"
    coordinates: [150, 64, 250]
    capacity: 5000
```

### API Access

Enable API for external integrations:

```yaml
api:
  enabled: true
  port: 8080
  auth_token: "your-secure-token"
  rate_limit: 100
```
