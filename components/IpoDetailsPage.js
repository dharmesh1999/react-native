import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

import Colors from "../constant/colors";

const IpoDetailsPage = ({ details }) => {
  return (
    <View style={{ backgroundColor: Colors.white }}>
      <ScrollView>
        <View style={styles.titlelogoWrapper}>
          <Text style={styles.title}>{details.name}</Text>
          <Image source={details.logo} style={styles.logo} />
        </View>

        <Text style={styles.gmpTitle}>Expected Listed Prize</Text>
        <View style={styles.gmpWrapper}>
          <Text style={styles.gmpTitleText}>
            {" "}
            Expected {"\n"} Premium / Gmp :{" "}
          </Text>
          <Text style={styles.gmpText}>{details.gmp}</Text>
        </View>

        <DataTable style={styles.container}>
          <DataTable.Row>
            <DataTable.Cell>Open Date:</DataTable.Cell>
            <DataTable.Cell>{details.openDate}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Close Date:</DataTable.Cell>
            <DataTable.Cell>{details.closeDate}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Allotment Date:</DataTable.Cell>
            <DataTable.Cell>{details.allotmentDate}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>IssuePrize:</DataTable.Cell>
            <DataTable.Cell>{details.issuePrize}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Issue Size:</DataTable.Cell>
            <DataTable.Cell>{details.lotSize}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Listing at Group:</DataTable.Cell>
            <DataTable.Cell>{details.listing}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Reatail Portion:</DataTable.Cell>
            <DataTable.Cell>{details.retail}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View style={styles.aboutWrapper}>
          <Text style={styles.aboutTitle}>About Company</Text>
          <Text style={styles.aboutText}>{details.about}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default IpoDetailsPage;

const styles = StyleSheet.create({
  titlelogoWrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  logo: { marginTop: 10, width: 160, height: 90 },
  gmpWrapper: {
    marginTop: 10,
    flexDirection: "row",
    padding: 15,
  },
  gmpTitle: {
    textAlign: "center",
    fontSize: 18,
  },
  gmpTitleText: { alignSelf: "center", fontWeight: "bold" },

  gmpText: { alignSelf: "center", paddingStart: 30, fontWeight: "bold" },
  container: { marginTop: 10 },
  tableHeader: {},
  aboutWrapper: {
    marginTop: 10,
  },
  aboutTitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
  },
  aboutText: {
    margin: 10,
  },
});
