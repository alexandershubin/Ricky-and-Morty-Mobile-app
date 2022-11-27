import {Image, StyleSheet, Text, View} from "react-native";
import styled from "styled-components/native";

const ViewItem = styled.View`
  background: rgb(60, 62, 68);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`

const WidgetItem = ({result}) => {
    const colorStatusStyle = result.status.toLocaleLowerCase();

    return (
        <ViewItem>
            <View>
                <Image source={{uri: result.image}} style={styles.image}/>
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
            </View>
        </ViewItem>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        margin: 0,
        opacity: 1,
        transition: 'opacity 0.5s ease 0s',
        objectPosition: 'center center',
        objectFit: 'cover'
    },
    content: {
        padding: 20,
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
    status: {
        position: 'relative'
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
    }
});

export default WidgetItem;
