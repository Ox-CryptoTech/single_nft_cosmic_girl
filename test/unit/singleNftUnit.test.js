const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Nft Marketplace Tests", () => {
  // variables and contract deploying
  let deployer, user, cosmigGirl;
  const PRICE = ethers.utils.parseEther("0.1");
  const TOKEN_ID = 0;
  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    // accounts
    deployer = accounts[0];
    player = accounts[1];

    await deployments.fixture(["all"]); // deploy all of those contracts across deploy directory

    // contracts

    // nft --> ERC721 contract
    const nftContract = await ethers.getContractFactory("CosmicGirl");
    cosmigGirl = await nftContract.deploy();
    await cosmigGirl.deployed();
    // other describes
    // cosmigGirl -> contract name
    // account name ---> deployer, user
  });
});

describe("constructor", function () {
  it("Intializing", async () => {});
});

describe("BeforeTokenTransfer", function () {
  it("", async () => {});
});

describe("Burn", function () {
  it("", async () => {});
});

describe("TokenURI", function () {
  it("", async () => {});
});

describe("SupportsInterface", function () {
  it("", async () => {});
});
