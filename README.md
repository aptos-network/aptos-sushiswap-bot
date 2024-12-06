  Aptos SushiSwap Bot

# Aptos SushiSwap Bot

This bot allows users to interact with the **Aptos blockchain** and perform token swaps on **SushiSwap** using the **Aptos API** and **SushiSwap API**. The bot is written in **Node.js** and can be used to perform the following tasks:

*   Check your Aptos account balance.
*   Fetch information about tokens on SushiSwap.
*   Perform token swaps on SushiSwap.
*   Send transactions on the Aptos network.

## Features

*   **Aptos Blockchain Interaction**: The bot uses the **Aptos API** to interact with the Aptos blockchain, including fetching account balances and submitting transactions.
*   **SushiSwap Token Swaps**: The bot can swap tokens between different assets on **SushiSwap** using the **SushiSwap API**.
*   **Transaction Handling**: It handles sending transactions, including private key and wallet address management.

## Requirements

*   **Node.js** (version 14 or later)
*   **npm** (Node package manager)
*   **axios** for making HTTP requests.
*   **ethers.js** for working with the Aptos network and private key management.

## Setup and Installation

### 1\. Clone the repository

Clone this repository to your local machine:

```
git clone https://github.com/yourusername/aptos-sushiswap-bot.git
cd aptos-sushiswap-bot
```

### 2\. Install dependencies

Install the necessary npm packages:

```
npm install
```

### 3\. Configuration

Update the bot configuration with your Aptos wallet address and private key. You can find your private key in your Aptos wallet or generate one using the Aptos API.

In the script file (`bot.js`), update the following variables:

```
const PRIVATE_KEY = 'your_private_key_here';  // Replace with your private key
const WALLET_ADDRESS = 'your_wallet_address_here';  // Replace with your Aptos wallet address
```

### 4\. Running the Bot

Run the bot using Node.js:

```
node bot.js
```

This will execute the bot and start performing the operations defined in the `main()` function. The bot will fetch the account balance, get token info from SushiSwap, perform a token swap, and send a transaction.

## Functions and Usage

### 1\. `getBalance(address)`

Fetches the balance of the given Aptos wallet address.

**Parameters:**

*   `address`: The Aptos wallet address.

**Example:**

```
const balance = await getBalance(WALLET_ADDRESS);
console.log('Balance:', balance);
```

### 2\. `getSushiSwapTokenInfo(tokenAddress)`

Fetches information about a token on SushiSwap. This includes details like token name, symbol, and current price.

**Parameters:**

*   `tokenAddress`: The address of the token you want information about.

**Example:**

```
const tokenInfo = await getSushiSwapTokenInfo('0xabc123...');
console.log('Token Info:', tokenInfo);
```

### 3\. `swapTokens(fromToken, toToken, amount)`

Performs a token swap on SushiSwap from one token to another. You must specify the `fromToken`, `toToken`, and the `amount` to swap.

**Parameters:**

*   `fromToken`: The address of the token you want to swap from.
*   `toToken`: The address of the token you want to swap to.
*   `amount`: The amount of `fromToken` to swap.

**Example:**

```
await swapTokens('0xabc123...', '0xdef456...', 100);
```

### 4\. `sendTransaction(privateKey, recipient, amount)`

Sends a transaction on the Aptos blockchain, transferring tokens from your wallet to another address.

**Parameters:**

*   `privateKey`: The private key of the sender's wallet (used to sign the transaction).
*   `recipient`: The address of the recipient wallet.
*   `amount`: The amount of tokens to send.

**Example:**

```
await sendTransaction(PRIVATE_KEY, '0xrecipientAddress...', 50);
```

## Example Usage

Here is an example of the bot running a full cycle of checking balance, swapping tokens, and sending a transaction:

```
async function main() {
  // Step 1: Get the balance of the wallet
  const balance = await getBalance(WALLET_ADDRESS);
  console.log('Balance:', balance);

  // Step 2: Fetch token information from SushiSwap
  const tokenInfo = await getSushiSwapTokenInfo('0xabc123...');
  console.log('Token Info:', tokenInfo);

  // Step 3: Perform a token swap
  await swapTokens('0xabc123...', '0xdef456...', 100);

  // Step 4: Send a transaction
  await sendTransaction(PRIVATE_KEY, '0xrecipientAddress...', 50);
}

main().catch((error) => {
  console.error('Error in bot execution:', error);
});
```

## API Endpoints Used

### Aptos API Endpoints

*   `GET https://aptos-network.pro/api/accounts/{address}/balance`: Fetches the balance of the given account address on the Aptos blockchain.
*   `POST https://aptos-network.pro/api/transactions`: Submits a transaction to transfer tokens from one wallet to another.

### SushiSwap API Endpoints

*   `GET https://aptos-network.pro/api/sushiswap/token-info`: Retrieves information about a specific token on SushiSwap (e.g., price, liquidity, etc.).
*   `POST https://aptos-network.pro/api/sushiswap/swap`: Executes a token swap on SushiSwap.

## Notes

https://medium.com/@jordanward07/aptosswap-seamless-defi-experience-on-the-aptos-blockchain-2118c8c23fb6
