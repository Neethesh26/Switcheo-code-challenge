// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// interface ERC20 {
//     function balanceOf(address) external view returns (uint256);
// }

contract TokenBalances {

    struct TokenInfo {
        address token;
        uint256 balance;
    }



    // Function to retrieve all token balances for a given wallet
    function getBalances(address _wallet, address[] memory _tokenContracts) public view returns (TokenInfo[] memory) {
        TokenInfo[] memory balances = new TokenInfo[](_tokenContracts.length);
        // Iterate over the array of token contract addresses
        for (uint256 i = 0; i < _tokenContracts.length; i++) {
            // Get the token contract address
            address currToken = _tokenContracts[i];

            // Call the balanceOf() function on the token contract to get the balance for the given wallet
            uint256 currBalance = IERC20(currToken).balanceOf(_wallet);
            TokenInfo memory currTokenInfo = TokenInfo(currToken, currBalance);
            balances[i] = currTokenInfo;
        }

        // Return the mapping of token contract addresses to token balances
        return balances;
    }
}
