import { View } from "react-native";
import { UnistylesRegistry, UnistylesTheme, createStyleSheet, useStyles } from 'react-native-unistyles';
import theme from "../themes/unistyles-theme";
// import { UnistyleRegistry } from "react-native-unistyles/lib/typescript/src/core/UnistyleRegistry";

export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    superLarge: 2000,
    tvLike: 4000
  }

UnistylesRegistry.addBreakpoints(breakpoints).addThemes({ 'light': theme }).addConfig({
    initialTheme: 'light'
})

const Unistyles = () => {
    return <Demo />
};

const Demo = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            {new Array(1000).fill(0).map((_, i) => (
                <View
                    key={i}
                    style={styles.box}
                />
            ))}
        </View>
    )
};

const stylesheet = createStyleSheet(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    box: {
        borderColor: theme.colors.red,
        padding: 5,
        borderWidth: 2
    }
}));

export default Unistyles;
