const provider = 'https://sepolia.infura.io/v3/9041415e6a4c43d9a9475c8d19a57d0b';
// const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const token = '0xe20D2A213a05ced955a88bB5A9081a89D595d960';
// const wallet = document.getElementById('token_add').value;
const minABI = [
   {
       constant: true,
       inputs: [{ name: "_owner", type: "address" }],
       name: "balanceOf",
       outputs: [{ name: "balance", type: "uint256" }],
       type: "function",
   },
];
const contract = new web3.eth.Contract(minABI, token);
const getBalance = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(new Web3.providers.HttpProvider(provider))
        const wallet = document.getElementById('token_add').value;
        try {
            const res = await contract.methods.balanceOf(wallet).call();
            const format = web3.utils.fromWei(res);
            resolve(format)
        } catch (error) {
          reject(error)
        }
    })
//    const res = await contract.methods.balanceOf(wallet).call();
//    const format = web3.utils.fromWei(res);
//    console.log(format);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("token_button").addEventListener("click", async () => {
      const tokenBalance = await getBalance()
      console.log(tokenBalance)
      document.getElementById("wallet_balance").innerText = tokenBalance

    })
  })
