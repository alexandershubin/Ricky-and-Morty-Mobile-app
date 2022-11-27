import {ActivityIndicator, Text, View} from "react-native";

const Loader = ({text, color = '#fff', size}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={size} color={color}/>
        <Text style={{color: color, marginTop: 10}}>{text}</Text>
    </View>
);

export default Loader;
