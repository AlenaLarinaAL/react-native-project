import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import userPhoto from "../assets/images/photo.png";

const PostScreen = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={userPhoto} style={styles.userImg} />
        <View>
          <Text style={styles.title}>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userImg: {
    width: 60,
    height: 60,
  },
});
export default PostScreen;
