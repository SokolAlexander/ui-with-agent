feature: workers panel

1. rendering
	•	panel displays all worker types defined in workers.json
	•	each worker card shows:
	•	name
	•	icon
	•	base production value
	•	current owned count
	•	current cost
	•	worker list updates automatically when game state changes

⸻

2. hiring behavior
	•	clicking "hire" increases owned count by 1
	•	resource cost is deducted immediately
	•	cost scales according to worker progression formula
	•	production output updates within 1 tick
	•	if insufficient funds:
	•	hire button is disabled
	•	tooltip explains missing amount

⸻

3. scaling & progression
	•	cost scaling matches formula defined in engine config
	•	unlocking conditions (if any) are enforced
	•	locked workers display:
	•	unlock condition
	•	disabled state

⸻

4. state consistency
	•	reloading page restores correct worker counts
	•	prestige reset correctly resets worker counts
	•	no duplicate hires occur from rapid clicking

⸻

5. edge cases
	•	panel renders correctly if:
	•	0 workers owned
	•	very large counts (e.g. 1e6)
	•	extremely high costs
	•	no visual overflow or layout break
⸻

6. error handling
	•	if workers.json fails to load:
	•	panel shows error state
	•	no runtime crash

⸻

7. performance
	•	hiring does not cause noticeable UI freeze
	•	no unnecessary re-renders (verified via react devtools)