---
layout: default
title: Developer API
description: Hook into the plugin to customize your experience even further
---

## Developer API
The Developer API allows you to hook into QuickStocks and customize your experience even further. You can use the API to create your own commands, permissions, and more.

---

### Load dependency with Maven or Gradle
<details>

<summary>Maven</summary>

```
<repositories>
    <repository>
        <id>cybernetic-forge</id>
        <url>???</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>net.cyberneticforge.quickstocks</groupId>
        <artifactId>QuickStocks</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

</details>
<br>
<details>

<summary>Gradle</summary>

```
repositories {
    maven { url '???' }
}

dependencies {
    compileOnly "net.cyberneticforge.quickstocks:QuickStocks:1.0.0-SNAPSHOT"
}
```

</details>

---

### Implementing QuickStocks
```java
public void setup() {
    // TODO: Initialize your hook
}
```

---

### Service Managers
#### CompanyManager.java
API Manager for company operations. Provides a high-level interface for external plugins to interact with the company system.
#### CryptoManager.java
API Manager for cryptocurrency operations. Provides a high-level interface for external plugins to interact with the crypto system.
#### MarketManager.java
API Manager for market and instrument operations. Provides a high-level interface for external plugins to interact with the market system.
#### PortfolioManager.java
API Manager for portfolio and holdings operations. Provides a high-level interface for external plugins to interact with player portfolios. 
#### TradingManager.java
API Manager for trading operations. Provides a high-level interface for external plugins to interact with the trading system.
#### WalletManager.java
API Manager for wallet and balance operations. Provides a high-level interface for external plugins to interact with the wallet system.
#### WatchlistManager.java
API Manager for watchlist operations. Provides a high-level interface for external plugins to interact with the watchlist system.

---

### Events

| Event                        | Description                                                             |
|------------------------------|-------------------------------------------------------------------------|
| CircuitBreakerTriggeredEvent | Event fired when a circuit breaker is triggered on an instrument.       |
| CompanyCreateEvent           | Event fired when a company is created.                                  |
| CompanyEmployeeJoinEvent     | Event fired when a player joins a company (accepts an invitation).      |
| CompanyEmployeeLeaveEvent    | Event fired when a player leaves a company (voluntarily or kicked).     |
| CompanyIPOEvent              | Event fired when a company goes public (IPO - Initial Public Offering). |
| CryptoCreateEvent            | Event fired when a custom cryptocurrency is created.                    |
| InstrumentBuyEvent           | Event fired when a player buys an instrument (stock, crypto, item).     |
| InstrumentPriceUpdateEvent   | Event fired when an instrument's price is updated.                      |
| InstrumentSellEvent          | Event fired when a player sells an instrument (stock, crypto, item).    |
| MarketCloseEvent             | Event fired when the market closes for trading.                         |
| MarketOpenEvent              | Event fired when the market opens for trading.                          |
| ShareBuyEvent                | Event fired when a player buys company shares.                          |
| ShareSellEvent               | Event fired when a player sells company shares.                         |
| WalletBalanceChangeEvent     | Event fired when a player's wallet balance changes.                     |
| WatchlistAddEvent            | Event fired when an instrument is added to a player's watchlist.        |
| WatchlistRemoveEvent         | Event fired when an instrument is removed from a player's watchlist.    |

