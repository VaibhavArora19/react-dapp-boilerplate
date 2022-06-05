// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract MyContract{

    string public name;

    function set(string memory _name) public{
        name = _name;
    }

    function get() public view returns(string memory){
        return name;
    }

}