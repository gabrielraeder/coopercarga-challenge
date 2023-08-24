SELECT DISTINCT 
	CASE WHEN j1.id < j2.id THEN j1.nome ELSE j2.nome END AS jogador1,
  CASE WHEN j1.id < j2.id THEN j2.nome ELSE j1.nome END AS jogador2
FROM Jogador j1
JOIN Partidas p1 ON j1.id = p1.jogador1_id
JOIN Jogador j2 ON j2.id = p1.jogador2_id
JOIN Partidas p2 ON (j1.id = p2.jogador1_id AND j2.id = p2.jogador2_id) OR (j1.id = p2.jogador2_id AND j2.id = p2.jogador1_id)
WHERE (p1.pontos_jogador1 + p1.pontos_jogador2) > 30
AND p1.duracao > 90
GROUP BY jogador1, jogador2
HAVING COUNT(*) > 2;
