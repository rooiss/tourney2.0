export const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <p>&copy; 2023 volleyballtournaments.xyz. All rights reserved.</p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>About Us</li>
        <li>License</li>
        <li>Contribute</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  )
}

// export function SimpleFooter() {
//   return (
//     <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
//       <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="blue-gray"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             About Us
//           </Typography>
//         </li>
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="blue-gray"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             License
//           </Typography>
//         </li>
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="blue-gray"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             Contribute
//           </Typography>
//         </li>
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="blue-gray"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             Contact Us
//           </Typography>
//         </li>
//       </ul>
//     </footer>
//   )
// }
