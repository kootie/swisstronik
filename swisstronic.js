const Web3 = require('web3');

// Initialize a web3 instance connected to the Swisstronic testnet
const web3 = new Web3('https://swisstronic.com:8545'); // Replace with the Swisstronic testnet RPC URL

// Address of the deployed SimpleStorage contract
const contractAddress = '0x0F93E34D47b7c255199FF1f4a4dfcC25D3c9Ce4d'; // Replace with the actual contract address

// Slot #0 corresponds to the storage of the 'data' variable in the contract
const slot = '0x0'; // Slot 0 in hexadecimal

async function retrieveDataFromContract() {
  try {
    // Use eth_getStorageAt() to retrieve the data from the specified slot
    const data = await web3.eth.getStorageAt(contractAddress, slot);

    console.log('Retrieved data from slot #0:', data);
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}

retrieveDataFromContract();