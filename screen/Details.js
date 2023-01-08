import { Text, Image } from "react-native";
import ipoDetails from "../assets/data/ipoDetails";
import upcomingIpo from "../assets/data/upcomingIpo";
import listedIpo from "../assets/data/listedIpo";
import IpoDetailsPage from "../components/IpoDetailsPage";

const Details = ({ route }) => {
  const id = route.params.ipoId;
  const displayIpoDetails = ipoDetails.filter((item) => {
    return item.ipoId === id;
  });
  const upcomingDisplayIpo = upcomingIpo.filter((item) => {
    return item.id === id;
  });
  const listedDisplayIpo = listedIpo.filter((item) => {
    return item.id === id;
  });
  const details = {
    ...displayIpoDetails[0],
    ...upcomingDisplayIpo[0],
    ...listedDisplayIpo[0],
  };

  return <IpoDetailsPage details={details} />;
};

export default Details;
