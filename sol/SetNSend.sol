// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

contract status{

    event Sent(address from, address to, uint amount);

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

    function setInfo(address _wall, string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company, uint256 _balance) public payable {
        getInfoByWallet[_wall].name = _name;
        getInfoByWallet[_wall].StudentID = _StudentID;
        getInfoByWallet[_wall].major = _major;
        getInfoByWallet[_wall].gpa = _gpa;
        getInfoByWallet[_wall].company = _company;
        getInfoByWallet[_wall].balance = _balance;
    }

    function send(address receiver, uint amount) public payable {
        if (getInfoByWallet[msg.sender].balance < amount) return;
        getInfoByWallet[msg.sender].balance -= amount;
        getInfoByWallet[receiver].balance += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
