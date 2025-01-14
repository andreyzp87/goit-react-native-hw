import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import CommentItem from "../components/CommentItem";

const CommentsScreen = ({ navigation, route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      {post.comments && (
        <FlatList
          data={post.comments}
          renderItem={({ item }) => (
            <CommentItem navigation={navigation} post={item} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.commentsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    padding: 16,
    backgroundColor: "#fff",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  commentsList: {
    gap: 16,
  },
});

export default CommentsScreen;
