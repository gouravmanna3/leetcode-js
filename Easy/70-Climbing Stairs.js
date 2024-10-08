/*
  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. 
  In how many distinct ways can you climb to the top?

  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
*/

// this problem is based on the fibonacci concept
// dp[n] = dp[n-1] + dp[n-2];
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  let dp = [];
  dp = [1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
