# Recipe-Box
Recipe Sharing Web Platform is a responsive, user-friendly app for sharing and discovering recipes. Users can search, filter, and bookmark recipes without accounts. Features include ingredient-based suggestions, sorting, and filtering. Built with the MERN stack, it ensures seamless access across all devices. 🚀

https://recipe-box-ivory.vercel.app/

# Recipe Sharing Web Platform

## Overview
The **Recipe Sharing Web Platform** is a simple, user-friendly web application that allows users to share and discover recipes easily. Unlike traditional methods such as emails, social media posts, or handwritten notes, this platform provides a centralized and visually appealing repository for recipes.

## Features
- **Responsive Design:** Fully optimized for all screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices.
- **Recipe Input:** Users can add recipes with ingredients, instructions, preparation time, and serving size.
- **"What's in Your Fridge" Feature:** Suggests recipes based on available ingredients.
- **Filters & Sorting:**
  - Filter by vegetarian/non-vegetarian, meal type, cuisine type, and cooking time.
  - Sort recipes by total cooking time in ascending order.
- **Sorting by Preparation Time:** Sort recipes by preparation time in ascending order.
- **Filtering by Preparation Time Range:** Users can filter recipes by preparation time (e.g., "under 30 minutes").
- **Search Bar:** Search by ingredient, meal type, and cuisine type.
- **Light Mode & Dark Mode:** Toggle between themes for user preference.
- **Recipe Bookmarking:** Users can bookmark their favorite recipes in their browser without needing an account.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** Tailwind CSS

## Installation & Setup
### Prerequisites
- Node.js installed on your system
- MongoDB (local or cloud-based)

### Steps to Run Locally
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/recipe-sharing-platform.git
   cd recipe-sharing-platform
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   cd client
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the Backend Server:**
   ```sh
   npm start
   ```

5. **Run the Frontend:**
   ```sh
   cd client
   npm start
   ```

6. **Access the App:**
   Open `http://localhost:3000` in your browser.

## Contribution
Contributions are welcome! Follow these steps to contribute:
1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-branch`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to the branch** (`git push origin feature-branch`)
5. **Create a pull request**

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For questions or suggestions, feel free to reach out or open an issue!

---
Enjoy sharing and discovering delicious recipes! 🍽️🚀

