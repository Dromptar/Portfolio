// import React, { useState, useEffect } from "react";

// function App() {
//   const [menuBgColor, setMenuBgColor] = useState("transparent");

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 0) {
//       setMenuBgColor("#333"); // change to your desired color
//     } else {
//       setMenuBgColor("transparent");
//     }
//   };

//   return (
//     <div>
//       <nav style={{ backgroundColor: menuBgColor }}>
//         {/* your menu items */}
//       </nav>
//       {/* rest of your content */}
//     </div>
//   );
// }

// export default App;
