import { setPosts, addPost } from "../redux/reducers/postsSlice";
import {
  savePost,
  getPosts,
  uploadImage,
  createPostComment,
  getSinglePost,
} from "./firestore";

export const fetchPosts = async (dispatch) => {
  const posts = await getPosts();
  dispatch(setPosts(posts));
};

export const createPost = async (post, dispatch) => {
  // post.image is local file url, need to convert to binary
  const image = await fetch(post.image).then((res) => res.blob());
  const imageUrl = await uploadImage(post.userId, image, post.name);
  post.image = imageUrl;
  post.comments = [];
  const postId = await savePost(post);
  const savedPost = await getPost(postId);
  dispatch(addPost(savedPost));
};

export const getPost = async (id) => {
  return await getSinglePost(id);
};

export const addPostComment = async (post, comment) => {
  comment.timestamp = new Date().toISOString();
  comment.id = comment.userId + "_" + Date.now().toString();
  await createPostComment(post.id, comment);
  return await getPost(post.id);
};
