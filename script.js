const web3 = new Web3(window.ethereum); // Connect to MetaMask

const contractAddress = "0x0Ca8153E680002F3907A3065D602478317D42914";  // Replace with your actual contract address
const contractABI =  [
	{
		"inputs": [],
		"name": "increase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "SetValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// 🔹 Connect MetaMask
async function connectWallet() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    document.getElementById("wallet").innerText = `Connected: ${accounts[0]}`;
}

// 🔹 Store Value
async function storeValue() {
    const accounts = await web3.eth.getAccounts();
    const value = document.getElementById("storeInput").value;
    
    await contract.methods.SetValue(value).send({ from: accounts[0] });
    alert(`Stored: ${value}`);
}

// 🔹 Incease Value
async function increaseValue() {
    const accounts = await web3.eth.getAccounts();
    
    await contract.methods.increase().send({ from: accounts[0] });

    alert("Value increased by 1!");
}

// 🔹 Retrieve Value
async function retrieveValue() {
    const value = await contract.methods.GetValue().call();
    document.getElementById("retrievedValue").innerText = `Stored Number: ${value}`;
}









