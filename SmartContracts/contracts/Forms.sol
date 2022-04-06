//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Forms {

  struct tokenInfo {
    address from;
    address payable to;
    string[] id;
    string namedConstant;
  }

  uint public tokenNumber;
  mapping(uint => tokenInfo) tokenMap;

  event sendMoney(address from, address payable to, string[] id, string namedConstant);

  function setForms(address from, address payable to, string[] memory id, string memory namedConstant) external returns (string[] memory) {
    emit sendMoney(from, to, id, namedConstant);
    tokenNumber++;

    tokenInfo storage toks = tokenMap[tokenNumber];
    toks.namedConstant = namedConstant;
    toks.id = id;
    toks.to = to;
    toks.from = from;
    return id;
  }

  function getTokens(uint inputNumber) public view returns (string memory, string[] memory, address payable, address) {
    tokenInfo storage toks = tokenMap[inputNumber];

    string memory beans = toks.namedConstant;
    string[] memory listIDs = toks.id;
    address payable sentTo = toks.to;
    address sentFrom = toks.from;

    return (beans, listIDs, sentTo, sentFrom);
  }

}
