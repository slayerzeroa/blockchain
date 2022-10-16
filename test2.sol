// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

contract status{


    address public minter;
    mapping (address => uint) public balances; 
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

    // function setStu(string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company, uint256 _balance) public {
    //     Students.push(Student(_name, _StudentID, _major, _gpa, _company, _balance));
    // }

    // function getStu(uint _number) public view returns (string memory getStuName, uint256 getStuID, string memory getStuMajor, uint256 getStuGPA, string memory getStuCompany){
    //     getStuName = Students[_number].name;
    //     getStuID = Students[_number].StudentID;
    //     getStuMajor = Students[_number].major;
    //     getStuGPA = Students[_number].gpa;
    //     getStuCompany = Students[_number].company;
    //     getStuBalance = Students[_number].balance;
    // }

    function setInfo(address _wall, string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company, uint256 _balance) public {
        getInfoByWallet[_wall].name = _name;
        getInfoByWallet[_wall].StudentID = _StudentID;
        getInfoByWallet[_wall].major = _major;
        getInfoByWallet[_wall].gpa = _gpa;
        getInfoByWallet[_wall].company = _company;
        getInfoByWallet[_wall].balance = _balance;
    }

    function mint(address receiver, uint amount) public  {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}