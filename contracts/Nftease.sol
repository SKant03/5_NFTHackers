// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Nftease {
  uint counter;
  asset[] allassets;
  struct asset{
    string name;
    string discription;
    string imageurl;
    uint id;
    uint price;
    uint timestamp;
    address payable asset_holder;
  }
  constructor() public {
    counter =0;
  }

  function mint(string memory nname, string memory ndisc, string memory nimageurl, uint nprice ) public {
    asset memory newasset = asset(nname, ndisc, nimageurl, counter, nprice, block.timestamp, msg.sender);
    allassets.push(newasset);
    counter++;
  }

  function listasset() public view returns(asset[] memory){
    return allassets;
  }

    function buyasset(uint ind) public payable {
    require(msg.value >= allassets[ind].price);
    (allassets[ind].asset_holder).transfer(msg.value);
    allassets[ind].asset_holder = msg.sender;
  }

  
}
