# Next Move 🫂

An interactive and responsive **Career Counseling Website** designed to guide users toward informed career decisions. Built with modern technologies like **React**, **React Router**, and **Firebase**, this platform offers seamless navigation, personalized advice, and dynamic services tailored to professional growth.

## 🌐 [Live Site](https://nextmoves.vercel.app/)

---

## 🛠️ Technologies Used

- **React**: For a dynamic and robust user interface.
- **React Router**: For efficient routing and navigation.
- **Firebase**: Handles authentication, data management, and profile updates.
- **Swiper Slider**: For a visually appealing slider on the home page.
- **Framer Motion**: Adds smooth scrolling animations to enhance user engagement.
- **ShadCN UI**: To design and style reusable components.
- **TailwindCSS**: For responsive and modern UI styling.

---

## ✨ Features

- **Dynamic Career Services**

  - Displayed using JSON data with cards for services like Career Counseling, Resume Reviews, and more.
  - Each service showcases details like category, pricing, duration, counselor, and ratings.

- **User Authentication**

  - Email and password-based registration with password validation (uppercase, lowercase, and length).
  - Google login integration for quick access.
  - Functional forgot password flow with email input and reset functionality.

- **Responsive Design**

  - Fully optimized for mobile, tablet, and desktop devices.
  - Includes a hamburger menu for smooth navigation on smaller screens.

- **User Profile Management**

  - Protected "My Profile" page displaying user information (name, email, photo).
  - Editable user details using Firebase's `updateProfile()` method.

- **Engaging Animations**
  - Smooth scrolling animations powered by Framer Motion.
  - A visually stunning Swiper slider to highlight key sections on the home page.

---

## 🌟 Highlights

- **Dynamic Title System**: Each page dynamically updates its title for better UX and SEO.
- **Protected Routes**: Ensures private pages like "Service Details" and "My Profile" are secure.
- **Persistent Login State**: Logged-in users stay authenticated even after page reloads.
- **404 Page**: Custom-designed "Not Found" page for invalid routes.
- **Service Feedback**: Users can leave comments or feedback on individual services.

---

## 🔧 How to Run Locally

1. **Clone the Repository**

```bash
   git clone https://github.com/your-username/career-compass.git
   cd career-compass
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**
   - Create a .env.local file in the root directory.
   - Add Firebase configuration keys on env.local

```bash
VITE_Projectid
VITE_apikey
```

like this.

4. **Run the application**

```bash
npm run dev
```

5. **Access the App**
   - Open http://localhost:3000 in your browser.

---

## 🛠️ Deployment

- Hosted on Netlify or Vercel for a fast and reliable experience.
- Firebase Authentication requires authorized domains to ensure secure access.

---

## 📝 Future Enhancements

- Add career analytics and trend visualization.
- Integrate external resources like job boards and mentorship programs.
- Advanced search and filtering for career services.

---

## 🤝 Contributions

Contributions are welcome! Fork this repository, make your changes, and submit a pull request.

---

_Career Compass – Empowering Your Professional Journey._
