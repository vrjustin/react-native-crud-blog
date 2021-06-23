import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';


const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)} />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default EditScreen;