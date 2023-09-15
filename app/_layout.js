import {Stack} from 'expo-router';
import {useCallback} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const[fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Bold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) { //only want to show homepage if fonts have been loading
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout ={onLayoutRootView}/>;
}

export default Layout;