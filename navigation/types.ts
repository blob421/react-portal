import { NavigatorScreenParams } from '@react-navigation/native';


export type LoadingStackParamList = {
  Loading :  {id:string}
}

export type HomestackParamList = {
  Profile: undefined;
  Home: undefined;

};
export type LoginStackParamList = {
  Login: undefined
}
export type MessageStackParamList = {
    Messages: undefined;
  Message_detail: { id: number };
}
export type TaskStackParamList = {
  Tasks: undefined

 
};
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomestackParamList>;
  Messages: NavigatorScreenParams<MessageStackParamList>;
  Login: NavigatorScreenParams<LoginStackParamList>;
  Tasks: NavigatorScreenParams<TaskStackParamList>;
  Loading : NavigatorScreenParams<LoadingStackParamList>;
};



