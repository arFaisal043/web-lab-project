# Bean & Brew

Bean & Brew is a simple and elegant e-commerce web application for an online coffee shop. It is built using vanilla HTML, CSS, and JavaScript, demonstrating core frontend concepts without relying on external frameworks.

## Features

- **Home Page:** A welcoming landing page featuring featured coffees and customer testimonials.
- **Menu:** Displays a list of available coffees fetched dynamically from a JSON data source.
- **Shopping Cart:** 
  - Add coffees to the cart.
  - Update quantities.
  - Remove items from the cart.
  - Calculate total price.
  - Simulated checkout process.
- **About Us:** Information about the coffee shop's history and mission.
- **Contact Us:** A contact form for customer inquiries.
- **Responsive Design:** Optimized for various screen sizes, ensuring a seamless experience across desktop and mobile devices.

## Project Structure

The project is organized into the following directories:

- `html/`: Contains all the HTML pages (`home.html`, `menu.html`, `cart.html`, `about.html`, `contact.html`).
- `css/`: Contains the CSS stylesheets for each corresponding HTML page to manage layout and design.
- `js/`: Contains the JavaScript files that handle the logic, interactivity, and state management (like cart operations and fetching data).
- `data/`: Contains `coffees.json`, which serves as a mock database for the menu items.
- `images/`: (If applicable) Used for storing local image assets. Currently, the project uses external URLs for images.

## How to Run

Since this project relies on vanilla web technologies, you don't need a build step or a complex server setup. 

1. Clone or download the repository to your local machine.
2. Navigate to the project directory.
3. Open the `html/home.html` file directly in any modern web browser to start exploring the site.


## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Styling, Flexbox, Grid, and responsive media queries.
- **JavaScript (ES6):** DOM manipulation, Fetch API, LocalStorage (for cart persistence).
