//dns => Dapp Name Service
const main = async () => {
    const [owner, person1] = await hre.ethers.getSigners();
    const dnsContractFactory = await hre.ethers.getContractFactory('Domains');
    const dnsContract = await dnsContractFactory.deploy("dapp");
    await dnsContract.deployed();
    console.log("DNS Domain contract deployed to -> ", dnsContract.address);
    console.log("DNS contract deployed by -> ", owner.address);

    let txn = await dnsContract.register("Nigam", {value : hre.ethers.utils.parseEther('5')});
    await txn.wait();
    
    const dowmainOwnerAddress = await dnsContract.getAddress("Nigam");
    console.log("Owner of domain Prashant is -> ", dowmainOwnerAddress);

    txn = await dnsContract.setRecord("Nigam", "My personal record");
    await txn.wait();

    var nameRecord = await dnsContract.getRecord("Nigam");
    console.log("Record of dapp name service Prashant -> ", nameRecord);

    // txn = await dnsContract.connect(person1).setRecord("Prashant", "My personal record");
    // await txn.wait();

    // txn = await dnsContract.connect(person1).register("Prashant");
    // await txn.wait();

    var allMintedNames = await dnsContract.getAllMintedNames();
    console.log(allMintedNames);
};

const runWithdrawFundsUseCase = async () => {
    const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("dapp");
    await domainContract.deployed();
    
    console.log("Contract owner:", owner.address);
    
    // Let's be extra generous with our payment (we're paying more than required)
    let txn = await domainContract.register("a16z",  {value: hre.ethers.utils.parseEther('1234')});
    await txn.wait();
    
    // How much money is in here?
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
    
    // Quick! Grab the funds from the contract! (as superCoder)
    try {
        txn = await domainContract.connect(superCoder).withdraw();
        await txn.wait();
    } catch(error){
        console.log("Could not rob contract");
    }
    
    // Let's look in their wallet so we can compare later
    let ownerBalance = await hre.ethers.provider.getBalance(owner.address);
    console.log("Balance of owner before withdrawal:", hre.ethers.utils.formatEther(ownerBalance));
    
    // Oops, looks like the owner is saving their money!
    txn = await domainContract.connect(owner).withdraw();
    await txn.wait();
    
    // Fetch balance of contract & owner
    const contractBalance = await hre.ethers.provider.getBalance(domainContract.address);
    ownerBalance = await hre.ethers.provider.getBalance(owner.address);
    
    console.log("Contract balance after withdrawal:", hre.ethers.utils.formatEther(contractBalance));
    console.log("Balance of owner after withdrawal:", hre.ethers.utils.formatEther(ownerBalance));
};


const runMain = async () => {
    try {
        console.log("<----------------running main use case---------------->")
        await main();
        // console.log("<----------------running withdraw use case---------------->")
        // await runWithdrawFundsUseCase();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();