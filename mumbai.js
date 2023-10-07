//npm install web3

const Web3 = require('web3');

// Initialize a web3 instance connected to the Mumbai testnet
const web3 = new Web3('https://rpc-mumbai.matic.today');

// Address of the deployed SimpleStorage contract
const contractAddress = '0x58a44849E4bA7B5273ad8D790ff92aa57BE305D7'; // Replace with the actual contract address

// Slot #0 corresponds to the storage of the 'data' variable in the contract
const slot = '0';

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