const main = async () => {
    console.log("Deployment of Dapp Name service starting...");
    var tld = "dapp";
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy(tld);
    await domainContract.deployed();

    console.log("Dapp domain name service deployed at address -> ", domainContract.address);
    // var domainName = "Prashant";
    // let txn = await domainContract.register(domainName, {value: hre.ethers.utils.parseEther(".1")});
    // await txn.wait();
    // console.log(`domain ${domainName}.${tld} minted successfully`)

    // txn = await domainContract.setRecord("Prashant", "dapp name service");
    // await txn.wait();
    // console.log(`Set record for ${domainName}.${tld}`);

    // const address = await domainContract.getAddress(domainName); 
    // console.log("Owner of domain ${domain}.${tld} -> ", address);

    // const balance = await hre.ethers.provider.getBalance(domainContract.address);
    // console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();