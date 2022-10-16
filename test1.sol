// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;

contract status{

    address public minter;
    mapping (address => uint) public balances; 
    event Sent(address from, address to, uint amount);

    constructor() {
        minter = msg.sender;
    }


    struct Student{
        string name;
        uint256 StudentID;
        string major;
        uint256 gpa;
        string company;
        address addr;
    }

    //생성한 Student를 배열로 사용하기 위해 Students라는 배열 선언
    Student[] Students;

    function setStu(string memory _name, uint256 _StudentID, string memory _major, uint256 _gpa, string memory _company) public {
        Students.push(Student(_name, _StudentID, _major, _gpa, _company, minter));
    }

    function getStu(uint _number) public view returns (string memory getStuName, uint256 getStuID, string memory getStuMajor, uint256 getStuGPA, string memory getStuCompany){
        getStuName = Students[_number].name;
        getStuID = Students[_number].StudentID;
        getStuMajor = Students[_number].major;
        getStuGPA = Students[_number].gpa;
        getStuCompany = Students[_number].company;
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


// int    -> 음수 + 0 + 양수 (정수형)
// uint256 -> 음수 빠진 정수형

// 입력 받을 때 3.54 ㅁ.ㅁ 입력 -???ㅁㅁ> 블록체이닝
// 3.4 -> 34
// 2.4 -> 24
// -> 암호화 시키든가 해서 나중에 출력할때 ㅁ.ㅁ -> 
// 한글을 쓸 수 없다
// -> Solidity에서 지원이 안 되고 호환성이 안 좋다
// 사람 이름은 다 한글인데 어떻게 하지??
// 001010101000101010100101
// 가 -> 0000
// 나 -> 0001
// 유대명 -> 00fds0fds0dfs1011gsdsdg12231dssdsdg256346363454543342asdsadads

// contract가 복잡해지고 무거워질수록 이런 디테일의 최적화가 필요하다
// Etereum에서는 gas비용이 과다하면 error gas비용 억제 생각해야 한다
// -> 최종 발표할 때 뭔가 있어보이려면 블록체인에 저장되어 있는 데이터들 시각화하면 좋을 듯?
// -> 저희가 애먹는 이유가 블록체인이 모호한 개념 가지고 개발하려고 하는데 발표 듣는 사람들도 똑같을 것 같아서
// -> 시각화해서 보여주면 좋아할 듯?