import {FlatList, RefreshControl, TouchableOpacity, Alert} from "react-native";
import WidgetItem from './WidgetItem';
import Loader from "../Ui/Loader";
import styled from "styled-components/native";

const ViewList = styled.View`
  margin: 0 20px;
`

const WidgetList = (
    {
        data,
        isLoading,
        setValue,
        setPageIndex,
        isError,
        navigation
    }) => {

    if (isLoading) {
        return (
            <Loader
                text={'Загрузка виджетов...'}
                size={'large'}
            />
        )
    }

    if (isError) {
        return Alert.alert('Ошибка', 'Не удалось получить данные')
    }

    return (
        <ViewList>
            <FlatList
                refreshControl={<RefreshControl
                    colors={['#000']}
                    tintColor={'#fff'}
                    refreshing={isLoading}
                    onRefresh={() => {
                        setValue('');
                        setPageIndex(1)
                    }}
                />}
                data={data?.results}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Person', {result: item, id: item.id, title: item.name})}>
                        <WidgetItem result={item}/>
                    </TouchableOpacity>
                )}
            />
        </ViewList>
    );
};

export default WidgetList;
