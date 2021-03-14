import { createContext } from "react";

const Viewport = createContext<number>(window.innerWidth);

export default Viewport;
