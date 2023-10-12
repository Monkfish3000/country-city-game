In the game, player needs to match city with country

1. Component should take data property in form of an object with countries as keys and the values as cities
   E.g. {Germany: 'Berlin', France: 'Paris', Wales: 'Cardiff'}

2. A button is displayed for each country and each capital

3. Buttons displayed randomly

4. Clicking a button sets its background to blue

5. Clicking another button should:

- remove both buttons if pair matches i.e. the country and its corresponding capital have both been selected. E.g. Berlin and Germany.
- set the background color of the clicked button to red if an incorrect pair has been selected

6. If a wrong pair has been selected, clicking another button removes the red from the wrong pair and the selected button is blue as per point 4.

7. When no more buttons, display a message of Congratulations.

8. Export component as default.
