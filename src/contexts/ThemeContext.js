import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLight : true,
        Light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        Dark: {syntax: '#ddd' , ui: '#333', bg:'#555'}
     }

     toggleTheme = () => {
         return(
             this.setState({ isLight: !this.state.isLight })
         )
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme : this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;
