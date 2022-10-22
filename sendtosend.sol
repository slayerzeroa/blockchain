// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

contract status{

    event Sent(address from, address to, uint amount);
    event howMuch(uint256 _value);

    struct Student{
        string name;
        uint256 StudentID;
        string major;
        uint256 gpa;
        string company;
        uint256 balance;
    }

    //생성한 Student를 배열로 사용하기 위해 Students라는 배열 선언
    string name = "";
    uint256 balance = 0;
    Student[] Students;

    mapping(address => Student) public getInfoByWallet;

    function setInfo(address _addr, string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company) public payable {
        getInfoByWallet[_addr].name = _name;
        getInfoByWallet[_addr].StudentID = _StudentID;
        getInfoByWallet[_addr].major = _major;
        getInfoByWallet[_addr].gpa = _gpa;
        getInfoByWallet[_addr].company = _company;
        getInfoByWallet[_addr].balance = _addr.balance;
    }

    // function send(address receiver, uint amount) public payable {
    //     if (getInfoByWallet[msg.sender].balance < amount) return;
    //     getInfoByWallet[msg.sender].balance -= amount;
    //     getInfoByWallet[receiver].balance += amount;
    //     emit Sent(msg.sender, receiver, amount);
    // }

    function sendNow(address payable receiver) public payable {
        receiver.transfer(msg.value);
        emit howMuch(msg.value);
    }
}