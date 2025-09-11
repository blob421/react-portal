
import checkAuth from './checkAuth'


  export default async function handleNav(
    target: string, 
    navigation: any,
    navRoot:any,
    param:any
    ) {
      const isAuth = await checkAuth();
      console.log(isAuth)
      if (isAuth) {
        console.log(param)
        navigation.navigate(target, param);
      } else {
        navRoot.navigate('Login', {screen:'Login'});
      }
    };