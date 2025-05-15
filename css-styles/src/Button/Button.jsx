import styles from "./Button.module.css"

// Inline css
// const styles = {
//     backgroundColor: "hsl(200, 100%, 50%)",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "10px",
//     border: "none",
//     cursor: "pointer",
    // all values must be strings and separated with a comma it use pascal case when you have a space 
    //like background-color -- backgroundColor
//}

function Button() {
    return(<button className={styles.button}>Click me</button>)
    //return(<button style={styles}>Click me</button>) - Inline CSS
}

export default Button