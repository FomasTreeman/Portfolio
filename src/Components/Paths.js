import image1 from "../Images/image.png"
import image2 from "../Images/image1.png"
import image3 from "../Images/image2.jpeg"
import ss from "../Images/UdemySS.png"

const paths = [
  {
    label: "Comms app",
    title: "My messaging service",
    description: "docker front-end and back-end",
    imagePath: [image1],
    path: "/proj4"
  },
  {
    label: "3D Project",
    title: "My three.js experiment",
    description: "My Three.js project",
    imagePath: [image1],
    path: "/proj1"
  },
  {
    label: "Smart Brains Udemy",
    title: "Face Recognition App",
    description: "My udemy course project",
    imagePath: [[image2], [ss]],
    path: "/proj2"
  },
  {
    label: "Kodi Project",
    title: "Kodi experiment",
    description: "My kodi project",
    imagePath: [image3],
    path: "/proj3"
  },
  {
    label: "Home",
    path: "/home"
  },
  {
    label: "Graphics",
    path: "/graphics"
  },
  {
    label: "Project status",
    path: "/status"
  },
  {
    label: "About me",
    path: "/about"
  },
  {
    label: "Contact me",
    path: "/contact"
  }
]

export default paths;