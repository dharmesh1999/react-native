import { View, SafeAreaView, FlatList } from "react-native";
import listedIpo from "../assets/data/listedIpo";
import IpoTiles from "../components/IpoTiles";

const ListedIpo = ({ navigation }) => {
  const renderIpoTiles = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Details", {
        ipoId: itemData.item.id,
      });
    };
    return <IpoTiles item={itemData.item} onPress={pressHandler} />;
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <FlatList
            data={listedIpo}
            renderItem={renderIpoTiles}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ListedIpo;
