// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract PompayToken is ERC20{
    uint public INITIAL_SUPPLY = 1500000000000000*10**18;
    constructor(string memory name, string memory symbol) ERC20(name,symbol){
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
