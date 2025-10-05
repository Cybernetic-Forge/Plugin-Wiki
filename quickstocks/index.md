---
layout: default
title: QuickStocks (WIP)
description: Efficient inventory and stock management
---

# QuickStocks <span class="wip-badge">WIP</span>
🚧 This plugin is currently under active development. Features and documentation are being continuously updated.


## Overview
Create your own company or corporation and go on the market to prove your financial stability. Manage your employees with custom roles, salaries and benefits to simulate a unique economical experience on your server.<br>

## Installation
1. Download the `QuickStocks.jar` from the resource hub.
2. Place the jar file in your server's `plugins` directory.
3. Start your server to generate default configuration files.
4. Stop the server and edit `config.yml` to set up your database and preferences.
5. Restart the server and verify the plugin is loaded with `/pl` or `/plugins`.
6. Test the installation by running `/market` in-game.

## Requirements
- Spigot/Paper 1.21+
- Java 17+
### Additional Requirements
- Database: MySQL (MySQL recommended for larger servers)
- [Vault](https://github.com/milkbowl/Vault) (optional, for economy integration)
- [ChestShop](https://modrinth.com/plugin/chestshop) (optional, for integrating companies as shop accounts)

## Documentation Sections

- [Commands](setup/) - Initial setup and configuration
- [Permissions](usage/) - Learn how to use QuickStocks effectively
- [Developer API](usage/) - Learn how to use QuickStocks effectively

## Feature Scopes
### 🏢 Run a Company
- Create and manage companies with employees, roles, and financial operations. 
- You can customize your job-roles with specific permission within the company and assign them to your employees. 
- Companies can go public and sell shares on the market, allowing other players to invest and become shareholders. 
- Monitor shareholders and ownership to maintain control over your business. 
- Define salaries for both, role- and player-based agreements that will be payed out in a server-wide payment cycle.

In case of using [ChestShop](https://modrinth.com/plugin/chestshop), companies can also be used as shop accounts, allowing them to operate shops on the server through several people.
### 📊 Trade on the Market
- Browse stocks, cryptocurrencies, and company shares on the market.
- View real-time prices and market trends to make informed investment decisions.
- Build and manage your investment portfolio, tracking performance with profit/loss calculations.
- Use a watchlist to track your favorite instruments and receive notifications on significant price changes.

### 💰 Build Wealth
- Each player starts with a wallet balance that can be used for trading and investments.
- Manage your balance, view transaction history, and monitor your overall financial health. (WIP)
- In case of using [Vault](https://github.com/milkbowl/Vault) integration, players can also directly interact with money from their economy balance to their wallet and vice versa without any manual steps.

### 🪙 Create Crypto (WIP)
- Design custom cryptocurrencies
- Set unique symbols and names
- Watch them trade on the market
- Build server-specific economies