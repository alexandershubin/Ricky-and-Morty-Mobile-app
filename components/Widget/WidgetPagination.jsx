import { Platform, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import styled from "styled-components/native";

const TextBtn = styled.Text`
  color: #fff;
`

const WidgetPagination = (
    {
        info,
        pageIndex,
        setPageIndex,
    }) => {

    const decrement = () => {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1);
        } else {
            setPageIndex(1);
        }
    };

    const increment = () => {
        if (info) {
            pageIndex < info.pages && setPageIndex(pageIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={decrement}>
                <Text style={styles.textBtn}>Prev</Text>
            </TouchableOpacity>
            <Text style={styles.btnWrap}>
                <TextBtn>{pageIndex} / </TextBtn>
                <TextBtn>{info?.pages}</TextBtn>
            </Text>
            <TouchableOpacity style={styles.btn} onPress={increment} color={'red'}>
                <Text style={styles.textBtn}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
        backgroundColor: '#000000',
        padding: 10,
        paddingBottom: 30,
        paddingTop: 20,
        ...Platform.select({
            ios: {
                position: 'absolute',
                bottom: 0
            },
            android: {
                position: 'absolute',
                bottom: 0
            },
            web: {
                position: 'sticky',
            }
        })
    },
    btnWrap: {
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    btn: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        border: '1px solid black',
        cursor: 'pointer',
    },
    textBtn: {
        color: '#000',
        fontWeight: '600',
    }
});

export default WidgetPagination;
