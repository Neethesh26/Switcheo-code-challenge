SELECT DISTINCT address
FROM trades
WHERE block_height > 730000
  AND address IN (SELECT address
                 FROM balances
                 GROUP BY address
                 HAVING SUM(CASE
                              WHEN denom = 'usdc' THEN amount * 0.000001
                              WHEN denom = 'swth' THEN amount * 0.00000005
                              WHEN denom = 'tmz' THEN amount * 0.003
                              ELSE 0
                           END) >= 500);