import { View } from "react-native";
import { FlatList, SafeAreaView } from "react-native";

import upcomingIpo from "../assets/data/upcomingIpo";
import IpoTiles from "../components/IpoTiles";

const UpcomingIpo = ({ navigation }) => {
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
            data={upcomingIpo}
            renderItem={renderIpoTiles}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UpcomingIpo;
