{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //SPDX-License-Identifier: MIT\
pragma solidity ^0.8.0;\
\
contract Score \{\
    \
    address owner;\
    uint256 public score;\
    mapping (address => uint) public score_list;\
    \
    constructor() \{\
        score = 22;\
        owner = msg.sender;\
    \}\
    \
    modifier onlyOwner \{\
        if (msg.sender == owner) \{\
            _;\
        \}\
    \}\
    \
    event Score_wasSet(uint indexed);\
    \
    //note: this function is redundant bc I have declared the score variable as public (which I think creates a separate getter function for that var)\
    function getScore() public view returns (uint) \{\
        return score;\
    \}\
    \
    function setScore(uint new_score) public \{\
        score = new_score;\
        \
        emit Score_wasSet(new_score);\
    \}\
    \
    function getUserScore(address user) public view returns (uint) \{\
        return score_list[user];\
    \}\
\}\
}