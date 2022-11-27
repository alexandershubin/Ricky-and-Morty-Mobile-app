import {useState} from "react";
import {useDebounce} from "use-debounce";
import {Platform, StyleSheet, View} from "react-native";
import {useWidgetSwr} from "../../query/useWidgetSwr";
import WidgetPagination from "./WidgetPagination";
import WidgetList from "./WidgetList";
import WidgetForm from "./WidgetForm";

export const Widget = ({navigation}) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [value, setValue] = useState('');

    const debouncedPageNumber = useDebounce(pageIndex, 500);

    const {data, isLoading, isError} = useWidgetSwr(
        `?page=${debouncedPageNumber[0]}${value}`
    );

    return (
        <View style={styles.container}>
                <WidgetForm
                    setValue={setValue}
                    setPageIndex={setPageIndex}
                />

            <WidgetList
                data={data}
                isLoading={isLoading}
                isError={isError}
                setValue={setValue}
                setPageIndex={setPageIndex}
                navigation={navigation}
            />

            <WidgetPagination
                info={data?.info}
                setPageIndex={setPageIndex}
                pageIndex={pageIndex}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
        border: 'none'
    },
    header: {
        color: '#fff',
        fontSize: 21,
        lineHeight: 21,
        fontWeight: '700',
        textAlign: 'center',
        ...Platform.select({
            android: {
                marginTop: 30
            },
        })
    },
});
