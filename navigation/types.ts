import { NavigatorScreenParams } from '@react-navigation/native';


export type ChatStackParamList = {
  Chat : undefined
}

export type TeamStackParamList = {
  Team : undefined
}
export type LoadingStackParamList = {
  Loading :  {id:string, photo:string}
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
  HomeStack: NavigatorScreenParams<HomestackParamList>;
  MessageStack: NavigatorScreenParams<MessageStackParamList>;
  LoginStack: NavigatorScreenParams<LoginStackParamList>;
  TaskStack: NavigatorScreenParams<TaskStackParamList>;
  LoadingStack : NavigatorScreenParams<LoadingStackParamList>;
  TeamStack: NavigatorScreenParams<TeamStackParamList>;
  ChatStack : NavigatorScreenParams<ChatStackParamList>;
};



