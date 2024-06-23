import { fadeIn, fadeOut } from "./animations"

const fonts = {
  primary: `'Outfit', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`
}

const colors = {
  primary: "",
  light: "#fff",
  placeholder: "#f8f8f8",
  border: "rgba(255, 255, 255, 0.2)",
  mask: "rgba(64, 64, 64, 0.582)",
  opacity: "rgba(255, 255, 255, 0.1)"
}

const animations = {
  fadeIn,
  fadeOut
}

export const theme = {
  fonts,
  colors,
  animations
}