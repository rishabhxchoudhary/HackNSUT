// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Storage {
    struct Record {
        string data;
    }

    struct Patient {
        mapping(address => bool) accessAccounts;
        mapping(address => uint) addressToIndex;
        mapping(address => uint) addressToPendingIndex;
        AdminInfo[] admins;
        AdminInfo[] pendingAccess;
        PatientInfo info;
        uint id;
    }

    struct Admin {
        mapping (address => bool) accessAccounts;
        mapping(address => uint) addressToIndex;
        PatientInfo[] patients;
        AdminInfo info;
    }

    struct PatientInfo {
        string aadhar;
        string name;
        address publicAddress;
        string phoneNumber;
    }

    struct AdminInfo {
        string name;
        address publicAddress;
    }

    uint userCount = 0;
    mapping(address => Record[]) public addressToRecord;
    mapping(address => Patient) public addressToPatient;
    mapping(address => Admin) public addressToAdmin;
    mapping(string => address) public adharToAddress;
    AdminInfo[] empty1;

    // user functions
    constructor() {
        AdminInfo memory adminInfo = AdminInfo("hekk", msg.sender);
        addressToAdmin[msg.sender].info = adminInfo;
    }

    function isRegisteredUser() public view returns(string memory) {
        if(addressToPatient[msg.sender].id > 0)
            return "y";
        else
            return "n";
    }

    function createAccount(string memory addhar, string memory name, string memory phoneNumber) public {
        PatientInfo memory patientInfo = PatientInfo(addhar, name, msg.sender, phoneNumber);
        addressToPatient[msg.sender].id = ++userCount;
        addressToPatient[msg.sender].info = patientInfo;
        adharToAddress[addhar] = msg.sender;
    }

    function getRecordsUser() public view returns(Record[] memory) {
        return addressToRecord[msg.sender];
    }

    function getPendingAccessRequest() public view returns(AdminInfo[] memory) {
        return addressToPatient[msg.sender].pendingAccess;
    }
    
    function giveAccess(address adminAddress) public {

        //TODO: remove from pendingRequest
        addressToPatient[msg.sender].pendingAccess = empty1;
        addressToPatient[msg.sender].accessAccounts[adminAddress] = true;
        AdminInfo[] storage admins = addressToPatient[msg.sender].admins;
        addressToPatient[msg.sender].addressToIndex[adminAddress] = admins.length;
        admins.push(addressToAdmin[adminAddress].info);
        addressToPatient[msg.sender].admins = admins;

        addressToAdmin[adminAddress].accessAccounts[msg.sender] = true;
        PatientInfo[] storage patients = addressToAdmin[adminAddress].patients;
        addressToAdmin[adminAddress].addressToIndex[msg.sender] = patients.length;
        patients.push(addressToPatient[msg.sender].info);
        addressToAdmin[adminAddress].patients = patients;
    }

    // function removeAccess(address doctorAddress) public {
    //     addressToPatient[msg.sender].accessAccounts[doctorAddress] = false;
    // }


    //admin functions
    function getRecordsAdmin(string memory addhar) public view returns(Record[] memory) {
        Record[] memory empty;
        if(addressToAdmin[msg.sender].accessAccounts[adharToAddress[addhar]] == true) {
            return addressToRecord[adharToAddress[addhar]];
        }
        else { 
            return empty;
        }
    }

    function pushRecord(address userAddress, string memory data) public returns(string memory) {
        if(addressToAdmin[msg.sender].accessAccounts[userAddress] == true) {
            Record memory rec = Record(data);
            addressToRecord[userAddress].push(rec);
            return 'y';
        } else {
            return 'n';
        }
    }

    function requestAccess(string memory adhar) public {
        AdminInfo[] storage admins = addressToPatient[adharToAddress[adhar]].pendingAccess;
        addressToPatient[adharToAddress[adhar]].addressToPendingIndex[msg.sender] = admins.length;
        admins.push(addressToAdmin[msg.sender].info);
        addressToPatient[adharToAddress[adhar]].pendingAccess = admins;
    }

    function getAllPatients() public view returns(PatientInfo[] memory) {
        return addressToAdmin[msg.sender].patients;
    }
}
