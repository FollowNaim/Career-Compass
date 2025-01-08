# Career Compass 🫂

An interactive and responsive **Career Counseling Website** designed to guide users toward informed career decisions. Built with modern technologies like **React**, **React Router**, and **Firebase**, this platform offers seamless navigation, personalized advice, and dynamic services tailored to professional growth.

---

## 🌐 [Live Site](https://ccompass.vercel.app/)

---

## Showcase

<img src='https://i.ibb.co.com/1vDsfM0/01.jpg'/>

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

## Dependencies

- **@radix-ui/react-avatar**: ^1.1.1 – A Radix UI component for displaying user avatars.
- **@radix-ui/react-dialog**: ^1.1.2 – A Radix UI component for creating dialog modals.
- **@radix-ui/react-label**: ^2.1.0 – A Radix UI label component for forms.
- **@radix-ui/react-popover**: ^1.1.2 – A Radix UI component for creating popovers.
- **@radix-ui/react-scroll-area**: ^1.2.1 – A Radix UI component for scrollable areas.
- **@radix-ui/react-select**: ^2.1.2 – A Radix UI select dropdown component.
- **@radix-ui/react-slot**: ^1.1.0 – A utility for passing dynamic components as slots.
- **@radix-ui/react-toast**: ^1.2.2 – A Radix UI component for creating toast notifications.
- **@tabler/icons-react**: ^3.22.0 – A library of Tabler icons for React.
- **class-variance-authority**: ^0.7.0 – Utility for handling className variants in React.
- **clsx**: ^2.1.1 – Utility for constructing `className` strings conditionally.
- **cmdk**: ^1.0.0 – Command menu component for React.
- **date-fns**: ^3.6.0 – Utility library for working with JavaScript dates.
- **firebase**: ^11.0.2 – Google Firebase JavaScript SDK.
- **framer-motion**: ^11.11.17 – Motion library for React animations.
- **hamburger-react**: ^2.5.1 – A hamburger menu button component.
- **lucide-react**: ^0.460.0 – React icons library with beautiful, consistent icons.
- **react**: ^18.3.1 – A JavaScript library for building user interfaces.
- **react-day-picker**: ^8.10.1 – A date picker component for React.
- **react-dom**: ^18.3.1 – React package for working with the DOM.
- **react-dropzone**: ^14.3.5 – A React component for handling file uploads via drag and drop.
- **react-helmet-async**: ^2.0.5 – A library for managing document head tags asynchronously.
- **react-hot-toast**: ^2.4.1 – Toast notification library for React.
- **react-icons**: ^5.3.0 – Popular icon library for React.
- **react-lottie**: ^1.2.7 – A React library for rendering Lottie animations.
- **react-phone-number-input**: ^3.4.9 – A React component for inputting phone numbers.
- **react-router-dom**: ^6.28.0 – Declarative routing for React applications.
- **swiper**: ^11.1.14 – A modern mobile touch slider library.
- **tailwind-merge**: ^2.5.4 – Utility for merging Tailwind CSS class strings.
- **tailwindcss-animate**: ^1.0.7 – Animation utilities for Tailwind CSS.

---

## Dev Dependencies

- **@eslint/js**: ^9.13.0 – ESLint's core JavaScript functionality.
- **@types/react**: ^18.3.12 – TypeScript definitions for React.
- **@types/react-dom**: ^18.3.1 – TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: ^4.3.3 – Vite plugin for React support.
- **autoprefixer**: ^10.4.20 – PostCSS plugin for adding vendor prefixes automatically.
- **eslint**: ^9.13.0 – A tool for identifying and fixing JavaScript code issues.
- **eslint-plugin-react**: ^7.37.2 – ESLint plugin for React best practices.
- **eslint-plugin-react-hooks**: ^5.0.0 – ESLint rules for React hooks.
- **eslint-plugin-react-refresh**: ^0.4.14 – ESLint plugin for React Fast Refresh.
- **globals**: ^15.11.0 – Global variable definitions for ESLint.
- **postcss**: ^8.4.49 – A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: ^3.4.15 – A utility-first CSS framework.
- **vite**: ^5.4.10 – Next-generation frontend build tool.

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
   - Open http://localhost:5173 in your browser.

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
