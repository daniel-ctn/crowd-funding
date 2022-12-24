// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donatorAmounts;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public campaignCount = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        require(_deadline > block.timestamp, "Deadline must be in the future");

        campaignCount++;
        campaigns[campaignCount] = Campaign(
            msg.sender,
            _owner,
            _title,
            _description,
            _target,
            _deadline,
            0,
            _image,
            new address[](0),
            new uint256[](0)
        );

        return campaignCount - 1;
    }

    function donate(uint256 _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];
        campaign.donators.push(msg.sender);
        campaign.donatorAmounts.push(msg.value);

        (bool sent,) = payable(campaign.owner).call{value : msg.value}("");
        if (sent) {
            campaign.amountCollected += msg.value;
        }
    }

    function getDonators(uint256 _campaignId) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_campaignId].donators, campaigns[_campaignId].donatorAmounts);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory _campaigns = new Campaign[](campaignCount);
        for (uint256 i = 0; i < campaignCount; i++) {
            _campaigns[i] = campaigns[i];
        }
        return _campaigns;
    }
}