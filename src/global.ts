import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

:focus{
    outline: none;
}

*{
    padding: 0;
    margin: 0;
    font-family: 'League Spartan', sans-serif;
}

html, body{
    height: 100%
}
    

body{
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'League Spartan', sans-serif;
    background: #000;
    color: #fff;
    padding: 2rem;
}

img{
    max-width: 100%;
}
    

#root{
    max-width: 1400px;
    margin: 0 auto;
}
    
    
a{
    text-decoration: none;
}
    

ul,li{
    list-style: none;
}

.loading{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 8rem;
    padding: 4rem;
}
`;

export default Global;
