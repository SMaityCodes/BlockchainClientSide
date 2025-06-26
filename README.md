# BlockchainClientSide
A basic demo on how to call solidity smart contract from frontend javascript


compile and deploy and test the smart contract "1_storage.sol" using Remix IDE  https://remix.ethereum.org 


install metamask extension for your browser.

Create  New Wallet:-

Connect your wallet to Sepolia: Select a Network -> Show test networks -> Sepolia

Buy Some Sepolia ETH in your wallet (can be obtained from a  faucet  [https://faucets.chain.link/sepolia](https://cloud.google.com/application/web3/faucet/ethereum/sepolia))

In Remix -> "Deploy & run trunsactions"  -> "Environment" -> "Inject Provider - Metamask" -> "Deploy" (it will deduct around 0.003 ETH)

copy the "contract Address" and "contract ABI"

From where to find the Contract Address in Remix IDE?

Under Deployed Contracts -> you can see something STORAGE AT ... (copy address) (note that the address must be places inside double-quote)

From where to find the Contract ABI in Remix IDE?

go to the “Solidity Compiler” tab -> ABI (at the bottom of left panel)

Note that the contract ABI remains the same if you do not change the solidity program. However the contract Address is for a specific deployment of the contract.

update the above two inside "script.js"

