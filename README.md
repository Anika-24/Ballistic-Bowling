Ballistic Bowling

Attached screen recording of the game in action!
https://github.com/user-attachments/assets/08ecbd27-9061-477e-b7b2-bb3a6964a063

I built this bowling game in JavaScript on p5.js. It's like a fusion between the a slingshot game and the bowling game! Using Matter.js, which brings real-life physics into play. By using commands like `Matter.Engine`, `Matter.World`, and `Matter.Body`, I was able to add realistic effects like gravity, collisions, and elasticity. So when the bowling ball hits the pins, they fall just like they would in real life!

For example, *constraints* in Matter.js are used to control the ball’s movement, ensuring that it behaves like a slingshot when launched, adding that extra realistic force. The slingshot effect is achieved with `Matter.Constraint`, connecting the ball to a point on the screen and allowing it to be pulled back and released. The space bar resets the ball’s position, allowing you to keep playing seamlessly. With these physics elements, each throw and strike feels lifelike—it’s been amazing to see how coding and physics come together to create this experience! 

