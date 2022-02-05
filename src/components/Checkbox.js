// import React, { useState } from "react";

// function Checkbox() {
//   const [newsletter, setNewsletter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsletter(event.target.checked);
//   }
  
// //checked instead of value
//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Checkbox;