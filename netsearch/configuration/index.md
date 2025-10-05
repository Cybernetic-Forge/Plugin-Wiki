---
layout: default
title: NetSearch Configuration
description: Configure NetSearch for your needs
---

# NetSearch Configuration

Learn how to configure NetSearch to optimize its performance and customize its behavior for your server.

## Configuration File

The main configuration file is located at `plugins/NetSearch/config.yml`.

## Basic Configuration

```yaml
# NetSearch Configuration
netsearch:
  # Enable or disable the plugin
  enabled: true
  
  # Search engine settings
  search:
    # Maximum results to return
    max_results: 50
    
    # Enable fuzzy search
    fuzzy_search: true
    
    # Minimum query length
    min_query_length: 3
  
  # Index settings
  indexing:
    # Auto-update indexes
    auto_update: true
    
    # Update interval (in minutes)
    update_interval: 30
    
    # Index compression
    compress_indexes: true
```

## Advanced Settings

### Search Optimization

Configure search performance and accuracy:

```yaml
optimization:
  # Cache size (in MB)
  cache_size: 256
  
  # Enable query suggestions
  suggestions: true
  
  # Result ranking algorithm
  ranking: "relevance"  # Options: relevance, popularity, date
```

### Data Sources

Define which sources to index:

```yaml
sources:
  - type: "database"
    connection: "jdbc:mysql://localhost:3306/mydb"
    enabled: true
    
  - type: "filesystem"
    path: "/data/documents"
    enabled: true
    
  - type: "api"
    endpoint: "https://api.example.com"
    enabled: false
```

### Security Settings

```yaml
security:
  # Require authentication for searches
  require_auth: true
  
  # Rate limiting (requests per minute)
  rate_limit: 100
  
  # Allowed IP ranges
  allowed_ips:
    - "192.168.1.0/24"
    - "10.0.0.0/8"
```

## Performance Tuning

### Memory Allocation

Adjust memory settings for better performance:

```yaml
performance:
  # Heap size for search operations
  heap_size: "2G"
  
  # Thread pool size
  threads: 4
  
  # Buffer size for indexing
  buffer_size: "512M"
```

## Reloading Configuration

After making changes, reload the configuration:

```bash
# In server console
netsearch reload
```

## Configuration Examples

### High-Performance Setup

For servers with abundant resources:

```yaml
netsearch:
  search:
    max_results: 100
    fuzzy_search: true
    
performance:
  heap_size: "4G"
  threads: 8
  buffer_size: "1G"
```

### Low-Memory Setup

For servers with limited resources:

```yaml
netsearch:
  search:
    max_results: 25
    fuzzy_search: false
    
performance:
  heap_size: "512M"
  threads: 2
  buffer_size: "128M"
```

## Next Steps

- Review [Installation Guide](../installation/) if you haven't installed yet
- Return to [NetSearch Overview](../)
