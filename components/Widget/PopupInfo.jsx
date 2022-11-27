import {useEffect} from "react";
import {Image, StyleSheet, Text, View, Linking} from "react-native";
import styled from "styled-components/native";

const ViewPopup = styled.View`
  background: rgb(60, 62, 68);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
`

const ViewContainer = styled.View`
  background: #000;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PopupInfo = ({route, navigation}) => {
    const {title, result} = route.params;
    const colorStatusStyle = result.status.toLocaleLowerCase();
    const date = new Date(result ? result?.created : '-');

    useEffect(() => {
        navigation.setOptions({
            title,
            result
        });
    }, [])

    return (
        <ViewContainer>
            <ViewPopup>
                <View>
                    <Image
                        source={{uri: result.image}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{result.name}</Text>
                    <View style={styles.status}>
                        <View style={styles[`${colorStatusStyle}`]}/>
                        <Text style={styles.textStatus}>
                            {' '}
                            {result.status} - {result.species ?? '-'}
                        </Text>
                    </View>
                    <Text style={styles.text}>
                        Type: <Text>{result.type || '-'}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Gender: <Text>{result.gender}</Text>
                    </Text>

                    <Text style={styles.text}>
                        <Text>location:</Text>{' '}
                        <Text>{result?.location.name}</Text>
                        {' '}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL(result?.location.url)}>
                            {result?.location.url}
                        </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text>created</Text>:{' '}
                        <Text>{date.toLocaleDateString()}</Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text>api</Text>:{' '}
                        <Text style={styles.link}
                              onPress={() => Linking.openURL(result?.url)}>
                            {result?.url}
                        </Text>
                    </Text>
                </View>
            </ViewPopup>
        </ViewContainer>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        margin: 0,
        opacity: 1,
        transition: 'opacity 0.5s ease 0s',
        objectPosition: 'center center',
        objectFit: 'cover'
    },
    content: {
        padding: 20
    },
    status: {
        position: 'relative'
    },
    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        marginBottom: 10
    },
    textStatus: {
        color: '#fff',
        fontWeight: '600',
        marginBottom: 10,
        paddingLeft: 10
    },
    alive: {
        height: 10,
        width: 10,
        backgroundColor: '#55CC44FF',
        borderRadius: 50,
        position: 'absolute',
        top: 3
    },
    dead: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#D63D2EFF',
        position: 'absolute',
        top: 3
    },
    unknown: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#9E9E9EFF',
        position: 'absolute',
        top: 3
    },
    link: {
        color: '#28bd3c'
    }
});

export default PopupInfo;
