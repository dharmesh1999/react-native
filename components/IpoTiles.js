import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { View, Text, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Colors from "../constant/colors";

const IpoTiles = ({ item, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.shareWrapper}>
              <MaterialCommunityIcons
                style={styles.shareIcon}
                name="share-variant-outline"
                size={12}
                color="black"
              />
              <Text style={styles.shareText}>Share</Text>
            </View>
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.datePrizeWrapper}>
              <View style={styles.dateWrapper}>
                <Text style={styles.offerDate}>
                  <Feather name="calendar" size={12} color="black" />
                  {item.listDate ? (
                    <Text>Listing Date</Text>
                  ) : (
                    <Text>Offer Date</Text>
                  )}
                </Text>
                <Text style={styles.offerDate}>
                  {item.listDate
                    ? item.listDate
                    : `${item.openDate} - ${item.closeDate}`}
                </Text>
                <Text style={styles.lotSize}>Lot Size</Text>
                <Text style={styles.lotSizeData}>{item.lotSize}</Text>
              </View>
              <View style={styles.offerPrizeWrapper}>
                <Text style={styles.offerPrize}>
                  <FontAwesome name="rupee" size={12} color="black" />
                  Offer Prize
                </Text>
                <Text style={styles.offerPrizeData}>{item.offerPrize}</Text>
                <Text
                  style={[styles.subs, { marginTop: item.listDate ? 5 : 21 }]}
                >
                  Subs
                </Text>
                <Text style={styles.subsData}>{item.subs}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default IpoTiles;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  imageWrapper: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 25,
  },
  logo: {
    height: 50,
    width: 90,
    justifyContent: "center",
    alignSelf: "center",
  },
  shareWrapper: {
    marginTop: 10,
    padding: 2,
    flexDirection: "row",
    backgroundColor: Colors.primary200,
    borderRadius: 5,
    justifyContent: "center",
  },
  shareIcon: {},
  shareText: {
    marginStart: 5,
    fontSize: 10,
  },
  detailsWrapper: {
    flex: 3,
    justifyContent: "center",
    marginStart: 10,
  },
  title: {
    flex: 0.8,
    fontSize: 18,
    color: Colors.primary500,
    paddingStart: 5,
  },
  datePrizeWrapper: {
    flexDirection: "row",
    margin: 5,
  },
  dateWrapper: {
    width: 100,
    fontSize: 10,
  },
  offerPrizeWrapper: {
    marginStart: 15,
  },
  offerPrize: {
    flexDirection: "column",
    fontSize: 12,
  },
  offerPrizeData: {
    fontSize: 12,
  },
  offerDate: {
    fontSize: 12,
  },
  lotSize: {
    marginTop: 5,
    fontSize: 12,
    flexDirection: "column",
  },
  lotSizeData: {
    fontSize: 12,
  },
  subs: {
    fontSize: 12,
    flexDirection: "column",
  },
  subsData: {
    fontSize: 12,
  },
});
