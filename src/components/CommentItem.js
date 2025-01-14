import React, { use } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CommentItem = ({ comment }) => {
  const user = useSelector((state) => state.user.userInfo);
  const timestamp = new Date(comment.timestamp).toLocaleString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const avatar =
    comment.userId === user.uid
      ? user.photoUrl
        ? { uri: user.photoUrl }
        : require("../../assets/profile-example.jpg")
      : require("../../assets/profile-example.jpg");

  return (
    <View key={comment.id} style={styles.commentContainer}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
  },
});

export default CommentItem;
