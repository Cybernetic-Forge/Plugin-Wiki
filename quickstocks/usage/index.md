---
layout: default
title: QuickStocks Usage
description: How to use QuickStocks effectively
---

# QuickStocks Usage Guide

Learn how to effectively use QuickStocks to manage your inventory and optimize your stock operations.

## Basic Commands

### Viewing Inventory

```bash
# List all items in inventory
/qs list

# List items at specific location
/qs list "Main Warehouse"

# Search for specific item
/qs search diamond

# View item details
/qs info diamond
```

### Managing Stock

```bash
# Add stock
/qs add diamond 64 "Main Warehouse"

# Remove stock
/qs remove diamond 32 "Main Warehouse"

# Transfer between locations
/qs transfer diamond 16 "Main Warehouse" "Storage Room A"

# Set stock level
/qs set diamond 100 "Main Warehouse"
```

### Location Management

```bash
# Create new location
/qs location create "Storage Room B" -x 200 -y 64 -z 300

# Delete location
/qs location delete "Storage Room B"

# List all locations
/qs location list

# View location details
/qs location info "Main Warehouse"
```

## Advanced Features

### Automated Restocking

Set up automatic restocking rules:

```bash
# Create restocking rule
/qs restock add diamond "Main Warehouse" --min 10 --target 64

# List restocking rules
/qs restock list

# Remove restocking rule
/qs restock remove diamond "Main Warehouse"
```

Configuration in `config.yml`:

```yaml
restocking:
  enabled: true
  check_interval: 600  # seconds
  
  rules:
    - item: diamond
      location: "Main Warehouse"
      min_stock: 10
      target_stock: 64
      source: "Storage Room A"
```

### Stock Alerts

Configure alerts for low stock situations:

```bash
# Set alert threshold
/qs alert set diamond 10

# Enable/disable alerts
/qs alert toggle diamond

# List all alerts
/qs alert list
```

### Analytics and Reports

Generate reports on stock levels and movements:

```bash
# Generate daily report
/qs report daily

# Generate weekly report
/qs report weekly

# Export report to file
/qs report export --format csv --output /tmp/stock_report.csv

# View stock history
/qs history diamond --days 7
```

## Using the Dashboard

QuickStocks includes a web-based dashboard for visual management:

### Accessing the Dashboard

1. Ensure the web interface is enabled in `config.yml`:
   ```yaml
   web:
     enabled: true
     port: 8080
     host: "0.0.0.0"
   ```

2. Access the dashboard at `http://your-server:8080`

### Dashboard Features

- **Overview**: Quick snapshot of all inventory
- **Locations**: Map view of all storage locations
- **Alerts**: Real-time alert notifications
- **Analytics**: Charts and graphs of stock trends
- **Reports**: Generate and download reports

## Best Practices

### Organizing Inventory

1. **Use Descriptive Location Names**: Make location names clear and descriptive
2. **Set Appropriate Thresholds**: Configure alert thresholds based on actual usage
3. **Regular Audits**: Periodically verify physical stock matches system records

### Performance Optimization

```yaml
# Optimize for large inventories
performance:
  # Reduce scan frequency for large datasets
  scan_interval: 600
  
  # Limit query results
  max_results: 100
  
  # Enable caching
  cache_enabled: true
  cache_ttl: 300
```

### Security

```yaml
security:
  # Restrict access by permission
  permissions:
    view: "quickstocks.view"
    add: "quickstocks.add"
    remove: "quickstocks.remove"
    admin: "quickstocks.admin"
```

## Bulk Operations

### Importing Inventory

Import inventory from CSV file:

```bash
/qs import /path/to/inventory.csv
```

CSV format:
```csv
item,quantity,location
diamond,64,Main Warehouse
iron_ingot,128,Storage Room A
gold_ingot,32,Main Warehouse
```

### Exporting Inventory

Export current inventory:

```bash
# Export all inventory
/qs export /path/to/export.csv

# Export specific location
/qs export "Main Warehouse" /path/to/export.csv
```

## API Usage

### REST API Endpoints

QuickStocks provides a REST API for external integrations:

```bash
# Get all items
GET /api/items

# Get specific item
GET /api/items/{item_name}

# Add stock
POST /api/items/{item_name}/add
{
  "quantity": 64,
  "location": "Main Warehouse"
}

# Get location info
GET /api/locations/{location_name}
```

### Authentication

Include your API token in the header:

```bash
curl -H "Authorization: Bearer your-api-token" \
     http://your-server:8080/api/items
```

## Troubleshooting

### Stock Discrepancies

If you notice discrepancies:

```bash
# Force manual scan
/qs scan

# Verify integrity
/qs verify "Main Warehouse"

# Reset location (use with caution)
/qs location reset "Main Warehouse"
```

### Performance Issues

- Increase scan interval
- Disable auto-scan for very large inventories
- Use location-specific queries instead of global

## Next Steps

- Review [Setup Guide](../setup/) for configuration options
- Return to [QuickStocks Overview](../)
