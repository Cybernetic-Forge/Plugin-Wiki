---
layout: default
title: Commands
description:  QuickStocks Commands Overview
---

## Command-List
### Company Commands
| Command                                                 | Description                                                                                     | 
|---------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `/company create <name>`                                | Create a company to start your economical journey.                                              |
| `/company info [company]`                               | Show information about a specific company.                                                      |
| `/company list`                                         | Show yourself a list of all companies.                                                          |
| `/company invite <company> <role> <player>`             | Hire a player to join your company on a specific job.                                           |
| `/company accept <company>`                             | Accept the invitation of a company.                                                             |
| `/company decline <company>`                            | Decline the invitation of a company.                                                            |
| `/company invitations <company>`                        | Show all pending invitations of your company.                                                   |
| `/company deposit <company> <amount>`                   | Deposit some of you own money into the company.                                                 |
| `/company withdraw <company> <amount>`                  | Withdraw some of you the companies money into your wallet.                                      |
| `/company employees <company> `                         | Show all working employees in a specific company.                                               |
| `/company createjob <company> <role> <permission>`      | Create a new company job with specific permissions (comma-seperated).                           |
| `/company editjob <company> <role> <permission>`        | Edit a company job with specific permissions (comma-seperated).                                 |
| `/company assign <company> <player> <role>`             | Assign a specific job to your employee.                                                         |
| `/company settings <company>`                           | Open your companies setting-gui. You will see all settings you got permission for.              |
| `/company setsymbol <company> <symbol>`                 | Choose an abbreviation (max. 6 digits) for you company before going on the market.              |
| `/company market enable <company>`                      | Go with your company on the market.                                                             |
| `/company market disable <company>`                     | Got issues on the market? Go off the market again. All shareholders will get their money back.  |
| `/company market settings <company> buyout`             | Set a buyout safety sum to prevent yourself from being bought out.                              |
| `/company market settings <company> percentage`         | Set a percentage sum to set a maximum of your company balance that can be shared on the market. |
| `/company notifications`                                | Listen on company related notifications in case you were offline for a while.                   |
| `/company leave <company>`                              | Leave a specific company.                                                                       |
| `/company fire <company> <player>`                      | Fire an employee from a specific company.                                                       |
| `/company transferownership <company> <player>`         | Transfer the ownership of you company to another trustworthy employee.                          |
| `/company salary cycle <company> <cycle>`               | Define the payment cycle in which interval employees get paid.                                  |
| `/company salary info <company>`                        | Show salary information about a specific company.                                               |
| `/company salary set <company> <role> <amount>`         | Set the salary for a specific role of your company.                                             |
| `/company salary setplayer <company> <player> <amount>` | Give your employee a special agreement on salary payment. It will override the job-salary.      |
| `/company salary removeplayer <company> <player> `      | Remove the special agreement from your employee.                                                |

### Market & Watchlist Commands
| Command                            | Description                                    | 
|------------------------------------|------------------------------------------------|
| `/market [browse]`                 | Open the market gui to trade.                  |
| `/market buy <symbol> <quantity>`  | Buy a specific trade.                          |
| `/market sell <symbol> <quantity>` | Sell a specific trade.                         |
| `/market portfolio`                | Show your own portfolio in chat.               |
| `/market history`                  | Show your trading history in chat.             |
| `/market shareholders <company>`   | Show all shareholders of a specific company.   |
| `/market watchlist`                | Show your favourite shares right on the point. |
| `/watchlist add <symbol>`          | Put a specific trade on your watchlist.        |
| `/watchlist remove <symbol>`       | Remove a specific trade from your watchlist.   |
| `/watchlist info <symbol>`         | Check if a trade is on your watchlist.         |
| `/watchlist reset`                 | Clear your watchlist to restructure yourself.  |

### Wallet Commands
| Command                         | Description                                       | 
|---------------------------------|---------------------------------------------------|
| `/wallet [balance]`             | Show your current amount of money.                |
| `/wallet add <amount> <player>` | [Admin] Give a player a specific amount of money. |
| `/wallet set <amount> <player>` | [Admin] Set the players amount of money.          |
### Crypto Commands
