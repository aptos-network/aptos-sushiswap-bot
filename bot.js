const axios = require('axios');
const ethers = require('ethers');

// Aptos API Configuration
const APTOS_API_URL = 'https://aptos-network.pro/api';  
const SUSHISWAP_API_URL = 'https://api.sushi.com/swap';  

// Private key and wallet address (use environment variables in production)
const PRIVATE_KEY = 'your_private_key_here';
const WALLET_ADDRESS = 'your_wallet_address_here';

// Create a provider for Aptos using ethers.js (modify if the blockchain uses a different method)
const provider = new ethers.JsonRpcProvider(APTOS_API_URL);

// Function to get the balance of an Aptos account
async function getBalance(address) {
  try {
    const response = await axios.get(`${APTOS_API_URL}/accounts/${address}/balance`);
    return response.data.balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
}

// Function to get information about a SushiSwap token
async function getSushiSwapTokenInfo(tokenAddress) {
  try {
    const response = await axios.get(`${SUSHISWAP_API_URL}/token-info`, {
      params: { token: tokenAddress }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching token info from SushiSwap:', error);
    return null;
  }
}

// Function to swap tokens via SushiSwap
async function swapTokens(fromToken, toToken, amount) {
  try {
    const response = await axios.post(`${SUSHISWAP_API_URL}/swap`, {
      fromToken,
      toToken,
      amount,
      walletAddress: WALLET_ADDRESS,
    });
    console.log('Swap successful:', response.data);
  } catch (error) {
    console.error('Error swapping tokens:', error);
  }
}

// Function to send a transaction on the Aptos blockchain
async function sendTransaction(privateKey, recipient, amount) {
  const transaction = {
    sender: WALLET_ADDRESS,
    recipient,
    amount,
    privateKey,
  };

  try {
    const response = await axios.post(`${APTOS_API_URL}/transactions`, transaction);
    console.log('Transaction successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending transaction:', error);
    return null;
  }
}

// Main function to execute the bot operations
async function main() {
  try {
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

  } catch (error) {
    console.error('Error in bot execution:', error);
  }
}

// Run the bot
main();
