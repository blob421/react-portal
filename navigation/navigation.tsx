import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../app/login';
import Home from '../app/home';
import Messages from '../app/messages'
import MessageDetail from '../app/messages_detail'
import Task from '../app/task_detail'
import Tasks from '../app/tasks'
import Profile from '../app/profile'
import Loading from '../app/loading'
import Team from '../app/team'
import Chat from '../app/chat'
import MessageForm from '../app/message_form'

import { RootStackParamList, HomestackParamList, MessageStackParamList, LoginStackParamList,
  TaskStackParamList, LoadingStackParamList, TeamStackParamList, ChatStackParamList
} from './types';


const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomestackParamList>();
const MsgStack = createNativeStackNavigator<MessageStackParamList>();
const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const TaskStack = createNativeStackNavigator<TaskStackParamList>();
const LoadingStack = createNativeStackNavigator<LoadingStackParamList>();
const TeamStack = createNativeStackNavigator<TeamStackParamList>();
const ChatStask = createNativeStackNavigator<ChatStackParamList>();


function ChatStackScreens(){
  return (
    <ChatStask.Navigator initialRouteName='Chat'
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}
    >
        <ChatStask.Screen name="Chat" component={Chat} />
      
    </ChatStask.Navigator>
  )
}

function TeamStackScreens(){
  return (
    <TeamStack.Navigator initialRouteName='Team'
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}
    >
        <TeamStack.Screen name="Team" component={Team} />
      
    </TeamStack.Navigator>
  )
}

function LoadingStackScreen(){
  return (
      <LoadingStack.Navigator
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}>
         <LoadingStack.Screen name="Loading" component={Loading} />
      </LoadingStack.Navigator>
  )
}
function LoginStackScreen(){
  return (
      <LoginStack.Navigator
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}>
         <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
  )
}

function Homestack(){
  return (
       <HomeStack.Navigator initialRouteName="Home"
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}
    >
        <HomeStack.Screen name="Profile" component = {Profile}/>
        <HomeStack.Screen name='Home' component={Home} />
       
        
      </HomeStack.Navigator>
  )
}

function MessageStack(){
  return (
    <MsgStack.Navigator initialRouteName='Messages'
       screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}
    >
        <MsgStack.Screen name="Messages" component={Messages} />
        <MsgStack.Screen name='Message_detail' component={MessageDetail}/>
        <MsgStack.Screen name='MessageForm' component={MessageForm}/>
    </MsgStack.Navigator>
  )
}

function TaskStackScreens(){
  return (
   <TaskStack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#7e614cff' },
        headerTintColor: '#fff'
      }}>
      <TaskStack.Screen name = 'Task' component = {Task}/>
     <TaskStack.Screen name="Tasks" component={Tasks} />
   </TaskStack.Navigator>
  )
}

export default function Navigation() {
  return (
    
      <Stack.Navigator initialRouteName="LoginStack"
          screenOptions={{ headerShown: false }} >
        <Stack.Screen name= 'TeamStack' component = {TeamStackScreens}/>
        <Stack.Screen name = 'LoginStack' component = {LoginStackScreen}/>
        <Stack.Screen name="HomeStack" component={Homestack} />
        <Stack.Screen name="MessageStack" component={MessageStack} />
        <Stack.Screen name='TaskStack' component={TaskStackScreens}/>
        <Stack.Screen name= 'LoadingStack' component={LoadingStackScreen}/>
        <Stack.Screen name = 'ChatStack' component={ChatStackScreens}/>
      </Stack.Navigator>
  
  );
}
