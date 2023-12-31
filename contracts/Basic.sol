// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Basic is ERC20 {
    constructor(uint _supply) ERC20("Basic ERC-20", "BASIC") {
        _mint(msg.sender, _supply);
    }

    function mint(uint _supply) public {
        // for (uint i = 0; i < 100; i++) {
        _mint(msg.sender, _supply);
        // }
    }

    receive() external payable {
        payable(msg.sender).transfer(msg.value);
    }

    fallback() external payable {
        payable(msg.sender).transfer(msg.value);
    }
}
