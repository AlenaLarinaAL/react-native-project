import { StyleSheet, FlatList, View } from "react-native";

import User from "../../Components/User.jsx";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <User />

      <FlatList showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 16,
    backgroundColor: "#FFFFFF",
  },
});
export default PostScreen;
