// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract PompayToken is ERC20{
    uint public INITIAL_SUPPLY = 1500000000000000*10**18;
    constructor(string memory name, string memory symbol) ERC20(name,symbol){
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract status is PompayToken("AJOU", "AJ"){

    struct Student{
        string name;
        uint256 StudentID;
        string major;
        uint256 gpa;
        string company;
        uint256 balance;
    }

    //생성한 Student를 배열로 사용하기 위해 Students라는 배열 선언
    Student[] Students;

    mapping(address => Student) public getInfoByWallet;

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        getInfoByWallet[to].balance = balanceOf(to);
        return true;
    }

    function setInfo(address account, string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company) public {
        getInfoByWallet[account].name = _name;
        getInfoByWallet[account].StudentID = _StudentID;
        getInfoByWallet[account].major = _major;
        getInfoByWallet[account].gpa = _gpa;
        getInfoByWallet[account].company = _company;
        getInfoByWallet[account].balance = balanceOf(account);
    }
}
