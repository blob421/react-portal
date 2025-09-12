
import checkAuth from './checkAuth'



  export default async function handleNav(
    target: string, 
    sub:string,
    navRoot:any,
    ) {
      const isAuth = await checkAuth();
      
      if (isAuth) {
       
        navRoot.navigate(target, {screen:sub});
      } else {
        navRoot.navigate('LoginStack', {screen:'Login'});
      }
    };